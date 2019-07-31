/* eslint-disable no-unused-expressions */

import lodash from 'lodash'
import { observable, toJS } from 'mobx';
import Global from '@/stores/common/Global';
import {MBox,Intler} from '@/components';
import { arrayToTree } from '@/utils/utils';

const api = {
  queryMenuData: 'SYS_MENU_QUERY_DATA',
  saveOrUpdateMenuInfo: 'SYS_MENU_SAVE_OR_UPDATE',
  // getMenu: `${APIURL}/menuInfo/getMenu`,
  // listByDto: `${APIURL}/menuInfo/listByDto`,
  // queryMenuInfo: `${APIURL}/menuInfo/queryMenuInfo`,
  // queryMenuLangInfo: `${APIURL}/menuInfoLang/queryByParam`,
  deleteMulti: `SYS_MENU_DELETE`,
};

export default class MenuInfoStore {

  autoExpandParent = true;

  @observable loading = false;

  @observable searchValue = '';

  treeData = []; // 原始数据

  @observable treeJson = []; // 树结构的

  menuMap = {};

  @observable checkedKeys = [];

  @observable expandedKeys = [];

  @observable selectedKeys = [];

  selectRow = undefined;

  fetchTreeJson = async params => {
    this.loading = true;
    const { datas = [] } = await Global.callMethod({
      key: api.queryMenuData,
      params,
    });
    this.clearData();
    this.loading = false;
    this.treeData = this.loadMenuTree(datas);
    return this.treeData;
  };

  saveOrUpdateMenuInfo = async params => {
    const { success, returnMessage, datas = [] } = await Global.callMethodWithSpin({
      key: api.saveOrUpdateMenuInfo,
      params,
    });
    if (success) {
      MBox.success(Intler.getIntl('common.save.success'));
    } else {
      MBox.error(returnMessage||Intler.getIntl('common.save.fail'));
      return {};
    }
    datas.itemid = this.selectRow.itemid;
    this.menuMap[datas.itemid] = datas
    lodash.assign(this.selectRow,datas)
    this.selectedKeys = [`${datas.itemid}`]; 
    this.treeData.some(it=>{
      if(it.itemid == this.selectRow.itemid){
        lodash.assign(it,datas); 
        return true;
      }
      return false;
    })
    this.treeJson = this.listToTree(this.treeData)
    return this.selectRow;
  };

  deleteMulti = async params => {
    const { success, returnMessage, datas = [] } = await Global.callMethodWithSpin({
      key: api.deleteMulti,
      params,
    });
    if (success) {
      MBox.success(Intler.getIntl('common.delete.success'));
      this.fetchTreeJson();
    }else{
      MBox.error(returnMessage)
    }
    return success;
  };

  loadMenuTree = data => { 
    if(data && data.length > 0){
      data.forEach(ele=>{
        lodash.assign(ele,{itemid:`${ele.id}`})
        this.menuMap[ele.itemid] = ele; 
      })
    }

    this.treeJson = this.listToTree(data);
    return data;
  };

  listToTree = menuList => {
    
    const ds =lodash.cloneDeep(menuList).filter(_ => _.mpid !== '-1');
    const treeJson = arrayToTree(ds, 'itemid', 'parentId');
    return treeJson;
  };

  fetchKidId = (node, exKidIds) => {
    exKidIds.push(node.itemid);
    if (node.children && node.children.length > 0) {
      node.children.forEach(it => {
        this.fetchKidId(it, exKidIds);
      });
    }
  };

  // 获取所有的上级节点
  getParentIds(item, expandedKeys) {
    if (!item || !item.mpid) return;
    const { mpid } = item;
    if (mpid && mpid != '' && mpid != '-1') {
      expandedKeys.push(`${mpid}`);
      this.getParentIds(this.menuMap[`${mpid}`], expandedKeys);
    }
  }

  onSelect = (__selectedKeys, info) => {
    this.selectedKeys = __selectedKeys;
    this.selectRow = __selectedKeys.length > 0 ? info.selectedNodes[0].props.data : undefined;
    return this.selectRow;
  };

  onCheck = (__checkedKeys, e) => {
    this.checkedKeys = __checkedKeys;
  };

  onExpand = (__expandedKeys, a) => {
    const { expanded, node } = a;
    let expandedKeys = [...this.expandedKeys];
    const npd = node.props.data;
    if (npd && !expanded) {
      const itemids = [];
      this.fetchKidId(npd, itemids);
      const idStr = itemids.join(',');
      if (itemids.length > 0) {
        expandedKeys = expandedKeys.filter(it => {
          return !idStr.includes(`${it},`);
        });
      }
    }
    this.expandedKeys = expanded ? __expandedKeys : expandedKeys;
  };

  // 新增菜单
  addTreeNode = () => {
    const { selectRow, expandedKeys } = this;
    const uniqueId = `${new Date().getTime()}`;
    const editNode = {
      id:'', // 页面有隐藏字段  避免是父亲id
      parentId: 0,
      mpid: -1,
      icon: 'xitongguanli',
      remark: null,
      taxisNo: 0,
      path: '#',
      langs: [],
      menuCode: uniqueId,
      menuName: uniqueId,
      itemid: uniqueId,
    };

    // selectRow 若有说明是在改选择项下新增的  那么上级id要取这个选择项目的
    lodash.assign(
      editNode,
      !selectRow
        ? { parentId: 0 }
        : {
            parentId: selectRow.itemid,
          }
    );

    // this.menuMap[editNode.itemid] = editNode;
    
    // 指定展开项
    if (!expandedKeys.includes(editNode.itemid)) {
      expandedKeys.push(`${editNode.itemid}`);
    } 
    //  新增后 要选择的项切换成当前新增的
    this.selectedKeys = [`${editNode.itemid}`];
    this.selectRow = editNode;
    this.treeData.push(editNode);
    this.treeJson = this.listToTree(this.treeData); 
    return editNode;
  };

  clearData = () => {
    this.selectRow = undefined;
    this.selectedKeys = [];
    this.checkedKeys = [];
    this.expandedKeys = [];
    this.menuMap = {};
    this.searchValue = ""
  };

  handleSearch = lodash.debounce((value) =>{
    let expandedKeys = [];
    if (value) {
      expandedKeys = lodash.values(this.menuMap)
        .filter(item => lodash.includes(item.menuName, value))
        .map(it => `${it.id || it.itemid}`);
    }
    lodash.assign(this, {
      searchValue: value,
      autoExpandParent: true,
      expandedKeys,
    });
  },500)

  onSelectTreeNode = selectRow_ => {
    this.fillForm(selectRow_);
    const langs_ = selectRow_.langs || {};
    this.setState({ selectRow: selectRow_, langs: langs_ });
  };

  getExpandedKeys = () =>toJS(this.expandedKeys)

  getCheckedKeys = () => toJS(this.checkedKeys);

  getSelectedKeys = () => toJS(this.selectedKeys);

  
}
