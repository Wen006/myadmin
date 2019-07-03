/* eslint-disable no-unused-expressions */

import Global from '@/stores/common/Global';
import {Intler,MBox} from '@/components/';
import { observable } from 'mobx';
import lodash from 'lodash'

const api = {
  resetPwd: 'SYS_USER_RESET_PWD',
  delRecord: 'SYS_USER_DELETE_MULTI',
  findUserById: 'SYS_USER_EDIT_BY_ID',
  saveOrUpdate: 'SYS_USER_SAVE_OR_UPDATE',
  savePasswd: 'SYS_USER_SAVE_PASSWD',
  queryRoleForUser:'SYS_ROLE_QUERY_FOR_USER',
};

export default class UserInfoStore {

  formField = ["id","countryId","countryCode","userCode","userName","email","countryName","phone","address","remark"];

  form;
  
  view = false;

  @observable allRoleData = []; // 角色信息

  @observable targetRoleKeys = []; // 被选择的角色id

  // 角色列表初始化
  initRoleInfo = async (userId)=>{
    Global.callMethod({key:api.queryRoleForUser,params:{userId}}).then(({datas})=>{ 
      const { allData,targetData} = datas; 
      this.allRoleData = allData.map(ele=>{
          return {
              key:ele.id,
              disabled:this.view,
              ...ele,
          }
      })
      this.targetRoleKeys = targetData.map(i=>i.id) 
    })
  }
  
  // 初始化form对象api
  initForm = ({form,view,record}) =>{
    this.form = form;
    this.view = view;
    if (!this.view && !record.id){ // 新增用户
      this.initRoleInfo(-1);
      return; 
    }
    this.findUserInfoById(record.id).then(data=>{
      this.setFormValues(data);
      this.initRoleInfo(data.id);
    });
  }

  // 设置form值
  setFormValues = (values) =>{
    if(this.form){
      this.form.setFieldsValue(lodash.pick(values,this.formField));
    }
  }

  // vm 保存
  handleSave = () => {
    // 校验主表单必填
    this.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        const master = {};
        lodash.assign(master, value);
        this.saveOrUpdate(master).then(({success, datas})=>{
          this.setFormValues(datas);
        });
      }
    });
  };


  resetPwd = async record => {
    const { success, returnMessage } = await Global.callMethodWithSpin({
      key: api.resetPwd,
      params: record,
    });
    if (!success) {
      MBox.success(returnMessage||'重置失败');
      return false;
    }
    MBox.success('重置成功');
    return true;
  };

  deleteRecord = async ids => {
    const { success, returnMessage } = await Global.callMethodWithSpin({
      key: api.delRecord,
      params: ids,
    });
    if (!success) {
      MBox.success(returnMessage);
      return false;
    }
    MBox.success(Intler.getIntl('删除成功'));
    return true;
  };

  // 这里的view 主要用于是否需要遮照
  findUserInfoById = async (id = -1) => {
    const params = {
      key: api.findUserById,
      params: { id },
    }; 
    const { datas } = this.view
      ? await Global.callMethod(params)
      : await Global.callMethodWithSpin(params);
    return datas;
  };

  saveOrUpdate = async record => {
    lodash.assign(record,{
      roleIds:this.targetRoleKeys,
    })
    const { success, datas } = await Global.callMethodWithSpin({
      key: api.saveOrUpdate,
      params: record,
    }); 
    success ? MBox.success('保存成功') : MBox.error('保存失败。');
    return { success, datas };
  };

  savePasswd = async record => {
    const { success, datas, returnMessage } = await Global.callMethod({
      key: api.savePasswd,
      params: record,
    });
    if (!success) {
      MBox.error(returnMessage || '修改失败');
      return false;
    }
    MBox.success('修改密码成功');
    return true;
  };
}
