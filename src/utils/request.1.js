/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* global window */
import axios from 'axios';
import qs from 'qs';
import jsonp from 'fetch-jsonp';
import store from '..';
import lodash from 'lodash';
import pathToRegexp from 'path-to-regexp';
import { notification, Modal } from 'antd';
import { contextPath } from 'utils/config';
import Intler from 'components/Intler/Intler';
import { CORS } from './config';
import { getLocalInfo } from './webUtils';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

let modalRef; // 针对用户过期弹出框只有一个

axios.interceptors.request.use(
  conf => {
    conf.headers.SessionLocale = getLocalInfo(); // 这个后台动态国际化拦截需要
    conf.headers['Accept-Language'] = getLocalInfo();
    // conf.headers.AccessToken = getSessionItem(STATIC.AUTH_TOKEN) || ''
    // 在发送请求之前做些什么
    return conf;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

const fetch = options => {
  const { method = 'get', data, body, query, headers, fetchType } = options;

  let { url } = options;

  const cloneData = lodash.cloneDeep(data || body);

  if (query) {
    url = url.includes('?') ? url + qs.stringify(query) : `${url}?${qs.stringify(query)}`;
  }

  try {
    let domain = '';
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domain = url.match(/[a-zA-z]+:\/\/[^/]*/)[0];
      url = url.slice(domain.length);
    }
    const match = pathToRegexp.parse(url);
    url = pathToRegexp.compile(url)(data);
    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }
    url = domain + url;
  } catch (e) {
    console.error(e);
  }

  if (fetchType === 'JSONP') {
    return fetchJsonp(options);
  }

  const comCfg = {
    withCredentials: true,
    timeout: 1800000,
  };
  if (headers) {
    comCfg.headers = headers;
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
        ...comCfg,
      });
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
        ...comCfg,
      });
    case 'post':
      return axios.post(url, cloneData, {
        ...comCfg,
      });
    case 'formpost':
      return axios.post(url, cloneData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        transformRequest: [
          _data => {
            return qs.stringify(_data);
          },
        ],
        ...comCfg,
      });
    case 'put':
      return axios.put(url, cloneData);
    case 'patch':
      return axios.patch(url, cloneData);
    default:
      return axios(options);
  }
};

export default function request(inOptions) {
  const options = lodash.assign({}, inOptions);
  // options.url = 'http://localhost:3000/#/user/login?redirect=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fsystem%2Fuser%2Finfo%2FuserInfoIndex'
  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`;
    if (`${window.location.origin}${contextPath}` !== origin) {
      if (CORS && CORS.indexOf(origin) > -1) {
        options.fetchType = 'CORS';
      } else {
        options.fetchType = 'JSONP';
      }
    }
  }

  if (options.body) {
    options.data = options.body;
  }
  return fetch(options)
    .then(response => {
      // `data` 由服务器提供的响应
      // `status` 来自服务器响应的 HTTP 状态码
      // `statusText` 来自服务器响应的 HTTP 状态信息
      // `headers` 服务器响应的头
      // `config` 是为请求提供的配置信息
      const { status, statusText } = response;
      const { dispatch } = store;
      if (status >= 500)
        notification.error({
          message: Intler.getIntl('request.error.net.title') || '请求出错',
          description: statusText,
        });
      let { data } = response;
      if (data instanceof Array) {
        data = { list: data };
      }
      let { code = '500', returnMessage, errorCode = '500' } = data;
      code += ''; // 将数字转字符串
      if (code.indexOf('ERROR') > -1 || code.indexOf('EXCEPTION') > -1) {
        notification.error({ message: '非法操作!', description: returnMessage });
      } else if (code.includes('SYSTEM_LOGIN_506') || code.includes('SYSTEM_LOGIN_507')) {
        // 用户登录
        // 506 session过期 507 没有登录
        if (options.url.includes('/security/logout') || options.url.includes('/security/logout'))
          return data;
        if (modalRef) return data;
        modalRef = Modal.error({
          centered: true,
          content:
            Intler.getIntl('request.session.user.timeout') || '当前用户登录信息已过期，请重新登录!',
          onOk: () => {
            dispatch({ type: 'login/logout' });
          },
        });
      } else {
        // 业务错误提示 后台的moduleReturn 包含localeCode 才提示
        // MessageBox.notice(data)
      }
      return data;
    })
    .catch(errorDatas => {
      console.log('request.js errorDatas', errorDatas);
      return errorDatas;
    });
}

function fetchJsonp({ url, ...other }) {
  return new Promise((resolve, reject) => {
    jsonp(
      url,
      {
        param: `${qs.stringify(other)}&callback`,
        name: `jsonp_${new Date().getTime()}`,
        timeout: 4000,
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve({ statusText: 'OK', status: 200, data: result });
      }
    );
  });
}
