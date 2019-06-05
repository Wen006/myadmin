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
    *saveLoginUser({payload}, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      // const loginStatus = db.get(loginKey.loginKey).value();
      // if(loginStatus == "ok"){
      // }else{}

      const {success,datas} = yield call(callMethod, {key:"SYS_USER_INFO_GETCURUSER",params:{}});
      yield put({
        type: 'saveCurrentUser',
        payload: datas,
        accessToken: datas.accessToken,
      });
    },
  },

  reducers: {
    saveLoginUser(state,{payload,accessToken}){
      const { userAccount } = payload
      db.set(loginKey.LOGIN_STATUS,"ok").set(loginKey.USER_NAME,userAccount).write();
      setCookie('accessToken',accessToken);

      return {
        ...state,
        currentUser:payload,
      }
    },
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
