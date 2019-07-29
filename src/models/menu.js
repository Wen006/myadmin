/* eslint-disable no-lonely-if */
import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import { formatMessage } from 'umi/locale';
import { routerRedux } from 'dva/router';
import Authorized from '@/utils/Authorized';
import Global from '@/stores/common/Global'

const { check } = Authorized;

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null;
      }

      let locale = 'menu';
      if (parentName) {
        locale = `${parentName}.${item.name}`;
      } else {
        locale = `menu.${item.name}`;
      }

      const result = {
        ...item,
        name: formatMessage({ id: locale, defaultMessage: item.name }),
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

/**
 * get SubMenu or Item
 */
const getSubMenu = item => {
  // doc: add hideChildrenInMenu
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children), // eslint-disable-line
    };
  }
  return item;
};

/**
 * filter menuData
 */
const filterMenuData = menuData => {
  if (!menuData) {
    return [];
  }
  return menuData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => check(item.authority, getSubMenu(item)))
    .filter(item => item);
};
/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 */
const getBreadcrumbNameMap = menuData => {
  const routerMap = {};

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};

const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);

export default {
  namespace: 'menu',

  state: {
    isTab: false,            // 是否开启 多tab
    seqTabKeys: [],           // 多tab的key顺序
    menuTabs: [],           // 存放tab菜单信息
    activeTabKey: '/',      // 被激活的tab 的key
    menuData: [],           // 菜单数据 树结构的
    breadcrumbNameMap: {},  // 面包屑集合 {key[url]:value[menuData]}
  },

  effects: {
    *getMenuData({ payload }, { put }) {
      const { routes, authority } = payload;
      const {datas:menuData} =yield Global.callMethod({key:'SYS_MENU_QUERY_TREE',params:{}})
      // const menuData2 = filterMenuData(memoizeOneFormatter(routes, authority));
      const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(menuData);
      yield put({
        type: 'save',
        payload: { menuData, breadcrumbNameMap },
      });
    },
    *addMenuTab({ payload }, { put }) {
       const { path,currTab } = payload
       yield put({
         type:'addTab',
         payload:{
          path,
          currTab,
         }
       })
       yield put(routerRedux.push({pathname:path}))
    }, 
    *removeTab({ payload }, { put,select }) {
      // const { activeKey } = action.payload 
      // const { menuTabs }  = select(_=>_.menu)
      // if(activeKey&&state.menuTabs.length > 0){  
      //   state.menuTabs = state.menuTabs.filter(it=>it.path != activeKey);
      //   if(state.activeTabKey == activeKey){
      //     state.seqTabKeys.length = state.menuTabs.length;
      //     state.activeTabKey = state.seqTabKeys.length>0?state.seqTabKeys[state.seqTabKeys.length-1]:"/";
      //   }else{
      //     state.seqTabKeys = state.seqTabKeys.filter(k=>k != activeKey);
      //   }
      // }
    }, 
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    addTab(state, action) {
      const { path,currTab } = action.payload
      if(currTab&&!state.menuTabs.some(it=>it.path == path)){
        state.menuTabs.push(currTab); 
        state.seqTabKeys.push(path);
      }else{ // 说明有tab 那么把seqKey 切换顺序
        if(state.seqTabKeys.length> 0 && state.seqTabKeys[state.seqTabKeys.length-1] != path){
          state.seqTabKeys = state.seqTabKeys.filter(it => it != path).concat(path);
        }
      }
      return {
        ...state,
        activeTabKey:path,
      };
    },
    removeTaba(state, action) {
      const { activeKey } = action.payload 
      if(activeKey&&state.menuTabs.length > 0){  
        state.menuTabs = state.menuTabs.filter(it=>it.path != activeKey);
        if(state.activeTabKey == activeKey){
          state.seqTabKeys.length = state.menuTabs.length;
          state.activeTabKey = state.seqTabKeys.length>0?state.seqTabKeys[state.seqTabKeys.length-1]:"/";
        }else{
          state.seqTabKeys = state.seqTabKeys.filter(k=>k != activeKey);
        }
      }
      return {
        ...state,
      };
    },
    removeAllTab(state, action) {  
      return {
        ...state,
        menuTabs:[],
        activeTabKey:'/',
      };
    },
    changeActiveTab (state,action){
      const { activeKey } = action.payload
      return {
        ...state,
        activeTabKey:activeKey,
      }
    }

  },
};
