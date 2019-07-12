/* eslint-disable react/jsx-no-bind */
import React, { Fragment } from 'react';
import { Input, Icon } from 'antd';
import LookUp from '@/components/LookUp/LookUp';
import lodash from 'lodash';

// React Cell Renderer Component
export default class LookUpCell extends React.Component {
  constructor(props) {
    super(props);
    const { value, node, rowIndex, api, colDef, column, config } = props;
    const { modalKey } = config;
    this.config = config;
    this.rowNode = node;
    this.rowIndex = rowIndex;
    this.gridApi = api;
    this.column = column;
    this.modalKey = modalKey || this.column.colId;
    const { required = false } = colDef || {};
    this.required = required;

    this.state = {
      value,
      showClear: false,
    };
  }

  // 创建后 聚焦
  afterGuiAttached = () => {
    // this.inputRef.focus();
  };

  onMouseEnter = () => {
    // eslint-disable-next-line prefer-const
    let { showClear, value } = this.state;
    const { form } = this.props;
    if (!value) value = form && form.getFieldValue(this.nameKey);
    if (value && !showClear) this.setState({ showClear: true, value });
  };

  onMouseLeave = () => {
    const { showClear, value } = this.state;
    if (value && showClear) this.setState({ showClear: false });
  };

  onLookOk = (selectKeys, selectRows = []) => {
    const {
      config: { onOk },
    } = this.props;
    const api = {
      data: this.rowNode.data,
      colId: this.column.colId,
      value: this.state.value,
      setDataValue: this.setDataValue,
      updateRowData: this.updateRowData,
      clearRowData: this.clearRowData,
    };
    this.setValue(selectRows.map(it => it[this.modalKey]).join(','));
    if (onOk) onOk(selectKeys, selectRows, api);
  };

  getValue = () => 
    // if(this.required && this.isEmpty(this.state.value)) {
    //   this.afterGuiAttached();
    //   return "";
    // }
     this.state.value
  ;

  isEmpty = v => {
    if (v == '' || v == undefined || v == null) {
      this.gridApi.startEditingCell({
        rowIndex: this.rowIndex,
        colKey: this.column.colId,
      });
      alert('必填醒目');
      return true;
    }
    return false;
  };

  setValue = value => {
    this.setState({ value });
  };

  setDataValue = (colId, value) => {
    this.rowNode.setDataValue(colId, value);
  };

  updateRowData = data => {
    lodash.assign(this.rowNode.data, data);
    this.rowNode.setData(this.rowNode.data);
  };

  clearRowData = () => {
    this.rowNode.data = {};
    // data === 'clear' ? (this.rowNode.data = {}) : lodash.assign(this.rowNode.data, data);
    this.rowNode.setData(this.rowNode.data);
  };

  updateInput = e => {
    this.setValue(e.target.value);
  };

  clickIcon = () => {
    const { showClear } = this.state;
    if (showClear) {
      return this.clearValue();
    }
    this.showLookDialog();
  };

  clickInput = () => {
    this.showLookDialog();
  };

  clearValue = () => {
    const {
      config: { onClear },
    } = this.props;
    this.setState({ value: '', showClear: false }, () => {
      const api = {
        data: this.rowNode.data,
        colId: this.column.colId,
        value: this.state.value,
        setDataValue: this.setDataValue,
        updateRowData: this.updateRowData,
        clearRowData: this.clearRowData,
      };
      // eslint-disable-next-line no-unused-expressions
      onClear && onClear(api);
    });
  };

  onSearchBefore = () => {
    const {
      config: { onSearchBefore },
    } = this.props;
    const api = {
      data: this.rowNode.data,
      colId: this.column.colId,
      value: this.state.value,
      setDataValue: this.setDataValue,
      updateRowData: this.updateRowData,
    };
    if (onSearchBefore) {
      return onSearchBefore(api);
    }
  };

  showLookDialog = () => {
    this.lookUpApi.showModal(true);
  };

  handleModalOk = ({selectedRowKeys, selectedRows}) => {
    const { onOk } = this.props;
    const values = selectedRows.map(it => it[`${this.modalKey}`]).join(',')
    this.setValue(values);
    if (onOk) onOk({selectedRowKeys, selectedRows});
  }

  handleModalCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) onCancel();
  }

  // 点击 图标的时候
  handleClickIcon = () => {
    const { showClear } = this.state
    const { onClear } = this.props
    if (showClear) {
      this.setValue('');
      if(onClear)onClear();
    }else{
      this.lookUpApi.showModal(true)
    }
  }

  handleClickInput = () =>{
    this.lookUpApi.showModal(true);
  }

  onGridReady = (params, {lookUpApi}) => {
    this.lookUpApi = lookUpApi;
  }
 

  render() {
    const { showClear, value } = this.state; 
    const { form,disabled=false,options={},lookUpKey,rowSelection,title,openBefore,closeBefore,onSearchBefore,...otherProps} = this.config
 
    // return <div>hello</div>

    return (
      <Fragment> 
        <LookUp 
          lookUpKey={lookUpKey} 
          rowSelection={rowSelection}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          onGridReady={this.onGridReady}
          title={title}
          onSearchBefore={onSearchBefore}
          openBefore={openBefore}
          closeBefore={closeBefore}
        />
        <Input
          ref={ref => {
            this.inputRef = ref;
          }}
          onChange={this.updateInput}
          value={value}
          onClick={this.clickInput}
          suffix={
            <Icon
              onMouseEnter={() => {this.onMouseEnter();}}
              onMouseLeave={() => {this.onMouseLeave();}}
              onClick={this.clickIcon.bind(this)}
              type={showClear ? 'close-circle' : 'search'}
            />
          }
        /> 
      </Fragment>
    );
  }
} 