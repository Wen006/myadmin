import { query as queryUsers, queryCurrent } from '@/services/example/user';
import db,{ setItem, getItem,setCookie } from '@/utils/util.db'
import { callMethod } from '@/services/ServiceHandler';
import Global from '@/stores/common/Global';

const loginKey = {
  LOGIN_STATUS:"sys.login.status",
  USER_NAME:"sys.login.userName",
  TOKEN:"accessToken",
}

export default {
  namespace: 'user',

  state: {
    status: false,
    currentUser: {},
  },

  effects: {
    *fetchCurrent(_, { call, put,select }) {
      const userState = select(_=>_user)
      if(userState.status == true){
        return userState.currentUser;
      }
      const {success,datas} = yield call(callMethod, {key:"SYS_USER_INFO_GETCURUSER",params:{}});
      if(success){
        yield put({
          type: 'saveCurrentUser',
          payload: datas,
          accessToken: datas.accessToken,
        });
        Global.user = datas;
      }
      return success;
    }
  },

  reducers: {
    saveCurrentUser(state, action) { 
      return {
        ...state,
        status:!!action.payload,
        currentUser: action.payload || {},

      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
