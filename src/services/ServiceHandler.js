/* eslint-disable no-unused-vars */
// import request from 'utils/fetch'
import request,{ axios,fetch } from '@/utils/request';
import { stringify } from 'qs';
import lodash from 'lodash';
import api from './config';
import { apiProxy } from '@/utils/app.conf'
import logger from '@/utils/utils.log'

/**
 * @desc 统一调用后台入口
 * @param {key} 方法key在apiconfig配置的
 * @param {params} 请求的参数
 */
const env = process.env.NODE_ENV === 'development'

/**
 * @desc 通过改方法获取后台的请求信息
 * @param {ke} 方法methodkey
 */
export function getMethodInfo(key) {
  const currentHandler = api[key];
  if (!currentHandler) {throw new Error(`ServiceHandler Error Not Match MethodKey${key}`);}
  let url = currentHandler.url.trim();
  if (apiProxy) {
    url = apiProxy + url;
  }
  return lodash.assign({},currentHandler,{url,method: currentHandler.method.toUpperCase()});
}

export async function callMethod({ key, params }) {
  const currentHandler = getMethodInfo(key);
  const { method, mocktable, mockhandler, headers = {}, url } = currentHandler;

  const newOptions = { method, headers };

  if (method === 'GET') {
    newOptions.query = params;
  } else {
    newOptions.headers = {
      'Accept': 'application/json',
      'Content-Type': (method === 'FORMPOST' || params instanceof FormData)?'application/x-www-form-urlencoded':'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = params;
  }

  // 针对mock 生成的
  if (env && mocktable) {
    lodash.assign(newOptions.headers, { mocktable, mockhandler });
  }

  // eslint-disable-next-line no-logger
  if (env == 'dev') logger.log(
      `KEY: ${key} >> INFO: ${JSON.stringify(
        lodash.pick(newOptions, ['method', 'url', 'headers'])
      )}`
    );

    try { 
      const {success=false,...other} = await request(url,newOptions);
      return {success,...other};
    } catch (error) {
      return {success:false}
    }
}

// 这个用于某些业务自定义的请求 ，比如上传等等
export {
  axios,
  fetch,
}