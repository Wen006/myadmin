import * as mobx from 'mobx';
import lodash from 'lodash';
import { formatMessage } from 'umi/locale';
import { callMethod } from '@/services/ServiceHandler';

const { observable } = mobx;
/**
 * @description 面向对象处理
 * 在使用的时候  直接通过new DataGridStore（）使用
 *
 */
class DataGridStore {
  // 默认翻页配置  如果用户不传入 则默认这个
  defaultPagination = {
    showSizeChanger: true,
    showQuickJumper: true,
    size: 'small',
    showTotal: total => formatMessage({id:'table.dtp.showTotal',total}),
    current: 1,
    pageNo: 1,
    pageSize: 10,
    total: 0,
  };

  // table 的加载 查询的时候  table有个遮照
  @observable loading = false;

  // table的数据源定义
  @observable dataSource = [];

  // 翻页信息  这个直接传入给 ant.table 用的
  pagination = {};

  // 列表的查询 方法  在service.config 里配置
  queryKey = undefined;

  // 当翻页 要带着上一次条件
  queryParams = {};

  // 传入后台的分页信息，当结果返回后 赋值给 pagination 然后展示
  nextPagination = {
    pageNo: 1,
    pageSize: 10,
  };

  // 如果有checkbox  则保存选择当id
  selectedRowKeys = [];

  // 如果有checkbox  则保存选择的行记录
  selectedRows = [];

  // 通过构造函数 来初始化 信息
  constructor({ queryKey, dataKey, queryMethod, pagination, dataSource, queryParams }) {
    this.dataKey = dataKey || 'data';
    this.queryMethod = queryMethod;
    this.queryKey = queryKey;
    this.pagination = lodash.assign({}, this.defaultPagination, pagination);
    lodash.assign(this.nextPagination, pagination);
    lodash.assign(this.queryParams, queryParams);
    this.dataSource = dataSource;
  }

  // 更新翻页信息
  updatePagination = pg => {
    lodash.assign(this.pagination, pg);
  };

  // 查询（从一开始默认页面开始查询）
  submit = params => {
    // 这里其实就是把分页至为 初始分页信息 然后查询
    this.updatePageInfo(this.defaultPagination);
    return this.fetch(params);
  };

  // 从当前也查询
  fetch = data => {
    this.queryParams = { ...this.queryParams, ...data };
    this.loading = true; // 页面遮照
    const params = lodash.assign({}, this.nextPagination, this.queryParams);
    if (this.queryKey) {
      // servic.confg 通用配置的
      callMethod({
        key: this.queryKey,
        params,
      }).then((rData = {}) => {
        this.setCallBack(rData);
      });
      return params;
    }
    if (!this.queryMethod) return {};

    // 自定义的promise对象
    this.queryMethod(params).then(rData => {
      this.setCallBack(rData);
    });
    return params;
  };

  // 后台调用成功后 结果处理
  setCallBack = rData => {
    const result = 'datas' in rData ? rData.datas : rData;
    // this.pagination.total = result.total;
    // this.updatePagination({total:result.total,pageNo:this.nextPagination.current,pageSize:this.nextPagination.pageSize})
    this.nextPagination.total = result.total;
    const newPagination = { ...this.nextPagination, current: this.nextPagination.pageNo };
    this.updatePagination(newPagination);

    this.loading = false;
    this.dataSource = result[this.dataKey];
  };

  // 更新下一个翻页信息
  updatePageInfo = inNextPageInfo => {
    lodash.assign(this.nextPagination, { pageNo: inNextPageInfo.current });
  };

  // 设置选择的记录
  setSelect = ({ selectedRowKeys, selectedRows }) => {
    this.selectedRowKeys = selectedRowKeys;
    this.selectedRows = selectedRows;
  };

  // 清除选择的记录
  clearSelect = () => {
    this.selectedRowKeys = [];
    this.selectedRows = [];
  };

  getSelectOneRecord = () => {
    return this.selectedRows[0];
  };

  getSelect = () => {
    return {
      selectedRowKeys: this.selectedRowKeys,
      selectedRows: this.selectedRows,
    };
  };
}

export default DataGridStore;
