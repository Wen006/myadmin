import React from 'react';
import { DatePicker } from 'antd';
import { moment } from '@/utils/util.date';
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';

const WrapProps = Ele => {
  return class InputFunc extends React.Component {
    format = {
      date: 'YYYY-MM-DD',
      month: 'YYYY-MM',
    };

    valueFormatter = initialValue => {
      const formatValue = initialValue || this.props.value
      if (Number.isInteger(formatValue)) {
        return new Date(formatValue);
      }
      if (formatValue instanceof moment) {
        return formatValue.format(this.format.date); // formatNotDiff("yyyy-MM-dd HH:mm:ss");
      }
      return formatValue;
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
