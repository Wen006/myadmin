/**
 * @description 角色模块
 * @author wennn
 * @time 2018.1.8
 */
import React from 'react';
import { connect } from 'dva';
import styles from '@/pages/common.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import RoleInfoList from './RoleInfoList';
 
export default class RoleInfoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // 是否显示遮罩层
  showLoading = fakeGlobal => {
    // this.props.dispatch && this.props.dispatch({ type: 'app/updateState', payload: { fakeGlobal } })
    const { dispatch } = this.props;
    if (dispatch) dispatch({ type: 'app/updateState', payload: { fakeGlobal } });
  };

  render() {
    const { intl } = this.props;

    // 列表页面属性
    const listProps = {
      showLoading: this.showLoading,
      intl,
    };

    // const breadCrumbList = [
    //   // {
    //   //   title: "系统管理",
    //   //   href: "#",
    //   // },
    //   {
    //     title: "角色管理",
    //     href: "#",
    //   },
    // ]

    return (
      <PageHeaderWrapper>
        <div className={styles.contentLayout}>
          <RoleInfoList {...listProps} />
        </div>
      </PageHeaderWrapper>
    );
  }
}
