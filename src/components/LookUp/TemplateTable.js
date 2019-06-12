
/**
 * @description：通用弹出框
 * @author: wennn
 * @time:2017.11.9
 */
import React, { Fragment } from 'react'
import { Row, Col, Table, message, Form } from 'antd'
import Btns from '@/components/Button'
import lodash from 'lodash'
import Intler from '@/components/Intler'
import AgGridPro from '@/components/AgGrid/AgGridPro'
import LookUpStore from './store/LookUpStore'
import { InputH } from '@/components/FormMark'

import styles from '@/pages/common.less'

const InputTypes = {
  'string': InputH,
  'number': InputH,
  'date': InputH,
  'checkbox': InputH,
  'radio': InputH,
  'select': InputH,
}

const DateResolver = _ => {
  return _ && _.toDate().getTime()
}

const resolvers = {
  'date': DateResolver,
}

@Form.create()
class LookUpTable extends React.Component {

  exports = ['handleSearch','handleReset']

  valueResolver = {} // 用于存值转换器

  constructor(props) {
    super(props)
    const { lookUpStore,title,lookUpKey, rowSelection } = this.props
    this.lookUpStore = lookUpStore || new LookUpStore({lookUpKey,rowSelection,title});
    this.rowKey = lodash.uniqueId("LookUpTable");
  }

  // 查询
  handleSearch = () => {
    const { onSearchBefore } = this.props
    const params = this.props.form.getFieldsValue();

    if(typeof onSearchBefore == 'function'){
      const beforeData = onSearchBefore();
      if(beforeData instanceof Promise){
        beforeData.then(data=>{
          lodash.assign(params,data);
          console.log(params)
          this.agStore.submit(params)
        },(data)=>{
          console.log("LookUpTable --》 Promise条件 不符合不查询",data)
        })
        return;
      }
      lodash.assign(params,beforeData);
    }else if(typeof onSearchBefore == 'object'){
      lodash.assign(params,onSearchBefore);
    }
    this.agStore.submit(params)
  }

  handleReset = () => {
    this.props.form.resetFields();
    this.handleSearch();
  }

  // aggrid 初始化回调 通过这个拿到 grid封装的store 和aggrid官网api
  onGridReady = (params, agStore) => {
    this.agStore = agStore;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.agApi = params.agApi; // 用这个代替之前的ref方式引用（推荐的）
    this.agStore.gridProApi.sizeToFit();
    const { onGridReady } = this.props
    if(onGridReady){
      onGridReady(params,agStore,lodash.pick(this,this.exports))
    }
    this.handleSearch({}); // 页面一加载就查询
  };
 
  genInput = ({ key, label, type = 'string' }) => {
    const { form } = this.props
    let Ele = InputTypes[`${type}`]
    if (!Ele) { console.error(`LookUpTable 输入条件生成失败，不存在类型：【${type}】`) && (Ele = InputH) }
    if (!this.valueResolver[`${key}`]) this.valueResolver[`${key}`] = resolvers[`${type}`]
    return <Ele key={key} fieldOptions={{rules:[]}} label={Intler.getIntl(label) || label} id={key} form={form} />
  }

  render() {
    const { rowKey,rowSelection,gridOptions, ...otherProps } = this.props
  
    const agProps = {
      rowKey,
      // activePanel:false,
      gridOptions:{
        ...gridOptions,
        rowSelection:this.lookUpStore.rowSelection,    // 是否多选
        // rowSelection:'single',    // 是否多选
        // rowMultiSelectWithClick:true,
      },
      fetch: {
          queryKey: this.lookUpStore.api, // 后台api配置
           // queryMethod: Promise,                // 也可以自己定义请求方法 Promise对象
      },
    }

    return (
      <Fragment>
        <div className={styles.lookupSearch}>
          <Form key={`Form_${this.rowKey}`} layout="inline" >
            <Row gutter={8}>
              {this.lookUpStore.inputItems.map((it) => {
                return (
                  <Col span={it.span || 8} key={it.key}>
                    {this.genInput(it)}
                  </Col>
                )
              })}
              <Col span={8}>
                <Btns.search algin="left" key="search" onClick={this.handleSearch} />&nbsp;
                <Btns.reset key="btns.reste" onClick={this.handleReset} />
              </Col>
            </Row>
          </Form>
        </div>
        <AgGridPro
          ref={ref => {this.gridRef = ref}} // 获取咱们封装的grid引用 用params.agApi替换
          columnDefs={this.lookUpStore.columns}
          onGridReady={this.onGridReady}
          {...agProps}
        />
      </Fragment>
    )
  }
}

export default LookUpTable
