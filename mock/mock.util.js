/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

/**
 * @desc 所有 模拟数据用这个
 * @author wennn
 * @time 2018 07 25
 */
import { join } from 'path';
import Mock from 'mockjs';

let api = {}

try{
  const apiPath = join(__dirname,'../src/services/config/index.js');
  const apiConf = require(apiPath);
  api = apiConf.default || apiConf;
}catch(e){
  console.log("装载配置url失败",e)
}
// 全局code规范
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

// 统一结果返回规范
const ModuleReturn = {
  success: true | false,
  code: '200' | '500' | 'OTHER', // codeMessage
  localeCode: '若有则统一提示消息ReturnMessage',
  datas: 'Object', // 结果集
  returnMessage: '提示消息',
};

// var Random = Mock.Random;
// console.log(Random.email());  // 结果: r.quyppn@yit.cv÷
// 提供的种类有:
// Type	Method
// Basic	boolean, natural, integer, float, character, string, range, date, time, datetime, now
// Image	image, dataImage
// Color	color
// Text	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
// Name	first, last, name, cfirst, clast, cname
// Web	url, domain, email, ip, tld
// Address	area, region
// Helper	capitalize, upper, lower, pick, shuffle
// Miscellaneous	guid, id

// 自己扩展 https://segmentfault.com/a/1190000008839142
/*
Random.extend({
    weekday: function(date) {
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return this.pick(weekdays);
    },
    sex: function(date) {
        var sexes = ['男', '女', '中性', '未知'];
        return this.pick(sexes);
    }
});
console.log(Random.weekday());  // 结果: Saturday
console.log(Mock.mock('@weekday'));  // 结果: 112Tuesday
console.log(Random.sex());  // 结果: 男
console.log(Mock.mock('@sex'));  // 结果: 未知
*/

const MockBean = {
  'id|+1': '@id', // 属性 id 是一个自增数，起始值为 1，每次增 1
  deletedFlag: '0',
  createDate: '@date("yyyy-MM-dd")', // 日期
  lastUpdate: '@date("yyyy-MM-dd")', // 日期
  // 'name': '@cname',  // 中文名称
  // 'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
  // 'city': '@city(true)',   // 中国城市
  // 'color': '@color',  // 16进制颜色
  // 'email': '@email',  // 邮箱
  // 'isMale|1': true,  // 布尔值
  // 'isFat|1-2': true,  // true的概率是1/3
  // 'fromObj|2': obj,  // 从obj对象中随机获取2个属性
  // 'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
  // 'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
  // 'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
  // 'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
};

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-2': [MockBean],
});
// console.log(data)

/**
 * @key // 服务请求key
 * @return 获取要拦截的url
 *
 */
const getMockPre = function(key) {
  if (!api[key]) {
    console.error(`ServiceHandler =====> 没有该${key}配置,请检查api配置！`);
    return;
  }
  let method = api[key].method.toUpperCase();
  if (method == 'FORMPOST') {
    method = 'POST';
  }
  const pre = `${method} ${api[key].url}`;
  // console.log(`Mock 拦截器：${pre}`);
  return pre;
};
// console.log(getMockPre("SYS_MENU_LIST"))

/**
 * 模拟生产数据
 * @param {模拟的bean需要的字段}} mockBean
 * @param {生成的个数} num
 */
const initMockData = function(mockBean = {}, num = 20) {
  Object.assign(mockBean, MockBean);
  if (num < 1) num = 20;
  return Mock.mock({
    [`data|10-${num}`]: [mockBean],
  }).data;
};
// console.log(initMockData({name:'@cname'},2))

/**
 * 创建模拟数据
 * @param {模拟的bean需要的字段} mockBean
 */
const createOne = function(mockBean) {
  Object.assign(mockBean, MockBean);
  return Mock.mock({
    [`data|1`]: [mockBean],
  }).data;
};
// console.log(createOne({name:'@cname'}))

/**
 * 统一成功JSON返回
 * @param {response}
 * @param {data}  返回结果集
 */
const writeOk = function(response, data = {}) {
  const moduleReturn = Object.assign({}, ModuleReturn);
  moduleReturn.localeCode = 200;
  moduleReturn.code = 200;
  moduleReturn.success = true;
  moduleReturn.datas = data;
  moduleReturn.returnMessage = '操作成功';
  response.status(200).json(moduleReturn);
};

/**
 * 统一错误SON返回
 * @param {response}
 * @param {data}  返回结果集
 */
const writeFail = function(response, data = {}) {
  const moduleReturn = Object.assign({}, ModuleReturn);
  moduleReturn.localeCode = 'COMMON_500';
  moduleReturn.code = 'COMMON_500';
  moduleReturn.success = false;
  moduleReturn.datas = data;
  moduleReturn.returnMessage = '操作失败';
  response.json(moduleReturn);
};

/**
 * 统一SON返回
 * @param {response}
 * @param {data}  返回结果集
 */
const writeJson = function(response, data) {
  response.json(data);
};

const Base64 = {
  // private property
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

  // public method for encoding
  encode(input) {
    let output = '';
    let chr1;
    let chr2;
    let chr3;
    let enc1;
    let enc2;
    let enc3;
    let enc4;
    let i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output =
        output +
        this._keyStr.charAt(enc1) +
        this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) +
        this._keyStr.charAt(enc4);
    } // Whend

    return output;
  }, // End Function encode

  // public method for decoding
  decode(input) {
    let output = '';
    let chr1;
    let chr2;
    let chr3;
    let enc1;
    let enc2;
    let enc3;
    let enc4;
    let i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output += String.fromCharCode(chr1);

      if (enc3 != 64) {
        output += String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output += String.fromCharCode(chr3);
      }
    } // Whend

    output = Base64._utf8_decode(output);

    return output;
  }, // End Function decode

  // private method for UTF-8 encoding
  _utf8_encode(string) {
    let utftext = '';
    string = string.replace(/\r\n/g, '\n');

    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    } // Next n

    return utftext;
  }, // End Function _utf8_encode

  // private method for UTF-8 decoding
  _utf8_decode(utftext) {
    let string = '';
    let i = 0;
    let c;
    let c1;
    let c2;
    let c3;
    c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    } // Whend

    return string;
  }, // End Function _utf8_decode
};



module.exports = {
  getMockPre,
  initMockData,
  createOne,
  writeFail,
  writeOk,
  writeJson,
  ModuleReturn,
  Base64,
  api,
};
