/**
 *
 */
import React from 'react';
import { Input } from 'antd';
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';

const { TextArea } = Input;

// 没有值定义其他的  要把 不属于Input的属性 给过滤出去

const WrapProps = Ele => {
  return class InputFunc extends React.Component {
    valueFormatter = initialValue => {
      return initialValue;
    };

    render() {
      const { initialValue, view, ...otherProps } = this.props;
      if (view) return <ViewRender>{this.valueFormatter(initialValue||otherProps.value)}</ViewRender>;
      return <Ele {...otherProps} />;
    }
  };
};

const InputH = WrapInput(WrapProps(Input), 'Input');
const TextAreaH = WrapInput(WrapProps(TextArea), 'TextArea');
InputH.TextAreaH = TextAreaH;
export default InputH;
