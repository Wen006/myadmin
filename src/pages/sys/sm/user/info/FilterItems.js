import React, { Fragment } from 'react';
import { Button, Icon } from 'antd'
import MBox from '@/components/MBox'

export default (self) => [
  {
    label: '输入关键字',
    id: 'keyWord',
    tableItem: {},
    searchItem: {
      group: 'simple'
    },
    formItem: {}
  },
  {
    label: '用户名称',
    id: 'userName', 
    tableItem: {},
    searchItem: {},
    formItem: {},
  }, 
  {
    label: '用户代码',
    id: 'userCode', 
    tableItem: {},
    searchItem: {},
    formItem: {},
  }, 
  {
    label: '公司',
    id: 'unitName',
    tableItem: {},
    searchItem:{
      type:'InputLookUp',
      lookUpKey:'SM_USER',
      onOk:({selectedRows})=>{
        const {unitName,unitId} = selectedRows[0]
        self.setState({queryParams:{unitName,unitId,entityName:"",entityId:""}})
      },
      onClear:()=>{ 
        self.setState({queryParams:{unitName:"",unitId:"",entityName:"",entityId:""}})
        self.searchBarRef.setFormValues({unitName:"",unitId:"",entityName:"",entityId:""});
      }
    },
    formItem: {}
  },
  {
    label: '部门',
    id: 'entityName',
    tableItem: {},
    formItem: {},
    searchItem: {
      type:'InputLookUp',
      lookUpKey:'SM_USER', 
      openBefore:()=>{ // 返回true 在弹出来选择
        const { unitId,unitName} = self.state.queryParams 
        if(unitName == "" || unitName == undefined) {
          MBox.error("请先选择公司");
          return false;
        }
        return true;
      },
      onSearchBefore:()=>{
        const { unitId,unitName} = self.state.queryParams
        return {unitId,unitName}
      },
      onOk:({selectedRows})=>{
        const {unitName,unitId,entityName,entityId} = selectedRows[0]
        self.setState({queryParams:{entityName,entityId}})
      }
    }
  },
]; 