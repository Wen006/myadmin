import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from '@/services/example/api';
import { callMethod } from '@/services/ServiceHandler';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
// import db, { setCookie,getCookie } from '@/utils/util.db'

const api = {
  sysUserInfoLogin:"SYS_USER_INFO_LOGIN",
}
 

export default {
  namespace: 'login',

  state: {
    returnMessage:'',
    status: undefined,
    isCaptcha: false, // 是否要验证码
    isEncode: true, // 是否加密
  },

  effects: {
    *login({ payload }, { call, put }) {
      const  data = yield call(callMethod, {key:api.sysUserInfoLogin,params:payload});
      console.log("login",data)
      const {success,datas,returnMessage} = data
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status:success?"ok":"error",
          currentAuthority:datas.currentAuthority||'guest',
          returnMessage,
        },
      });
      // Login successfully
      if (success) {
        reloadAuthorized();
        const { accessToken,...userInfo} = datas;
        yield put({
          type:'user/saveCurrentUser',
          payload:userInfo,
        })
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      })
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      console.log("changeLoginStatus",payload)

      setAuthority(payload.currentAuthority);
      console.log("bakc")
      return {
        ...state,
        status: payload.status,
        type: payload.type,
        returnMessage:payload.returnMessage,
      };
    },
  },
};
