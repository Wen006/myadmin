/* eslint-disable no-extend-native */
/* eslint-disable no-let */
// eslint-disable-next-line no-extend-native
// eslint-disable-next-line func-names
import moment from 'moment';

const dataFormat = 'yyyy-MM-dd HH:mm:ss';


// 时间戳转 Date
export function longToDate(longtime) {
  if (!longtime) return null;
  let date = null;
  try {
    date = new Date(typeof longtime === 'string' ? parseInt(longtime) : longtime);
  } catch (error) {
    return null;
  }
  return date;
}

export function formatDate(ds, matStr = 'yyyy-MM-dd') {
  if (ds instanceof Date) {
    return ds.format(matStr);
  }
  try {
    return ds && new Date(ds).format(matStr);
  } catch (e) {
    console.warn(ds, 'is not date or long');
  }
  return ds;
}

// 获取当前时间
export function getNow() {
  return new Date();
}

export function getCurDate(format = 'yyyy-mm-dd') {
  return getNow().format(format);
}

// 获取时间戳
export function getNowTime() {
  return getNow().getTime();
}

// 时间戳转 Moment
export function longToMoment(longtime) {
  if (!longtime) return null;
  const date = longToDate(longtime);
  return date == null ? null : moment(date);
}

// moment 转long
export function momentToLong(dStr) {
  if (!dStr || typeof dStr === 'number') return dStr;
  let finlTime;
  try {
    finlTime =
      (dStr &&
        dStr
          .startOf('day')
          .toDate()
          .getTime()) ||
      undefined;
  } catch (e) {}
  return finlTime;
}


export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

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

