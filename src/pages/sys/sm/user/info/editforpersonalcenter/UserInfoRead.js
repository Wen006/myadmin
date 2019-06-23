/**
 * 点击个人中心 路由过来的
 */
import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd'
import PageHeaderLayout from 'layouts/PageHeaderLayout';
import UserInfoStore from 'stores/sys/user/UserInfoStore';
import UserInfo from '../common/UserInfo';
 

@connect(({ user }) => ({
  currentUser:user.currentUser,
}))
export default class UserInfoRead extends React.Component {

  constructor(props) {
    super(props);
    const { userInfoStore } = props;
    this.userInfoStore = userInfoStore || new UserInfoStore(); 
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    const { currentUser } = this.props
    
    return (
      <PageHeaderLayout>
        <Card loading={!loaded}> 
          <UserInfo
            view
            record={currentUser}
            userInfoStore={this.userInfoStore}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}
