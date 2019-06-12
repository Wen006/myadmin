import { observable, action } from 'mobx';

import { callMethod } from 'services/ServiceHandler';
import lodash from 'lodash';
import Intler from 'components/Intler/Intler';
import qs from 'qs';
import Global from 'stores/common/Global';

const apiKey = {
  PJ_APPLY_QUERY: 'PJ_APPLY_QUERY', // 请求动态字段
  ec_item_assist: 'ec_item_assist', // 请求明细的辅助字段动态字段
};

export default class DtFieldsStore {
  fieldApi = {}; // 主表动态字段

  @observable fieldColumsN = []; // 处理完的 明细辅助字段

  itemAssist = {};

  // 辅助明细的 动态字段
  queryOldParam = {}; // 请求

  // callMethod = async (key, params) => {
  //   return callMethod({ key, params })
  // }

  // 请求动态字段
  getFields = async ({ payload, methodKey = apiKey.PJ_APPLY_QUERY }) => {
    const payloadParam = ['docKindId', 'ecKindId', 'unitId', 'entityId'];
    const { success, datas = [] } = await callMethod({
      key: methodKey,
      params: lodash.pick(payload, payloadParam),
    });
    const fields = {};
    if (success && datas) {
      if (!datas.mapFieldRegion) {
        datas.mapFieldRegion = {};
      }
      Object.keys(datas.mapFieldRegion).forEach(itemKey => {
        datas.mapFieldRegion[itemKey].forEach(ele => {
          const {
            attrName,
            isDisplayFlag,
            isRequiedFlag,
            isReadFlag,
            labelKey,
            ...otherProps
          } = ele;

          if (!fields[itemKey]) {
            fields[itemKey] = {};
          }
          fields[itemKey][attrName] = {
            ...otherProps,
            isRequiedFlag: isRequiedFlag == 0, //  必填
            isReadFlag: isReadFlag == 1, // 只读
            isDisplayFlag: isDisplayFlag != 1, // 显示
            labelKey,

            requied: isRequiedFlag == 1,
            readOnly: isReadFlag == 1,
            hidden: isDisplayFlag == 0,
          };

          if (!this.fieldApi[itemKey]) {
            this.fieldApi[itemKey] = {};
          }
          this.fieldApi[itemKey][attrName] = {
            ...otherProps,
            isRequiedFlag: isRequiedFlag == 0,
            isReadFlag: isReadFlag == 1,
            isDisplayFlag: isDisplayFlag != 1,
            labelKey,
            requied: isRequiedFlag == 1,

            label: labelKey,
            rules:
              isRequiedFlag == 1 ? [{ required: true, message: Intler.getIntl('app.form.input.require') }] : [],
            readOnly: isReadFlag == 1,
            hidden: isDisplayFlag == 0,
          };
        });
      });
      return (
        fields || {
          10: {},
          20: {},
          21: {},
          30: {},
          40: {},
          50: {},
          90: {},
        }
      );
    }
    return {};
  };

  @action
  setFieldColums = (data = []) => {
    this.fieldColumsN = [];
  };

  // 处理辅助项的 动态 colums
  getDtCol = ({ colunms = [] }) => {
    let cN = lodash.slice(colunms);
    if (qs.stringify(this.itemAssist) == '{}' || qs.stringify(this.itemAssist) == '') return;
    if (colunms.length == 0) {
      cN = lodash.slice(this.fieldColumsN);
    }

    // eslint-disable-next-line no-return-assign
    return (this.fieldColumsN = cN.map(item => {
      const { render } = item;
      item.hidden = true;
      if (!this.itemAssist[item.dataIndex]) {
        return item;
      }

      return {
        ...item,
        title: this.itemAssist[item.dataIndex].assistName,
        required: this.itemAssist[item.dataIndex].required,
        hidden: false,
        // render: (t, r = {}, i) => {
        //   console.log(r)
        //   if (this.itemAssist[item.dataIndex]['ecItemId'] != r.ecItemId) { return t }
        //   return render(t, r, i)
        // }
      };
    }));
  };

  // 请求辅助项
  getItemAssist = async (param = {}) => {
    this.itemAssist = {};
    const payload = lodash.without(lodash.pick(param, ['ids']).ids, undefined, '');
    const payloadStr = qs.stringify(payload);
    if (this.queryOldParam.getItemAssist == payloadStr) return;
    this.queryOldParam.getItemAssist = payloadStr;
    if (payload == '' || !payload) {
      return;
    }

    const data = await callMethod({
      key: apiKey.ec_item_assist,
      params: { ids: payload.toString() },
    });
    const { success, datas = [] } = data || {};

    if (!success) {
      return;
    }
    this.setFieldColums();

    this.itemAssist = {};
    if (!datas || datas.length == 0) {
      return;
    }
    datas.forEach(item => {
      !this.itemAssist[item.assistCode] && (this.itemAssist[item.assistCode] = {});
      item.required = item.isRequiedFlag == 1;
      lodash.assign(this.itemAssist[item.assistCode], item);
    });

    this.getDtCol({ colunms: param.colunms });
    return success;
  };
}