// ===============时区=================
// 带浏览器时区的
Date.prototype.formatNotDiff = function(format) {
  const thatDate = this; // new Date(showTime(+this));
  const o = {
    'M+': thatDate.getMonth() + 1,
    'd+': thatDate.getDate(),
    'h+': thatDate.getHours(),
    'H+': thatDate.getHours(),
    'm+': thatDate.getMinutes(),
    's+': thatDate.getSeconds(),
    'q+': Math.floor((thatDate.getMonth() + 3) / 3),
    S: thatDate.getMilliseconds(),
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, `${thatDate.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
    }
  }
  return format;
};

// 用于去除浏览器偏移量的
// eslint-disable-next-line func-names
Date.prototype.format = function(format) {
  return DateUtils.format(+this, format);
};

// eslint-disable-next-line func-names
Date.prototype.showZoneTime = function() {
  return +DateUtils.formatDate(+this);
};

// eslint-disable-next-line func-names
Date.prototype.saveZoneTime = function() {
  return DateUtils.parse(+this);
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

export function toStdDate(localTime) {
  const d = new Date();
  // let localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000; // getTimezoneOffset()返回是以分钟为单位，需要转化成ms
  const utc = localTime + localOffset;
  const offset = 8; // 以韩国时间为例，东9区
  const korean = utc + 3600000 * offset;
  const nd = new Date(korean);
  console.log(`Korean time is ${nd.toLocaleString()}`);
  return nd;
}

/**
 * @desc  解决跨时区显示问题 后台传前端时间处理（这里是针对页面要显示修改的日期）
 * @param {后台传的时间戳} sourceTimestamp
 */
export function showTime(sourceTimestamp) {
  if (!sourceTimestamp) return sourceTimestamp;
  return new Date(sourceTimestamp).showZoneTime();
}

/**
 * @desc 解决跨时区显示问题 前端传后台时间处理（这里是针对页面要显示修改的日期）
 * @param {前台穿后台时间戳} sourceTimestamp
 */
export function saveTime(sourceTimestamp) {
  if (!sourceTimestamp) return sourceTimestamp;
  return new Date(sourceTimestamp).saveZoneTime();
}

export function getZoneTime() {
  return showTime(getNow().getTime());
}

const DateUtils = {
  dataFormat,
  formatStr(thatDate, format) {
    if (!format) {
      format = DateUtils.dataFormat;
    }
    const o = {
      'M+': thatDate.getMonth() + 1,
      'd+': thatDate.getDate(),
      'h+': thatDate.getHours(),
      'H+': thatDate.getHours(),
      'm+': thatDate.getMinutes(),
      's+': thatDate.getSeconds(),
      'q+': Math.floor((thatDate.getMonth() + 3) / 3),
      S: thatDate.getMilliseconds(),
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, `${thatDate.getFullYear()}`.substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
        );
      }
    }
    return format;
  },
  formatDate(inValue) {
    if (!inValue) {
      return inValue;
    }
    const value = Number(inValue) + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    let date = new Date(Number(value));
    if (
      DateUtils.isEastEarthTime() &&
      DateUtils.isDayLightTime(date) &&
      !DateUtils.isDayLightTime(new Date())
    ) {
      date = new Date(Number(value) - 60 * 60 * 1000);
    } else if (
      DateUtils.isEastEarthTime() &&
      !DateUtils.isDayLightTime(date) &&
      DateUtils.isDayLightTime(new Date())
    ) {
      date = new Date(Number(value) + 60 * 60 * 1000);
    } else if (
      !DateUtils.isEastEarthTime() &&
      !DateUtils.isDayLightTime(date) &&
      DateUtils.isDayLightTime(new Date())
    ) {
      date = new Date(Number(value) + 60 * 60 * 1000);
    } else if (
      !DateUtils.isEastEarthTime() &&
      DateUtils.isDayLightTime(date) &&
      !DateUtils.isDayLightTime(new Date())
    ) {
      date = new Date(Number(value) - 60 * 60 * 1000);
    }
    // const strFormat=DateUtils.getFormat();
    // if(unieap.locale=="en_US"&&DateUtils.unitList.indexOf(unieap.oc_entityId)>=0&&strFormat=="MM/dd/yyyy"){
    //     strFormat="dd/MM/yyyy";
    // }
    // return unieap.dateFormat(date.getTime(), strFormat);
    // return date.format(DateUtils.dataFormat);
    return date;
  },
  format(inValue, format) {
    return DateUtils.formatStr(DateUtils.formatDate(inValue), format);
  },

  /**
   * @summary
   * 		从显示值转换成Date的long值
   * @param {string} value
   * @return {number}
   */
  parse(value) {
    // debugger;
    if (!value) {
      return value;
    }
    // const strFormat=DateUtils.getFormat();
    // if(unieap.locale=="en_US"&&DateUtils.unitList.indexOf(unieap.oc_entityId)>=0&&strFormat=="MM/dd/yyyy"){
    //     strFormat="dd/MM/yyyy";
    // }
    const date = new Date(value); // unieap.dateParser(value, strFormat);
    let ll = date.getTime() - new Date().getTimezoneOffset() * 60 * 1000 - 8 * 60 * 60 * 1000;
    if (
      DateUtils.isEastEarthTime() &&
      DateUtils.isDayLightTime(date) &&
      !DateUtils.isDayLightTime(new Date())
    ) {
      ll += 60 * 60 * 1000;
    } else if (
      DateUtils.isEastEarthTime() &&
      !DateUtils.isDayLightTime(date) &&
      DateUtils.isDayLightTime(new Date())
    ) {
      ll -= 60 * 60 * 1000;
    } else if (
      !DateUtils.isEastEarthTime() &&
      !DateUtils.isDayLightTime(date) &&
      DateUtils.isDayLightTime(new Date())
    ) {
      ll -= 60 * 60 * 1000;
    } else if (
      !DateUtils.isEastEarthTime() &&
      DateUtils.isDayLightTime(date) &&
      !DateUtils.isDayLightTime(new Date())
    ) {
      ll += 60 * 60 * 1000;
    }
    return ll;
  },

  /**
   * @summary
   *		修改日期控件format格式
   * @param:
   *		{String} dataFormat
   *  @example:
   * |	<div dojoType="unieap.form.DateTextBox" id="date" displayFormatter="{dataFormat:yyyy/MM/dd'}">
   * |	</div>
   * |	unieap.byId("date").getDisplayFormatter().setFormat("yyyy-MM-dd");
   * 将日期显示格式由yyyy/MM/dd转换为yyyy-MM-dd
   */
  setFormat(dataFormat) {
    DateUtils.dataFormat = dataFormat;
    // if(unieap.locale=="en_US"&&DateUtils.unitList.indexOf(unieap.oc_entityId)>=0&&DateUtils.dataFormat=="MM/dd/yyyy"){
    //     DateUtils.dataFormat="dd/MM/yyyy";
    // }
    // if (DateUtils.widget && (typeof DateUtils.widget.updateDisplayText=="function"))
    //     DateUtils.widget.updateDisplayText();
  },
  /**
   * @summary:
   * 		获取格式化字符串
   * @description：
   * 		获取dataFormat属性值
   * @return:
   * 		{string}
   */
  getFormat() {
    // if(unieap.locale=="en_US"&&DateUtils.unitList.indexOf(unieap.oc_entityId)>=0&&DateUtils.dataFormat=="MM/dd/yyyy"){
    //     DateUtils.dataFormat="dd/MM/yyyy";
    // }
    return DateUtils.dataFormat;
  },
  /*!
  *方法：isEastEarthTime
  *判断一个时间是在东半球还是西半球(北京在东半球)
  *@param 
  *@author  Aaron
  */
  isEastEarthTime() {
    const now = new Date();
    const timeZone = now.getTimezoneOffset();
    if (timeZone < 0) {
      return true;
    } else {
      return false;
    }
  },

  /*!
  *方法：isDayLightTime
  *判断一个时间是否在夏令时
  *@param 
  *@author  Aaron
  */
  isDayLightTime(now) {
    // let now = new Date();
    const start = new Date();
    // 得到一年的开始时间
    start.setMonth(0);
    start.setDate(1);
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);

    const middle = new Date(start.getTime());
    middle.setMonth(6);
    // 如果年始和年中时差相同，则认为此国家没有夏令时
    if (middle.getTimezoneOffset() - start.getTimezoneOffset() == 0) {
      return false;
    }

    let margin = 0;
    // 判断当前用户在东半球还是西半球
    if (DateUtils.isEastEarthTime()) {
      margin = start.getTimezoneOffset();
    } else {
      margin = middle.getTimezoneOffset();
    }
    if (now.getTimezoneOffset() == margin) {
      return true;
    }
    return false;
  },
};
