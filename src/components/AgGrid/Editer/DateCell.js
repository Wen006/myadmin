/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

function praseMoment(sr) {
  if (!sr) return undefined;
  if (sr instanceof moment) {
    return moment(new Date(+sr.toDate().showZoneTime()));
  }
  return moment(new Date(sr).showZoneTime());
}

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
      value: praseMoment(value),
    };
  }

  getValue = () => {
    if (this.state.value) {
      return this.state.value.toDate().saveZoneTime();
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
