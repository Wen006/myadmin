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
import RoleStore from './stores/RoleStore'
  
export default class RoleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.roleStore =  new RoleStore();
  }

  componentDidMount(){
   
  }
 
  render() { 
    return (
      <PageHeaderWrapper>
        <div className={styles.contentLayout}>
          <Row>
            <Col span={10}>
              <Card bordered hoverable={false}>
                <RoleList roleStore={this.roleStore} />
              </Card>
            </Col>
            <Col span={14}>
              <Card bordered hoverable={false}>
                <RoleInfo roleStore={this.roleStore} />
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}
