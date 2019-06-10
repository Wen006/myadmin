/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { Switch } from 'antd';

// React Cell Renderer Component
export default class SwitchCell extends React.Component {
  constructor(props) {
    super(props);
    const { value, column, config = {} } = props;
    const { modalKey, checkedChildren, defaultChecked = true, ...otherProps } = config;

    let checked = defaultChecked;
    if (value) {
      checked = value == checkedChildren;
    }

    this.column = column;
    this.modalKey = modalKey || this.column.colId;

    this.state = {
      checked,
      checkedChildren,
      ...otherProps,
    };
  }

  getValue = () => {
    return this.state.checked ? this.state.checkedChildren : this.state.unCheckedChildren;
  };

  setValue = value => {
    this.setState({ checked: value });
  };

  onChange = checked => {
    this.setState({ checked });
  };

  render() {
    return <Switch onChange={this.onChange} {...this.state} />;
  }
}
