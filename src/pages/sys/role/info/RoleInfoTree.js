/**
 * @description 菜单树
 * @author wennn
 * @time 2018.1.9
 */
import React from 'react'
import { Tree } from 'antd'
import { arrayToTree } from 'utils'
import styles from 'routes/common.less'
const {TreeNode} = Tree

const levelMap = []
const MenuInfoTree = ({ treeJson, ...otherProps }) => {
  const menuTree = arrayToTree(treeJson.filter(_ => _.mpid !== '-1'), 'id', 'mpid')
  // 递归生成菜单
  const getMenus = (menuTreeN) => {
    return menuTreeN.map((item) => {
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
  }
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

export default MenuInfoTree
