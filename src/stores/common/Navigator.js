/* eslint-disable import/no-extraneous-dependencies */
import router from 'umi/router';

// import { routerRedux } from 'dva/router';

// const doDispatch = window.g_app._store.dispatch

class Nav {
  title = undefined;

  url = undefined;

  params = {};

  constructor(title, url, params) {
    this.title = title;
    this.url = url;
    this.params = params;
  }

  getTitle = () => {
    return this.title;
  };

  getUrl = () => {
    return this.url;
  };

  getParams = () => {
    return this.params;
  };
}

class Navigator {
  params = {};

  curNav = undefined;

  forward = ({ url, title, params }) => {
    this.curNav = new Nav(title, url, params);
    this.params[url] = this.curNav;
    router.push(url);
  };

  go = n => {
    router.go(n);
  };

  goBack = () => {
    router.goBack();
  };

  goForward = () => {
    router.goForward();
  };

  getForwardParam = () => {
    return this.getCurNav().getParams();
  };

  getTitle = () => {
    return this.getCurNav().getTitle();
  };

  getCurNav = () => {
    return this.curNav ? this.curNav : this.getDefaultNav();
  };

  getDefaultNav = () => {
    return new Nav('', window.location.href, {});
  };
}

export default new Navigator();
