import React, { Fragment } from 'react'
import { Tree, Card, Button } from 'antd'
import styles from '@/pages/common.less'
import { observer } from 'mobx-react';

const {TreeNode} = Tree

const levelMap = []

const MenuInfoTree = ({ treeJson }) => { 
  // 递归生成菜单
  const getMenus = (menuTreeN) => treeJson.map((item) => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }
        return (
          <TreeNode title={item.menuName} key={item.id} data={item}>
            {getMenus(item.children)}
          </TreeNode>
        )
      }
      return (
        <TreeNode title={item.menuName} key={item.id} data={item} />
      )
   })
  const menuItems = getMenus(menuTree)

  return (
    <div>
      <Tree
        showLine
        draggable
        checkable
        className={styles.roleCon}
        {...otherProps}
      >
        {menuItems}
      </Tree>
    </div>
  )
}

@observer
export default class AuthMenu extends React.Component{

    constructor(props){
        super(props);
        this.roleStore = props.roleStore
        this.state = {
            treeDom:[],
        }
    }

    componentDidMount(){
       this.roleStore.initAuthMenu().then((data)=>{
            const treeDom = this.getMenus(data);
            this.setState({treeDom})
        })
    }

    getMenus = (treeJson) => treeJson.map((item) => {
        if (item.children) {
          if (item.parentId) {
            levelMap[item.id] = item.parentId
          }
          return (
            <TreeNode title={item.menuName} key={`${item.id}`} data={item}>
              {this.getMenus(item.children)}
            </TreeNode>
          )
        }
        return (
          <TreeNode title={item.menuName} key={item.id} data={item} />
        )
    })

    render(){
        const {treeDom} = this.state

        return(
          <Card bordered={false} hoverable={false}>
            <Tree
              showLine
              draggable
              ref={r=>this.roleStore.treeRef=r}
              checkable={this.roleStore.edittable}
              className={styles.roleCon}
              checkedKeys={this.roleStore.getMenuCheckKeys()}
              onCheck={(checkedKeys)=>{
                this.roleStore.menuCheckKeys = checkedKeys;
              }}
            >
              {treeDom}
            </Tree>
          </Card>
        )
    }
}