/* eslint-disable no-script-url */
import React, { Fragment } from 'react';
import { Dropdown, Menu, Divider, Icon } from 'antd';

const ActItem = ({ children, text, className, ...others }) => {
  return (
    <a key="a" className={`ant-dropdown-link ${className}`} {...others} href="#!">
      {text || children}
    </a>
  );
};

class Act extends React.Component {
  constructor(props) {
    super(props);
    const { maxShow = 2 } = props;
    this.maxShow = maxShow; // 最多显示
  }

  handleMenuClick = () => {};

  render() {
    const { children = [] } = this.props;
    if (children.length == 0) return <Fragment />;
    const dropdowns = [];
    const menuItems = [];
    let tIndex = 1;
    React.Children.forEach(children, (ele, index) => {
      if (React.isValidElement(ele)) {
        const { hidden = false } = ele.props;
        if (!hidden) {
          if (tIndex > this.maxShow) {
            menuItems.push(<Menu.Item key={`menu_item_${ele.key || index}`}>{ele}</Menu.Item>);
          } else {
            dropdowns.push(ele);
            dropdowns.push(<Divider key={`menu_divider_${ele.key || index}`} type="vertical" />);
          }
          tIndex += 1;
        }
      }
    });
    const menu = <Menu onClick={this.handleMenuClick}>{menuItems}</Menu>;

    if (menuItems.length > 0) {
      dropdowns.push(
        <Dropdown key="ant-dropdown-link" overlay={menu}>
          <a className="ant-dropdown-link" href="#!">
            <Icon type="ellipsis" />
          </a>
        </Dropdown>
      );
    }

    // if(tIndex < this.maxShow && dropdowns.length > 1){
    //   dropdowns.length -= 1;
    // }
    if (menuItems.length === 0) {
      dropdowns.length -= 1;
    }
    return <Fragment>{dropdowns}</Fragment>;
  }
}

Act.Item = ActItem;
export { ActItem };
export default Act;
