/* eslint-disable no-dupe-keys */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable func-names */
/**
 * @desc 模拟数据库，通过字段配置自动生成数据
 * dbConfig: 数据库表名和表字段配置
 * getTableData： 通过表名称获取数据
 * saveOrUpdate： 通过表名称和数据id保存数据
 * deleteItem： 通过表名和数据id删除数据 //逻辑删除
 * getOne： 通过表名称和数据id获取记录
 * @auth wennn
 */

import { initMockData, createOne } from './mock.util';
import { menuInfo, user } from './mock.data';

const maxData = 300;

const dbConfig = {
  USER_INFO: {
    userName: '@cname',
    'entityName|1': ['销售部', '总经理', '财务部', '人力资源部'],
    'entityCode|+1': 10000,
    'unitName|1': ['南京公司', '北京公司', '青岛公司', '合肥公司'],
    userAccount: '@id',
    'userCode|+1': 1000,
    email: '@email',
    phoneNumber: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
    'status|1': ['1', 'F', 'C', 'L'],
    'sex|1': ['男', '女'],
    'age|1-100': 0,
    address: '@city(true)',
    remark: '@city(true)',
  },
  MENU_INFO: {},
  AD_LOV_LIST: {},
};

const dbs = {}; // 模拟数据库

Object.keys(dbConfig).forEach(it => {
  dbs[`${it}`] = initMockData(dbConfig[`${it}`], maxData);
});

// 无法模拟的数据在这里替换 在./dbData.js 里定义好数据
dbs.USER_INFO.push(user);
dbs.MENU_INFO = menuInfo;

/**
 * 通过表明获取数据源
 */
const getTableData = function(tName) {
  const db = dbs[`${tName}`];
  if (!db) {
    console.error(`数据库表【${tName}】规则未配置！`);
    return [];
  }
  return db;
};

/**
 *
 * @param {数据库表明} tName
 * @param {保存item} item
 * @return 返回修改的记录
 */

const saveOrUpdate = function(tName, item) {
  const db = getTableData(tName);
  let updateItem;
  if (db) {
    if (item.id) {
      db.some(it => {
        if (it.id != item.id) return false;
        updateItem = Object.assign(it, item);
        return true;
      });
    } else {
      const newItem = createOne(dbConfig[`${tName}`]);
      updateItem = { ...newItem, ...item };
      db.unshift(updateItem);
    }
  }
  return updateItem;
};

const deleteItem = function(tName, ids) {
  const db = getTableData(tName);
  let effectNum = 0;
  console.log(tName, ids);
  if (db) {
    db.forEach(it => {
      if (it.deletedFlag != '1' && ids.includes(`${it.id}`)) {
        it.deletedFlag = '1';
        effectNum++;
      }
    });
  }
  return effectNum;
};

const getOne = function(tName, id) {
  const db = getTableData(tName);
  let item = {};
  if (db) {
    db.some(it => {
      if (it.id == id) {
        item = it;
        return true;
      }
      return false;
    });
  }
  return item;
};

module.exports = {
  getTableData,
  saveOrUpdate,
  deleteItem,
  getOne,
};
