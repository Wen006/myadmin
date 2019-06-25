/**
 * @description 角色模块
 * @author wennn
 * @time 2018.1.8
 */
import React from 'react';
import styles from '@/pages/common.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Row,Col, Card } from 'antd';
import RoleList from './RoleList'
import RoleInfo from './RoleInfo'
 
export default class RoleIndex extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() { 
    return (
      <PageHeaderWrapper>
        <div className={styles.contentLayout}>
          <Row>
            <Col span={10}>
              <Card bordered hoverable={false}>
                <RoleList />
              </Card>
            </Col>
            <Col span={14}>
              <Card bordered hoverable={false}>
              <RoleInfo />
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}
