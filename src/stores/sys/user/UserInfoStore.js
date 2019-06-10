/* eslint-disable no-unused-expressions */

import Global from '@/stores/common/Global';
import {Intler,MBox} from '@/components/';

const api = {
  resetPwd: 'SYS_USER_RESET_PWD',
  delRecord: 'SYS_USER_DELETE_MULTI',
  findUserById: 'SYS_USER_EDIT_BY_ID',
  saveOrUpdate: 'SYS_USER_SAVE_OR_UPDATE',
  savePasswd: 'SYS_USER_SAVE_PASSWD',
};

export default class UserInfoStore {
  record = undefined;

  resetPwd = async record => {
    const { success, returnMessage } = await Global.callMethodWithSpin({
      key: api.resetPwd,
      params: record,
    });
    if (!success) {
      MBox.success('重置失败');
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
  findUserInfoById = async (id = -1, view = true) => {
    const params = {
      key: api.findUserById,
      params: { id },
    };
    const { datas } = view
      ? await Global.callMethod(params)
      : await Global.callMethodWithSpin(params);
    this.record = datas;
    return this.record;
  };

  saveOrUpdate = async record => {
    const { success, datas } = await Global.callMethodWithSpin({
      key: api.saveOrUpdate,
      params: record,
    });
    this.record = datas;
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
