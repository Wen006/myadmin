/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button } from 'antd'
import MobxStore from './MobxStore';
import { observer } from 'mobx-react';

@observer
export default class Demo extends Component{

    static desc = "React和Mobx版本";

    mobxStore = new MobxStore(); 
    
    render(){
      return (
        <div>
          数据：{this.mobxStore.count} <br />
          <Button onClick={this.mobxStore.plus} icon="plus" />
          <Button onClick={this.mobxStore.minus} icon="minus" /> 
        </div>
      )
    }
}