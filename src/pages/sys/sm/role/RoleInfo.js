import React, { Fragment, Suspense } from 'react'
import { Tabs, Radio } from 'antd';
import RoleForm from './RoleForm'
import { Btns } from '@/components';
import styles from './index.less'
import { observer } from 'mobx-react';

const { TabPane } = Tabs;
 
class RoleInfo extends React.Component{

    tabs = [
        {
            key:"basic",
            title:"基本信息",
            component:()=>import('./RoleForm'), // React.createElement(React.lazy(()=>import('./RoleForm'))),//<RoleForm roleStore={this.roleStore} />
        },
        {
            key:"menuauth",
            title:"菜单权限",
            component:()=>import('./AuthMenu')
        },
        {
            key:"userauth",
            title:"授权用户",
            component:()=>import('./AuthUser')
        }
    ]

    constructor(props){
        super(props)
        this.roleStore = props.roleStore
        this.state={
            mode:"top"
        } 
    }

    componentDidMount(){
      
    }

    render(){ 
        const {mode} = this.state
        return(
          <div className={styles.content}>
            <Tabs defaultActiveKey={this.tabs[0].key} tabPosition={mode} className={styles.tabs}>
              {this.tabs.map(i => (
                <TabPane tab={`${i.title}`} key={i.key}>
                  <Suspense fallback={<Fragment>loading</Fragment>}>
                    {React.createElement(
                      React.lazy(i.component),
                      {
                          roleStore:this.roleStore,
                      }
                    )}
                  </Suspense>
                </TabPane>
            ))}
            </Tabs>
          </div>
        )
    }
}

export default RoleInfo;