/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button } from 'antd' 
import * as Rx from 'rxjs'
 
export default class Demo extends Component{

    static desc = "React和Rxjs版本,(有精力的自己探索，目前项目不用)";
  
    state = { count:0 } 

    subject = new Rx.Subject()
    
    componentDidMount(){
      const that = this; 
      this.subject.subscribe((value)=>{
        that.setState({count:value})
      })
    }
  
    render(){ 
      return (
        <div>
          数据：{this.state.count} <br />
          <Button onClick={() => this.subject.next(this.state.count+1)} icon="plus" />
          <Button onClick={() => this.subject.next(this.state.count-1)} icon="minus" /> 
        </div>
      )
    }
  }