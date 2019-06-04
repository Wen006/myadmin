/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/**
 * @desc 这里封装通用的mock方法
 * commList: 翻页查询
 * comSaveOrUpdate: 保存
 * comDel：通用删除
 * comGetOne：通用通过id获取记录
 * @auth： wennn
 *
 */

import { writeFail, writeOk, writeJson, ModuleReturn } from './mock.util';

import { getTableData, saveOrUpdate, deleteItem, getOne } from './mock.dao';

export function queryByParams(req, resp) {
  const { body, query, headers, url } = req;
  const { mocktable } = headers;
  const { sorter, ...other } = { ...body, ...query }; // sorter :"menuCode_descend" ,"menuCode_ascend"
  other.deletedFlag = '0';
  // let menuDate;
  let newData = getTableData(mocktable);
  if (!newData) {
    console.error('请确定配置services/config/*的tableName属性和dbDao.js 的数据源');
    writeFail(resp, '数据库表获取失败！');
    return;
  }
  for (const key in other) {
    if ({}.hasOwnProperty.call(other, key)) {
      newData = newData.filter(item => {
        if ({}.hasOwnProperty.call(item, key)) {
          return (
            String(item[key])
              .trim()
              .indexOf(decodeURI(other[key]).trim()) > -1
          );
        }
        return true;
      });
    }
  }
  writeOk(resp, newData);
}

export function comList(req, resp) {
  const { body, query, headers, url } = req;
  const { mocktable } = headers;
  const { pageNo = 1, pageSize = 10, sorter, ...other } = { ...body, ...query }; // sorter :"menuCode_descend" ,"menuCode_ascend"
  other.deletedFlag = '0';
  // let menuDate;
  let newData = getTableData(mocktable);
  if (!newData) {
    console.error('请确定配置services/config/*的tableName属性和dbDao.js 的数据源');
    writeFail(resp, '数据库表获取失败！');
    return;
  }
  for (const key in other) {
    if ({}.hasOwnProperty.call(other, key)) {
      newData = newData.filter(item => {
        if ({}.hasOwnProperty.call(item, key)) {
          return (
            String(item[key])
              .trim()
              .indexOf(decodeURI(other[key]).trim()) > -1
          );
        }
        return true;
      });
    }
  }
  const retDatas = {
    data: newData.slice((pageNo - 1) * pageSize, pageNo * pageSize),
    total: newData.length,
  };
  // console.log(headers,url)
  writeOk(resp, retDatas);
}

export function comSaveOrUpdate(req, resp) {
  const { body, query, headers, url } = req;
  const { ...params } = { ...body, ...query };
  const { mocktable } = headers;
  const ret = saveOrUpdate(mocktable, params);
  if (ret) {
    writeOk(resp, ret);
  } else {
    writeFail(resp, '不成功');
  }
}

// 删除通过id 改deletedFlag=‘1’
export function comDel(req, resp) {
  const { body, query, url, headers } = req;
  const ids = body;
  const { mocktable } = headers;
  const ret = deleteItem(mocktable, ids);
  if (ret > 0) {
    writeOk(resp, ret);
  } else {
    writeFail(resp, '删除不成功');
  }
}

// 通过id查询
export function comGetOne(req, resp) {
  const { body, query, url, headers } = req;
  const { id, ...other } = { ...body, ...query };
  const { mocktable } = headers;
  const item = getOne(mocktable, id);
  if (item) {
    writeOk(resp, item);
  } else {
    writeFail(resp, '未找到');
  }
}
