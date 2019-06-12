
import React from 'react'
import { Tooltip } from 'antd'
import lodash from 'lodash'

const isEmpty = _ =>  _ == undefined || _ == null || lodash.trim(_) == "";

export default class ValueTip extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showVal: '',
        visible: false,
      }
    } 

    showValue = lodash.debounce((visible) => {
      const { form, nameKey } = this.props
      if (visible) {
        const val = form.getFieldValue(nameKey) || "";
        this.setState({ showVal: val,visible:!isEmpty(val) });
      }else{
        this.setState({visible:false})
      }
    },500)
  
    render() {
      const { children } = this.props
      const { showVal,visible } = this.state
      return (
        <Tooltip
          title={showVal}
          visible={visible}
          // onMouseEnter={() => this.showValue(true)}
          // onVisibleChange={visible => {
          //   this.showValue(visible);
          // }}
        >
          {children}
        </Tooltip>
      )
    }
}
  