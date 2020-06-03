/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-extend-native */
/**
 * @description 不好分类的工具
 * @author wennn
 * @time 20190624
 */

import React from 'react';
import nzh from 'nzh/cn';
import lodash from 'lodash'
import { parse, stringify } from 'qs';

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function digitUppercase(n) {
  return nzh.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export function formatWan(val) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export const arrayToTree = (array, id = 'id', pid = 'parentId', children = 'children') => {
  const data = lodash.cloneDeep(array);
  const result = [];
  const hash = {};
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });

  data.forEach(item => {
    const hashVP = hash[item[pid]];
    if (hashVP) {
      if (!hashVP[children]) (hashVP[children] = []);
      hashVP[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
};

export function toPromise(obj) {
  if (obj != undefined) {
    if (typeof obj === 'function') {
      const fObj = obj();
      if (fObj instanceof Promise) {
        return fObj;
      }
      return new Promise((resolve, reject) => {
        resolve(fObj);
      })
    }
  }
  return new Promise((resolve, reject) => {
    resolve(obj);
  })
}

// =================原生方法重写 start======================
/**
 * 四舍五入保留小数点后2位
 */
Number.prototype.round = function () {
  /* var p = /^[-]?\d+$/;
  if (p.test(this)) {
    return this.toFixed(2);
  } else {
    return Math.round(this * 100) / 100;
  } */
  return this
}

/**
 * @description 相加
 * @param {被加数} arg
 */
Number.prototype.add = function (arg) {
  return accAdd(arg, this);
};

/**
 * @description 精度相加
 * @param {被加数} arg
 * @param {是否四舍五入} round
 */
Number.prototype.add = function (num2, round) {
  const value = (this * zoom + num2 * zoom) / zoom;
  return round ? value.round() : value;
};

/**
 * @description 减法
 * @param {减数} arg
 */
Number.prototype.sub = function (arg) {
  return accSub(arg, this);
};

/**
 * @description 相乘
 * @param {乘数} arg
 */
Number.prototype.mul = function (arg) {
  return accMul(arg, this);
};


/**
 *
 * @param {减数} num2
 * @param {是否四舍五入} round
 */
Number.prototype.subtract = function (num2, round) {
  const value = (this * zoom - num2 * zoom) / zoom;
  return round ? value.value() : value;
};

/**
 *
 * @param {乘法} num2
 * @param {是否四舍五入} round
 */
Number.prototype.multiply = function (num2, round) {
  const value = accMul(this, num2);
  return round ? value.round() : value;
};

/**
 *
 * @param {除法运算} num2
 * @param {是否四舍五入} round
 */
Number.prototype.divide = function (num2, round) {
  const value = (this * zoom) / (num2 * zoom);
  return round ? value.round() : value;
};
