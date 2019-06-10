import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';

// 没有值定义其他的  要把 不属于Input的属性 给过滤出去
// function praseMoment(sr) {
//   if (!sr) return undefined;
//   if (sr instanceof moment) {
//     return moment(new Date(+sr.toDate().showZoneTime()));
//   }
//   return moment(new Date(sr).showZoneTime());
// }

const WrapProps = Ele => {
  return class InputFunc extends React.Component {
    format = {
      date: 'yyyy-MM-dd',
      month: 'yyyy-MM',
    };

    valueFormatter = initialValue => {
      if (Number.isInteger(initialValue)) {
        return new Date(initialValue);
      }
      if (initialValue instanceof moment) {
        return initialValue.toDate().format(this.format.date); // formatNotDiff("yyyy-MM-dd HH:mm:ss");
      }
      return initialValue;
    };

    render() {
      const { initialValue, readOnly, view, ...otherProps } = this.props;
      if (view) return <ViewRender>{this.valueFormatter(initialValue)}</ViewRender>;
      return <Ele {...otherProps} />;
    }
  };
};

const DatePickerH = WrapInput(WrapProps(DatePicker), 'DatePicker');
// const TextAreaH =  WrapInput(WrapProps(TextArea),'TextArea');
// InputH.TextArea = TextAreaH;
export default DatePickerH;
