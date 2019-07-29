/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react'
import { AutoRow, Intler, Btns } from '@/components'
import { InputH, SelectH, CheckboxH, RadioH, DatePickerH, RangePickerH, InputNumberH, InputLookUp } from '@/components/FormMark';
import {DefaultField} from '@/pages/common'
import { Form, Card,Collapse, Button, Upload,Icon } from 'antd';
import styles from './index.less'
import comStyles from '@/pages/common.less'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import LookUp from '@/components/LookUp/LookUp';
import { moment } from '@/utils/util.date'

const { Panel } = Collapse;

const Title = ({children}) =>{
 return <div className={styles.title}><h3>{children}</h3></div> 
}

@Form.create()
export default class BaseForm extends React.Component{

  state = {
    view:false,
    values:{},
    errors:{},
  }

  handleView = () =>{
    this.setState((state,props)=>{
      return {...state,view:!state.view}
    })
  }

  componentDidMount(){
    // const str = "YYYY-MM-DD";
    // console.log(moment(new Date()).format(str))
    // console.log(moment(+new Date()).format(str))
    // console.log(moment("2012-12-11").format(str))

  }
   
  handleSave = (method) =>{
    const {form:{getFieldsValue,setFieldsValue,validateFields,validateFieldsAndScroll}} = this.props
    switch (method) {
      case 'getFieldsValue':
        const allValues = getFieldsValue();
        this.setState({values:allValues,errors:{}})
      break;
      case 'validateFields':
        validateFields((errors,allValues)=>{
          if(!errors){  
            this.setState({values:allValues,errors:{}})
          }else{
            this.setState({errors,values:{}})
          }
        })
      break;
      case 'validateFieldsAndScroll':
        validateFieldsAndScroll((errors,allValues)=>{
          if(!errors){
            this.setState({values:allValues,errors:{}})
          }else{
            this.setState({errors,values:{}})
          }
        })
      case 'setFieldsValue':
        setFieldsValue(this.state.values)
      break;
    
      default:
        break;
    }
  }
 
