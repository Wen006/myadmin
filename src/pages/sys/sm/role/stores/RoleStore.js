/* eslint-disable prefer-destructuring */
import lodash from 'lodash'
import { observable, toJS } from 'mobx';
import Global from '@/stores/common/Global';
import { arrayToTree } from '@/utils/utils'
import {getNow} from '@/utils/util.date'
import { MBox, Intler } from '@/components';

export default class RoleStore {

    formFields = ['remark','roleName','roleCode','id']

    selectRoleRowNode;

    editRow;

    form;

    @observable
    edittable =false;

    userAgStore;

    treeJson=[];

    @observable
    menuCheckKeys = [] 

    treeRef;
 
    // 角色切换时
    onSelectionChanged = (params) =>{ 
       this.selectRoleRowNode = params.api.getSelectedNodes()[0];
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
            const time = `${+getNow()}`;
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
        return data;
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
    initAuthUser = async ({agStore,agApi}) =>{
        this.userAgStore = agStore;
        this.userAgApi = agApi
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
            this.userAgApi.clearSelectRows();
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
        const {success,datas} = await Global.callMethod({key:'SYS_GET_MENUID_BY_ROLE',params:{id:roleInfo.id}});
        if(success) this.menuCheckKeys = datas;
        return this.menuCheckKeys;
    }

    fetchAuthUser = (roleInfo={}) => {
        if(this.userAgStore){this.userAgStore.submit({roleId:(roleInfo.id||-1)});}
    }

    saveRoleInfo = () =>{
        this.form.validateFieldsAndScroll((error,values)=>{
            if(!error){
                const params = {
                    ...values,
                    menuIds:this.getMenuKeysForSave(),
                }
                Global.callMethodWithSpin({key:'SYS_ROLE_SAVE_OR_UPDATE',params}).then(({success,datas,returnMessage})=>{
                    if(success){
                        MBox.success(Intler.getIntl("common.save.success"));
                        if(this.selectRoleRowNode) this.selectRoleRowNode.updateData(lodash.assign(this.selectRoleRowNode.data,datas));
                        this.setFormValues(datas);
                    }else{
                        MBox.error(returnMessage||Intler.getIntl("common.save.fail"))
                    }
                });    
            }
        })
    }

    delRoleInfo = async (ids) =>{
        const {success,datas,returnMessage} = await Global.callMethodWithSpin({key:'SYS_ROLE_DELETE',params:ids})
        if(success){
            MBox.success(Intler.getIntl("common.delete.success"));
        }else{
            MBox.error(returnMessage||Intler.getIntl("common.delete.fail"))
        } 
    }

    // 获取叶子节点保存
    getMenuKeysForSave = ()=>{ 
        if(this.treeRef&&this.treeRef.tree){
            const { halfCheckedKeys,checkedKeys } = this.treeRef.tree.state
            return [].concat(halfCheckedKeys).concat(checkedKeys);
        }
        return  [];
    } 

    getMenuCheckKeys = () =>toJS(this.menuCheckKeys);

}