
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import { Tag, Dropdown, Icon, Tooltip, Menu } from 'antd';
import styles from './RouterTabs.less';
import {withRouter} from "react-router-dom";

const { SubMenu } = Menu;


// 模拟全局路由配置对象，
let routerCcnfig = {};

// 通过 pathname 获取 pathname 对应到路由描述信息对象
const getTitleByPathname = (pathname) => {
    return routerCcnfig[pathname]||<div>hello</div>;
}

@withRouter
export class RouterTabs extends Component {
  static unListen = null;
  static defaultProps = {
    initialValue: [],
  };

  constructor(props) {
    super(props);
    const { pathname,router:{routes} } = this.props.location;
    routerCcnfig = routes
    this.state = {
      currentPageName: [], // 当前路由对应到 pathname
      refsTag: [], // tabs 所有到所有页签
      searchMap: {}, // 每个 页签对应的路由参数
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
          currentPageName: '',
        });
        return;
      }
      const newRefsTag = [...this.state.refsTag];
      const currentPathname = pathname;
      if (newRefsTag.indexOf(currentPathname) === -1) {
        newRefsTag.push(currentPathname);
      }
      this.state.searchMap[pathname] = _location.search;
      this.setState({
        currentPageName: pathname,
        refsTag: newRefsTag,
      });
      // 假如是新的 导航item 添加进来,需要在 添加完成后调用 scrollIntoTags
      clearTimeout(this.tagChangeTimerId);
      this.tagChangeTimerId = setTimeout(() => {
        this.scrollIntoTags(pathname);
      }, 100);
    });
    const { pathname } = this.props.location;
    this.scrollIntoTags(pathname);
  }

  componentWillUnmount() {
    this.didUnMounted = true;
    if (this.unListen) {
      this.unListen();
      this.unListen = null;
    }
  }

  scrollIntoTags(pathname) {
    let dom;
    try {
      // eslint-disable-next-line react/no-find-dom-node
      dom = ReactDom.findDOMNode(this)
        .querySelector(`[data-key="${pathname}"]`);
      if (dom === null) {
        // 菜单 还没有假如 导航条(横)
      } else {
        // 菜单 已经加入 导航条(横)
        dom.scrollIntoView(false);
      }
    } catch (e) {
      // console.error(e);
    }
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
    const eKey = e.key;
    let currentPathname = this.props.location.pathname;
    const { refsTag } = this.state;

    let newRefsTag;
    if (eKey === '1') {
      newRefsTag = '/';
      currentPathname = '首页';
    } else if (eKey === '2') {
      newRefsTag = [webConfig.indexPath];
      if (currentPathname !== webConfig.indexPath) {
        newRefsTag.push(currentPathname);
      }
    } else {
      this.handleClickTag(eKey);
      return;
    }
    if (currentPathname !== this.state.currentPageName) {
      this.props.history.push({
        pathname: currentPathname,
        search: this.state.searchMap[currentPathname],
      });
    }
    this.setState({
      refsTag: newRefsTag,
    });
  }

  render() {
    const { currentPageName, refsTag } = this.state;
    const { className, style } = this.props;
    const cls = classNames(styles['router-tabs'], className);

    const tags = refsTag.map((pathname, index) => {
      const routeInfo = getTitleByPathname(pathname); // 这里假设每个pathname都能获取到指定到页面名称
      let title = routeInfo ? routeInfo.name : '404';
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
          <span className={styles.icon} />{isLongTag ? `${title.slice(
            0, 30)}...` : title}
        </Tag>
      );
      return isLongTag
        ? <Tooltip title={title} key={`tooltip_${pathname}`}>{tagElem}</Tooltip>
        : tagElem;
    });
    this.tags = tags;
    /* eslint-disable */
    return (
      <div className={cls} style={{
        ...style,
        height: '40px',
        maxHeight: '40px',
        lineHeight: '40px',
        marginRight: '-12px',
      }}>
        <div style={{
          flex: '1',
          height: '40px',
          position: 'relative',
          overflow: 'hidden',
          background: '#f0f0f0',
          padding: '0px 0px',
        }}>
          <div style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '100%',
            top: '0px',
            padding: '0px 10px 0px 10px',
            overflowX: 'auto',
          }}>
            {tags}
          </div>
        </div>
        <div style={{
          width: '96px',
          height: '100%',
          background: '#fff',
          boxShadow: '-3px 0 15px 3px rgba(0,0,0,.1)',
        }}>
          <Dropdown overlay={<Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">关闭所有</Menu.Item>
            <Menu.Item key="2">关闭其他</Menu.Item>
            <SubMenu title="切换标签">
              {
                tags.map(item => (<Menu.Item key={item.key}>{item.props.children}</Menu.Item>))
              }
            </SubMenu>
          </Menu>}
          >
            <Tag size={'small'} color="#2d8cf0"
              style={{ marginLeft: 12 }}>
              标签选项 <Icon type="down" />
            </Tag>
          </Dropdown>
        </div>
      </div>
    );
  }
}