// import { observable } from 'mobx';
import { callMethod } from '@/services/ServiceHandler';
import db from '@/utils/util.db'
// import { GSpinStore } from 'plugins/Loader/GSpin';
import CacheStore from './common/sys/CacheStore';

class Global {
  languageInfo = undefined;

  version = 'MPC_00V1';

  constructor() {
    this.languageInfo = db.get("sys.language");
    this.cacheStore = new CacheStore(this.languageInfo, this.version);
  }

  // 统一请求方法
  callMethod = async ({ key, params }) => {
    return callMethod({ key, params });
  };

  // 带遮照 这个是对非弹框遮照
  callMethodWithSpin = async ({ key, params }) => {
    // GSpinStore.show();
    const ret = await this.callMethod({ key, params });
    // GSpinStore.hide();
    return ret;
  };

  // 获取代码表 并且缓存
  findAdLovByCode = async code => this.cacheStore.findAdLovByCode(code);

  // 获取系统参数 并且缓存
  findAdSysParamsByCode = async code => this.cacheStore.findAdSysParamsByCode(code);

  initSysParam = () => {
    // const { datas = {}, success } = callMethod({ key: 'SYS_PARAMS', params: {} });
    // const { isCaptcha, district_version } = datas;
  };

  // 兼容老的 这里直接缓存是有的代码表
  setCodeMap = codeMap => this.cacheStore.setCodeMap(codeMap);

  getCodeMap = () => this.cacheStore.codeMap
}

export default new Global();
