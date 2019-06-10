/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-redeclare */
import React from 'react';
import { Select } from 'antd';
import Global from '@/stores/common/Global';
// import { getLocalInfo } from 'utils/webUtils';

const lang = 'zh_CN'

const localeText = {
  zh_CN: {
    'aggrid.editer.select.select': '请选择',
  },
  en_US: {
    'aggrid.editer.select.select': 'Select',
  },
};

const getIntl = key => {
  if (localeText[lang]) return localeText[lang][key] || key;
  return localeText.zh_CN[key] || key;
};

const { Option } = Select;

export default class SelectCell extends React.Component {
  showTip = false;

  constructor(props) {
    super(props);
    const { value, column, config = {} } = props;
    const { modalKey, showTip = true, code, dataSource = [] } = config;
    this.column = column;
    this.modalKey = modalKey || this.column.colId;
    this.showTip = showTip;

    if (code)
      Global.findAdLovByCode(code).then(data => {
        this.setState({ dataSource: data });
      });

    this.state = {
      value,
      dataSource,
    };
  }

  getValue = () => {
    return this.state.value;
  };

  setValue = value => {
    this.setState({ value });
  };

  handleChange = value => {
    // eslint-disable-next-line react/no-unused-state
    const { config } = this.props;
    if (config.onChange) {
      config.onChange(value, this.props);
    }
    this.setState({ value });
  };

  render() {
    const { value, dataSource } = this.state;
    return (
      <Select value={value} style={{ width: '100%' }} onChange={this.handleChange}>
        {this.showTip ? (
          <Option key="_blank" value=" ">
            {getIntl('aggrid.editer.select.select')}
          </Option>
        ) : null}
        {dataSource.map(ele => {
          const { CODE_NAME, CODE_VALUE, LANGUAGE_CODE, ...other } = ele;
          return (
            <Option key={CODE_VALUE} value={CODE_VALUE} {...other}>
              {CODE_NAME}
            </Option>
          );
        })}
      </Select>
    );
  }
}
