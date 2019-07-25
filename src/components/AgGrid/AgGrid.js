/* eslint-disable react/sort-comp */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
// 编辑
import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import lodash from 'lodash';
import classnames from 'classnames'
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
import BlurCom from './BlurCom'

import './table.scss';

import { getLocalText } from './store/AgGridStore';
import GeneralAgGridColumns from './GeneralAgGridColumns';
import AgHeader from './AgHeader';
import MBox from '../MBox';
import Intler from '../Intler';

const isEmpty = _ => _ == undefined || _ == null || _ == "";

export default class AgGrid extends Component {

  exports = [   
    'getItemId',
    'getDataSource',
    'setDataSource',
    'getSelectRows',
    'getEditingCells',
    'autoSizeAll',
    'clearSelectRows',
    'stopEditing',
    'addItem',
    'updateItem',
    'removeItem',
    'removeAll',
    'getDelItems',
    'getAddItems',
    'validValues',
    'reloadToolBar']
    
  // 新增的时候保存最后一个记录的id
  cacheMaxItemId = undefined;

  // 删除的记录
  delItems = {};

  // 新增的记录
  addItems = {};

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
      params.agApi = lodash.pick(this,this.exports);
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

  setDataSource = (rowData = []) =>{
    this.gridApi.setRowData(rowData);
  }

  // 获取选择的记录
  getSelectRows = () => this.gridApi.getSelectedRows();

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
  clearSelectRows = () => this.gridApi.deselectAll();

  // 停止编辑
  stopEditing = () => {
    this.gridApi.stopEditing();
  };

  // 新增一行数据
  addItem = (initItem = {}, addInde = 0) => {
    const item = lodash.assign({ itemid: this.getItemId() }, initItem);
    const transaction = { add: [item], addIndex: addInde };
    this.gridApi.updateRowData(transaction);
    this.addItems[item.itemid] = item;
  };

  updateItem = item => {
    const transaction = { update: [item] };
    this.gridApi.updateRowData(transaction);
  };


  // 必填字段 {field:colDef}
  requiredField = {}

  // 获取要校验的字段
  _getValidField = (fields) =>{
    if(lodash.keys(this.requiredField).length > 0) return this.requiredField;
    this.gridColumnApi.getAllColumns().forEach(({colDef})=>{
      const { headerComponentParams } = colDef
      if(headerComponentParams){
        const { required = false,valid } = headerComponentParams
        this.requiredField[colDef.field] = {...colDef,valid,required}
      }
    });
    return this.requiredField;
  }

  // 校验必填项目  若有错误返回null 否则返回数据
  validValues = (fields) =>{
    this.stopEditing();
    const _validObj = this._getValidField(fields);
    let hasError = false;
    const ds = []
    this.gridApi.forEachNode((rowNode,index)=>{
      const {data,rowIndex} = rowNode;
      for(const key in _validObj){
        const { valid,field,required } = _validObj[key]
        if(!hasError){
          if(required==true && isEmpty(data[key])){
            hasError = true;
            MBox.error(_validObj[key].headerName+ Intler.getIntl("common.required"));
          } else if(!valid({value:data[field],data,field})){
            hasError = true;
          }
          if(hasError)this.gridApi.startEditingCell({
            rowIndex,
            colKey: key,
          });
        }
        ds.push(data);
      }
    })
    // if(hasError) return null;
    return hasError?null:ds;
  }

  // 删除数据
  removeItem = item => {
    this.gridApi.stopEditing();
    const transaction = { remove: item };
    if (!Array.isArray(item)) {
      transaction.remove = [item];
    }
    transaction.remove.forEach(dItem => {
      if (dItem.id != null) this.delItems[dItem.id]={...dItem,deletedFlag:'1'};
      if (this.addItems[dItem.itemid]) delete this.addItems[dItem.itemid];
    });
    this.gridApi.updateRowData(transaction);
  };

  // 删除所有数据
  removeAll = () => {
    const ds = this.getDataSource();
    this.removeItem(ds);
  };

  getDelItems = () => lodash.values(this.delItems)

  getAddItems = () => lodash.values(this.addItems)

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
    if(columnDefs){
      columnDefs.forEach(({ align,required=false,valid=({data,field})=>true, cellStyle,...element }) => {
        if (element.suppressMenu === undefined) element.suppressMenu = true;
        const eleProps = {};
        const cellStyleFunc = params =>{
          const style = !cellStyle?(align?{textAlign:align}:{textAlign:'center'}):(typeof cellStyle === 'function'?{textAlign: 'center',...cellStyle(params)}:{textAlign: 'center',...cellStyle});
          // return element.editable?{background:'#e4d9d97d',...style}:style;
          return style;
        };
        lodash.assign(element, eleProps,{
          cellStyle:cellStyleFunc,
          cellClass:classnames({'edit-cell-frame':element.editable}),
        });
        if(element.editable){ // 可编辑的时候
          // if(required){// 基本上用于必填提示，可以扩展
          lodash.assign(element,{
            headerComponentFramework:AgHeader, // 基本上用于必填，可以扩展
            headerComponentParams:{required,valid},
          })
          // }
        }
        newColumnDefs.push(element);
      });
    }
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

AgGrid.Blur = BlurCom(AgGrid);

export { NumberCell, DateCell, MonthCell, LookUpCell, SelectCell, SwitchCell, AreaselectCell, AgGridAutoColumns };
