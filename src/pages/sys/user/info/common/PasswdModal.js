import { Fragment } from "react";

// /* eslint-disable react/destructuring-assignment */
// import React from 'react';
// import { Form, Modal } from 'antd';
// import UserInfoStore from 'stores/sys/user/UserInfoStore';
// import UserPasswordEdit from '../neditpwd/UserPasswordEdit';

// class PasswordModal extends React.Component {
//   formFields = ['oldPasswd', 'newPasswd', 'confirmPasswd'];

//   constructor(props) {
//     super(props);
//     const { userInfoStore, form } = props;
//     this.userInfoStore = userInfoStore || new UserInfoStore();
//     this.form = form;
//     this.state = {
//       confirmDirty: false,
//       visible: false,
//     };
//   }

//   componentDidMount() {
//     if ('onReady' in this.props) {
//       const api = {
//         showModal: this.showModal,
//       };
//       this.props.onReady(api);
//     }
//   }

//   showModal = (visible, record) => {
//     this.userInfoStore.record = visible ? record : {};
//     const { userName, userAccount, id } = this.userInfoStore.record;
//     const value = { userName, userAccount, id };
//     this.setState({ visible }, () => {
//       this.form.setFieldsValue(value);
//     });
//   };

//   handleOk = () => {
//     const { form, handleOk } = this.props;
//     const { record } = this.userInfoStore;
//     form.validateFields((err, value) => {
//       if (!err) {
//         const { NewPassword: newPasswd, oldpassword, confirm, ...other } = value;
//         const param = {
//           password: newPasswd,
//           oldpassword,
//           confirm,
//           ...other,
//           id: record.id,
//         };
//         this.userInfoStore.savePasswd(param).then(success => {
//           if (success) {
//             this.handleCancel();
//             if (handleOk) handleOk(success);
//           }
//         });
//       }
//     });
//   };

//   handleCancel = () => {
//     this.showModal(false);
//   };

//   handleConfirmBlur = e => {
//     const { confirmDirty } = this.state;
//     const { value } = e.target;
//     this.setState({ confirmDirty: confirmDirty || !!value });
//   };

//   compareToFirstPassword = (rule, value, callback) => {
//     const { form } = this.props;
//     const { intl } = this.props;
//     if (value && value !== form.getFieldValue('newPasswd')) {
//       callback(intl && intl.get('ConfirmPassword'));
//     } else {
//       callback();
//     }
//   };

//   validateToNextPassword = (rule, value, callback) => {
//     const { form } = this.props;
//     const { confirmDirty } = this.state;
//     if (value && confirmDirty) {
//       form.validateFields(['confirmPasswd'], { force: true });
//     }
//     callback();
//   };

//   render() {
//     const { form } = this.props;
//     const { visible } = this.state;

//     return (
//       <Modal title="修改密码" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
//         {visible ? <UserPasswordEdit form={form} item={this.userInfoStore.record} /> : null}
//       </Modal>
//     );
//   }
// }

// export default Form.create()(PasswordModal);

export default ()=>{
  return <Fragment>hello</Fragment>
}