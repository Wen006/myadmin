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
 
class RoleForm extends React.Component {

 
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
  
  render() { 
     
    const comFormItemProps = {
      view: this.view,
      form: this.form,
    };

    const viewOptions = {
        
    }

    return (
      <div style={{ width: '450px',margin:'0 auto' }}>
        <InputH id="id" {...comFormItemProps} hidden />
        <Form layout="inline">
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
          
        </Form>
        <Btns.Group>
          <Btns.back onClick={this.onClose} />
          <Btns.save onClick={this.onSave} />
        </Btns.Group>
      </div>
    );
  }
}



export default Form.create()(RoleForm)