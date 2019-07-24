/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button } from 'antd'

export default class Demo extends Component{

  static desc = "纯React 版本";

  state={count:0}

  plus = () => this.setState(({count})=>({count:count+1}))
  
  minus = () => this.setState(({count})=>({count:count-1}))
  
  render(){
    return (
      <div>
        数据：{this.state.count} <br />
        <Button onClick={this.plus} icon="plus" />
        <Button onClick={this.minus} icon="minus" /> 
      </div>
    )
  }
}