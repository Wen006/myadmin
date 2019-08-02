/* eslint-disable no-unused-expressions */
import React from 'react';
import { Card } from 'antd';
import UserInfoStore from '@/stores/sys/sm/user/UserInfoStore';
import Navigator from '@/stores/common/Navigator';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import UserInfo from './common/UserInfo';

export default class UserInfoEdit extends React.Component {
  constructor(props) {
    super(props);
    const { userInfoStore } = props;
    this.userInfoStore = userInfoStore || new UserInfoStore();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const nav = Navigator.getCurNav();
    this.userInfoStore.record = nav.getParams();
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    const { tabApi } = this.props
    return (
      <PageHeaderWrapper
        title="用户编辑"
        // title="高级表单"
        // content="高级表单常见于一次性输入和提交大批量数据的场景。"
        // wrapperClassName={styles.advancedForm}
      >
        <Card loading={!loaded}>
          {loaded ? (
            <UserInfo
              view={false}
              record={this.userInfoStore.record}
              userInfoStore={this.userInfoStore}
              onClose={() => {
                // Navigator.goBack();
                tabApi.closeThisTab();
              }}
            />
          ) : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
