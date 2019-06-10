import React, { Fragment } from 'react'
import { Modal } from 'antd';
import { Btns } from 'components'
import loadsh from 'lodash'
import { getLookUpConfig } from 'components/LookUp/LooUpConfig'
import LookUpTable from './LookUpTable'
import Intler from '../Intler/Intler'
import BuildTitle from './LookUpDragM'


export default class LookUp extends React.Component {
  constructor(props) {
    super(props)
    const { lookUpKey } = this.props
    const { columns = [], condition = {}, codeFun, api, title, code = {}, name = {}, ...oLookUpConfigProps } = getLookUpConfig(lookUpKey) || {};
    if (codeFun) codeFun()
    this.title = Intler.getIntl(title)
    this.state = {
      visible: false,
      selectedRowKeys: [],
      selectedRows: [],
      columns,
      condition,
      api,
    }
    this.oLookUpConfigProps = oLookUpConfigProps
    this.oLp = {
      code,
      name,
    }
  }


  // 清空选择
  clearSelect = () => {
    this.setState({ selectedRowKeys: [], selectedRows: [] })
  }

  // 点击ok
  handleOk = () => {
    const { onOk } = this.props
    const sks = loadsh.cloneDeep(this.state.selectedRowKeys);
    const sr = loadsh.cloneDeep(this.state.selectedRows);
    const oLp = {
      code: sr[0][this.oLp.code],
      name: sr[0][this.oLp.name],
    }
    const isShowModal = onOk && onOk(sks, sr, oLp);
    if (isShowModal == "noCloseModal") return this.setState({ selectedRowKeys: [], selectedRows: [] });
    this.handleShowModal(false);
  }

  // 双击
  handleDbClickRow = (keys, rows) => {
    this.setState({ selectedRowKeys: keys, selectedRows: rows }, this.handleOk);
  }

  // 取消
  handleCancel = () => {
    this.props.onCancel && this.props.onCancel();
    this.clearSelect();
    this.handleShowModal(false);
  }

  handleShowModal = (visible) => {
    if (!visible) { return this.setState({ visible, selectedRowKeys: [], selectedRows: [] }) }

    const { clickBefore } = this.props
    let cbFun = undefined
    if (typeof clickBefore === 'function') {
      cbFun = clickBefore()
      if (typeof cbFun === 'boolean' && cbFun) { return }
    }

    //promise 
    if (typeof cbFun === 'object' && cbFun.toString().indexOf('.then(') < 0) {
      cbFun.then(dFlag => {
        if (dFlag) { return }
        this.setState({ visible })
      })
      return
    }


    this.setState({ visible })
  }

  render() {
    const { selectedRowKeys, selectedRows, visible, columns, condition, api } = this.state
    const { title, onCancel, width, height, zIndex, children, footOk = true, lookUpProps = {}, okText, ...otherProps } = this.props
    const tableProps = {
      ...this.oLookUpConfigProps,
      clearSelect: this.clearSelect,
      selectedRowKeys,
      selectedRows,
      handleDbClickRow: this.handleDbClickRow,
      onSelectChange: (_selectedRowKeys, _selectedRows) => {
        this.setState({ selectedRowKeys: _selectedRowKeys, selectedRows: _selectedRows })
      },
      columns,
      condition,
      api,
      ...otherProps,
    }
    const titleD =  <BuildTitle visible={this.state.visible} title={title || this.title || '弹框选择'}/>
     
    return (
      <Fragment>
        {visible ?
          (
            <Modal
              title={titleD}
              visible={visible}
              onOk={this.handleOk}
              footer={[
                <Btns.cancel key="btns.cancel" onClick={this.handleCancel} />,
                footOk && <Btns.sure key="btns.sure" textTit={okText} onClick={this.handleOk} disabled={selectedRowKeys.length < 1} />,
              ]}
              onCancel={this.handleCancel}
              // onOk={this.handleOk}
              maskClosable={false}
              width={width || 900}
              bodyStyle={{ padding: '8px 0 0 0' }}
              style={{ top: 10 }}
              centered
              zIndex={zIndex || 1000}
              {...lookUpProps}
            >
              <LookUpTable {...tableProps} />
            </Modal>
          ) : null
        }
        <span onClick={() => this.handleShowModal(true)}>
          {children}
        </span>
      </Fragment>
    );
  }
}