/* eslint-disable no-eval */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import Global from '@/stores/common/Global';
import { Checkbox } from 'antd';
import lodash from 'lodash';
import ViewRender from './ViewRender';
import WrapInput from './WrapInput';

const CheckboxGroup = Checkbox.Group;

const CheckBoxEnums = {
  Checkbox: 'Checkbox',
  CheckboxGroup: 'CheckboxGroup',
};

/**
 *
 *  'Checkbox': "Checkbox",            // 其实就是单选   一个字段对应一个返回值是boolean
 *  'CheckboxGroup': "CheckboxGroup",  // 多选          一个字段对应多个值返回值是codevalue
 * @class Group
 * @extends {React.PureComponent}
 */
const WrapCheck = (Ele, type) => {
  return class CheckBoxWrap extends React.PureComponent {
    constructor(props) {
      super(props);
      const { dataSource = [], code } = props;
      this.code = code;
      const { dataMap, dataSource: nds } = this.codeToStdData(dataSource);
      this.type = type;
      this.state = {
        dataSource: nds,
        dataMap,
      };
    }

    componentDidMount() {
      if (this.code) {
        Global.findAdLovByCode(this.code).then(data => {
          const { dataMap, dataSource } = this.codeToStdData(data);
          this.setState({ dataSource, dataMap });
        });
      }
    }

    codeToStdData = (dataSource = []) => {
      const dataMap = [];
      dataSource.forEach(item => {
        const { label, value, codeName, codeValue } = item;
        if (label) {
          // 说明是自定义的
          lodash.omit(item, ['codeName', 'codeValue']);
          dataMap[label] = value;
        } else {
          // 代码表的
          lodash.omit(item, ['codeName', 'codeValue']);
          lodash.assign(item, { label: codeName, value: codeValue });
          dataMap[codeValue] = codeName;
        }
      });
      return { dataMap, dataSource };
    };

    praseValueByDataSource = initialValue => {
      let initialV = [];
      try {
        if (Array.isArray(initialValue)) {
          initialV = eval(initialValue);
        } else {
          initialV = initialValue;
        }
      } catch (error) {
        initialV = [initialValue];
      }

      const { dataMap } = this.state;
      const labels = [];
      if (initialV)
        initialV.forEach(value => {
          if (dataMap[value]) labels.push(dataMap[value]);
        });
      return labels.join(',');
    };

    valueFormatter = initialValue => {
      const { valueFormatter } = this.props;
      if (valueFormatter) return valueFormatter(initialValue, this.state.dataSource || []);
      if (this.type == CheckBoxEnums.Checkbox) return initialValue;
      const showValue = this.praseValueByDataSource(initialValue);
      return showValue;
    };

    render() {
      const { dataSource } = this.state;
      const { view, initialValue } = this.props;
      const eleProps = lodash.omit(this.props, ['dataSource', 'code', 'type', 'initialValue']);
      if (this.type == CheckBoxEnums.CheckboxGroup) {
        lodash.assign(eleProps, { options: dataSource });
      } else {
        lodash.assign(eleProps, { checked: eleProps.value });
      }

      return view ? (
        <ViewRender>{this.valueFormatter(initialValue)}</ViewRender>
      ) : (
        <Ele {...eleProps} />
      );
    }
  };
};

const CheckboxH = WrapInput(WrapCheck(Checkbox, 'Checkbox'), 'Checkbox');
CheckboxH.Group = WrapInput(WrapCheck(CheckboxGroup, 'CheckboxGroup'), 'CheckboxGroup');

export default CheckboxH;
