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
        const { api,title,columns,condition:{inputItems=[]}, intlDone = false } = config
        if(!intlDone){ // 进行国际化
            columns.forEach(col=>{
                col.headerName = Intler.getIntl(col.headerName);
            }); 
            inputItems.forEach(element => {
                element.label = Intler.getIntl(element.label);
            });
            config.title = Intler.getIntl(title);
            config.intlDone = true;
        }
        this.title = this.title || config.title;
        this.columns = columns;
        this.inputItems = inputItems;
        this.api = api;
        // this.columns.unshift({field:'',headerName:'',checkboxSelection:true,width:40,pinned:'left'})
    }

}