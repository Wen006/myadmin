// /**
//  * @description 公用定制列表页面 包括默认的boolbar 按钮
//  * @author wennn
//  * @time 2017.11.10
//  */

// import React, { Fragment } from 'react';
// import intl from 'react-intl-universal';
// import { Alert } from 'antd';
// import { Btns } from 'components';
// import lodash from 'lodash';
// import styles from 'routes/common.less';
// import MPCTable from 'components/MPCTable/MPCTable';
// import * as mobxReact from 'mobx-react';
// import DataGridStore from './store/DataGridStore';
// import FilterCacheStore from '../FilterCache/FilterCacheStore';

// const { observer } = mobxReact;

// intl.options.locales['en-US'] = {
//   ...intl.options.locales['en-US'],
//   ...require('./locale/en_US.json'),
// };
// intl.options.locales['zh-CN'] = {
//   ...intl.options.locales['zh-CN'],
//   ...require('./locale/zh_CN.json'),
// };

// const sortEmun = {
//   ascend: 'ASC',
//   descend: 'DESC',
// };

// /**
//  * @description 面向对象编程
//  * 该版本翻页交互table 把逻辑尽量抽到store里
//  * @param
//  */

// // 选择提示
// const AlertMask = ({
//   rowSelection,
//   activePanel,
//   selectedRows,
//   selectedRowKeys,
//   cleanSelectedKeys,
// }) => {
//   const { closeRsd } = rowSelection || {};
//   if (closeRsd || !rowSelection) return <Fragment />;
//   return (
//     <div className={styles.toolNum}>
//       <Alert
//         message={
//           <div>
//             {typeof activePanel !== 'undefined' ? (
//               activePanel(selectedRows, selectedRowKeys)
//             ) : (
//               <span>
//                 {intl && intl.get('table.dtp.selected', { total: selectedRowKeys.length })}
//               </span>
//             )}
//             &nbsp;&nbsp;
//             <a
//               onClick={() => {
//                 cleanSelectedKeys();
//               }}
//             >
//               {(intl && intl.get('table.dtp.clear')) || '清空'}
//             </a>
//           </div>
//         }
//         type={selectedRowKeys.length > 0 ? 'success' : 'info'}
//         showIcon
//       />
//     </div>
//   );
// };

// // 加强版table封装
// @observer
// export default class DataGrid extends React.Component {
//   constructor(props) {
//     super(props);
//     const { dataSource, pagination = {}, fetch, dataGridStore, filterCacheStore } = props;
//     const { queryKey, dataKey, queryMethod } = fetch;
//     this.filterCacheStore = filterCacheStore || new FilterCacheStore();
//     const { pageSize, pageNo, current, total, ...otherParams } = this.filterCacheStore.getParams();
//     const pg = lodash.assign({ pageSize, pageNo, current: pageNo }, pagination);
//     const objPg = {};
//     lodash.keys(pg).forEach(k => {
//       if (pg[k]) {
//         objPg[k] = pg[k];
//       }
//     });
//     // 数据store 这个支持用户传入 但要实现 dataGridStore 接口
//     this.dataGridStore =
//       dataGridStore ||
//       new DataGridStore({
//         queryKey,
//         dataKey,
//         queryMethod,
//         pagination: objPg,
//         dataSource,
//         queryParams: otherParams,
//       });
//   }

//   // 页面渲染成功后 执行查询 初始化
//   componentDidMount() {
//     // 这里是将接口暴露出去 便于其他组件的调用操作 （其实就是api）
//     this.onGridReady();
//   }

//   // ant.table 在翻页或者 排序的时候 都会触发这个
//   handleTableChange = (pagination, filters, sorter) => {
//     this.dataGridStore.updatePageInfo(pagination);
//     let sort;
//     if (sorter.field && sorter.order) {
//       sort = `${sorter.field}_${sortEmun[sorter.order]}`;
//     }
//     const params = this.dataGridStore.fetch({ sort });
//     this.filterCacheStore.setParams(params);
//   };

//   // 这个是子组件暴露给 父亲组件（使用者）的api
//   getDataSource = () => {
//     return this.dataGridStore.dataSource;
//   };

//   setDataSources = ds => {
//     // eslint-disable-next-line no-return-assign
//     return (this.dataGridStore.dataSource = ds);
//   };

