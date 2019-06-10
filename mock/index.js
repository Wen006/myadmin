
/**
 * @desc 这个用于处理通用的暴露方法 
 * 在services/config/* 配置的有mocktable属性的就可以自动生产mock
 */
import lodash from 'lodash'
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn,api } from './mock.util'
import { getTableData } from './mock.dao';
import {
    commHandler,
    queryByParams,
    comList,
    comDel,
    comGetOne,
    comSaveOrUpdate,
  } from './mock.controller'
 
const methods = {
    "list":comList,
    "list2":queryByParams, // 不翻页
    "getone":comGetOne,
    "delete":comDel,
    "saveorupdate":comSaveOrUpdate,
  }
   
let proxyMockIntercept = {} 

if(api){
    Object.keys(api).forEach(key=>{
        let {mocktable,mockhandler} = api[`${key}`]
        if(mocktable&&mockhandler&&methods[`${mockhandler}`]){
            proxyMockIntercept[`${getMockPre(key)}`] = methods[`${mockhandler}`]
        }
    })
}

export default proxyMockIntercept
