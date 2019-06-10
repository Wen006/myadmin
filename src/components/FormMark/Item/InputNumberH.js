/**
 *
 */
import React from 'react';
import { InputNumber } from 'antd';
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';

// 没有值定义其他的  要把 不属于Input的属性 给过滤出去

const WrapProps = Ele => {
  return class InputFunc extends React.Component {
    valueFormatter = initialValue => {
      return initialValue;
    };

    render() {
      const { initialValue, readOnly, ...otherProps } = this.props;
      if (readOnly) return <ViewRender>{this.valueFormatter(initialValue)}</ViewRender>;
      return <Ele {...otherProps} />;
    }
  };
};

const InputNumberH = WrapInput(WrapProps(InputNumber), 'InputNumber');

export default InputNumberH;