//   getSelectRows = () => {
//     return this.dataGridStore.selectedRows;
//   };

//   // 查询操作
//   fetch = data => {
//     const params = this.dataGridStore.fetch(data);
//     this.filterCacheStore.setParams(params);
//   };

//   // 从第一页查询
//   submit = inParams => {
//     const params = this.dataGridStore.submit(inParams);
//     this.filterCacheStore.setParams(params);
//   };

//   onGridReady = () => {
//     if ('onGridReady' in this.props) {
//       const api = {
//         dataGridStore: this.dataGridStore,
//         setDataSources: this.setDataSources,
//         getDataSource: this.getDataSource,
//         getSelectRows: this.getSelectRows,
//         clearSelect: this.cleanSelectedKeys,
//         fetch: this.fetch,
//         submit: this.submit,
//       };
//       this.props.onGridReady(api);
//     }
//     // this.gridApi.sizeColumnsToFit();
//   };

//   // 清除选择的行记录
//   cleanSelectedKeys = () => {
//     this.dataGridStore.clearSelect();
//     this.forceUpdate();
//   };

//   // 这个是格式化表列的
//   initToolBars = toolBars => {
//     if (this.toolBar) return this.toolBar;
//     const lEles = []; // 左边
//     const rEles = []; // 右边
//     if (toolBars instanceof Array) {
//       toolBars.forEach((ele, i) => {
//         if (React.isValidElement(ele)) {
//           // eslint-disable-next-line no-unused-expressions
//           ele.props.align == 'right' ? rEles.push(ele) : lEles.push(ele);
//         } else {
//           const { align = 'left', key, size, onClick, buttons, disabled = false, label, confirm } =
//             ele || {};
//           const bProps = { buttons, label, disabled, size, confirm };
//           bProps.key = key || `toolbar_table_${i}`;
//           if (typeof disabled === 'function') bProps.disabled = disabled();
//           bProps.onClick = () => {
//             onClick(this.tableApi);
//           };
//           const btn = Btns.RenderBtn(bProps);
//           // eslint-disable-next-line no-unused-expressions
//           align === 'left' ? lEles.push(btn) : rEles.push(btn);
//         }
//       });
//     }
//     this.toolBar = { lEles, rEles };
//     return this.toolBar;
//   };

//   render() {
//     const { fetch, toolbars, activePanel, ...tableProps } = this.props;
//     const { loading, dataSource, pagination, selectedRowKeys, selectedRows } = this.dataGridStore;

//     const newBars = this.initToolBars(toolbars);
//     tableProps.rowKey = tableProps.rowKey || 'id';

//     const { rowSelection } = tableProps || {};

//     // 这个通过用户是否配置rowSelection 来处理 有checkbox的特效
//     if (tableProps.rowSelection) {
//       tableProps.rowSelection.selectedRowKeys = selectedRowKeys;
//       tableProps.rowSelection.selectedRows = selectedRows;
//       tableProps.rowSelection.onChange = (sKeys, sRows) => {
//         if (typeof tableProps.rowSelection.rowOnChange === 'function') {
//           tableProps.rowSelection.rowOnChange(lodash.cloneDeep(sKeys), lodash.cloneDeep(sRows));
//         }
//         this.dataGridStore.setSelect({ selectedRowKeys: sKeys, selectedRows: sRows });
//         this.forceUpdate();
//       };
//     }

//     // 选择提示
//     const alertMaskProps = {
//       rowSelection,
//       activePanel,
//       selectedRows,
//       selectedRowKeys,
//       cleanSelectedKeys: this.cleanSelectedKeys,
//     };

//     return (
//       <div className={styles.listTable}>
//         <div className={styles.listTableBtn}>
//           <div>{newBars.lEles}</div>
//           <div>{newBars.rEles}</div>
//         </div>
//         <AlertMask {...alertMaskProps} />
//         <MPCTable
//           bordered
//           loading={loading}
//           onChange={this.handleTableChange}
//           {...tableProps}
//           pagination={pagination}
//           dataSource={dataSource}
//           // size="small"
//           key="DataTablePro"
//         />
//       </div>
//     );
//   }
// }

// export { DataGridStore };
