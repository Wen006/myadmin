/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card, Modal,Icon } from 'antd'
import lodash from "lodash";
import { DateRender, AdRender, Act, MBox, Viewer, Btns,Intler,AutoRow,Iconfont,WConfirm,CountDown,Ellipsis,NumberInfo,TagSelect,SearchBar,Toolbar,Trend } from '@/components'
import { moment, Data_Format, formatDate } from '@/utils/util.date'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less'
import { IconItems } from "@/utils/app.const";

const dataSource=[
  {codeName:'是',codeValue:"01"},
  {codeName:'否',codeValue:"02"},
]

const IconS = IconItems.slice(0,10);

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

    // 查询条件
    const searchBarProps = {
      columns:[
        {
          label: '关键字',
          id: 'keyWord',
          tableItem: {},
          searchItem: {
            group: 'simple'
          },
          formItem: {}
        },
        {
          label: '名称',
          id: 'listName', 
          tableItem: {},
          searchItem: {},
          formItem: {},
        }
      ],
      onSearch: values => {
        this.handleSubmit({...values,...this.state.queryParams});
      }
    };

    return (
      <PageHeaderWrapper 
        title="PageHeaderWrapper 面包屑"
        content="这里可以有其他内容"
      > 
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
          WConfirm: 弹出确认，根据业务需求在@/components/WConfirm 进行配置 <br />
          <WConfirm type="delete" onConfirm={() => {}}><Icon type="delete" /></WConfirm>
          <WConfirm type="submit" onConfirm={() => {}}><Icon type="save" /></WConfirm>
          <br />
          Btns:按钮具体根据业务可以在@/components/Button 按照规范统一配置按钮大小，形状，颜色等等<br />
          {lodash.keys(Btns).map(key=>{
            return React.createElement(Btns[key],{key,className:styles.btn,size:'small',onClick:()=>{this.handleClipboard(key)}});
          })}

        </Card>
        <Card title="布局" {...cardProps}>
           
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
            <WConfirm type="del" onConfirm={() => {}}>
              <Icon type="delete" />
            </WConfirm>
            <Act.Item key="a" disabled onClick={()=>alert(1)}>a</Act.Item>
            <Act.Item key="b" onClick={()=>alert(1)}>b</Act.Item>
            <Act.Item key="c" onClick={()=>alert(1)}>c</Act.Item>
          </Act>
        </Card>
        <Card title="其他特效的" {...cardProps}>
          CountDown: <CountDown format={(time)=>formatDate(time,Data_Format.YEAR_MONTH_DAY_HH_MM_SS)} target={new Date("2020")} onEnd={()=>{}} />
          <br />
          NumberInfo:<NumberInfo title="NumberInfo" total={100} status="up" theme="dark" />
          <br />
          <Ellipsis lines="5" fullWidthRecognition length="2" tooltip="Hello world!鼠标放上来试试。">Ellipsis：Hello world!鼠标放上来试试。</Ellipsis>
        </Card>
        <Card title="图标" {...cardProps}>
          Iconfont:{IconS.map(ele=>(<Iconfont className={styles.icon} type={ele.name} />))}
        </Card>
        <Card title="弹框" {...cardProps}>
          MBox:
          <Btns.default type='primary' onClick={()=>{MBox.success('Success')}}>Success</Btns.default>
          <Btns.default type='info' onClick={()=>{MBox.info('Info')}}>Info</Btns.default>
        </Card>
        <Card title="其他" {...cardProps}> 
          TagSelect：
          <TagSelect defaultValue="B">
            <TagSelect.Option value="A">TagSelect.Option.A</TagSelect.Option>
            <TagSelect.Option value="B">TagSelect.Option.B</TagSelect.Option> 
          </TagSelect>
          <br />
          <Viewer tiggerTitle="侧边滑动" onReady={(vApi)=>{this.vApi=vApi}}>
              侧边滑动内容，这里其实是业务组件
          </Viewer>
          <Btns.default onClick={_=>{this.vApi.showViewer(true)}}>侧边滑动按钮触发</Btns.default>
          <br />
          Trend:
          <Trend flag="up">50%</Trend>
          <br />
          Toolbar 和 SearchBar:
          <Toolbar
            appendLeft={
              <Btns.Group>
                <Btns.add onClick={()=>{}} />  
                <Btns.update onClick={()=>{}} />  
                <Btns.submit onClick={()=>{}} />  
              </Btns.Group>
              }
            pullDown={<SearchBar key="grid" type="grid" {...searchBarProps} onReady={(ref)=>{this.searchBarRef=ref}} />}
          >
            <SearchBar type="inline" group="simple" {...searchBarProps} onReady={(ref)=>{this.searchBarRef=ref}} />
          </Toolbar>
        </Card>
      </PageHeaderWrapper>
    )
  }
}