import { query as queryUsers, queryCurrent } from '@/services/example/user';
import db,{ setItem, getItem,setCookie } from '@/utils/util.db'
import { callMethod } from '@/services/ServiceHandler';

const loginKey = {
  LOGIN_STATUS:"sys.login.status",
  USER_NAME:"sys.login.userName",
  TOKEN:"accessToken",
}

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const {success,datas} = yield call(callMethod, {key:"SYS_USER_INFO_GETCURUSER",params:{}});
      if(success){
        yield put({
          type: 'saveCurrentUser',
          payload: datas,
          accessToken: datas.accessToken,
        });
      }
      return success;
    },
  },

  reducers: {
    saveCurrentUser(state, action) { 
      return {
        ...state,
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
