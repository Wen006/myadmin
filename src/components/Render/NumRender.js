/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React, { Fragment } from 'react';

// React Cell Renderer Component
// @observer
export default class NumRender extends React.Component {
 
  render() {
    const { value } = this.state;
    return <Fragment>{value}</Fragment>;
  }
}
