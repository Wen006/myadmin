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
    status: undefined,
    isCaptcha: false, // 是否要验证码
    isEncode: true, // 是否加密
  },

  effects: {
    *login({ payload }, { call, put }) {
      const {success,datas} = yield call(callMethod, {key:api.sysUserInfoLogin,params:payload});
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status:success?"ok":false,
          currentAuthority:datas.currentAuthority||'guest'
        },
      });
      // Login successfully
      if (success) {
        reloadAuthorized();
        const { accessToken,...userInfo} = datas;
        yield put({
          type:'user/saveLoginUser',
          payload:userInfo,
          accessToken,
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
      });
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
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
