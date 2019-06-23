/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react';
import { Icon, Form, Card, Row, Input, Col } from 'antd';
import { InputH,RadioH, DatePickerH,InputLookUp } from '@/components/FormMark';
import { longToMoment } from '@/utils/util.date';
import { Btns, Intler, MBox, AutoRow,AdRender } from '@/components';
import AgGrid, { LookUpCell, SelectCell } from '@/components/AgGrid/AgGrid';
import MPCConfirm from '@/components/MPCConfirm/MPCConfirm';
import styles from '@/pages/common.less';
import lodash from 'lodash';
import { observer } from 'mobx-react';
import Navigator from '@/stores/common/Navigator';
import Global from '@/stores/common/Global';

@observer
class UserInfo extends React.Component {
  formField = ["id","countryId","countryCode","userCode","userName","email","countryName","phone","address","remark"];

  accountColumn = [
    // {
    //   headerName: Intler.getIntl('LocalCode'),
    //   field: 'localCode',
    //   align: 'center',
    // },
    // {
    //   headerName: Intler.getIntl('HouseBankName'),
    //   field: 'houseBankName',
    //   align: 'center',
    // },
    // {
    //   headerName: Intler.getIntl('BankAccountCode'),
    //   field: 'bankAccountCode',
    //   align: 'center',
    // },
    // {
    //   headerName: Intler.getIntl('BankAccountName'),
    //   field: 'bankAccountName',
    //   align: 'center',
    // },
  ];

  constructor(props) {
    super(props);
    const { userInfoStore, form, view = true } = props;
    this.userInfoStore = userInfoStore;
    this.form = form;
    this.view = view;
    this.state = {
      USER_INFO_STATUS: [],
      USER_INFO_TYPE: [],
    };
    Global.findAdLovByCode('USER_INFO_STATUS').then(data => {
      this.setState({ USER_INFO_STATUS: data });
    });
    Global.findAdLovByCode('USER_INFO_TYPE').then(data => {
      this.setState({ USER_INFO_TYPE: data });
    });
  }

  componentDidMount() {
    const { record } = this.props;
    if (!this.view && !record.id) return; // 新增用户
    // 这里初始化数据
    this.userInfoStore.findUserInfoById(record.id, this.view).then(data => {
      this.setEditInfo(data);
    });
  }

  setEditInfo = (userInfo = {}) => {
    const { detailList = [], accountList = [], invalidPwdTime, updPwdTime, ...master } = userInfo;
    // master.invalidPwdTime = momentToLong(invalidPwdTime)
    // master.updPwdTime = momentToLong(updPwdTime)
    // 设置主表信息
    const formValues = lodash.pick(master, this.formField);
    this.form.setFieldsValue(formValues);
    // // // 设置用户扩展信息
    // this.userGridApi.setRowData(detailList);
    // // 设置用户账号
    // this.accountGridApi.setRowData(accountList);
  };

