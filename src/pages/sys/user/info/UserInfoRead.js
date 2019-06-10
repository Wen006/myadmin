// import React, { Fragment } from 'react';
// import { Row, Col, Form, Card, Table } from 'antd';
// import { longToMoment } from 'utils/utils';
// import { Btns } from 'components';
// import { formatAdValName } from 'utils';
// import styles from 'routes/common.less';

// const FormItem = Form.Item;
// // const RadioGroup = Radio.Group;
// // const RadioButton = Radio.Button;
// // const dateFormat = 'YYYY-MM-DD';
// // const Option = Select.Option;

// @Form.create()
// export default class UserInfoEdit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // payModalVisble: false,
//       // reimModalVisble: false,
//       // reimentityVisble: false,
//       // initItem: {},
//       // recBankModalVisble: false,
//       // bcLevelVisble: false,
//       // roleVisable: false,
//       // rowEditable: [], // 编辑行是否编辑状态
//       // record: {},
//       // index: {},
//       // curId: [], // 判断是否关闭编辑
//     };
//   }

//   render() {
//     const { currentObj = {}, intl, app, detailList, accountList, form, onChangePage } = this.props;
//     const { getFieldDecorator } = form;
//     const { codelist = [] } = app;
//     const { COMMON_Y_N = [] } = codelist;

//     const columns = [
//       {
//         title: intl && intl.get('UnitName'),
//         dataIndex: 'unitName',
//         key: 'unitName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('EntityName'),
//         dataIndex: 'entityName',
//         key: 'entityName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('ReimUnitName'),
//         dataIndex: 'reimUnitName',
//         key: 'reimUnitName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('ReimEntityName'),
//         dataIndex: 'reimEntityName',
//         key: 'reimEntityName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('RoleName'),
//         dataIndex: 'roleName',
//         key: 'roleName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('DefaultFlag'),
//         dataIndex: 'defaultFlag',
//         key: 'defaultFlag',
//         align: 'center',
//         render: text => {
//           return text && formatAdValName(COMMON_Y_N, text);
//         },
//       },
//     ];
//     const accountColums = [
//       {
//         title: intl && intl.get('LocalCode'),
//         dataIndex: 'localCode',
//         key: 'localCode',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('HouseBankName'),
//         dataIndex: 'houseBankName',
//         key: 'houseBankName',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('BankAccountCode'),
//         dataIndex: 'bankAccountCode',
//         key: 'bankAccountCode',
//         // align: 'center',
//       },
//       {
//         title: intl && intl.get('BankAccountName'),
//         dataIndex: 'bankAccountName',
//         key: 'bankAccountName',
//         // align: 'center',
//       },
//     ];
//     const tableProps = {
//       title: () => {
//         return (
//           <div className={styles.stepTableTit}>
//             <div className={styles.tltLeft}>{intl && intl.get('ExtendedInformation')} </div>
//           </div>
//         );
//       },
//       dataSource: detailList,
//       intl,
//       columns,
//     };

//     const accountProps = {
//       title: () => {
//         return (
//           <div className={styles.stepTableTit}>
//             <div className={styles.tltLeft}>{intl && intl.get('AccountInformation')} </div>
//           </div>
//         );
//       },
//       dataSource: accountList,
//       intl,
//       columns: accountColums,
//     };
//     return (
//       <Fragment>
//         <div className={styles.mainBox}>
//           <Card title={intl && intl.get('BaseInfo')} bordered={false}>
//             <Form>
//               <Row>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('UserAccount')}>
//                     {getFieldDecorator('userAccount', {
//                       initialValue: currentObj.userAccount,
//                     })(<div disabled>{currentObj.userAccount}</div>)}
//                   </FormItem>
//                 </Col>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('UserName')}>
//                     {getFieldDecorator('userName', {
//                       initialValue: currentObj.userName,
//                     })(<div disabled>{currentObj.userName}</div>)}
//                   </FormItem>
//                 </Col>
//                 {/* <Col span={8} >
//                   <FormItem label={intl && intl.get('Address_1')} >
//                     {getFieldDecorator('country', {
//                       initialValue: currentObj.country,
//                     })(
//                       <Cascader options={countryList} onChange={(value, selectedOptions) => { this.onchange(value, selectedOptions) }} placeholder={intl && intl.get('Country')} />
//                     )}
//                   </FormItem>
//                 </Col> */}
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('Email')}>
//                     {getFieldDecorator('email', {
//                       initialValue: currentObj.email,
//                     })(<div disabled>{currentObj.email}</div>)}
//                   </FormItem>
//                 </Col>

//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('CountryName')}>
//                     {getFieldDecorator('CountryName', {
//                       initialValue: currentObj.countryName,
//                     })(<div disabled>{currentObj.countryName}</div>)}
//                   </FormItem>
//                 </Col>

//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('Phone')}>
//                     {getFieldDecorator('phoneNumber', {
//                       initialValue: currentObj.phoneNumber,
//                     })(<div disabled>{currentObj.phoneNumber}</div>)}
//                   </FormItem>
//                 </Col>

