// import { observable } from 'mobx';
import { callMethod } from '@/services/ServiceHandler';

/**
 *  @desc 这个主要缓存参数，具体是请求过后来缓存，不推荐全部缓存
 */
// 这个主要用于并发请求多个相同请求
const reqMap = {};

class CacheStore {
  // 代码表缓存
  codeMap = {};

  // 缓存系统参数
  paramMap = {};

  languageInfo = undefined;

  version = 'Cache_001';

  constructor(languageInfo, version) {
    this.languageInfo = languageInfo;
    this.version = version;
  }

  setCodeMap = (inMap = {}) => {
    this.codeMap = inMap;
  };

  // 获取代码表 并且缓存
  findAdLovByCode = async code => {
    if (this.codeMap[code]) return this.codeMap[code];
    if (!reqMap[code]) {
      reqMap[code] = callMethod({
        key: 'AD_LOV_LIST_FIND_BY_CODE',
        params: { listCode: code },
      });
    }
    const { success, datas } = await reqMap[code];
    if (success) {
      this.codeMap[code] = datas[code] || datas;
      return this.codeMap[code];
    }
    return [];
  };

  // 获取系统参数 并且缓存
  findAdSysParamsByCode = async code => {
    if (this.paramMap[code]) return this.paramMap[code];
    const { success, datas } = await callMethod({
      key: 'AD_SYSTEM_PARAM_GET_CODE',
      params: { systypeCode: code },
    });
    if (success) {
      this.paramMap[code] = datas;
      return datas;
    }
    return [];
  };
}

export default CacheStore;
