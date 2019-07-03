/* eslint-disable no-unused-expressions */

import Global from '@/stores/common/Global';
import {MBox,Intler} from '@/components';
import { observable } from 'mobx';
import lodash from 'lodash'
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

  @observable treeJson = [];

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
    return this.loadMenuTree(datas);
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
    // 保存成功后将数据给当前编辑的变量（主要id） 然后跟新一下
    lodash.assign(datas,{itemid:datas.id})
    delete this.menuMap[this.selectRow.itemid];
    this.menuMap[datas.itemid] = datas
    this.selectRow = datas;
    this.selectedKeys = [`${datas.itemid}`];
    // 页面数据重新渲染 无需查询刷新
    this.treeJson = this.listToTree(lodash.values(this.menuMap)); 
    return datas;
  };

  deleteMulti = async params => {
    const { success, returnMessage, datas = [] } = await Global.callMethodWithSpin({
      key: api.deleteMulti,
      params,
    });
    if (success) {
      MBox.success(Intler.getIntl('DelSuc'));
      this.fetchTreeJson();
    }else{
      MBox.error(returnMessage)
    }
    return success;
  };

  loadMenuTree = data => {
    const menuData = data.map(it=>{
      lodash.assign(it,{itemid:`${it.id}`})
      this.menuMap[it.itemid] = it;
      return it;
    })
    this.treeJson = this.listToTree(lodash.values(this.menuMap));
    return menuData;
  };

  listToTree = menuList => {
    const treeJson = arrayToTree(menuList.filter(_ => _.mpid !== '-1'), 'itemid', 'parentId');
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
      icon: 'setting',
      remark: null,
      taxisNo: 0,
      url: '#',
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

    this.menuMap[editNode.itemid] = editNode;
    
    // 指定展开项
    if (!expandedKeys.includes(editNode.itemid)) {
      expandedKeys.push(`${editNode.itemid}`);
    } 
    //  新增后 要选择的项切换成当前新增的
    this.selectedKeys = [`${editNode.itemid}`];
    this.selectRow = editNode;

    this.treeJson = this.listToTree(lodash.values(this.menuMap));
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
}
