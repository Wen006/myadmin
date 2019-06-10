import React from 'react';
import { Form } from 'antd';
import intl from 'react-intl-universal';
import { Inputs } from 'components';

const { NInput } = Inputs;

class UserPasswordEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      k3: false, // 这个是为了后期k3接口
    };
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('NewPassword')) {
      callback(intl && intl.get('ConfirmPassword'));
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.props;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { item } = this.props;
    const passOptions = {
      rules: [
        { required: true, message: '请输入新密码' },
        { whitespace: true, message: '不能为空字符串,' },
        { max: 20, message: '不要超过20个字符,' },
        {
          pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}',
          message: '密码中必须包含字母、数字、特殊字符，且长度为8-16个字符。',
        },
        { validator: this.validateToNextPassword },
      ],
    };

    const { form, isK3 = false } = this.props;

    return (
      <div style={{ width: '450px' }}>
        <Form>
          <NInput modalKey="id" hidden form={form} />
          <NInput modalKey="kThreeFlag" hidden form={form} />
          <NInput
            label={intl&&intl.get("UserName")}
            modalKey="userName"
            options={{
              initialValue: item.userName,
            }}
            form={form}
            disabled
            readOnly
          />
          <NInput
            label={intl&&intl.get("USER_ACCOUNT")}
            modalKey="userAccount"
            options={{
              initialValue: item.userAccount,
            }}
            form={form}
            disabled
            readOnly
          />
          <NInput
            type="password"
            label={intl&&intl.get("OldPw")}
            modalKey="oldpassword"
            form={form}
            options={{ rules: [{ required: true, message: intl && intl.get('RePassword') }] }}
          />
          <NInput
            type="password"
            label={intl&&intl.get("NewPw")}
            modalKey="NewPassword"
            form={form}
            options={passOptions}
          />
          <NInput
            type="password"
            label={intl&&intl.get("PwConfirm")}
            modalKey="confirm"
            form={form}
            options={{
              rules: [
                { required: true, message: intl && intl.get('ConfirmInput') },
                { validator: this.compareToFirstPassword },
              ],
            }}
          />
          {/** k3 用户提供修改 保留字段 reservedField3 代替 */}
          {isK3 ? (
            <NInput
              type="password"
              label="K3密码"
              modalKey="reservedField3"
              form={form}
              options={{ rules: [{ required: true, message: 'K3密码' }] }}
            />
          ) : null}
        </Form>
      </div>
    );
  }
}

export default UserPasswordEdit;
