
import { observable } from 'mobx';

export default class MobxStore{

    @observable count = 0;
  
    plus=()=>{ 
      this.count += 1;
    }
    
    minus=()=>{
      this.count -= 1;
    } 
}