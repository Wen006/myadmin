import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { urlToList } from '../_utils/pathTools';
import { getMenuMatches } from './SiderMenuUtils';
import Iconfont from '@/components/Iconfont/index'
import { isUrl } from '@/utils/utils';
import styles from './index.less';
import MenuLink from './MenuLink';

const { SubMenu } = Menu;

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = icon => {
  if (typeof icon === 'string' && isUrl(icon)) {
    return <img src={icon} alt="icon" className={styles.icon} />;
  }
  if (typeof icon === 'string') {
    // return <Icon type={icon} />;
    return <Iconfont type={icon} />;
  }
  return icon;
};

export default class TabMenu extends PureComponent {

  routeMap = {};

  constructor(props){
    super(props);
    const {route:{routes}} = props
    this.routes = routes 
    this.routeMap = this.routeToMap(this.routes,this.routeMap)
  }

  routeToMap = (routes,ar) =>{  
    return routes.reduce((pv,cv,ci,arr)=>{ 
      if(!(cv.routes&&cv.routes.length > 0)&&cv.component&&cv.path){
        // pv.push(cv); 
        pv[cv.path] =  cv;
      }
      if(cv.routes){
        return this.routeToMap(cv.routes,pv);
      }
      return pv;
    },ar)
  }

  getCurTab = (path) =>{
    return this.routeMap[path] || null;
  }

  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = (menusData, parent) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => this.getSubMenuOrItem(item, parent))
      .filter(item => item);
  };

  // Get the currently selected menu
  getSelectedMenuKeys = pathname => {
    const { flatMenuKeys } = this.props;
    return urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop());
  };

  // 当点击菜单就会多生成一个
  clickMenuLink = (path) =>{
    const {onCollapse,isMobile,dispatch,...other} = this.props
    if(isMobile)onCollapse(true);
    const currTab = this.getCurTab(path);
    dispatch({
      type:'menu/addMenuTab',
      payload:{
        path,
        currTab,
      }
    })
    
  }

  /**
   * get SubMenu or Item
   */
  getSubMenuOrItem = item => {
    // doc: add hideChildrenInMenu
    if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
      const { name } = item;
      return (
        <SubMenu
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) : (
              name
            )
          }
          key={item.path}
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      );
    }
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  };

  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  getMenuItemPath = item => {
    const { name } = item;
    const itemPath = this.conversionPath(item.path);
    const icon = getIcon(item.icon);
    const { target } = item;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      );
    }
    const { location, isMobile, onCollapse } = this.props;
    return (
      <MenuLink
        onClick={()=>this.clickMenuLink(itemPath)}
      >
        {icon}
        <span>{name}</span>
      </MenuLink>
    )
    return (
      <Link
        to={itemPath}
        target={target}
        // replace={itemPath === location.pathname}
        replace={false}
        onClick={
          isMobile
            ? () => {
                onCollapse(true);
              }
            : undefined
        }
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  };

  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  };

  render() {
    const {
      openKeys,
      theme,
      mode,
      location: { pathname },
      className,
      collapsed,
    } = this.props;
    
    // if pathname can't match, use the nearest parent's key
    let selectedKeys = this.getSelectedMenuKeys(pathname);
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    let props = {};
    if (openKeys && !collapsed) {
      props = {
        openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
      };
    }
    const { handleOpenChange, style, menuData } = this.props;
    const cls = classNames(className, {
      'top-nav-menu': mode === 'horizontal',
    });
    return (
      <Menu
        key="Menu"
        mode={mode}
        theme={theme}
        onOpenChange={handleOpenChange}
        selectedKeys={selectedKeys}
        style={style}
        className={cls}
        {...props}
      >
        {this.getNavMenuItems(menuData)}
      </Menu>
    );
  }
}