  handleSave = () => {
    // 先调用aggrid 停止编辑，如果不停止可能会取不到最新的值
    this.userGridApi.stopEditing();

    // 校验主表单必填
    this.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        const master = {};
        lodash.assign(master, value);
        // this.userInfoStore.saveOrUpdate(value)
        // 获取修改的值
        const updateDs = [];
        // 用于校验是否有默认的 扩展信息
        let defaultFlag01Count = 0;

        // 调用aggrid 获取列表的数据（包括新增修改的）
        this.userGridApi.forEachNode(rn => {
          if (rn.data.defaultFlag == '1') defaultFlag01Count += 1;
          updateDs.push(rn.data);
        });

        if (defaultFlag01Count != 1) {
          MBox.error('至少设置一个默认扩展信息');
          return;
        }

        lodash.assign(master, {
          detailListDel: this.extGridRef.delItems,
          detailListUA: updateDs,
        });
        this.userInfoStore.saveOrUpdate(master).then((success, datas) => {
          // this.setEditInfo(datas)
          if (success) Navigator.goBack();
        });
      }
    });
  };

  // 新增明细
  handleAdd = () => {
    this.extGridRef.addItem({ defaultFlag: '0' });
  };

  // 删除明细
  handleDel = record => {
    this.extGridRef.removeItem(record);
  };

  handleFlagChange = (v, params) => {
    if (v == '1') {
      this.userGridApi.forEachNode(rn => {
        if (params.data != rn.data && rn.data.defaultFlag == '1') {
          rn.data.defaultFlag = '0';
          this.extGridRef.updateItem(rn);
          MBox.warning('只能一个默认属性');
        }
      });
    }
  };

  render() {
    const { form } = this.props;

    const comColProps = {
      editable: !this.view,
    };

    const detailColumns = [
      // {
      //   headerName: Intler.getIntl('ReimUnitName'),
      //   field: 'reimUnitName',
      //   align: 'left',
      //   required: true,
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'UNIT',
      //       modalKey: 'entityName',
      //       onSearchBefore: () => ({}), // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { id, entityName } = rowArr[0];
      //         const data = {
      //           reimUnitId: id,
      //           reimUnitName: entityName,
      //           reimEntityId: -1,
      //           reimEntityName: '',
      //         };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = {
      //           reimUnitId: '',
      //           reimUnitName: '',
      //           reimEntityId: -1,
      //           reimEntityName: '',
      //         };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('ReimEntityName'),
      //   field: 'reimEntityName',
      //   align: 'left',
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'ENTITY',
      //       modalKey: 'entityName',
      //       onSearchBefore: api => ({ usingFlag: api.data.usingFlag || '1' ,unitId: api.data.reimUnitId || '-1' }), // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { entityName, id } = rowArr[0];
      //         const data = { reimEntityId: id, reimEntityName: entityName };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = { reimEntityId: '', reimEntityName: '' };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('UnitName_1'),
      //   field: 'unitName',
      //   align: 'left',
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'FI_ONLY_UNIT_LIST',
      //       modalKey: 'entityName',
      //       nameKey: 'unitName',
      //       onSearchBefore: () => ({}), // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { entityName, id } = rowArr[0];
      //         const data = { unitId: id, unitName: entityName, entityName: '', entityId: '-1' };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = { unitId: '', unitName: '', entityName: '', entityId: '-1' };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('UserInfo_EntityName'),
      //   field: 'entityName',
      //   align: 'left',
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'FI_ORG_UNIT_ENTITY_LIST',
      //       modalKey: 'entityName',
      //       onSearchBefore: api => {
      //         const unitId = api.data.unitId || '-1';
      //         return { unitId };
      //       }, // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { id, entityName } = rowArr[0];
      //         const data = { entityId: id, entityName };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = { entityId: '', entityName: '' };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('RoleName'),
      //   field: 'roleName',
      //   align: 'left',
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'SEARCH_ROLE_INFO_LIST',
      //       modalKey: 'roleName',
      //       onSearchBefore: () => ({}), // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { id, roleCode, roleName } = rowArr[0];
      //         const data = { roleId: id, roleCode, roleName };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = { roleId: '', roleCode: '', roleName: '' };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('PositionClassifyName'),
      //   field: 'positionLevelName',
      //   align: 'left',
      //   ...comColProps,
      //   cellEditorFramework: LookUpCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       lookUpKey: 'SEARCH_BC_POSLEVEL_LIST',
      //       modalKey: 'levelName',
      //       nameKey: 'positionLevelName',
      //       onSearchBefore: api => ({ companyId: api.data.unitId || '-1' }), // 查询条件
      //       onOk: (idArr, rowArr, api) => {
      //         // 确认赋值
      //         const { id, levelName } = rowArr[0];
      //         const data = { positionLevelId: id, positionLevelName: levelName };
      //         api.updateRowData(data);
      //       },
      //       onClear: api => {
      //         // 清除按钮
      //         const data = { positionLevelId: '', positionLevelName: '' };
      //         api.updateRowData(data);
      //       },
      //       onCancel: () => {},
      //     },
      //   },
      // },
      // {
      //   headerName: Intler.getIntl('DefaultFlag'),
      //   field: 'defaultFlag',
      //   ...comColProps,
      //   cellEditorFramework: SelectCell, // 指定编辑组件
      //   cellEditorParams: {
      //     // 用户自定义参数
      //     config: {
      //       modalKey: 'defaultFlag',
      //       code: 'COMMON_Y_N',
      //       onChange: this.handleFlagChange,
      //     },
      //   },
      //   cellRendererParams: {
      //     // 用户自定义参数
      //     config: {
      //       modalKey: 'defaultFlag',
      //       code: 'COMMON_Y_N',
      //     },
      //   },
      //   cellRenderer: 'adRender',
      // },
    ];

    if (!this.view) {
      detailColumns.push({
        headerName: Intler.getIntl('Operation'),
        field: 'operation',
        width: 80,
        pinned: 'right',
        algin: 'center',
        cellRenderer: 'actionCellRenderer',
      });
    }

    const userExtGridProps = {
      toolBars: [
        // <span key="title" style={{ marginRight: '5px' }}>
        //   {Intler.getIntl('ExtendedInformation')}
        // </span>,
        <Btns.add
          hidden={this.view}
          key="btn"
          algin="right"
          size="small"
          type="primary"
          onClick={this.handleAdd}
        />,
      ],
      columnDefs: detailColumns,
      gridOptions: {
        frameworkComponents: {
          // 这里定义操作列注册
          adRender: AdRender,
          actionCellRenderer: params => (
            <MPCConfirm type="del" onConfirm={() => this.handleDel(params.data)}>
              <Icon type="delete" />
            </MPCConfirm>
          ),
        },
      },
      ref: r => {
        this.extGridRef = r;
      },
      rowData: this.userInfoStore.detailList || [],
      // 回调拿到aggrid的api
      onGridReady: params => {
        // 通过aggrid api 进行表格操作
        this.userGridApi = params.api;
      },
    };

    const accountGridProps = {
      // toolBars: [<span key="title">{Intler.getIntl('AccountInformation')}</span>],
      rowData: this.userInfoStore.accountList || [],
      columnDefs: this.accountColumn,
      // 回调拿到aggrid的api
      onGridReady: params => {
        // 通过aggrid api 进行表格操作
        this.accountGridApi = params.api;
      },
    };

    const comFormItemProps = {
      view: this.view,
      form,
    };

    const { record = {} } = this.userInfoStore;

    const { USER_INFO_STATUS, USER_INFO_TYPE } = this.state;

    // if(!this.view){
    //   record.userType = record.userType || "0"
    //   record.status = record.status || "1"
    // }

    return (
      <Fragment>
        <Form layout="inline" labelAlign="left">
          <div className={styles.mainBox}>
            <Card title={Intler.getIntl('user.info.basicInfo')} bordered={false}>
              <InputH id="id" hidden form={form} />
              <InputH id="countryId" hidden form={form} />
              <InputH id="countryCode" hidden form={form} />
              <AutoRow>
                <InputH label={Intler.getIntl("user.info.userCode")} id="userCode" {...comFormItemProps} />
                <InputH label={Intler.getIntl("user.info.userName")} id="userName" {...comFormItemProps} />
                <InputH label={Intler.getIntl("user.info.email")} id="email" fieldOptions={{ rules: [] }} {...comFormItemProps} />
              </AutoRow>
              <AutoRow>
                <InputLookUp
                  {...comFormItemProps}
                  label={Intler.getIntl('user.info.countryName')}
                  lookUpKey="USER_INFO"
                  modalKey="districtName"
                  id="countryName"
                  onClear={() => {
                    const param = { countryId: '', countryCode: '', countryName: '' };
                    this.form.setFieldsValue(param);
                  }}
                  onSearchBefore={() => {}}
                  onOk={({selectedRows}) => {
                    const row = selectedRows[0];
                    const param = {
                      countryId: row.id,
                      countryCode: row.districtCode,
                      countryName: row.districtName,
                    };
                    this.form.setFieldsValue(param);
                  }}
                />
                <InputH
                  label={Intler.getIntl("phone")}
                  id="phone"
                  fieldOptions={{ rules: [] }}
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow>
                <DatePickerH
                  label={Intler.getIntl('user.info.updPwdTime')}
                  id="updPwdTime"
                  initialValue={longToMoment(record.updPwdTime)}
                  {...comFormItemProps}
                />
                <DatePickerH
                  label={Intler.getIntl('user.info.invalidPwdTime')}
                  id="invalidPwdTime"
                  initialValue={longToMoment(record.invalidPwdTime)}
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow>
                <RadioH
                  label={Intler.getIntl('user.info.type')}
                  id="userType"
                  options={{
                    code: 'USER_INFO_TYPE',
                    type: RadioH.defaultType.Button,
                  }} 
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow rowProps={{ style: { marginBottom: '8px' } }} colProps={{ sapn: 24 }}>
                <RadioH
                  label={Intler.getIntl('status')}
                  id="status"
                  initialValue={record.status}
                  options={{
                    code: 'USER_INFO_STATUS',
                    type: RadioH.defaultType.Button,
                  }}
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow colProps={{ sapn: 24 }}>
                <InputH
                  label={Intler.getIntl("address")}
                  id="address" 
                  fieldOptions={{ rules: [] }}
                  options={{
                    style:{width:'850px'}
                  }}
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow colProps={{ sapn: 24 }}>
                <InputH
                  label={Intler.getIntl("remark")}
                  id="remark"
                  fieldOptions={{ rules: [] }}
                  options={{
                    style:{width:'850px'}
                  }}
                  {...comFormItemProps}
                />
              </AutoRow>
            </Card>
          </div>
          {/* <div className={styles.mainBox}>
            <AgGrid key="account" {...accountGridProps} />
          </div> */}
          {/* <div onClick={this.closeEditTable} className={styles.mainBox}> */}
          {/* <div className={styles.mainBox}>
            <AgGrid key="userExt" {...userExtGridProps} />
          </div> */}
          {this.view ? null : (
            <div className={styles.btnBar}>
              <Btns.back
                onClick={() => {
                  Navigator.forward({ url: '/system/user/info/userInfoIndex' });
                }}
              />
              <Btns.save type="primary" onClick={this.handleSave} />
            </div>
          )}
        </Form>
      </Fragment>
      
    );
  }
}


export default Form.create()(UserInfo)