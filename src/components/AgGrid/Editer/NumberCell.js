/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { InputNumber } from 'antd';

// React Cell Renderer Component
export default class NumberCell extends React.Component {
  constructor(props) {
    super(props);
    const { value, column, config = {} } = props;
    const { modalKey, fieldOptions = {} } = config;
    this.numProps = {
      formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      parser: value => value.replace(/\$\s?|(,*)/g, ''),
      ...fieldOptions
    };
    this.column = column;
    this.modalKey = modalKey || this.column.colId;

    this.state = {
      value,
    };
  }

  // 创建后 聚焦
  afterGuiAttached = () => {
    this.inputRef.focus();
  };

  getValue = () => {
    return this.getNumValue();
  };

  setValue = value => {
    this.setState({ value });
  };

  getNumValue = () => {
    const { value = 0 } = this.state;
    return this.isNumeric(value) ? value : value.replace(/[^0-9]/gi, '');
  };

  isNumeric = function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  render() {
    const { value } = this.state;
    const nProps = {
      ...this.numProps,
      onChange: num => {
        this.setValue(num);
      },
    };
    return (
      <InputNumber
        ref={ref => {
          this.inputRef = ref;
        }}
        style={{ width: '100%' }}
        value={value}
        {...nProps}
      />
    );
  }
}
