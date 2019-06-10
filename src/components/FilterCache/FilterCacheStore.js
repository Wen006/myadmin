import omit from 'omit.js';

function isEmptyStr(str) {
  return str == undefined || str == null || str == '' || str.trim() == '';
}

function getUrlId() {
  const { hash, pathname } = window.location;
  const str = isEmptyStr(hash) ? pathname : hash;
  return str.indexOf('/#') ? str.substr(1) : str;
}

function setItem(key, value) {
  const storeVal = typeof value == 'object' ? JSON.stringify(value) : value;
  window.sessionStorage.setItem(key, storeVal);
}

function getItem(key) {
  const storeVal = window.sessionStorage.getItem(key);
  if (isEmptyStr(storeVal)) return {};
  try {
    return JSON.parse(storeVal);
  } catch (e) {}
  return {};
}

function removeItem(...keys) {
  if (Array.isArray(keys)) {
    keys.forEach(k => {
      try {
        window.sessionStorage.removeItem(k);
      } catch (e) {}
    });
  }
}

export default class FilterCacheStore {
  constructor() {
    this.key = getUrlId();
  }

  setParams = value => {
    setItem(this.key, omit(value, ['current', 'total']));
  };

  getParams = () => {
    return getItem(this.key);
  };

  setPageSatus = value => {
    setItem(this.getPageStatusKey(this.key), value);
  };

  getPageSatus = () => {
    return getItem(this.getPageStatusKey(this.key));
  };

  getPageStatusKey = key => {
    return `${key}_Status`;
  };

  clearParams = path => {
    try {
      const nkey = path || this.key;
      removeItem(nkey, this.getPageStatusKey(nkey));
    } catch (e) {}
  };
}
