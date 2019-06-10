import React from 'react';
import { MessageBox } from 'utils';
import { Modal, Form, message } from 'antd';
import { savePassWord } from 'services/system/userinfo/userinfoService';
import UserPasswordEdit from './UserPasswordEdit';

class PasswordModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item || {},
      isK3: false,
    };
  }

  componentDidMount() {
    // const { item = {} } = this.state;
    // getUserWithK3InfoById({ userId: item.id }).then(({ datas }) => {
    //   const { id, userAccount, userName, password, reservedField3, kThreeFlag } = datas
    //   let userinfo = { id, userAccount, userName,kThreeFlag }
    //   if (kThreeFlag == '0') {
    //     this.setState({ isK3: true })
    //     userinfo.reservedField3 = reservedField3
    //   }
    //   this.props.form.setFieldsValue(userinfo)
    // })
  }

  handleOk = () => {
    const { form, showModal } = this.props;
    form.validateFieldsAndScroll(null, { first: true, force: true }, (err, value) => {
      if (!err) {
        const { item } = this.state;
        item.password = value.NewPassword;
        const obj = { ...item, ...value };
        savePassWord(obj).then(data => {
          if (data.code === '200') {
            MessageBox.success('SaveSuc');
            showModal(false);
          } else {
            message.error(data.returnMessage || '保存失败！');
          }
        });
      }
    });
  };

  handleCancel = () => {
    const { showModal } = this.props;
    // this.props.showModal && this.props.showModal(false);
    if (showModal) showModal(false);
  };

  render() {
    const { form, intl } = this.props;
    const { isK3, item } = this.state;
    const editProps = {
      form,
      item,
      intl,
      isK3,
    };
    return (
      <Modal
        title={intl && intl.get('EditPassword')}
        visible
        maskClosable={false}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <UserPasswordEdit {...editProps} />
      </Modal>
    );
  }
}

const passwordModal = Form.create()(PasswordModal);
export default passwordModal;
