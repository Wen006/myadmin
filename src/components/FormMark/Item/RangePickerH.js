/* eslint-disable react/destructuring-assignment */
/**
 * 选择的日期
 * 开始：一天的开始 年:月:日 00:00:00
 * 结束：一天的结束 年:月:日 23:59:59
 */

import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';

export default class RangePickerH extends PureComponent {
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

  render() {
    return <DatePicker.RangePicker {...this.props} value={this.state.value} />;
  }
}
