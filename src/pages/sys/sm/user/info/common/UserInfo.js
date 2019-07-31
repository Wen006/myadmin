/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react';
import { Form, Card, Col } from 'antd';
import { observer } from 'mobx-react';
import { InputH,RadioH,InputLookUp } from '@/components/FormMark';
import { Btns, Intler, MBox, AutoRow } from '@/components'; 
import styles from '@/pages/common.less'; 
import Navigator from '@/stores/common/Navigator';
import Global from '@/stores/common/Global'; 
import RoleTransfer from './RoleTransfer'

@observer
class UserInfo extends React.Component {
  formField = ["id","countryId","countryCode","userCode","userName","email","countryName","phone","address","remark"];
 
  constructor(props) {
    super(props); 
    this.userInfoStore = props.userInfoStore; 
    // this.state = {
    //   USER_INFO_STATUS: [],
    //   USER_INFO_TYPE: [],
    // };
    // Global.findAdLovByCode('USER_INFO_STATUS').then(data => {
    //   this.setState({ USER_INFO_STATUS: data });
    // });
    // Global.findAdLovByCode('USER_INFO_TYPE').then(data => {
    //   this.setState({ USER_INFO_TYPE: data });
    // });
  }

  componentDidMount() {
    const { record,form,view } = this.props;
    this.userInfoStore.initForm({record,form,view });
  } 

  render() {
    const { form } = this.props;
     
    const comFormItemProps = {
      view: this.userInfoStore.view,
      form,
    };

    const { record = {} } = this.userInfoStore;
 
 
    return (
      <Fragment>
        <Form layout="inline" labelAlign="left">
          <div className={styles.mainBox}>
            <Card title={Intler.getIntl('sm.user.basicInfo')} bordered={false}>
              <InputH id="id" hidden form={form} />
              <InputH id="countryId" hidden form={form} />
              <InputH id="countryCode" hidden form={form} />
              <AutoRow>
                <InputH label={Intler.getIntl("sm.user.userCode")} id="userCode" {...comFormItemProps} />
                <InputH label={Intler.getIntl("sm.user.userName")} id="userName" {...comFormItemProps} />
                <InputH label={Intler.getIntl("sm.user.email")} id="email" fieldOptions={{ rules: [] }} {...comFormItemProps} />
              </AutoRow>
              <AutoRow>
                <InputLookUp
                  {...comFormItemProps}
                  label={Intler.getIntl('sm.user.countryName')}
                  lookUpKey="SM_USER"
                  disabled
                  initialValue="中国"
                  modalKey="districtName"
                  id="countryName"
                  onClear={() => {
                    const param = { countryId: '', countryCode: '', countryName: '' };
                    this.props.form.setFieldsValue(param);
                  }}
                  onSearchBefore={() => {}}
                  onOk={({selectedRows}) => {
                    const row = selectedRows[0];
                    const param = {
                      countryId: row.id,
                      countryCode: row.districtCode,
                      countryName: row.districtName,
                    };
                    this.props.form.setFieldsValue(param);
                  }}
                />
                <InputH
                  label={Intler.getIntl("phone")}
                  id="phone"
                  fieldOptions={{ rules: [] }}
                  {...comFormItemProps}
                />
              </AutoRow>
              {/* <AutoRow>
                <DatePickerH
                  label={Intler.getIntl('sm.user.updPwdTime')}
                  id="updPwdTime"
                  initialValue={longToMoment(record.updPwdTime)}
                  {...comFormItemProps}
                />
                <DatePickerH
                  label={Intler.getIntl('sm.user.invalidPwdTime')}
                  id="invalidPwdTime"
                  initialValue={longToMoment(record.invalidPwdTime)}
                  {...comFormItemProps}
                />
              </AutoRow>
              <AutoRow>
                <RadioH
                  label={Intler.getIntl('sm.user.type')}
                  id="userType"
                  options={{
                    code: 'USER_INFO_TYPE',
                    type: RadioH.defaultType.Button,
                  }} 
                  {...comFormItemProps}
                />
              </AutoRow> */}
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
          <Card bodyStyle={{padding:0,textAlign:'center'}} hoverable={false} size="small" title="角色信息">
            <RoleTransfer view={this.view} userInfoStore={this.userInfoStore} />
          </Card>
          {this.userInfoStore.view ? null : (
            <div className={styles.btnBar}>
              <Btns.back
                onClick={() => {
                  Navigator.forward({ url: '/sys/sm/user/info/userIndex' });
                }}
              />
              <Btns.save type="primary" onClick={this.userInfoStore.handleSave} />
            </div>
          )}
        </Form>
      </Fragment>
      
    );
  }
}


export default Form.create()(UserInfo)