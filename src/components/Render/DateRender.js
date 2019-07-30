/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React, { Fragment } from 'react';
import { Data_Format,formatDate } from '@/utils/util.date';


export default class AdRender extends React.Component { 

  constructor(props) {
    super(props);
    const { config = {} } = props;
    const { format } = config;
    this.format = format || Data_Format.YEAR_MONTH_DAY;
  }

  render() {
    const { value } = this.props;
    return <Fragment>{formatDate(value, this.format)}</Fragment>;
  }
}
