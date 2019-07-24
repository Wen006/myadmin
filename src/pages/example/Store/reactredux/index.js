/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'dva';
import PropTypes from 'prop-types'

@connect(({reactModel})=>({
  count:reactModel.count,
}))
export default class Demo extends Component{

  static desc = "React和Redux版本";

  static defaultProps = { count:1 }

  static propTypes = { count:PropTypes.number }

  render(){ 
    return (
      <div>
        数据：{this.props.count||0} <br />
        <Button onClick={()=>this.props.dispatch({type:'reactModel/plus'})} icon="plus" />
        <Button onClick={()=>this.props.dispatch({type:'reactModel/minus'})} icon="minus" /> 
      </div>
    )
  }
}