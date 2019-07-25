/* eslint-disable no-param-reassign */
import { getConfig } from '../config/lookUpConfig'
import Intler from '@/components/Intler'


const SelectType = {
    SINGLE:'single',
    MULTIPLE:'multiple',    
}

export default class LookUpStore {

    // 弹框的标题
    title

    // 输入条件
    inputItems = []

    // 选择项目
    selectedRowKeys = []

    // 行配置单选还是多选
    rowSelection

    constructor({lookUpKey,title,rowSelection=SelectType.SINGLE}){
      this.lookUpKey = lookUpKey;
      this.rowSelection = rowSelection
      this.config = getConfig(this.lookUpKey); 
      this.title = title
      this.initStore(this.config)
    } 

    initStore = (config) =>{
        const { api,title,columns,condition:{inputItems=[]}, intlDone=false } = config
        this.title = this.title || intlDone?title:Intler.getIntl(title);
        this.api = api;
        if(!intlDone){
            this.columns = columns.map(col=>{
                col.headerName = Intler.getIntl(col.headerName);
                return col;
            }); 
            config.intlDone = true;
        }
        // this.columns.unshift({field:'',headerName:'',checkboxSelection:true,width:40,pinned:'left'})
        this.inputItems = inputItems;
    }

}