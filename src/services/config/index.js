/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/**
 * @desc 这里配置所有服务restapi 模版配置
 * 如果与重复的key 则会覆盖（请确保配置都key都重复）
 *
 *  "KEY请大写唯一(服务模块_具体表_功能)":{
 *      "url":"/system/user/listByDto", //后台对应restapi url
 *      "method":"POST",                //请求方式 formpost，delete,post,get
 *      "header":['Accept': 'application/json'], // 可以设置请求的头
 *      "mocktable":"SM_USER",        //用户模拟数据的找mocktable的 这里的表明一定和mock dbDao.js配置的要一致
 *      "mockhandler":"list",           //配置该项mock会统一处理 可选【list(翻页),list2(无翻页)),saveorupdate,delete,getone】
 *      "auth":"wennn",                 //作者
 *      “desc":"用户列表查询"             //方法描述
 *  },
 *
 * @time 20180731
 * @auth wennn
 */

import lodash from 'lodash';
import sys from './sys';
import example from './example'
// import fm from './fm';
// import fsc from './fsc';
// import lp from './lookup';
// import dsbd from './dashboard';
// import ve from './ve';
// import wp from './wp';
// import demo from './demo';
// import logger from '@/utils/utils.log'

const api = { ...sys, ...example,
  // ...fsc, ...lp, ...dsbd, ...wp, ...demo, ...fm, ...ve
 };

const env = process.env.NODE_ENV === 'development'

function checkSameUrl(configs) {
  const tApi = {};
  Object.keys(configs).forEach(k => {
    const { url, auth, desc, mocktable, mockhandler } = configs[k];
    if (mocktable) {
      // 针对mock 生成的
      lodash.assign(configs[k], {
        mocktable: lodash.toUpper(mocktable),
        mockhandler,
      });
    }
    if (url && url != '') {
      if (tApi[url]) {
        tApi[url].count += 1;
        tApi[url].apis.push(`${auth} => ${k}`);
      } else {
        tApi[url] = {
          count: 1,
          apis: [`${auth} => ${k}`],
        };
      }
    }
  });
  // logger.log('疑似重复 Url====Start===============================');
  // for (const k in tApi) {
  //   if (tApi[k].count > 1) logger.log('重复次数：', tApi[k].count, ` 》【${k}】${tApi[k].apis}`);
  // }
  // logger.log('疑似重复 Url====End=================================');
}

if (env) {
  checkSameUrl(api);
}

export default api;
