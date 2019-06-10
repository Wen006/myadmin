/* eslint-disable global-require  列表 */
import React, { Component, Fragment } from 'react';
import { Alert, Pagination, Spin } from 'antd';
import { AgGridReact } from 'ag-grid-react';
// import { Btns } from 'components';
import lodash from 'lodash';
import styles from '@/pages/common.less';
import { observer } from 'mobx-react';
import AgGridTop from './AgGridTop';
import NumberCell from './Editer/NumberCell';
import DateCell from './Editer/DateCell';
import LookUpCell from './Editer/LookUpCell';
import SelectCell from './Editer/SelectCell';
import SwitchCell from './Editer/SwitchCell';
import MonthCell from './Editer/MonthCell';
import agStyles from './index.less';
import './table.scss';
import AgGridStore from './store/AgGridStore';

// 选择提示
const AlertMask = ({ agGridStore, activePanel, clearSelectRows }) => {
  const selectCount = agGridStore.selectedRowKeys.length;
  return (
    <div className={styles.toolNum}>
      <Alert
        message={
          <div>
            {typeof activePanel !== 'undefined' ? (
              activePanel(agGridStore)
            ) : (
                <span>
                  {agGridStore.getLocalText('table.dtp.selected.pre') +
                    selectCount +
                    agGridStore.getLocalText('table.dtp.selected.next')}
                </span>
              )}&nbsp;&nbsp;
            <a
              onClick={() => {
                clearSelectRows();
              }}
            >
              {agGridStore.getLocalText('table.dtp.clear') || '清空'}
            </a>
          </div>
        }
        type={selectCount > 0 ? 'success' : 'info'}
        showIcon
      />
    </div>
  );
};

@observer
export default class AgGridPro extends Component {
  static exports = ['reloadToolBar', 'getSelectRows', 'clearSelectRows', 'reset', 'submit'];

  // 新增的时候保存最后一个记录的id
  cacheMaxItemId = undefined;

  // 删除的记录
  delItems = [];

  // 新增的记录
  addItems = [];

  defaultColDef = {
    sortable: true,
    resizable: true,
  };

  constructor(props) {
    super(props);
    const { dataSource, pagination = {}, fetch, agGridStore } = props;
    const { queryKey, dataKey, queryMethod } = fetch;
    this.agGridStore =
      agGridStore || new AgGridStore({ queryKey, dataKey, queryMethod, pagination, dataSource });

    this.state = {
      toolBar: {},
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.reloadToolBar();
  }

  // 获取ag-grid的api，同时暴露ag-grid给外界
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if ('onGridReady' in this.props) {
      params.gridProApi = lodash.pick(this, AgGridPro.exports);
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onGridReady(params, this.agGridStore);
    }
    // this.gridApi.sizeColumnsToFit();
    // this.updateData();
  };

  onShowSizeChange = (pageNo, pageSize) => {
    this.agGridStore.pagination.pageSize = pageSize;
    this.agGridStore.fetch({ pageNo, pageSize });
  };

  onSelectionChanged = params => {
    const { onSelectionChanged } = this.props;
    const selectedRows = this.gridApi.getSelectedRows();
    this.agGridStore.setSelect(selectedRows);
    if (onSelectionChanged) onSelectionChanged(params);
    this.forceUpdate();
  };

  // just add row
  getItemId = () => {
    if (this.cacheMaxItemId) {
      // eslint-disable-next-line no-return-assign
      return `AG${(this.cacheMaxItemId += 1)}`;
    }
    this.cacheMaxItemId = new Date().getTime();
    return `AG${this.cacheMaxItemId}`;
  };

  // 获取表单所有数据
  getDataSource = () => {
    this.stopEditing();
    const list = [];
    this.gridApi.forEachNode(rn => {
      list.push(rn.data);
    });
    return list;
  };

  // 获取选择的记录
  getSelectRows = () => {
    return this.gridApi.getSelectedRows();
  };

  // 获取编辑的单元格
  getEditingCells = () => {
    this.gridApi.getEditingCells();
  };

  // 清空选择
  clearSelectRows = () => {
    // this.agGridStore.clearSelect();
    return this.gridApi.deselectAll();
  };

  reset = queryParams => {
    this.agGridStore.queryParams = {};
    this.submit(queryParams);
  };

  submit = queryParams => {
    this.agGridStore.submit(queryParams);
  };

