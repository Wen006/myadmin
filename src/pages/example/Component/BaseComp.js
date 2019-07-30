/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card, Modal,Icon } from 'antd'
import lodash from "lodash";
import { DateRender, AdRender, Act, MBox, VPro, Btns,Intler,AutoRow,Iconfont,MPCConfirm } from '@/components'
import { moment, Data_Format } from '@/utils/util.date'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less'

const dataSource=[
  {codeName:'是',codeValue:"01"},
  {codeName:'否',codeValue:"02"},
]
export default class BaseComp extends React.Component{

  state = {
    view:false,
    values:{},
    errors:{},
  }

  componentDidMount(){
    // const str = "YYYY-MM-DD";
    // console.log(moment(new Date()).format(str))
    // console.log(moment(+new Date()).format(str))
    // console.log(moment("2012-12-11").format(str))

  }
   
  handleSave = (method) =>{
     
  }

  handleClipboard = (codeVal) =>{
    const content = `<Btns.${codeVal} />`;
    Modal.info({title:"请复:",content});
  }
 
  render(){ 
    const cardProps = {
      size:'small'
    }

    return (
      <PageHeaderWrapper title="常用组件"> 
        <Card title="格式化组件" {...cardProps}>
          DateRender: <DateRender value={moment().toDate()} config={{format:Data_Format.YEAR_MONTH_DAY}} /><br />
          AdRender: <AdRender 
            value="01" 
            config={{
                // code:'COMMON_Y_N',
                dataSource,
              }}
          />
        </Card>
        <Card title="按钮" {...cardProps}>
          MPCConfirm: 弹出确认，根据业务需求在@/components/MPCConfirm 进行配置 <br />
          <MPCConfirm type="delete" onConfirm={() => {}}><Icon type="delete" /></MPCConfirm>
          <MPCConfirm type="submit" onConfirm={() => {}}><Icon type="save" /></MPCConfirm>
          <br />
          Btns:按钮具体根据业务可以在@/components/Button 按照规范统一配置按钮大小，形状，颜色等等<br />
          {lodash.keys(Btns).map(key=>{
            return React.createElement(Btns[key],{key,className:styles.btn,size:'small',onClick:()=>{this.handleClipboard(key)}});
          })}

        </Card>
        <Card title="布局" {...cardProps} >
          AutoRow: 封装列Row和Col，可以通过rowProps,和colProps配置
          <AutoRow rowProps={{gutter:2}} colProps={{span:12}}>
            <span className={styles.item}>span:12</span>   
            <span className={styles.item}>span:12</span>   
            <span className={styles.item}>span:12</span>     
          </AutoRow>
          <AutoRow rowProps={{gutter:2}} colProps={{span:24}}>
            <span className={styles.item}>span:24</span>   
          </AutoRow>
          Act: 用于操作列,多余菜单隐藏 ...
          <br />
          <Act>
            <MPCConfirm type="del" onConfirm={() => {}}>
              <Icon type="delete" />
            </MPCConfirm>
            <Act.Item key="a" disabled onClick={()=>alert(1)}>a</Act.Item>
            <Act.Item key="b" onClick={()=>alert(1)}>b</Act.Item>
            <Act.Item key="c" onClick={()=>alert(1)}>c</Act.Item>
          </Act>
        </Card>
        <Card title="格式化组件" {...cardProps} />
        <Card title="格式化组件" {...cardProps} />
        <Card title="格式化组件" {...cardProps} />
      </PageHeaderWrapper>
    )
  }
}