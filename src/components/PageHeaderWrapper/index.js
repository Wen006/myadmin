import React, { Fragment } from 'react';
import { FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import PageHeader from '@/components/PageHeader';
import { connect } from 'dva';
import GridContent from './GridContent';
import styles from './index.less';
import MenuContext from '@/layouts/MenuContext';
import Iconfont from '@/components/Iconfont/index'
import { isUrl } from '@/utils/utils';


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


const PageHeaderWrapper = ({ children, contentWidth, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <MenuContext.Consumer>
      {value => (
        <PageHeader
          wide={contentWidth === 'Fixed'}
          home={<Fragment>{getIcon('home')}<FormattedMessage id="menu.home" defaultMessage="Home" /></Fragment>}
          {...value}
          key="pageheader"
          {...restProps}
          linkElement={Link}
          itemRender={item => {
            // if (item.locale) {
            //   return <FormattedMessage id={item.locale} defaultMessage={item.title} />;
            // } 
            return <Fragment>{getIcon(item.icon)}{item.title || item.name}</Fragment>
          }}
        />
      )}
    </MenuContext.Consumer>
    {children ? (
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
);

export default connect(({ setting,menu }) => ({
  contentWidth: setting.contentWidth,
  hiddenBreadcrumb:menu.isTab,
}))(PageHeaderWrapper);
