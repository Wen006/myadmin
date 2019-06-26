/* eslint-disable prefer-destructuring */
import lodash from 'lodash'
import { observable } from 'mobx';
import Global from '@/stores/common/Global';
import { arrayToTree } from '@/utils/utils'
import {getNowTime} from '@/utils/util.date'

export default class RoleStore {

    formFields = ['remark','roleName','roleCode']

    selectRoleRowNodes;

    editRow;

    form;

    @observable
    edittable =false;

    userAgStore;

    treeJson=[];

    @observable
    menuCheckKeys = []
 
    // 角色切换时
    onSelectionChanged = (params) =>{ 
       this.selectRoleRowNode = params.api.getSelectedNodes()[0];
       console.log('onSelectionChanged',this.selectRoleRowNode,params.api.getSelectedNodes())
       if(this.selectRoleRowNode){
           this.editRecord(this.selectRoleRowNode.data)
       }else{
           this.clearInfo();
       }
    }

    editRecord = (data) =>{
        if(data.id){
            this.fetchAuthUser(data);
            this.fetchAuthMenuKey(data);
        }else{
            const time = `${getNowTime()}`;
            lodash.assign(data,{
                roleCode:time,
                roleName:time,
                remark:time,
            })
            this.clearInfo();
        }
        this.editRow = data
        this.setFormValues(this.editRow);
        this.edittable = true;
    }

    // 初始化角色表单
    initForm = ({form}) =>{
        this.form = form;
        if(this.editRow){
            this.setFormValues(this.editRow)
        }
    }

    initAuthMenu = async () =>{
       const { datas } = await this.fetchAllMenuTreeData();
       return datas;
    }

    // 初始化用户
    initAuthUser = async ({agStore}) =>{
        this.userAgStore = agStore;
        if(this.editRow){
            this.fetchAuthUser(this.editRow);
        }
    }

    setFormValues = value =>{
        if(this.form){this.form.setFieldsValue(lodash.pick(value,this.formFields));}
    }

    // 清除右边的明细
    clearInfo = () =>{
        if(this.form)this.form.resetFields();
        if(this.userAgStore) {
            this.userAgStore.clearRowData();
            this.userAgStore.gridProApi.clearSelectRows();
        };
        this.menuCheckKeys = [];
        this.editRow = undefined
        this.edittable = false;
    }

    // ajax
    fetchAllMenuTreeData = async () =>{
        const {success,datas} = await Global.callMethod({key:'SYS_MENU_QUERY_DATA',params:{}});
        if(success){
            this.treeJson = arrayToTree(datas,'id','parentId','children');
        }
        return {success,datas:this.treeJson}
    }

    fetchAuthMenuKey = async (roleInfo) =>{
        const {success,datas} = await Global.callMethod({key:'SYS_GET_MENUID_BY_ROLE',params:{roleId:roleInfo.id}});
        if(success) this.menuCheckKeys = datas;
        return this.menuCheckKeys;
    }

    fetchAuthUser = (roleInfo={}) => {
        if(this.userAgStore){this.userAgStore.submit({roleId:(roleInfo.id||-1)});}
    }



}