/* eslint-disable no-script-url */
import React, { PureComponent } from 'react';
import { Popconfirm, Icon } from 'antd';
import Intler from '../Intler'

const confirmMap = {
  default: {
    icon:'',
    title:'',
  },
  delete: {
    title: 'app.btn.confirm.delete.title',
    icon: 'question-circle-o',
    okText: 'app.btn.confirm',
    cancelText: 'app.btn.cancel',
  },
  submit: {
    title: 'app.btn.confirm.submit.title',
    icon: 'question-circle-o',
    okText: 'app.btn.confirm',
    cancelText: 'app.btn.cancel',
  },
  reset: {
    title: 'app.btn.confirm.reset.title',
    icon: 'question-circle-o',
    okText: 'app.btn.confirm',
    cancelText: 'app.btn.cancel',
  },
};

export default class WConfirm extends PureComponent {
  constructor(props) {
    super(props);
    const { type, title, okText, cancelText } = props;
    this.cfg = confirmMap[type] || confirmMap.default;
    this.icon = this.cfg.icon;
    this.okText = Intler.getIntl(okText || this.cfg.okText);
    this.cancelText = Intler.getIntl(cancelText || this.cfg.cancelText);
    this.title = React.isValidElement(title) ? title : Intler.getIntl(title || this.cfg.title);
  }

  render() {
    const { onConfirm, onCancel, disabled = false, children } = this.props;

    if (disabled) {
      return (
        <a href="javascript:;" disabled>
          {children}
        </a>
      );
    }
    return (
      <Popconfirm
        title={this.title}
        icon={this.icon ? <Icon type={this.icon} /> : null}
        okText={this.okText}
        cancelText={this.cancelText}
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        {children}
      </Popconfirm>
    );
  }
}