/* eslint-disable no-param-reassign */
/**
 * @description 统一请求工具类
 * - get
 * @param
 * - url
 * - 
 */
import axios from 'axios';
import lodash from 'lodash'
import qs from 'qs'
import { notification } from 'antd';
import router from 'umi/router';
import hash from 'hash.js';
import Log from '@/utils/utils.log'

const logger = new Log("Request")

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

// axios配置
const defaultAxiosCfg = {
  withCredentials: true,
  timeout: 1800000,
};

// 添加请求拦截器
axios.interceptors.request.use(conf => {
  lodash.assign(conf.headers,{
    'Accept-Language':'zh_CN',
    'Access-Token':'1111111',
  })
  // 在发送请求之前做些什么
  return conf;
}, (error) => 
  // 对请求错误做些什么
   Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use((response) => 
  // 对响应数据做点什么
   response
, (error) => 
  // 对响应错误做点什么
   Promise.reject(error)
);

// 校验返回结果
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

// 保存缓存
const cachedSave = (response, hashcode) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then(content => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
      });
  }
  return response;
};

/**
 * @description 返回原生的axios
 * @param {请求url} url 
 * @param {请求的参数} options 
 * 
 */
export function fetch (url,options) {
  const { method = 'GET', body, headers } = options;

  // body 请求体参数
  const cloneData = lodash.cloneDeep(body);

  // axios 配置
  const comCfg =lodash.assign({},defaultAxiosCfg);
  
  if (headers) {
    comCfg.headers = headers;
  }

  switch (method) {
    case 'GET':
      return axios.get(url, {
        params: cloneData,
        ...comCfg,
      });
    case 'DELETE':
      return axios.delete(url, {
        data: cloneData,
        ...comCfg,
      });
    case 'POST':
      return axios.post(url, cloneData, {
        ...comCfg,
      });
    case 'FORMPOST':
      return axios.post(url, cloneData, {
        headers: {
          'Content-TYPE': 'application/x-www-form-urlencoded',
        },
        transformRequest: [
          _data => qs.stringify(_data),
        ],
        ...comCfg,
      });
    case 'PUT':
      return axios.put(url, cloneData);
    case 'PATCH':
      return axios.patch(url, cloneData);
    default:
      return axios(options);
  }
};

/**
 * Requests a URL, returning a promise.
 * @description 返回带有处理的结果，以及错误校验的
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, option, expirys=false) {
  const { method = 'GET', body, query } = option;
 
  // query 参数是放到url上的
  if (query) {
    url = url.includes('?') ? url + qs.stringify(query) : `${url}?${qs.stringify(query)}`;
  } 

  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */
  const fingerprint = url + (body ? JSON.stringify(body) : '');

  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');
  
  if (expirys !== false) {
    const cached = sessionStorage.getItem(hashcode);
    const whenCached = sessionStorage.getItem(`${hashcode}:timestamp`);
    if (cached !== null && whenCached !== null) {
      const age = (Date.now() - whenCached) / 1000;
      if (age < expirys) {
        const response = new Response(new Blob([cached]));
        return response.json();
      }
      sessionStorage.removeItem(hashcode);
      sessionStorage.removeItem(`${hashcode}:timestamp`);
    }
  }

  return fetch(url, option)
    // .then(checkStatus)
    // .then(response => cachedSave(response, hashcode))
    .then(response => {
      // `data` 由服务器提供的响应
      // `status` 来自服务器响应的 HTTP 状态码
      // `statusText` 来自服务器响应的 HTTP 状态信息
      // `headers` 服务器响应的头
      // `config` 是为请求提供的配置信息
      const { status, statusText, data } = response; 

      return data;
    })
    .catch(e => {
      console.log(e,'error')
      const status = e.name;
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        window.g_app._store.dispatch({
          type: 'login/logout',
        });
        return;
      }
      // environment should not be used
      if (status === 403) {
        router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/exception/404');
      }
    });
}

// 这个用于某些业务自定义的请求 ，比如上传等等
export {
  axios,
}