  // 让每个列表显示最佳宽度 （针对表字段多的情况）
  autoSizeAll = () => {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(column => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  };

  // 停止编辑
  stopEditing = () => {
    this.gridApi.stopEditing();
  };

  // 新增一行数据
  addItem = (initItem = {}, addInde = 0) => {
    const item = lodash.assign({ itemid: this.getItemId() }, initItem);
    const transaction = { add: [item], addIndex: addInde };
    this.gridApi.updateRowData(transaction);
    this.addItems.push(item);
  };

  updateItem = item => {
    const transaction = { update: [item] };
    this.gridApi.updateRowData(transaction);
  };

  // 删除数据
  removeItem = item => {
    this.gridApi.stopEditing();
    const transaction = { remove: item };
    if (!Array.isArray(item)) {
      transaction.remove = [item];
    }
    transaction.remove.forEach(dItem => {
      if (dItem.id != null) this.delItems.push(dItem);
    });
    this.gridApi.updateRowData(transaction);
  };

  // 删除所有数据
  removeAll = () => {
    const ds = this.getDataSource();
    this.removeItem(ds);
  };

  reloadToolBar = () => {
    const { toolBars } = this.props;
    const lEles = []; // 左边
    const rEles = []; // 右边
    if (toolBars instanceof Array) {
      toolBars.forEach((ele, i) => {
        if (React.isValidElement(ele)) {
          // eslint-disable-next-line no-unused-expressions
          ele.props.align == 'right' ? rEles.push(ele) : lEles.push(ele);
        } else {
          const { align = 'left', key, size, onClick, buttons, disabled = false, label, confirm } =
            ele || {};
          const bProps = { buttons, label, disabled, size, confirm };
          bProps.key = key || `toolbar_table_${i}`;
          if (typeof disabled === 'function') bProps.disabled = disabled();
          bProps.onClick = () => {
            onClick(this.gridApi);
          };
          // const btn = Btns.RenderBtn(bProps);
          // // eslint-disable-next-line no-unused-expressions
          // align === 'left' ? lEles.push(btn) : rEles.push(btn);
        }
      });
    }
    const toolBar = { lEles, rEles };
    this.setState({ toolBar });
    return toolBar;
  };

  paginationOnChange = (pageNo, pageSize) => {
    this.agGridStore.fetch({ pageNo, pageSize });
  };

  render() {
    const { toolPanel, activePanel, ...agProps } = this.props;
    const newColumnDefs = [];

    // 处理自定义属性
    if (agProps.columnDefs) {
      agProps.columnDefs.forEach(({ align, ...element }) => {
        if (element.suppressMenu === undefined) element['suppressMenu'] = true;
        const eleProps = {};
        if (!element.cellStyle) {
          eleProps.cellStyle = align ? { textAlign: align } : { textAlign: 'center' };
        } else {
          eleProps.cellStyle = align ? { textAlign: align } : { textAlign: 'center' };
          lodash.assign(eleProps.cellStyle, element.cellStyle);
        }
        lodash.assign(element, eleProps);
        newColumnDefs.push(element);
      });
    }

    const {
      pagination: { total, pageNo, pageSize, showSizeChanger, showQuickJumper },
      defaultPagination: { showTotal },
      rowData = [],
    } = this.agGridStore;

    const { toolBar } = this.state;

    return (
      <Fragment>
        <div className={styles.agTablePro}>
          <AgGridTop {...toolBar} toolPanel={toolPanel} />
          {/* <div style={{ padding: '0 4px' }}>{toolPanel && toolPanel()}</div> */}
          {activePanel !== false && (
            <AlertMask
              agGridStore={this.agGridStore}
              activePanel={activePanel}
              clearSelectRows={this.clearSelectRows}
            />
          )}

          <Spin spinning={this.agGridStore.loading}>
            <div
              className="ag-theme-balham"
            // style={{
            //   height: '50vh',
            //   padding: '2px 5px',
            //   width: '100%',
            // }}
            >
              <div className={styles.agTable}>
                <AgGridReact
                  defaultColDef={this.defaultColDef}
                  pagination={false}
                  {...agProps}
                  rowData={rowData}
                  columnDefs={newColumnDefs}
                  rowSelection="multiple"
                  onSelectionChanged={this.onSelectionChanged.bind(this)}
                  onGridReady={this.onGridReady}
                  rowDeselection
                  localeText={{ noRowsToShow: this.agGridStore.getLocalText('noRowsToShow') }}
                />
                {rowData.length > 0 ? (
                  <Pagination
                    className={agStyles.pagination}
                    size="small"
                    current={pageNo}
                    showTotal={showTotal}
                    onShowSizeChange={this.onShowSizeChange}
                    onChange={this.paginationOnChange.bind(this)}
                    pageSize={pageSize}
                    total={total}
                    showSizeChanger={showSizeChanger}
                    showQuickJumper={showQuickJumper}
                  />
                ) : null}
              </div>
            </div>
          </Spin>
        </div>
      </Fragment>
    );
  }
}

export { NumberCell, DateCell, MonthCell, LookUpCell, SelectCell, SwitchCell };
