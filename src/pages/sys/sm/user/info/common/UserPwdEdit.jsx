/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form } from 'antd';
import {Intler, Btns, MBox} from '@/components'
import { InputH } from '@/components/FormMark' 
import lodash from 'lodash'
import { toPromise } from '@/utils/utils'
import {enBase64} from '@/utils/util.crypto'
import Global from '@/stores/common/Global'
 
class UserPwdEdit extends React.Component {

  formFields = ["userName","userCode","password","newPassword","rePassword","id"];

  passOptions = {
    rules: [
      { required: true, message: Intler.getIntl("sm.user.pwd.validator.require") },
      { whitespace: true, message: Intler.getIntl("sm.user.pwd.validator.not.null") },
      { max: 20, message: Intler.getIntl("sm.user.pwd.validator.not.long") },
      {pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}',message: Intler.getIntl("sm.user.pwd.validator.rule")},
    ],
  };

  viewOptions = { disabled: true, readOnly: true }

  constructor(props) {
    super(props);
    const { form } = props
    this.form = form 
  }

  componentDidMount(){
    const {record} = this.props
    // 无论传入都是对象还是promise 还是funciton 一律转化未promise处理
    toPromise(record).then(data=>{
      this.setFormValue(data)
    })
  }

  // 筛form值
  setFormValue = (values) =>{
    this.form.setFieldsValue(lodash.pick(values,this.formFields))
  }

  // 关闭弹框都时候
  onClose = () => {
    const { onClose } = this.props
    if(this.form.isFieldsTouched()){
      MBox.confirm({
        title:Intler.getIntl('app.confirm.back'),
        content:Intler.getIntl('app.confirm.back.update'),
        onOk:()=>{
          if(onClose) onClose();
        }
      })
    }else if(onClose) onClose();
  }

  // 保存的时候
  onSave = () =>{
    this.form.validateFieldsAndScroll((error,values)=>{
      if(!error){
        if(this.props.onSave) {
          this.props.onSave(values);
        }else{
          const params = {
            ...values,
            password:enBase64(values.password),
            newPassword:enBase64(values.newPassword),
          };
          Global.callMethodWithSpin({key:'SYS_USER_SAVE_PWD',params}).then(({success,returnMessage})=>{
            if(success) {
              MBox.success(Intler.getIntl("common.save.success"));
              this.onClose();
            }else{
              MBox.error(returnMessage);
            }
          })
        }
      }
    })
  }
 
  // 两次密码一致校验
  rePwdValidator = (rule, value, callback) => {
    const newPwd = this.form.getFieldValue("newPassword");
    if (value && value !== newPwd) {
      callback(Intler.getIntl('sm.user.pwd.validator.repwderror'));
    } else {
      callback();
    }
  };
 
  render() { 
     
    const comFormItemProps = {
      view: this.view,
      form: this.form,
    };

    return (
      <div style={{ width: '450px',margin:'0 auto' }}>
        <InputH id="id" {...comFormItemProps} hidden />
        <Form layout="inline">
          <InputH 
            label={Intler.getIntl("sm.user.userName")} 
            id="userName" 
            fieldOptions={{ rules: [] }} 
            options={this.viewOptions} 
            {...comFormItemProps}
          />
          <InputH 
            label={Intler.getIntl("sm.user.userCode")} 
            id="userCode" 
            fieldOptions={{ rules: [] }} 
            options={this.viewOptions}
            {...comFormItemProps}
          />
          <InputH
            id="password"
            label={Intler.getIntl("sm.user.orgPassword")}
            options={{
              type: "password",
            }}
            {...comFormItemProps}
          />
          <InputH
            id="newPassword"
            label={Intler.getIntl("sm.user.newPassword")}
            options={{
              type: "password",
            }}
            fieldOptions={this.passOptions}
            {...comFormItemProps}
          />
          <InputH
            id="rePassword"
            label={Intler.getIntl("sm.user.rePassword")}
            options={{
              type: "password",
            }}
            fieldOptions={{
              rules: [
                { required: true, message: Intler.getIntl("sm.user.rePassword") },
                { validator: this.rePwdValidator },
              ],
            }}
            {...comFormItemProps}
          /> 
        </Form>
        <Btns.Group>
          <Btns.back onClick={this.onClose} />
          <Btns.save onClick={this.onSave} />
        </Btns.Group>
      </div>
    );
  }
}



export default Form.create()(UserPwdEdit)