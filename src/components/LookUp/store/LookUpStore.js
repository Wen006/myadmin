import { getConfig } from '../config/lookUpConfig'
import Intler from '@/components/Intler'
import lodash from 'lodash'


const SelectType = {
    SINGLE:'single',
    MULTIPLE:'multiple',    
}

export default class LookUpStore {

    title

    inputItems = []

    selectedRowKeys = []

    rowSelection

    constructor({lookUpKey,title,rowSelection=SelectType.SINGLE}){
      this.lookUpKey = lookUpKey;
      this.rowSelection = rowSelection
      this.config = getConfig(this.lookUpKey);
      this.title = title
      this.initStore(this.config)
    } 

    initStore = () =>{
        const { api,title,columns,condition:{inputItems=[]} } = this.config
        this.title = this.title || Intler.getIntl(title);
        this.api = api;
        this.columns = columns.map(col=>{
            lodash.assign(col,{
                headerName:Intler.getIntl(col.headerName),
            })
            return col;
        }); 
        // this.columns.unshift({field:'',headerName:'',checkboxSelection:true,width:40,pinned:'left'})
        this.inputItems = inputItems;
    }

}