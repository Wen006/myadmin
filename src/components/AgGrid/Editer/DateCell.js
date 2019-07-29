/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { DatePicker } from 'antd';
import { toMoment,toLong } from '@/utils/util.date';
 

// React Cell Renderer Component
export default class DateCell extends React.Component {
  dateFormat = 'YYYY-MM-DD';

  constructor(props) {
    super(props);
    const { value, column, config = {} } = props;

    const { modalKey, ...otherCfg } = config;

    this.config = otherCfg;
    this.column = column;
    this.modalKey = modalKey || this.column.colId;

    this.state = {
      value: toMoment(value),
    };
  }

  getValue = () => {
    if (this.state.value) {
      return toLong(this.state.value);
    }
    return this.state.value;
  };

  setValue = value => {
    this.setState({ value });
  };

  handleChangeValue = (momentObj, dateStr) => {
    const { onChange } = this.config;
    if (onChange) onChange(momentObj, dateStr);
    this.setState({ value: momentObj });
  };

  render() {
    const { value } = this.state;
    return (
      <DatePicker
        format={this.dateFormat}
        {...this.config}
        onChange={(momentObj, dateStr) => {
          this.handleChangeValue(momentObj, dateStr);
        }}
        value={value}
      />
    );
  }
}
