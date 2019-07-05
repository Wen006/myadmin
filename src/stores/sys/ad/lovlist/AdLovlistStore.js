import { observable } from "mobx";
import Global from "@/stores/common/Global";
import { MBox, Intler } from "@/components";

export default class AdLovlistStore {

    // 查看的时候记录当前的记录
    record;

    // mobx 查询数据加载的时候 遮照
    @observable loading = false;

   // 角色列表初始化
   getAdLovInfo = async (id)=>{
       if(!id) return {};
       this.loading = true;
       const {success,datas} = await Global.callMethod({key:'SYS_AD_LOVLIST_GET_INFO',params:{id}});
       this.record = datas;
       this.loading = false;
       return success?datas:{}
   }

   // 保存角色信息
   saveAdInfo = async (params) =>{
        const {success,datas,returnMessage} = await Global.callMethodWithSpin({key:'SYS_AD_LOVLIST_SAVE_INFO',params});
        if(!success)MBox.error(returnMessage||Intler.getIntl("common.save.fail"));
        return success?datas:undefined;
   }
 
   // 删除记录
   deleteRecord = async (params) =>{
        const {success,datas,returnMessage} = await Global.callMethodWithSpin({key:'SYS_AD_LOVLIST_DEL_INFO',params});
        if(!success)MBox.error(returnMessage||Intler.getIntl("common.delete.fail"));
        return success;
    }


}