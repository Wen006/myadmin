import React, { Fragment } from 'react'
import { Modal } from 'antd';
import { Btns } from 'components'
import loadsh from 'lodash'
import { getLookUpConfig } from 'components/LookUp/LooUpConfig'
import LookUpTable from './LookUpTable'
import Intler from '../Intler/Intler'


export default class AgLookUp extends React.Component {
 
  constructor(props) {
    super(props)
    const { lookUpKey } = this.props
    const { columns = [], condition = {}, api, title, ...oLookUpConfigProps } = getLookUpConfig(lookUpKey) || {};
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
  }


  // 清空选择
  clearSelect = () => {
    this.setState({ selectedRowKeys: [], selectedRows: [] })
  }

  showDialog = (params) =>{
    this.setState({visible:true});
  }

  hideDialog = () =>{
      this.clearSelect();
      this.setState({visible:false});
  }

  handleOk = ()=>{
      const { onOk } = this.props
      const sks = loadsh.cloneDeep(this.state.selectedRowKeys);
      const sr = loadsh.cloneDeep(this.state.selectedRows);
      const isShowModal = onOk && onOk(sks, sr);
      if (isShowModal == "noCloseModal") return this.setState({ selectedRowKeys: [], selectedRows: [] });
      this.hideDialog();
  }

  handleCancel = ()=>{
      const {onCancel} = this.props
      if(onCancel)onCancel();
      this.hideDialog();
  }
 
  // 双击
  handleDbClickRow = (keys, rows) => {
    this.setState({ selectedRowKeys: keys, selectedRows: rows }, this.handleOk);
  }
 
  render() {
    const { selectedRowKeys, selectedRows, visible, columns, condition, api } = this.state
    const { title, onCancel, width, height, zIndex, children, footOk = true, ...otherProps } = this.props
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
    return (
      <Fragment>
        {visible ?
          (
            <Modal
              title={title || this.title || '弹框选择'}
              visible={visible}
              onOk={this.handleOk}
              footer={[
                <Btns.cancel key="btns.cancel" onClick={this.handleCancel} />,
                footOk && <Btns.sure key="btns.sure" onClick={this.handleOk} disabled={selectedRowKeys.length < 1} />,
              ]}
              onCancel={this.handleCancel}
              // onOk={this.handleOk}
              maskClosable={false}
              width={width || 900}
              bodyStyle={{ padding: '8px 0 0 0' }}
              style={{ top: 10 }}
              centered
              zIndex={zIndex || 1000}
            >        
              <LookUpTable {...tableProps} />
            </Modal>
          ) : null
        }
        {/* <span onClick={() => this.showDialog()}>
                {children}
        </span> */}
      </Fragment>

    );
  }
}
