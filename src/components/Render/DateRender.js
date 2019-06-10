/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React, { Fragment } from 'react';
import moment from 'moment';

function formatDate(val, format) {
  if (!val) return undefined;
  if (val instanceof moment) {
    return val.toDate().format(format);
  }
  if (typeof val == 'number') {
    return new Date(val).format(format);
  }
  if (val instanceof Date) {
    return val.format(format);
  }
}

export default class AdRender extends React.Component {
  defaultFormat = 'yyyy-MM-dd';

  constructor(props) {
    super(props);
    const { config = {} } = props;
    const { format } = config;
    this.format = format || this.defaultFormat;
  }

  render() {
    const { value } = this.props;
    return <Fragment>{formatDate(value, this.format)}</Fragment>;
  }
}
