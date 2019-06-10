import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd';
import Act from '../../Action/Act';

export default class ActionCellRenderer extends Component {
  render() {
    return (
      <Act maxShow={3}>
        <Popconfirm
          key="pop"
          placement="topLeft"
          title="是否删除"
          onConfirm="confirm"
          okText="Yes"
          cancelText="No"
        >
          <a key="aa" className="ant-dropdown-link" href="javascript:;">
            aa
          </a>
        </Popconfirm>
        <a key="a" className="ant-dropdown-link" onClick={() => alert(0)} href="javascript:;">
          a
        </a>
        <a
          key="b"
          className="ant-dropdown-link"
          hidden
          onClick={() => alert(0)}
          href="javascript:;"
        >
          b
        </a>
        <a
          key="c"
          className="ant-dropdown-link"
          disabled
          onClick={() => alert(0)}
          href="javascript:;"
        >
          c
        </a>
        {/* <Oper key="ope" onClick={()=>{alert(0)}}>hello</Oper>   // 这里自定义控件 */}
        <Button
          key="btn2"
          onClick={() => {
            alert(1);
          }}
        >
          click
        </Button>
      </Act>
    );
  }
}
