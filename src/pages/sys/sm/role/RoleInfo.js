import React, { Fragment } from 'react'
import { Tabs, Radio } from 'antd';
import RoleForm from './RoleForm'

const { TabPane } = Tabs;


class RoleInfo extends React.Component{
    state={
        mode:"top"
    }

    tabs = [
        {
            key:"basic",
            title:"基本信息",
            component:<RoleForm />
        },
        {
            key:"menuauth",
            title:"菜单权限",
            component:<Fragment>b</Fragment>
        },
        {
            key:"userauth",
            title:"授权用户",
            component:<Fragment>c</Fragment>
        }
    ]

    render(){
        const {mode} = this.state
        return(
          <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            {this.tabs.map(i => (
              <TabPane tab={`${i.title}`} key={i.key}>
                {i.component}
              </TabPane>
          ))}
          </Tabs>
        )
    }
}

export default RoleInfo;