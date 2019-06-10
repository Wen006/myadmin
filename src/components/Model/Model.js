/*
 * @Author: wyh 
 * @Date: 2018-08-16 14:11:13 
 * @Last Modified by: wyh
 * @Last Modified time: 2018-12-07 15:59:28
 * @Description: 使用antd的Modal作为壳子动态加载各种组件的壳子服务
 *  使用：引入当前组件并调用静态方法show，该方法需要传入具有title、component、params及width三个属性的对象，同时返回一个promise对象
 *       传入的组件需要实现callBack函数来将结果返回至调用者，callBack方法接收params和close两个参数，params为返回结果，close是否关闭model
 */
import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import { formatMessage } from 'umi/locale';


export default class Dialog extends PureComponent {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  show = () => {
    this.setState({ visible: true });
  };

  hidden = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    } else {
      this.hidden();
    }
  };

  render() {
    const { visible } = this.state;
    const { title, children, ...other } = this.props;

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Modal
        title={title}
        visible={visible}
        onCancel={this.handleCancel}
        okText={formatMessage({id:'Ok'})}
        cancelText={formatMessage({id:'Cancel'})}
        centered
        {...other}
      >
        <div style={{ maxHeight: '900', overflow: 'auto' }}>{children}</div>
      </Modal>
    );
  }
}
