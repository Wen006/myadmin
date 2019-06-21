import React, { Fragment } from 'react';
import { Button, Icon } from 'antd'

export default (self, employees) => [
  {
    title: '用户名称',
    name: 'userName',
    tableItem: {},
    searchItem: {
      group: 'abc'
    },
    formItem: {}
  },
  {
    title: '用户代码',
    name: 'userCode', 
    tableItem: {},
    searchItem: {
      group: 'abc'
    },
    formItem: {},
  }, 
  {
    title: '单位名称',
    name: 'deptName',
    tableItem: {},
    formItem: {}
  },
  {
    title: '作业地点',
    name: 'address',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
];
