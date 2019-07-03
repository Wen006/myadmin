/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Global from '@/stores/common/Global';
import lodash from 'lodash';
import { formatMessage } from 'umi/locale';
import { Tooltip, Radio, Input } from 'antd';
import ViewRender from './ViewRender';
import FItem from '../FItem';

const defaultRules = [{ required: true, message: formatMessage({id:'app.form.input.require'})}];

const showTip = label => {
  if (!label) return null;
  return <Tooltip title={label}>{label}</Tooltip>;
};

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class RadioH extends React.PureComponent {
  static defaultType = {
    Radio: 'Radio',
    Button: 'Button',
  };

  constructor(props) {
    super(props);
    const { form, id, label } = props;
    this.form = form;
    this.id = id;
    this.label = showTip(label); // 如果包含国际化就在这里处理一下
    const {
      options: { dataSource = [], code, type = RadioH.defaultType.Radio },
    } = props;
    this.code = code;
    this.type = type;
    this.state = {
      dataSource,
    };
  }

  componentDidMount() {
    if (this.code) {
      Global.findAdLovByCode(this.code).then(data => {
        this.setState({ dataSource: data });
      });
    }
  }

  praseValueByDataSource = initialValue => {
    const { dataSource = [] } = this.state;
    const item = {};
    dataSource.some(it => {
      const { codeName, codeValue } = it;
      if (initialValue == codeValue || initialValue == codeName) {
        lodash.assign(item, it);
        return true;
      }
      return false;
    });
    return item.codeName;
  };

  valueFormatter = initialValue => {
    const {
      options: { valueFormatter },
    } = this.props;
    // 自定义 值格式化
    if (valueFormatter) return valueFormatter(initialValue, this.state.dataSource || []);
    const showValue = this.praseValueByDataSource(initialValue);
    return showValue;
  };

  render() {
    const {
      rules = defaultRules, // 校验规则
      initialValue, // Form输入框初始值，可以通过form.setFieldsValue 来代替
      view, // 只读查看页面
      hidden, // 隐藏但是不消失
      fieldOptions = {}, // getFieldDecorator.options
      options = {}, // 输入标签属性
      ...formItemProps // FItem 属性 labelOptions
    } = this.props;

    const { getFieldDecorator } = this.form;

    const { disabled: Idisablde = false, ...otherOptions } = options;
    const reStyle = Idisablde ? 'readBox' : undefined;

    if (hidden) {
      return getFieldDecorator(this.id, { initialValue, ...fieldOptions })(
        <Input hidden {...otherOptions} />
      );
    }

    if (view) {
      // 当查看到时候
      otherOptions.initialValue = initialValue;
    }
    const { dataSource } = this.state;

    if (view)
      return (
        <FItem {...formItemProps} label={this.label}>
          <ViewRender>{this.valueFormatter(initialValue||formItemProps.value)}</ViewRender>
        </FItem>
      );
    return (
      <FItem {...formItemProps} label={this.label}>
        {getFieldDecorator(this.id, {
          rules: view ? [] : rules,
          initialValue,
          ...fieldOptions,
        })(
          <RadioGroup {...otherOptions} style={reStyle}>
            {dataSource.map(ele => {
              const { codeName, codeValue, LANGUAGE_CODE, ...other } = ele;
              return this.type == RadioH.defaultType.Radio ? (
                <Radio key={codeValue} value={codeValue} {...other}>
                  {codeName}
                </Radio>
              ) : (
                <RadioButton key={codeValue} value={codeValue} {...other}>
                  {codeName}
                </RadioButton>
              );
            })}
          </RadioGroup>
        )}
      </FItem>
    );
  }
}
