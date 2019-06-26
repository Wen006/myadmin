import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { footerTitle,title } from '@/defaultSettings'

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Admin 首页',
          title: 'Admin 首页',
          href: 'http://localhost:6060',
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: <Icon type="wifi" />,
          href: 'https://gitee.com/W006/myadmin',
          blankTarget: true,
        },
        {
          key: title,
          title,
          href: 'http://localhost:6060',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> {footerTitle}
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
