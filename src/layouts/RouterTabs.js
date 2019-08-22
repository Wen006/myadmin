/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'; 
import classNames from 'classnames';
import { Tag, Dropdown, Icon, Tooltip, Menu,Tabs } from 'antd';
import { withRouter } from "react-router-dom";
import styles from './layouts.less';
import Iconfont from '@/components/Iconfont/index'
import { isUrl } from '@/utils/utils';

const { SubMenu } = Menu;
const { TabPane } = Tabs;


// 模拟全局路由配置对象，
let routerCcnfig = {};

// 通过 pathname 获取 pathname 对应到路由描述信息对象
const getTitleByPathname = (pathname) => {
    return routerCcnfig[pathname];
}

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

const Positions={
  top:'top', 
  right:'right', 
  bottom:'bottom',
  left:'left'
}

@withRouter
class RouterTabs extends Component {

  static unListen = null;

  static defaultProps = {
    initialValue: [],
  };

  constructor(props) {
    super(props);
    const { history, location:{pathname}, route={}, homeUrl } = this.props;
    const {routes = []} = route
    this.routes = routes
    routerCcnfig = this.routeToMap(this.routes,routerCcnfig);

    if(pathname !== homeUrl){ // 浏览器刷新的时候要跳转首页
      history.push({
        pathname: homeUrl,
        search: "",
      }); 
    }
    // const menuTabs = []
    // const refsTag = []
    // const searchMap = {}

    // const homeRouteInfo = routerCcnfig[homeUrl]
    // if(homeRouteInfo){
    //   const menuInfo = this.getMenuInfo(homeUrl)||{};
    //   const name =  menuInfo.name||homeRouteInfo.name||pathname;
    //   menuTabs.push({...homeRouteInfo,name})
    //   refsTag.push(homeUrl);
    //   searchMap[homeUrl] = ""
    // }

    this.state = {
      currentPageName: "", // 当前路由对应到 pathname
      refsTag: [], // tabs 所有到所有页签
      searchMap: {}, // 每个 页签对应的路由参数
      menuTabs:[],
      type:'editable-card',// editable-card line card
      // size:'small',
      hideAdd:true,
      tabPosition:Positions.top,
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    if (this.unListen) {
      this.unListen();
      this.unListen = null;
    }
    // 监听路由切换事件
    this.unListen = this.props.history.listen((_location) => {
      if (this.didUnMounted) {
        return;
      }
      if (this.notListenOnce) {
        this.notListenOnce = false;
        return;
      }
      const { pathname } = _location;

      if (pathname === '/' || !getTitleByPathname(pathname)) {
        this.setState({
          currentPageName: "404",
        });
        return;
      }
      const newRefsTag = [...this.state.refsTag];
      const newMenuTabs = [...this.state.menuTabs];

      const currentPathname = pathname;
      if (newRefsTag.indexOf(currentPathname) === -1) {
        newRefsTag.push(currentPathname);
        const tabInfo = {
          name:_location.query.titleName||this.getMenuInfo(pathname).name||routerCcnfig[pathname].name,
          icon:this.getMenuInfo(pathname).icon
        }
        if(_location.query)
        newMenuTabs.push({...routerCcnfig[pathname],...tabInfo})
      }
      // 存放参数
      this.state.searchMap[pathname] = _location.search;

      this.setState({
        currentPageName: pathname,
        refsTag: newRefsTag,
        menuTabs:newMenuTabs,
      });
    });
  }

  componentWillUnmount() {
    this.didUnMounted = true;
    if (this.unListen) {
      this.unListen();
      this.unListen = null;
    }
  }
 
  getMenuInfo = (pathname) =>{
    const { breadcrumbNameMap={} } = this.props
    return breadcrumbNameMap[pathname]||{}
  }

  routeToMap = (routes,ar) =>{  
    return routes.reduce((pv,cv,ci,arr)=>{ 
      if(!(cv.routes&&cv.routes.length > 0)&&cv.component&&cv.path){
        pv[`${cv.path}`] =  cv;
      }
      if(cv.routes){
        return this.routeToMap(cv.routes,pv);
      }
      return pv;
    },ar)
  }
 
  handleClose = (tag) => {
    const { pathname } = this.props.location;
    const { history } = this.props;
    let { currentPageName } = this.state;
    const { searchMap } = this.state;
    const newRefsTag = [...this.state.refsTag.filter(t => t !== tag)];
    if (currentPageName === tag) {
      currentPageName = this.state.refsTag[this.state.refsTag.indexOf(tag) - 1];
    }
    this.setState({
      currentPageName,
      refsTag: newRefsTag,
    });
    if (pathname !== currentPageName) {
      this.notListenOnce = true;
      history.push({
        pathname: currentPageName,
        search: searchMap[currentPageName],
      });
    }
  };

  handleClickTag = (tag, e) => {
    if (e && e.target.tagName.toLowerCase() === 'i') {
      return;
    }
    if (tag !== this.state.currentPageName) {
      this.props.history.push({
        pathname: tag,
        search: this.state.searchMap[tag] ? this.state.searchMap[tag].replace(/from=[^&]+&?/, '') : undefined,
      });
    }
  }

  handleMenuClick = (e) => {
    const { homeUrl, history } = this.props
    const eKey = e.key;
    let currentPathname = this.props.location.pathname;
     
    if (eKey === '1') { 
      currentPathname = homeUrl;
      const refsTag = [this.state.refsTag[0]]
      const menuTabs = [this.state.menuTabs[0]]
      const searchMap = {
        [`${homeUrl}`]:this.state.searchMap[homeUrl]
      }
      setTimeout(()=>this.setState({refsTag,menuTabs,searchMap}))
    } else if (eKey === '2') {
      if(currentPathname === homeUrl){
        this.handleMenuClick({key:'1'});
      }else{
        const refsTag = [`${homeUrl}`,`${currentPathname}`];
        const menuTabs = this.state.menuTabs.filter(it=>it.path == homeUrl || it.path == currentPathname);
        const searchMap = {
          [`${homeUrl}`]:this.state.searchMap[homeUrl],
          [`${currentPathname}`]:this.state.searchMap[currentPathname],
        }
        setTimeout(()=>this.setState({refsTag,menuTabs,searchMap}))
      }
    } else {
      this.handleClickTag(eKey);
      return;
    }
    if (currentPathname !== this.state.currentPageName) {
      history.push({
        pathname: currentPathname,
        search: this.state.searchMap[currentPathname],
      });
    }
  }

  getTabEle = (path) =>{
    const { noMatch } = this.props
    const {component} = routerCcnfig[path]||{};
    const tabApi = {
      closeThisTab:()=>this.clearRouteInfo(this.state.currentPageName)
    }
    return React.createElement(component,{...this.props,tabApi}) || noMatch || 'Not Found';
  }

  handleEditTab = (targetKey, action) =>{ 
    if(action == 'remove'){
      this.clearRouteInfo(targetKey)
    }
  }

  clearRouteInfo = (path) =>{
    const {history,homeUrl} = this.props
    const { 
      currentPageName, // 当前路由对应到 pathname
      refsTag, // tabs 所有到所有页签
      searchMap, // 每个 页签对应的路由参数
      menuTabs,
    } = this.state 

    if(path){
      const targetIndex = refsTag.findIndex(p=>p === path);
      if(targetIndex>-1){
        refsTag.splice(targetIndex,1);
        if(searchMap[path]) delete searchMap[path];
        menuTabs.splice(targetIndex,1)
      }  
      if(refsTag.length > 0){
        if(currentPageName == path){
          history.goBack();
        } 
      }else if(homeUrl)history.push(homeUrl);
    }
    this.setState({currentPageName, // 当前路由对应到 pathname
      refsTag, // tabs 所有到所有页签
      searchMap, // 每个 页签对应的路由参数
      menuTabs})
  }

  handleChangeTab = (targetKey) =>{
    if (targetKey !== this.state.currentPageName) {
      this.props.history.push({
        pathname: targetKey,
        search: this.state.searchMap[targetKey],
      });
    }
  }

  render() {
    const { currentPageName,refsTag, menuTabs=[],...otherProps } = this.state; 
    // const { className, style } = this.props;
    // const cls = classNames(styles['router-tabs'], className);

    const tags = menuTabs.map(({path,name,icon}, index) => {
      const pathname = path
      
      const routeInfo =getTitleByPathname(pathname); // 这里假设每个pathname都能获取到指定到页面名称
      
      const title = routeInfo ? name || routeInfo.name || "未配置国际化" : '404';
      
      const isLongTag = title.length > 30;
      const tagElem = (
        <Tag
          key={pathname}
          data-key={pathname}
          className={classNames(styles.tag,
            { [styles.active]: pathname === currentPageName })}
          onClick={e => this.handleClickTag(pathname, e)}
          closable={index !== 0}
          afterClose={() => this.handleClose(pathname)}
        >
          {getIcon(icon)}
          <span className={styles.icon} />
          {isLongTag ? `${title.slice(
            0, 30)}...` : title}
        </Tag>
      );
      return isLongTag
        ? <Tooltip title={title} key={`tooltip_${pathname}`}>{tagElem}</Tooltip>
        : tagElem;
    });
    this.tags = tags;
    /* eslint-disable */
    const  operations = <Dropdown overlay={
        <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">关闭所有</Menu.Item>
        <Menu.Item key="2">关闭其他</Menu.Item>
        <SubMenu title="切换标签">
          {
            tags.map(item => (<Menu.Item key={item.key}>{item.props.children}</Menu.Item>))
          }
        </SubMenu>
      </Menu>
    }
    >
      <Tag size={'small'} color="#2d8cf0"
        style={{ marginLeft: 12 }}>
        标签选项 <Icon type="down" />
      </Tag>
    </Dropdown>
    return (
      <div className={styles.tabMain}> 
        <Tabs 
          {...otherProps} 
          activeKey={currentPageName} 
          onChange={this.handleChangeTab}
          onEdit={this.handleEditTab}
          tabBarExtraContent={operations} 
        > 
          {
            menuTabs.map(it=>{ 
                return(
                  <TabPane 
                  closable={it.closeable != false}
                  tab={<span>{getIcon(it.icon)} {it.name}</span>
                  // <Link to={it.path||it.id}>{it.name||it.id||""}</Link>
                  } key={it.path||it.id||"404"} >
                    {this.getTabEle(it.path)}     
                  </TabPane> 
                )
            })
          }
        </Tabs>
      </div>
    );
  }
}

export default RouterTabs