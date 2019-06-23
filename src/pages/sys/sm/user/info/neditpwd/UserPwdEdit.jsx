import React from 'react';
import { Form } from 'antd';
import {Intler} from '@/components'
import { InputH } from '@/components/FormMark'
 
export default class UserPwdEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('NewPassword')) {
      callback(Intler.getIntl('ConfirmPassword'));
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

    const comFormItemProps = {
      view: this.view,
      form,
    };

    const viewOptions = { disabled: true, readOnly: true }

    return (
      <div style={{ width: '450px' }}>
        <Form layout="vertical">
          <InputH id="id" hidden form={form} />

          <InputH 
            label={Intler.getIntl("user.info.userName")} 
            id="userName" 
            fieldOptions={{ rules: [] }} 
            options={viewOptions} 
            {...comFormItemProps} 
          />
          <InputH 
            label={Intler.getIntl("user.info.userCode")} 
            id="userCode" 
            fieldOptions={{ rules: [] }} 
            options={viewOptions}
            {...comFormItemProps} 
          />

          <InputH
            id="password"
            label={Intler.getIntl("user.info.orgPassword")}
            options={{
              type: "password",
            }}
            {...comFormItemProps}
          />

          <InputH
            id="newPassword"
            label={Intler.getIntl("user.info.newPassword")}
            options={{
              type: "password",
            }}
            fieldOptions={passOptions}
            {...comFormItemProps}
          />
          <InputH
            id="rePassword"
            label={Intler.getIntl("user.info.rePassword")}
            options={{
              type: "password",
            }}
            fieldOptions={{
              rules: [
                { required: true, message: Intler.getIntl('ConfirmInput') },
                { validator: this.compareToFirstPassword },
              ],
            }}
            {...comFormItemProps}
          />
        </Form>
      </div>
    );
  }
}

