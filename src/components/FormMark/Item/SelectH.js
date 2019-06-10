/* eslint-disable no-eval */
import React from 'react';
import Global from '@/stores/common/Global';
import { Select } from 'antd';
import lodash from 'lodash';
import WrapInput from './WrapInput';
import ViewRender from './ViewRender';

const { Option } = Select;

class SelectH extends React.PureComponent {
  constructor(props) {
    super(props);
    const { dataSource = [], code, showTip = false } = props;
    this.code = code;
    this.showTip = showTip;

    const { dataMap, dataSource: ds } = this.codeToStdData(dataSource);

    this.state = {
      dataSource: ds,
      dataMap,
    };
  }

  componentDidMount() {
    if (this.code) {
      Global.findAdLovByCode(this.code).then(data => {
        const { dataMap, dataSource } = this.codeToStdData(data);
        this.setState({ dataSource, dataMap });
      });
    }
  }

  codeToStdData = (dataSource = []) => {
    const dataMap = [];
    dataSource.forEach(item => {
      const { CODE_NAME, CODE_VALUE } = item;
      dataMap[CODE_VALUE] = CODE_NAME;
    });
    return { dataMap, dataSource };
  };

  praseValueByDataSource = initialValue => {
    let initialV = [];
    try {
      if (Array.isArray(initialValue)) {
        initialV = eval(initialValue);
      } else {
        initialV = initialValue;
      }
    } catch (error) {
      initialV = [initialValue];
    }

    const { dataMap } = this.state;
    const labels = [];
    if (initialV) {
      if (dataMap[initialV]) return dataMap[initialV];
      initialV.forEach(value => {
        if (dataMap[value]) labels.push(dataMap[value]);
      });
    }
    return labels.join(',');
  };

  valueFormatter = initialValue => {
    const { valueFormatter } = this.props;
    if (valueFormatter) return valueFormatter(initialValue, this.state.dataSource || []);
    const showValue = this.praseValueByDataSource(initialValue);
    return showValue;
  };

  render() {
    const { dataSource } = this.state;
    const selectProps = lodash.omit(this.props, ['dataSource', 'code', 'showTip']);
    const { view = false, initialValue } = selectProps;
    return view ? (
      <ViewRender>{this.valueFormatter(initialValue)}</ViewRender>
    ) : (
      <Select {...selectProps} style={{ width: 120 }}>
        {this.showTip ? (
          <Option key="_blank" value=" ">
            --请选择--
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

export default WrapInput(SelectH, 'Select');
