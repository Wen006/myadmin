// 编辑
import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import lodash from 'lodash';
import Btns from '../Button'
import styles from '@/pages/common.less';
import AgGridTop from './AgGridTop';
import NumberCell from './Editer/NumberCell';
import DateCell from './Editer/DateCell';
import LookUpCell from './Editer/LookUpCell';
import SelectCell from './Editer/SelectCell';
import SwitchCell from './Editer/SwitchCell';
import MonthCell from './Editer/MonthCell';
import AreaselectCell from './Editer/AreaselectCell';
// import './table.scss';

import { getLocalText } from './store/AgGridStore';
import GeneralAgGridColumns from './GeneralAgGridColumns';

export default class AgGrid extends Component {
  // 新增的时候保存最后一个记录的id
  cacheMaxItemId = undefined;

  // 删除的记录
  delItems = [];

  // 新增的记录
  addItems = [];

  // 默认属性
  defaultColDef = {
    sortable: true,
    resizable: true,
  };

  state = {
    toolBar: {},
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.reloadToolBar(); // toolbar 初始化一次
  }

  // 获取ag-grid的api，同时暴露ag-grid给外界
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if ('onGridReady' in this.props) {
      // eslint-disable-next-line react/destructuring-assignment
      params.agApi = {
        getItemId: this.getItemId,
        getDataSource: this.getDataSource,
        getSelectRows: this.getSelectRows,
        getEditingCells: this.getEditingCells,
        autoSizeAll: this.autoSizeAll,
        clearSelectRows: this.clearSelectRows,
        stopEditing: this.stopEditing,
        addItem: this.addItem,
        updateItem: this.updateItem,
        removeItem: this.removeItem,
        removeAll: this.removeAll,
        reloadToolBar: this.reloadToolBar,
      }
      this.props.onGridReady(params);
    }
    // this.gridApi.sizeColumnsToFit();
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

  // 让每个列表显示最佳宽度 （针对表字段多的情况）
  autoSizeAll = () => {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(column => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  };

  // 清空选择
  clearSelectRows = () => {
    return this.gridApi.deselectAll();
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
          const btn = Btns.RenderBtn(bProps);
          // eslint-disable-next-line no-unused-expressions
          align === 'left' ? lEles.push(btn) : rEles.push(btn);
        }
      });
    }
    const toolBar = { lEles, rEles };
    this.setState({ toolBar });
    return toolBar;
  };

  render() {
    const { toolPanel, columnDefs = [], isView, ...agProps } = this.props;
    const newColumnDefs = [];
    columnDefs.forEach(col => {
      const { align, cellStyle, suppressMenu } = col;
      if (suppressMenu === undefined) col['suppressMenu'] = true;
      if (!cellStyle) {
        col.cellStyle = align ? { textAlign: align } : { textAlign: 'left' };
      } else {
        col.cellStyle = align ? { textAlign: align } : { textAlign: 'left' };
        lodash.assign(col.cellStyle, cellStyle);
      };
      newColumnDefs.push(col);
    })

    const { toolBar } = this.state;

    return (
      <Fragment>
        <div className={styles.agTableNormal}>
          <AgGridTop {...toolBar} toolPanel={toolPanel} />
          <div className="ag-theme-balham">
            <div className={styles.agTable}>
              <AgGridReact
                defaultColDef={this.defaultColDef}
                {...agProps}
                columnDefs={newColumnDefs}
                onGridReady={this.onGridReady}
                localeText={{ noRowsToShow: getLocalText('noRowsToShow') }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const AgGridAutoColumns = GeneralAgGridColumns(AgGrid);

export { NumberCell, DateCell, MonthCell, LookUpCell, SelectCell, SwitchCell, AreaselectCell, AgGridAutoColumns };
