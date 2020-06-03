/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable radix */
/**
 * @description 日期工具
 * @author wennn
 * @time 20190624
 */
/* eslint-disable no-extend-native */
/* eslint-disable no-let */
// eslint-disable-next-line no-extend-native
// eslint-disable-next-line func-names
// import moment from 'moment'
import latest from "moment-timezone/data/meta/latest.json";
import moment from "moment-timezone"; 

// moment.tz.setDefault('Asia/Shanghai');
const Data_Format = {
  YEAR_MONTH_DAY_HH_MM_SS:"YYYY-MM-DD HH:mm:ss",
  YEAR_MONTH_DAY:"YYYY-MM-DD",
  YEAR_MONTH:"YYYY-MM",
  YEAR:"YYYY",
}

export {
  moment,
  Data_Format,
}

export function setDefaultZone(name){
  moment.tz.setDefault(name);
}

export function getZoneMeta(key){
  const meta = latest.countries[key||"CN"]
  console.log('meta', meta)
  return meta||latest.CN;
}

/**
 * @description 获取客户端时间
 */
export function getNow() {
  return moment().tz(getZoneMeta().zones[0]).toDate();
}

/**
 * @description 获取客户端格式化的时间
 */
export function getCurDate(format = Data_Format.YEAR_MONTH_DAY) {
  return getNow().format(format);
}

/**
 * @description 出入 long，date，moment 格式化日期
 * @param {日期，long，date，moment} date 
 * @param { 格式化 YYYY-MM-DD} matStr 
 */ 
export function formatDate(date, matStr = Data_Format.YEAR_MONTH_DAY) {
  if(!date) return date;
  try { 

    if (date instanceof Date || date instanceof Number || typeof date == 'number') {
      return moment(date).format(matStr);
    }
    if(date instanceof moment){
      return date.format(matStr);
    }
  } catch (e) {
    console.warn(ds, 'is not date or long');
  }
  return date;
}


/**
 * @description long或者日期转 moment form表单用的多
 * @param {Number or Date or moment } ldm 
 */
export function toMoment(ldm) {
  if(!ldm) return ldm;
  return ldm instanceof moment ? ldm : moment(ldm);
}

/**
 * @description 转为带时区的moment
 * @param {long or date} o 
 */
export function toZoneMoment(o){
  const m = toMoment(o);
  return m?m.tz(getZoneMeta().zones[0]):m;
}

export function formatZoneDate(date, matStr = Data_Format.YEAR_MONTH_DAY) {
  const m = toZoneMoment(date);
  return m?m.format(matStr):date;
}


/**
 * @description 时间戳转日期  moment form表单用的多
 * @param {moment or long} longOrMoment 
 */
export function toDate(longOrMoment) {
  if(!longOrMoment) return longOrMoment;
  return moment(longOrMoment).toDate();
}

/**
 * @description 时间转偏移量  moment form表单用的多
 * @param {moment or date} dateOrMoment 
 */
export function toLong(dateOrMoment) {
  if(!dateOrMoment) return dateOrMoment;
  return +moment(dateOrMoment).toDate();
}

/**
 * @description 补充到2位字符串
 * @param {数值} val 
 */
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

/**
 * @description 通过类型获取指定 时间区间
 * @param {类型 today week month year} type 
 */
export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  if (type === 'year') {
    const year = now.getFullYear();
    return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
  }
}

// ===============原生重写=================
// 时区扩展
// Date.prototype.formatNotDiff = function(format = Data_Format.YEAR_MONTH_DAY) {
//   return moment(this).format(format)
// };

// eslint-disable-next-line func-names
Date.prototype.format = function(format = Data_Format.YEAR_MONTH_DAY) {
  return moment(this).format(format)
};

// 获取时区
export function getTimeDiff(date) {
  // eslint-disable-next-line radix
  return parseInt(date.getTimezoneOffset() / -60);
}

// 获取浏览器 浏览器时区偏移量
export function getBrowTimeDiff() {
  return 8; // getTimeDiff(getNow());
}

/**
 * @description 得到对应时区到时间
 * @param {时间偏移量} localTime 
 */
export function toStdDate(localTime,offset=8) { // 中国东8区域
  const localOffset = getNow().getTimezoneOffset() * 60000; // getTimezoneOffset()返回是以分钟为单位，需要转化成ms
  const utc = localTime + localOffset;
  const korean = utc + 3600000 * offset;
  const nd = new Date(korean);
  console.log(`Korean time is ${nd.toLocaleString()}`);
  return nd;
}
