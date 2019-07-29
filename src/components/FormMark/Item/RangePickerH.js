/* eslint-disable react/destructuring-assignment */
/**
 * 选择的日期
 * 开始：一天的开始 年:月:日 00:00:00
 * 结束：一天的结束 年:月:日 23:59:59
 */

import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';
import { moment } from '@/utils/util.date'
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';


class RangePickerH extends PureComponent {
  formatStr = 'YYYY-MM-DD';

  state = {
    value: undefined,
  };

  componentWillReceiveProps(nextProps) {
    const nextValue = nextProps.value;
    let nextStart;
    let nextEnd;

    if (nextValue) {
      nextStart = nextValue[0] && nextValue[0].format(this.formatStr);
      nextEnd = nextValue[1] && nextValue[1].format(this.formatStr);
    }

    if (this.start != nextStart || this.end != nextEnd) {
      this.start = nextStart;
      this.end = nextEnd;
      const dateArr = [];
      dateArr[0] = this.start ? nextValue[0].startOf('day') : undefined;
      dateArr[1] = this.start ? nextValue[1].endOf('day') : undefined;
      this.setState({ value: dateArr });
    }
  }

  valueFormatter = initialValue => { 
    const v = this.state.value
    const str = []
    if(v){
      str[0] = v[0]&&this.formatData(v[0])||"";
      str[1] = v[1]&&this.formatData(v[1])||"";
    } 
    return str.join("~");
  };

  formatData = (v) =>{ 
    if (v instanceof moment) {
      return v.format(this.formatStr); // formatNotDiff("yyyy-MM-dd HH:mm:ss");
    }
    return v;
  }

  render() {
    const { readOnly, view, ...otherProps } = this.props;
    if (view) return <ViewRender>{this.valueFormatter()}</ViewRender>;
    return <DatePicker.RangePicker {...otherProps} value={this.state.value} />;
  }
}

export default WrapInput(RangePickerH, 'RangePicker');
// const TextAreaH =  WrapInput(WrapProps(TextArea),'TextArea');
// InputH.TextArea = TextAreaH;