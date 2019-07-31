
import React from 'react';
import { Transfer } from 'antd';
import { observer } from 'mobx-react';
import lodash from 'lodash'

@observer
export default class RoleTransfer extends React.Component {

  constructor(props){
      super(props)
      this.userInfoStore = props.userInfoStore;
  } 

  filterOption =  (inputValue, option) => option.roleName.indexOf(inputValue) > -1;

  handleChange = (targetKeys,flag,c) => {
    this.userInfoStore.targetRoleKeys = targetKeys;
  };

  render() {

    const tProps = {
        disabled:this.userInfoStore.view,
    }

    if(!this.view){
        lodash.assign(tProps,{
            showSearch:true,
            filterOption:this.filterOption,
            onChange:this.handleChange,
        }) 
    }

    return (
      <Transfer
        titles={["所有角色","授权角色"]}
        style={{height:'60vh'}}
        // dataSource={this.userInfoStore.allRoleData}
        // targetKeys={this.userInfoStore.targetRoleKeys}
        dataSource={this.userInfoStore.getAllRoleData()}
        targetKeys={this.userInfoStore.getTargetRoleKeys()}
        listStyle={{width:"40%",height: '100%',textAlign:'left'}}
        render={item => item.roleName}
        {...tProps}
      />
    );
  }
}
 