import { getConfig } from '../config/lookUpConfig'
import Intler from '@/components/Intler'

export default class LookUpStore {

    title = ""

    inputItems = []

    constructor({lookUpKey}){
      this.lookUpKey = lookUpKey;
      this.config = getConfig(this.lookUpKey);
      this.initStore(this.config)
    } 

    initStore = () =>{
        const { api,title,columns,condition:{inputItems=[]} } = this.config
        this.title = Intler.getIntl(title);
        this.api = api;
        this.columns = columns;
        this.inputItems = inputItems;
    }

}