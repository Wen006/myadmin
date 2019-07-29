/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent, Fragment } from 'react';
import { Layout,Tabs } from 'antd';  

const { TabPane } = Tabs;


export default class SiderMenu extends PureComponent {
  
  routeMap={}

  constructor(props) {
    super(props);
    const {route:{routes}} = props
    this.routes = routes 
    this.routeMap = this.routeToMap(this.routes,this.routeMap)
    this.state = { 
        type:'editable-card',// editable-card line card
        size:'default',
        hideAdd:true,
    };
  }

  routeToMap = (routes,ar) =>{  
    return routes.reduce((pv,cv,ci,arr)=>{ 
      if(!(cv.routes&&cv.routes.length > 0)&&cv.component&&cv.path){
        // pv.push(cv); 
        pv[cv.path] =  cv;
      }
      if(cv.routes){
        return this.routeToMap(cv.routes,pv);
      }
      return pv;
    },ar)
  }

  getTabEle = (path) =>{
    const {component} = this.routeMap[path]||{};
    return React.createElement(component,{...this.props}) || 'xxx';
  }

  handleChangeTab = (activeKey) =>{
    const { dispatch } = this.props
    dispatch({type:'menu/changeActiveTab',payload:{
        activeKey,
    }})
  }

  handleEditTab = (targetKey, action) =>{
    const { dispatch } = this.props
    if(action == 'remove')dispatch({type:'menu/removeTab',payload:{
        activeKey:targetKey,
    }})
  }

 
  render() {
    const { children,menuTabs,activeTabKey } = this.props; 
    const  otherProps ={
        ...this.state,
    }
    return (
      <Fragment> 
        <Tabs 
            {...otherProps} 
            activeKey={activeTabKey} 
            onChange={this.handleChangeTab}
            onEdit={this.handleEditTab}
        >
          {
            menuTabs.map(it=>{
                return(
                  <TabPane tab={it.name||it.id} key={it.path||it.id}>
                    {this.getTabEle(it.path)}     
                  </TabPane> 
                )
            })
          }
        </Tabs>
      </Fragment>
    );
  }
}
