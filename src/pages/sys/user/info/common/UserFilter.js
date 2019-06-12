import React, { Fragment } from 'react';
import { Icon, Col, Form,Collapse } from 'antd';
import { Btns, AutoRow, Intler } from '@/components';
import { InputH } from '@/components/FormMark';
import WrappedFilter from '@/components/FilterCache/WrappedFilter';
import styles from '@/pages/common.less';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import FormFilter from '@/components/FormFilter'
import LookUpTable from '@/components/LookUp/LookUpTable'
import LookUp from '@/components/LookUp/LookUp'
import InputLookUp from '@/components/FormMark/Item/InputLookUp'



const Panel = Collapse.Panel

const obUnit = observable.box(-1);

// 简单查询
const SimpleCurr = ({ form, handleSubmit, handleReset, handleShowMoreCondition }) => {
  return (
    <div className={styles.selectnormal}>
      <AutoRow rowProps={{ gutter: 8 }}>
        <InputH
          id="keyCode"
          form={form}
          rules={[]} // 自定义不必填
        />
        <Col>
          <Btns.search onClick={handleSubmit} text={Intler.getIntl('Search')} />
          <Btns.reset onClick={handleReset} text={Intler.getIntl('Reset')} />
          <a onClick={handleShowMoreCondition}>
            {Intler.getIntl('form.filter.condition.complex')}
            <Icon type="down" />  
          </a>
        </Col>
      </AutoRow>
    </div>
  );
};

// 高级查询
const ComplexCurr = ({ form, handleReset, handleSubmit, handleShowMoreCondition }) => {
  const { setFieldsValue } = form;
  return (
    <div className={styles.selectnormal}>
      <InputH id="entityId" form={form} rules={[]} hidden />
      <InputH id="unitId" form={form} rules={[]} hidden />
      <AutoRow colProps={{ span: 6 }}>
        <InputH label="UserAccount" id="userAccount" form={form} rules={[]} />
        {/* <InputLookUp
          form={form}
          label="User_UnitName"
          // nameKey="userName"
          modalKey="unitName"
          lookUpKey="UNIT"
          // readOnly
          options={{ rules: [] }}
          onClear={() => {
            obUnit.set(-1);
            setFieldsValue({ unitName: '', unitId: '', entityName: '', entityId: '' });
          }}
          onOk={(keys, rows) => {
            const row = rows[0];
            obUnit.set(row.id);
            setFieldsValue({
              unitName: row.entityName,
              unitId: row.id,
              entityName: '',
              entityId: '',
            });
          }}
        />
        <InputLookUp
          form={form}
          label="User_EntityName"
          // nameKey="userName"
          modalKey="entityName"
          lookUpKey="ENTITY"
          options={{ rules: [] }}
          readOnly={obUnit == -1}
          disabled={obUnit == -1}
          onClear={() => {
            setFieldsValue({ entityName: '', entityId: '' });
          }}
          onSearchBefore={() => {
            // const unitId = form.getFieldsValue("unitId") || -1;
            return { unitId: obUnit.get() };
          }}
          onOk={(keys, rows) => {
            const row = rows[0];
            setFieldsValue({ entityName: row.entityName, entityId: row.id });
          }}
        /> */}
        <div className={styles.txtR}>
          <Btns.search onClick={handleSubmit} text={Intler.getIntl('Search')} />
          <Btns.reset onClick={handleReset} text={Intler.getIntl('Reset')} />
          <a onClick={handleShowMoreCondition}>
            {Intler.getIntl('form.filter.condition.simple')}
            <Icon type="up" />
          </a>
        </div>
      </AutoRow>
    </div>
  );
};

// 主Form  入口
@observer
class UserFilter extends React.Component {
  // 查询
  handleSubmit = () => {
    const { form, handleSubmit } = this.props;
    const fls = form.getFieldsValue();
    handleSubmit(fls);
  };

  // 重置条件
  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.handleSubmit();
  };
 
  handleShowMoreCondition = ()=>{
    const { moreCondition,changeCondition } = this.props;
    changeCondition(!moreCondition)
  }

  render() {
    const { form, moreCondition,changeCondition } = this.props;

    const queryProps = {
      moreCondition,
      handleShowMoreCondition:()=>{
        changeCondition(!moreCondition)
      },
      handleReset: this.handleReset,
      handleSubmit: this.handleSubmit,
      form,
    };

    return (
      <Form layout="inline">
        {/* <LookUp lookUpKey="USER_INFO" 
                rowSelection="multiple" 
                onOk={(select)=>{
                    console.log("onOk",select)
                }}>
          hello
        </LookUp>
        <LookUpTable rowSelection='multiple' lookUpKey="USER_INFO"/> */}
        <InputLookUp 
          id="userName" 
          form={form} 
          label={Intler.getIntl("user.info.mag")}  
          title="用户管理多多岛" lookUpKey="USER_INFO" 
          rules={[]} 
          // openBefore={
          //   // false
          //   // ()=>false
          //   ()=>new Promise((resolve,reject)=>{
          //     resolve();// 弹框打开
          //     // reject(); // 弹框不打开
          //   })
          // }
          // closeBefore={
          //   // true
          //   // ()=>true
          //   // ()=>new Promise((resolve,reject)=>{
          //   //   // resolve();// 弹框关闭
          //   //   // reject(); // 弹框不关闭
          //   // })
          // }
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
        {/* {
          moreCondition? <ComplexCurr {...queryProps} key="a" />:<SimpleCurr key="b" {...queryProps}  />
        } */}
        {/* <div style={{ textAlign: 'center', paddingBottom: '10px' }} className={styles.searchMore}>
          <a onClick={this.handleShowMoreCondition}>{moreCondition?"展开":"收起"}<Icon type={moreCondition ? 'up' : 'down'} /></a>
        </div> */}
      </Form>
    );
  }
}

export default WrappedFilter(UserFilter);
