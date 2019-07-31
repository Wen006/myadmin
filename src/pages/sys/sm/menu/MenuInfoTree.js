/**
 * @description 菜单树
 * @author zhaor
 * @time 2018.8.15
 */
import React from 'react';
import { Tree } from 'antd';
import styles from '@/pages/common.less';
import { toJS } from 'mobx';

const { TreeNode } = Tree;
 
export default ({ treeJson, searchValue: sVal, ...treeProps }) => {
  const levelMap = {};

  // 递归生成菜单
  const getMenus = (menuTreeN, searchValue) => {
    const treeEle = menuTreeN.map(item => {
      let menuName = <span>{item.menuName}</span>;
      if (searchValue) {
        const index = item.menuName.indexOf(searchValue); // 搜索结果高亮
        const beforeStr = item.menuName.substr(0, index);
        const afterStr = item.menuName.substr(index + searchValue.length);
        menuName = index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: '#f50' }}>{searchValue}</span>
            {afterStr}
          </span>
          ) : (
            <span>{item.menuName}</span>
          );
      }

      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid;
        }
        return (
          <TreeNode title={menuName} showIcon={item.icon} key={`${item.itemid}`} data={item}>
            {getMenus(item.children,searchValue)}
          </TreeNode>
        );
      }
      return <TreeNode title={menuName} key={item.itemid} data={item} />;
    });
    return treeEle;
  };

  const Ele = getMenus(treeJson, sVal); 
  return (
    <Tree 
      showLine 
      draggable 
      checkable 
      {...treeProps} 
      checkedKeys={toJS(treeProps.checkedKeys)}
      expandedKeys={toJS(treeProps.expandedKeys)}
      selectedKeys={toJS(treeProps.selectedKeys)}
      className={styles.treeCon}>
      {Ele}
    </Tree>
  );
};
