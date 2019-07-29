
import React, { Fragment } from 'react'
import { Icon } from 'antd' 
import lodash from 'lodash'
import LookUp from '@/components/LookUp/LookUp'
import InputH from '../InputH'
import ValueTip from './ValueTip'

const isEmpty = _ =>  _ == undefined || _ == null || lodash.trim(_) == "";
// eslint-disable-next-line react/no-multi-comp
class InputLookUp extends React.Component {

  value = "";

  constructor(props) {
    super(props)
    const { modalKey, id,form,defaultValue, initialValue } = this.props

    this.value =  defaultValue || initialValue;

    this.modalKey = modalKey || id
    this.nameKey = id || modalKey 
    this.form = form;
    this.state = {
      showClear: false,
    }
  }

  componentDidMount() {
    if (this.value) this.setValue(this.value);
  }

  onMouseEnter = () => {
    const { showClear } = this.state; 
    if(!isEmpty(this.getValue()) && !showClear)this.setState({ showClear: true });
  }

  onMouseLeave = () => {
    // const { showClear } = this.state;
   this.setState({ showClear: false });
  }

  setValue = (value) => {
    this.value = value;
    const { form: { setFieldsValue } } = this.props
    if (setFieldsValue) setFieldsValue({ [`${this.nameKey}`]: value });
    if(isEmpty(value)) this.setState({showClear:false})
  }

  getValue = () =>isEmpty(this.value)?this.form.getFieldValue(`${this.nameKey}`):this.value
  
  handleModalOk = ({selectedRowKeys, selectedRows}) => {
    const { onOk } = this.props;
    const values = selectedRows.map(it => it[`${this.modalKey}`]).join(',')
    this.setValue(values);
    if (onOk) onOk({selectedRowKeys, selectedRows});
  }

  handleModalCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) onCancel();
  }

  // 点击 图标的时候
  handleClickIcon = () => {
    const { showClear } = this.state
    const { onClear } = this.props
    if (showClear) {
      this.setValue('');
      if(onClear)onClear();
    }else{
      this.lookUpApi.showModal(true)
    }
  }

  handleClickInput = () =>{
    this.lookUpApi.showModal(true);
  }

  onGridReady = (params, {lookUpApi}) => {
    this.lookUpApi = lookUpApi;
  }

  render() {
    const { form,disabled=false,options={},lookUpKey,rowSelection,title,openBefore,closeBefore,onSearchBefore,onClear,onOk,...otherProps} = this.props
    const { showClear } = this.state
     
    let suffixProps = {}
    let nOptions = {} 
    if(!otherProps.view){
      if(disabled){
        nOptions = lodash.assign({},options,{
          suffix:<Icon type="search"/>,
          readOnly:true,
        })
      }else{
        suffixProps = lodash.assign({},{
          onMouseEnter:this.onMouseEnter,
          onMouseLeave:this.onMouseLeave,
          onClick:this.handleClickIcon,
          type:showClear ? "close-circle" : "search",
        });
        nOptions = lodash.assign({},options,{
          onMouseEnter:()=>{this.valRef.showValue(true)},
          onMouseLeave:()=>{this.valRef.showValue(false)},
          onClick:this.handleClickInput,
          suffix:<Icon {...suffixProps} />,
          readOnly:true,
        })
      }
    }

    return (
      <Fragment>
        <ValueTip form={this.form} nameKey={this.nameKey} ref={(ref)=>this.valRef=ref}>
          <InputH 
            id={this.id} 
            key={this.id}
            form={form} 
            {...otherProps} 
            options={{
              disabled,
              ...nOptions
            }}
          />
        </ValueTip>
        <LookUp 
          lookUpKey={lookUpKey} 
          rowSelection={rowSelection}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          onGridReady={this.onGridReady}
          title={title}
          onSearchBefore={onSearchBefore}
          openBefore={openBefore}
          closeBefore={closeBefore}
        />
      </Fragment>
    )
  }
}

// export default WrapInput(InputLookUp,'InputLookUp')
export default InputLookUp