/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */

import * as mobx from 'mobx';
import lodash from 'lodash';
import { callMethod } from '@/services/ServiceHandler';

const { observable } = mobx;
/**
 * @description 面向对象处理
 * 在使用的时候  直接通过new DataGridStore（）使用
 *
 */

const lang = 'zh_CN';

const localeText = {
  zh_CN: {
    'table.dtp.showTotal.pre': '共 ',
    'table.dtp.showTotal.next': ' 条',
    'table.dtp.selected.pre': '已选择 ',
    'table.dtp.selected.next': ' 条',
    'table.dtp.clear': '清空',
    noRowsToShow: '无数据',
  },
  en_US: {
    'table.dtp.showTotal.pre': 'Total ',
    'table.dtp.showTotal.next': ' Item',
    'table.dtp.selected.pre': 'Select ',
    'table.dtp.selected.next': ' item',
    'table.dtp.clear': 'clear',
    noRowsToShow: 'No Rows To Show',
  },
};


const SelectType = {
  SINGLE:'single',
  MULTIPLE:'multiple',    
}

export function getLocalText(key) {
  return localeText[lang][key];
}

class AgGridStore {
  // 默认翻页配置  如果用户不传入 则默认这个
  defaultPagination = {
    showSizeChanger: true,
    showQuickJumper: true,
    size: 'small',
    showTotal: total => (
        this.getLocalText('table.dtp.showTotal.pre') +
        total +
        this.getLocalText('table.dtp.showTotal.next')
      ),
    current: 1,
    pageNo: 1,
    pageSize: 10,
    total: 0,
  };

  // table 的加载 查询的时候  table有个遮照
  @observable loading = false;

  // table的数据源定义
  rowData = [];

  // 翻页信息  这个直接传入给 ant.Pagination 用的
  @observable pagination = {};

  // 列表的查询 方法  在service.config 里配置
  queryKey = undefined;

  // 当翻页 要带着上一次条件
  queryParams = {};

  // 传入后台的分页信息，当结果返回后 赋值给 pagination 然后展示
  pageParams = {
    pageNo: 1,
    pageSize: 10,
  };

  getPageParams = () => lodash.assign(this.pageParams);

  // 如果有checkbox  则保存选择当id
  @observable selectedRowKeys = [];

  // 如果有checkbox  则保存选择的行记录
  selectedRows = [];

  rowKey = 'id';

  rowSelection = SelectType.SINGLE

  // 通过构造函数 来初始化 信息
  constructor({ queryKey, dataKey, queryMethod, pagination,rowKey = 'id', rowData,rowSelection = SelectType.SINGLE }) {
    this.dataKey = dataKey || 'data';
    this.queryMethod = queryMethod;
    this.queryKey = queryKey;
    lodash.assign(this.defaultPagination, pagination);
    this.pagination = lodash.assign({}, this.defaultPagination);
    this.rowData = rowData;
    this.rowSelection = rowSelection
    this.rowKey = rowKey
  }

  // 查询（从一开始默认页面开始查询）
  submit = lodash.debounce((params = {}) => {
    // 这里其实就是把分页至为 初始分页信息 然后查询
    this.pagination.pageNo = 1;
    this.clearSelect();
    return this.fetch(lodash.assign({ pageNo: 1 }, params));
  },400);

  // 从当前也查询
  fetch = async inParams => {
    this.queryParams = lodash.assign({ ...this.queryParams, ...inParams });
    const {
      pageNo = this.pagination.pageNo,
      pageSize = this.pagination.pageSize,
    } = this.queryParams;

    this.pageParams = { pageSize, pageNo };

    this.loading = true; // 页面遮照
    const params = lodash.assign({ pageSize, pageNo }, this.queryParams);
    const rData = this.queryKey
      ? await callMethod({ key: this.queryKey, params })
      : await this.queryMethod(params);

    const { data, total } = this.getBackData(rData);
    this.loading = false;
    this.pagination.pageNo = this.pageParams.pageNo;
    this.pagination.pageSize = this.pageParams.pageSize;

    return { data, total };
  };

  // 后台调用成功后 结果处理
  getBackData = rData => {
    const result = 'datas' in rData ? rData.datas : rData;
    const data = result[this.dataKey] || [];
    this.rowData = data;
    this.pagination.total = result.total;
    return { total: result.total, data };
  };

  getSelectOneRecord = () => this.selectedRows[0];

  /* -------用户选择记录的函数 Start------------------------------------------------*/

  allSelect = { }

  onSelectionChanged = (params) =>{
    const {node,data} = params;
    const { selected } = node
    const dataKey = data[this.rowKey];
    // const selectedRows = params.api.getSelectedRows();
    if(selected){
      this.allSelect[dataKey] = data;
    }else if(this.allSelect[dataKey]) {
      delete this.allSelect[dataKey];
    }
    this.selectedRowKeys = lodash.keys(this.allSelect);
    this.selectedRows = lodash.values(this.allSelect);
    return this.getSelect();
  }

  getSelect = () => ({
      selectedRowKeys: this.selectedRowKeys,
      selectedRows: this.selectedRows,
  });

  // 清除选择的记录
  clearSelect = () => {
    this.selectedRowKeys = [];
    this.selectedRows = [];
    this.allSelect = {}
  };

  // 设置选择的记录
  setSelect = selectedRows => {
    this.selectedRowKeys = selectedRows.map(it => it[this.rowKey]);
    this.selectedRows = selectedRows;
  };

  clearRowData = () =>{
    this.loading = true;
    this.rowData = [];
    this.loading = false;
  }
 

  /* -------用户选择记录的函数 End------------------------------------------------*/

  getLocalText = getLocalText;
}

export default AgGridStore;