//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('VendorCode')}>
//                     {getFieldDecorator('ifCode', {
//                       initialValue: currentObj.ifCode || '',
//                     })(<div disabled>{currentObj.ifCode}</div>)}
//                   </FormItem>
//                 </Col>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('InnerOrderNo')}>
//                     {getFieldDecorator('inOrderNo', {
//                       initialValue: currentObj.inOrderNo || '',
//                     })(<div disabled>{currentObj.inOrderNo}</div>)}
//                   </FormItem>
//                 </Col>

//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('UpdPwdTime')}>
//                     {getFieldDecorator('updPwdTime', {
//                       initialValue: longToMoment(currentObj.updPwdTime),
//                     })(
//                       <div disabled>
//                         {currentObj.updPwdTime &&
//                           new Date(currentObj.updPwdTime).format('yyyy-MM-dd')}
//                       </div>
//                     )}
//                   </FormItem>
//                 </Col>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('InvalidPwdTime')}>
//                     {getFieldDecorator('invalidPwdTime', {
//                       initialValue: longToMoment(currentObj.invalidPwdTime),
//                     })(
//                       <div disabled>
//                         {currentObj.invalidPwdTime &&
//                           new Date(currentObj.invalidPwdTime).format('yyyy-MM-dd')}
//                       </div>
//                     )}
//                   </FormItem>
//                 </Col>
//                 {/* <Col span={8}>
//                   <FormItem label={intl && intl.get('PositionClassifyName')}>
//                     {getFieldDecorator('positionClassifyName', {
//                       initialValue: currentObj.positionClassifyName,
//                     })(<div disabled>{currentObj.positionClassifyName}</div>)}
//                   </FormItem>
//                 </Col> */}
//                 {/* <Col span={8} >
//                   <FormItem label={intl && intl.get('ReservedField1')} >
//                     {getFieldDecorator('reservedField1', {
//                       rules: [{ required: true, message: intl && intl.get('Require') }],
//                       initialValue: currentObj.reservedField1,
//                     })(
//                       <Select style={{ width: '100%' }}>
//                         <Option value={'100014'}>{intl && intl.get('IndexClaim')}</Option>
//                         <Option value={'100013'}>{intl && intl.get('IndexBusiness')}</Option>
//                         <Option value={'100010'}>{intl && intl.get('IndexManager')}</Option>
//                         <Option value={'100012'}>{intl && intl.get('IndexShareNomal')}</Option>
//                         <Option value={'100011'}>{intl && intl.get('IndexShareCharge')}</Option>
//                       </Select>
//                     )}
//                   </FormItem>
//                 </Col> */}
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('loginVerification')}>
//                     {getFieldDecorator('userType', {
//                       initialValue: currentObj.userType,
//                     })(
//                       currentObj.userType === '1' ? (
//                         <div disabled>{intl && intl.get('ldapVerification')}</div>
//                       ) : currentObj.userType === '0' ? (
//                         <div disabled>{intl && intl.get('sysVerification')}</div>
//                       ) : (
//                         ''
//                       )
//                     )}
//                   </FormItem>
//                 </Col>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('HiChat')}>
//                     {getFieldDecorator('reservedField2', {
//                       initialValue: currentObj.reservedField2,
//                     })(<div disabled>{currentObj.reservedField2}</div>)}
//                   </FormItem>
//                 </Col>
//                 <Col span={8}>
//                   <FormItem label={intl && intl.get('Status')}>
//                     {getFieldDecorator('status', {
//                       initialValue: currentObj.status,
//                     })(
//                       currentObj.status === '1' ? (
//                         <div disabled>{intl && intl.get('Normal')}</div>
//                       ) : currentObj.status === 'F' ? (
//                         <div disabled>{intl && intl.get('Freeze')}</div>
//                       ) : currentObj.status === 'C' ? (
//                         <div disabled>{intl && intl.get('Logout')}</div>
//                       ) : (
//                         <div disabled>{intl && intl.get('Locked')}</div>
//                       )
//                     )}
//                   </FormItem>
//                 </Col>
//                 <Col span={24}>
//                   <FormItem label={intl && intl.get('Address')}>
//                     {getFieldDecorator('address', {
//                       initialValue: currentObj.address,
//                     })(<div disabled>{currentObj.address}</div>)}
//                   </FormItem>
//                 </Col>
//                 <Col span={24}>
//                   <FormItem label={intl && intl.get('Remark')}>
//                     {getFieldDecorator('remark', {
//                       initialValue: currentObj.remark,
//                     })(<div disabled>{currentObj.remark}</div>)}
//                   </FormItem>
//                 </Col>
//               </Row>
//             </Form>
//           </Card>
//         </div>
//         <div className={styles.detailBox}>
//           <span>
//             <Table {...accountProps} key="f" bordered pagination={false} />
//           </span>
//         </div>
//         <div className={styles.detailBox}>
//           <span>
//             <Table {...tableProps} rowKey={r => r.itemId} key="a" bordered pagination={false} />
//           </span>
//         </div>
//         <div className={styles.btnBar}>
//           <Btns.back
//             onClick={() => {
//               onChangePage('list', '');
//             }}
//           />
//         </div>
//       </Fragment>
//     );
//   }
// }
