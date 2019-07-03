---
title: InputLookup
subtitle: 弹出选择框
desc: autoId 是否自动生成表格需要的唯一标识 默认取的是id 如果id不能保证唯一 则设置该值为true 默认为false
---

## Tag使用
import { InputLookUp } from '@/components'

<InputLookUp 
    id="userName" 
    form={form} 
    label={Intler.getIntl("sm.user.mag")}  
    title="用户管理多多岛" 
    lookUpKey="SM_USER" 
    rules={[]} 
    // 弹框弹出前调用 boolean
    openBefore={ 
    // true
    // ()=>true
    // ()=>new Promise((resolve,reject)=>{
    //   resolve();// 弹框打开
    //   reject(); // 弹框不打开
    // })
    }
    // 双击选择或者点击ok按钮时会调用触发
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
## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|



