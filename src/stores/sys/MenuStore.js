import { observable } from 'mobx';
import { callMethod } from 'services/ServiceHandler';
import pathToRegexp from 'path-to-regexp';

export const getFlatMenuKeys = menu =>
  menu.reduce((keys, item) => {
    keys.push(item.path);
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children));
    }
    return keys;
  }, []);

const getMenuMatchKeys = (flatMenuKeys, paths) =>
  paths.reduce(
    (matchKeys, path) =>
      matchKeys.concat(flatMenuKeys.filter(item => pathToRegexp(item).test(path))),
    []
  );

const urlToList = url => {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => {
    return `/${urllist.slice(0, index + 1).join('/')}`;
  });
};

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};

/**
 * 获取面包屑映射
 * @param {Array} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const result = {};
const getBreadcrumbNameMap = (menuData, routerData) => {
  if (!Array.isArray(menuData)) {
    return Object.assign({}, routerData);
  }
  let i;
  const childResult = {};
  for (i of menuData) {
    result[i.path] = i;
    if (i.children) {
      i.children.forEach(ele => {
        result[ele.path] = ele;
      });
      getBreadcrumbNameMap(i.children, routerData);
    }
  }
  return Object.assign({}, routerData, result, childResult);
};

export default class MenuStore {
  @observable loading = true;

  @observable navigateBarVisiable = true;

  @observable collapsed = false;

  popoverNav = {};

  menuMode = {};

  breadcrumbNameMap = {};

  routerData = {};

  menuData = [];

  flatMenuKeys = [];

  openKeys = [];

  fetchMenuData = async () => {
    const { datas } = await callMethod({ key: 'SYS_MENU_INFO_GET_MENU', params: {} });
    this.setMenuData(datas);
    return this.menuData;
  };

  setMenuData = menuData => {
    this.menuData = menuData;
    this.menuData.forEach(getRedirect);
    this.breadcrumbNameMap = getBreadcrumbNameMap(this.menuData, this.routerData);
    this.flatMenuKeys = getFlatMenuKeys(menuData);
    return this.menuData;
  };

  /**
   * Convert pathname to openKeys
   * /list/search/articles = > ['list','/list/search']
   * @param  props
   */
  getDefaultCollapsedSubMenus(props) {
    const {
      location: { pathname },
    } =
      props || this.props;
    return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  }

  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => {
        // make dom
        const ItemDom = this.getSubMenuOrItem(item);
        return this.checkPermissionItem(item.authority, ItemDom);
      })
      .filter(item => item);
  };

  // Get the currently selected menu
  // @computed selectedMenuKeys(pathname){
  //   return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  // };

  // conversion Path
  // 转化路径
  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  };

  // permission to check
  checkPermissionItem = (authority, ItemDom) => {
    const { Authorized } = this.props;
    if (Authorized && Authorized.check) {
      const { check } = Authorized;
      return check(authority, ItemDom);
    }
    return ItemDom;
  };

  isMainMenu = key => {
    return this.menus.some(item => key && (item.key === key || item.path === key));
  };

  handleOpenChange = openKeys => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    });
  };

  getRedirectData = () => {
    return redirectData;
  };
}

const gMenuStore = new MenuStore();

export { gMenuStore };
