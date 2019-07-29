/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React, { Fragment } from 'react';
import { moment } from '@/utils/util.date';

function formatDate(val, format) {

  if (!val) return undefined;
  if (val instanceof moment) {
    return val.format(format);
  }
  if (typeof val == 'number') {
    return moment(val).format(format);
  }
  if (val instanceof Date) {
    return moment(+val).format(format);
  }
}

export default class AdRender extends React.Component {
  defaultFormat = 'YYYY-MM-DD';

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
