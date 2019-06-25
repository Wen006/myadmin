/**
 * @description 角色管理和菜单公用一个model
 * @author wennn
 * @time 2018.1.9
 */
import React, { Fragment } from 'react';
import { Btns,Intler,MPCConfirm } from '@/components';
import styles from '@/pages/common.less';
import AgGridPro from '@/components/AgGrid/AgGridPro';
import { Card,Icon, Input,Button } from 'antd';
  
 
class RoleList extends React.Component {
    columns = [
        {
            headerName: Intler.getIntl('menu.info.menuName'),
            field: 'roleName',
            key: 'roleName',
            width: 120,
        },
        {
            headerName: Intler.getIntl('menu.info.menuCode'),
            field: 'roleCode',
            key: 'roleCode',
            align: 'center',
            width: 60,
        },
        {
            headerName: Intler.getIntl('common.action'),
            field: 'action',
            key: 'action',
            width: 60,
            align: 'center',
            cellRenderer: 'actionCellRenderer'
        },
    ];

    extra = (
      <Button.Group className={styles.treeBtn}>
        {/* <Button type="primary" onClick={this.handleSearch} icon="search" /> */}
        <Button type="primary" onClick={() => {}} icon="plus" />
        <MPCConfirm
          type="del"
          onConfirm={() => this.handleDel()}
        >
          <Button type="primary" onClick={() => {}} icon="delete" /> 
        </MPCConfirm>
      </Button.Group>
    )

     

  constructor(props) {
    super(props); 
  }


  // 角色和菜单信息初始化
  componentDidMount = () => {
    
  };

  handleSearch = (v) =>{  
    this.agStore.submit({keyWord:v});
  }

  handleChange = (e) =>{
    this.setState({keyWord:e.target.value})
  }
 
  onGridReady = (params,agStore) =>{
    this.agStore = agStore;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.agApi = params.agApi; // 用这个代替之前的ref方式引用（推荐的）
    this.agStore.submit({}); // 调用store查询数据 页面一加载就查询
    this.agStore.gridProApi.autoSizeAll();
  }

  render() { 

    const agProps = {
        fetch: {
            queryKey: 'SYS_USER_LIST_BY_DTO', // 后台api配置
            // queryMethod: Promise,                // 也可以自己定义请求方法 Promise对象
        },
        gridOptions: {
          rowSelection:'single',    // 是否多选
          frameworkComponents: {
            actionCellRenderer: params  => (
              <MPCConfirm
                key="del"
                type="del"
                onConfirm={() => {
                  this.handleOpe('delete', params.data);
                }}
              >
                <Icon style={{ fontSize: '20px' }} type="delete" />
              </MPCConfirm> 
            )
          }
        }
        
    }
   
    return (
      <div className={styles.treeWrap}>
        <Card 
          title={
            <Input.Search onSearch={this.handleSearch} placeholder={Intler.getIntl('common.search.keyword')} onChange={this.handleChange} />
          }
          bodyStyle={{
            padding:'10px'
          }}
          bordered={false}
          extra={this.extra}
        >
          <AgGridPro 
            columnDefs={this.columns}
            {...agProps}
            onGridReady={this.onGridReady}
            activePanel={false}
          />
        </Card>
      </div>
    );
  }
}

export default RoleList;
