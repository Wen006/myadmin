/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React, { Fragment } from 'react';
import Global from '@/stores/common/Global';

// React Cell Renderer Component
// @observer
export default class AdRender extends React.Component {
  constructor(props) {
    super(props);

    const { value, config = {} } = props;
    const { code, dataSource = [] } = config;
    this.code = code;
    this.dataSource = dataSource;
    this.value = value;

    this.state = {
      value: undefined,
    };
  }

  componentDidMount() {
    if (this.dataSource.length > 0) {
      const showItem = this.dataSource.filter(it => this.value == it.CODE_VALUE)[0] || {};
      this.setState({ value: showItem.CODE_NAME || this.value });
    } else if (this.code) {
      Global.findAdLovByCode(this.code).then(data => {
        const showItem = data.filter(it => this.value == it.CODE_VALUE)[0] || {};
        this.setState({ value: showItem.CODE_NAME });
      });
    }
  }

  render() {
    const { value } = this.state;
    return <Fragment>{value}</Fragment>;
  }
}
