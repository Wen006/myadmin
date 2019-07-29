/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { Switch } from 'antd';

// React Cell Renderer Component
export default class SwitchCell extends React.Component {
  constructor(props) {
    super(props);
    const { value, column, config = {} } = props;
    const { modalKey, checkedChildren, unCheckedChildren, defaultChecked = true, ...otherProps } = config;
    this.column = column;    
    this.modalKey = modalKey || this.column.colId;
    let checked = defaultChecked;
    if (value) {
      checked = value == checkedChildren.codeValue;
    }


    this.state = {
      checked,
      checkedChildren,
      unCheckedChildren,
      ...otherProps,
    };
  }

  getValue = () => {
    // if(this.state.checkedChildren == undefined && this.state.unCheckedChildren == undefined) return this.state.checked;
    return this.state.checked ? this.state.checkedChildren.codeValue : this.state.unCheckedChildren.codeValue;
  };

  setValue = value => {
    this.setState({ checked: value });
  };

  onChange = checked => {
    const { onChange } = this.state
    this.setState({ checked });
    if(onChange){onChange(checked)}
  };

  render() {
    return <Switch className={"mpc-ag-edit-cell"} {...this.state} checkedChildren={this.state.checkedChildren.codeName} unCheckedChildren={this.state.unCheckedChildren.codeName} onChange={this.onChange} />;
  }
}
