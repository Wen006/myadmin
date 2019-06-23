import React from 'react';
// import intl from 'react-intl-universal';
import { Tooltip, Input } from 'antd';
import FItem from '../FItem';
import RadioH from './RadioH';
import styles from '../index.less';
import Intler from '@/components/Intler';

const defaultRules = [{ required: true, message: Intler.getIntl("app.form.input.require") }];

const showTip = label => {
  if (!label) return null;
  return <Tooltip title={label}>{label}</Tooltip>;
};

const TypeEnums = {
  Input: 'Input',
  TextArea: 'TextArea',
  Select: 'Select',
  Checkbox: 'Checkbox',
  CheckboxGroup: 'CheckboxGroup',
  RadioGroup: 'RadioGroup',
  InputNumber: 'InputNumber',
  DatePicker: 'DatePicker',
  MonthPicker: 'MonthPicker',
  RangePicker: 'RangePicker',
  WeekPicker: 'WeekPicker',
  InputLookUp: 'InputLookUp',
};

export default (Ele, type) => {
  const TType = type || Ele.name;

  if (!TypeEnums[TType]) throw new Error(`WrapBasc--->${{ TType }} 类型不存在。`);

  return class FormComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      const { form, id, label } = props;
      this.form = form;
      this.id = id;
      this.label = showTip(label); // 如果包含国际化就在这里处理一下
      this.type = TType;
    }

    render() {
      const {
        rules = defaultRules, // 校验规则
        initialValue, // Form输入框初始值，可以通过form.setFieldsValue 来代替
        defaultValue,
        hidden, // 隐藏但是不消失
        view, // 只读查看页面
        fieldOptions = {}, // getFieldDecorator.options
        options = {}, // 输入标签属性
        ...formItemProps // FItem 属性 labelOptions
      } = this.props;

      let reStyle;
      if (view) {
        // 当查看到时候
        options.initialValue = initialValue || defaultValue;
        reStyle = 'readBox'
      }
      
      // RadioH 比较特殊
      if (this.type == TypeEnums.RadioGroup)return <RadioH {...this.props} />;
      
      const { getFieldDecorator } = this.form;

      // 隐藏字段
      if (hidden) {
        return getFieldDecorator(this.id, { initialValue:initialValue||defaultValue, ...fieldOptions })(
          <Input hidden {...options} />
        );
      }

      return (
        <FItem {...formItemProps} label={this.label}>
          {getFieldDecorator(this.id, {
            rules: view ? [] : rules,
            initialValue,
            ...fieldOptions,
          })(<Ele {...options} view={view} className={styles[reStyle]} />)}
        </FItem>
      );
    }
  };
};
