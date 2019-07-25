/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react'
import { Modal } from 'antd';
import loadsh from 'lodash'
import { Btns } from '@/components'
import LookUpTable from './LookUpTable'
import BuildTitle from './LookUpDragM'
import LookUpStore from './store/LookUpStore'

let zIndex = 1000;

export default class LookUp extends React.Component {

  exports = ['showModal']

  constructor(props) {
    super(props)
    const { lookUpStore, lookUpKey, rowSelection,title } = this.props
    this.lookUpStore = lookUpStore || new LookUpStore({lookUpKey,rowSelection,title});

    this.zIndex = zIndex;
    zIndex+= 1;

    this.state = {
      visible: false,
      selectCount: 0,
    }
  }

  componentDidMount(){
    const { onGridReady } = this.props 
    if(onGridReady){
      onGridReady(this.gridParams,{ agGridStore:this.agStore,lookUpApi:loadsh.pick(this,this.exports)})
    }
  }

  // 是否展开弹框
  showModal = (visible) =>{
    const { openBefore,closeBefore } = this.props

    if(visible){
      if(openBefore == undefined) {
        this.setState({visible})
        return;
      }
      if(typeof openBefore === 'function'){
        const openData = openBefore();
        if(openData instanceof Promise){
          openData.then(_=>{
            this.setState({visible})
          },()=>{})
          return;
        }
        this.setState({visible:openData===true})
      }else {
        this.setState({visible:openBefore===true})
      }
    }else{
      this.setState({visible})
    }
  }

  handleCancel = () =>{
    const {onCancel} = this.props
    if(onCancel) onCancel();
    this.showModal(false);
  }

  handleOk = (select) =>{
    const {closeBefore} = this.props
    if(closeBefore != undefined) {
      if(typeof closeBefore === 'function'){
        const closeData = closeBefore();
        if(closeData instanceof Promise){
          closeData.then(_=>{
            this.doOk(select)
          },()=>{}) 
        }else if(closeData===true){
          this.doOk(select)
        }
      }else if(closeBefore===true){
        this.doOk(select)
      }
      return ;
    }
    this.doOk(select)
  }

  doOk = (select) =>{
    const {onOk} = this.props
    if(onOk) onOk(select||this.agStore.getSelect());
    this.showModal(false);
  }

  onGridReady = (params, agStore) => {
    this.agStore = agStore;
    this.gridParams = params
  }
  
  render() {
    const { children,width,onOk,onCancel,gridOptions={},modalProps={},...otherProps} = this.props
    const { visible,selectCount } = this.state

    const tableProps = {
      ...otherProps,
      onGridReady:this.onGridReady,
      lookUpStore:this.lookUpStore,
      gridOptions,
    }

    const titleD =  <BuildTitle visible={visible} title={this.lookUpStore.title} />

    const footer = [<Btns.cancel key="btns.cancel" onClick={this.handleCancel} />]

    if(onOk != false){
      const { onRowSelected, onRowDoubleClicked} = gridOptions;
      loadsh.assign(tableProps.gridOptions,{
        // 用于按钮处理
        onRowSelected:(params)=>{
          if(onRowSelected)onRowSelected(params);
          const { selectedRowKeys } = this.agStore.getSelect();
          this.setState({selectCount:selectedRowKeys.length})
        },
        // 双击选择
        onRowDoubleClicked:(params)=>{
          if(onRowDoubleClicked)onRowDoubleClicked(params);
          const { data } = params;
          this.handleOk({selectedRowKeys:[data[this.agStore.rowKey]],selectedRows:[data]})
          // this.showModal(false);
        },
      })
      footer.push(<Btns.sure key="btns.sure" onClick={()=>this.handleOk()} disabled={selectCount < 1} />)
    }

    return (
      <Fragment>
        <Modal
          title={titleD}
          visible={visible}
          destroyOnClose
          footer={footer}
          onCancel={this.handleCancel}
          maskClosable={false}
          width={width || 900}
          bodyStyle={{ padding: '8px 0 0 0' }}
          style={{ top: 6 }}
          centered
          zIndex={zIndex || this.zIndex}
          {...modalProps}
        >
          <LookUpTable {...tableProps} />
        </Modal>
        <span onClick={() => this.showModal(true)}>
          {children}
        </span>
      </Fragment>
    );
  }
}