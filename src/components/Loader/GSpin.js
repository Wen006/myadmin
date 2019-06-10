import React from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

const GSpinStore = observable(
  {
    spinning: false,
    otherCfg: {},
    // delay:undefined,
    // indicator:undefined,
    // size:undefined,
    // tip:undefined,
    // wrapperClassName:undefined,
    show(config) {
      this.spinning = true;
      this.otherCfg = config;
    },
    hide() {
      this.spinning = false;
      this.otherCfg = {};
    },
  },
  {
    show: action,
    hide: action,
  }
);

@observer
class GSpin extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Spin spinning={GSpinStore.spinning} {...GSpinStore.otherCfg}>
        {children}
      </Spin>
    );
  }
}
export default GSpin;
export { GSpinStore };