    render(){ 

        const { form } = this.props

        //  通用输入标签属性
        const comFormProps = {
          form,
          view:this.state.view,
          fieldOptions:{
            force:true,
            first:true,
            scroll:{
              offsetTop:100,
            }
          },
          options:{
            disabled:false,
            
          }
        };
      
      // 通用布局属性
      const autRowProps = {
        rowProps: { gutter: 6 },
        colProps: { span: 8 },
      };
        
        return (
          <PageHeaderWrapper title="通用编辑表格">
            <Card>
              <Form layout='inline'>
                {/* 设置的隐藏域 */}
                <DefaultField form={form} />
                <InputH id="hiddenField" hidden form={form} />
                {/* 显示区域 */}
                <Title>文本:</Title>
                <AutoRow {...autRowProps}>
                  <InputH id="inputH" label={'InputH'} {...comFormProps} /> 
                  <InputH.TextAreaH id="inputHTextAreaH" label={'InputH.TextAreaH'} {...comFormProps} /> 
                </AutoRow>
                <Title>日期:</Title>
                <AutoRow colProps={{span:12}}>
                  <DatePickerH id="datePickerH" label={'DatePickerH'} {...comFormProps} /> 
                  <RangePickerH id="rangePickerH" label={'RangePickerH'} {...comFormProps} /> 
                </AutoRow>
                <Title>字典表:</Title>
                <AutoRow>
                  <SelectH 
                    id="selectH" 
                    label={'SelectH'} 
                    // dataSource={[
                    //   {"codeValue": "0","codeName": "否"},
                    //   {"codeValue": "1","codeName": "是"}
                    // ]}
                    code={"COMMON_Y_N"}
                    {...comFormProps} /> 
                  <CheckboxH 
                    id="checkboxH" 
                    label={'CheckboxH'} 
                    type={'CheckboxGroup'}
                    // dataSource={[
                    //   {"codeValue": "0","codeName": "否"},
                    //   {"codeValue": "1","codeName": "是"}
                    // ]}
                    // code={"COMMON_Y_N"}
                    {...comFormProps} /> 
                  <CheckboxH.Group 
                    id="checkboxHGroup" 
                    label={'CheckboxH.Group'} 
                    type={'CheckboxGroup'}
                    // dataSource={[
                    //   {"codeValue": "0","codeName": "否"},
                    //   {"codeValue": "1","codeName": "是"}
                    // ]}
                    code={"COMMON_Y_N"}
                    {...comFormProps} /> 
                  <RadioH 
                    id="radio" 
                    label={'Radio'} 
                    type="Radio"
                    dataSource={[
                      {"codeValue": "0","codeName": "否"},
                      {"codeValue": "1","codeName": "是"}
                    ]}
                    // code={"COMMON_Y_N"}
                    {...comFormProps} /> 
                  <RadioH 
                    id="Button" 
                    label={'Button'} 
                    type='Button'
                    dataSource={[
                      {"codeValue": "0","codeName": "否"},
                      {"codeValue": "1","codeName": "是"}
                    ]}
                    // code={"COMMON_Y_N"}
                    {...comFormProps} /> 
                </AutoRow>
                <Title>数字:</Title>              
                <InputNumberH
                  label={"InputNumberH"}
                  id="inputNumberH"
                  style={{width:'100px'}}
                  options={{style:{width:'100%'}}}
                  {...comFormProps}
                /> 
                <Title>复杂:</Title>
                <InputLookUp 
                  {...comFormProps}
                  id="userName"  
                  // rowSelection="multiple" 
                  label={"弹框lookup选择"}  
                  title="用户选择" 
                  lookUpKey="SM_USER" 
                  rules={[]} 
                  // 弹框弹出前调用 boolean 返回若是true弹框打开
                  openBefore={true
                  // ()=>true
                  // ()=>new Promise((resolve,reject)=>{
                  //   resolve();// 弹框打开
                  //   reject(); // 弹框不打开
                  // })
                  }
                  // 双击选择或者点击ok按钮时会调用触发 返回若是true弹框关闭 
                  // closeBefore={
                  //   // true
                  //   // ()=>true
                  //   // ()=>new Promise((resolve,reject)=>{
                  //   //   // resolve();// 弹框关闭
                  //   //   // reject(); // 弹框不关闭
                  //   // })
                  // }
                  // 查询条件
                  onSearchBefore={
                  // {id:100}
                  ()=>{return {id:1}}
                  // ()=>new Promise((resolve,reject)=>{
                  //   resolve({id:300})
                  // })
                  }
                  onOk={_=>console.log(_,"ok")} 
                  onClear={_=>console.log("clear")} 
                  onCancel={_=>console.log("cancle")} 
                />

                <LookUp lookUpKey="SM_USER" 
                  rowSelection="multiple" 
                  onOk={({selectedRows})=>{
                      this.props.form.setFieldsValue({userName2:selectedRows.map(it=>it.userName).join(',')})
                  }}>
                  <Button style={{marginTop:'4px'}}>点击我页可以弹框选择</Button>
                </LookUp>
                <InputH id="userName2" {...comFormProps} />  
                <Title>其他:</Title>
                <Upload 
                  action='//jsonplaceholder.typicode.com/posts/'
                  listType='picture'
                  previewFile={(file)=>{
                     
                    // Your process logic. Here we just mock to the same file
                    // return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                    //   method: 'POST',
                    //   body: file,
                    // })
                    // .then(res => res.json())
                    // .then(({ thumbnail }) => thumbnail);
                }}
                >
                  <Button>
                    <Icon type="upload" /> 文件上传
                  </Button>
                </Upload>

                <div className={comStyles.btnBar}>
                  <Btns.back />
                  <Btns.save key="save_1" text="仅仅获取值" onClick={()=>this.handleSave("getFieldsValue")} />
                  <Btns.save key="save_2" text="校验获取值" onClick={()=>this.handleSave("validateFields")} />
                  <Btns.save key="save_3" text="校验定位获取值" onClick={()=>this.handleSave("validateFieldsAndScroll")} />
                  <Btns.reset key="reset" onClick={()=>{this.props.form.resetFields()}} />
                  <Btns.reset key="set_v" text="向form表单赋值" onClick={()=>this.handleSave("setFieldsValue")} />
                  {
                    this.state.view?
                    <Btns.edit onClick={this.handleView} />:
                    <Btns.view onClick={this.handleView} />
                  }
                </div>
              </Form>
            </Card>
            <Card>
              <Title>表单值：</Title>
              {JSON.stringify(this.state.values)}<br/>
              <Title>错误信息：</Title>
              {JSON.stringify(this.state.errors)}
            </Card>
          </PageHeaderWrapper>
        )
    }
}