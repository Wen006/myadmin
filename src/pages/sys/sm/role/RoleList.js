/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unused-state */
/**
 * @description 角色管理和菜单公用一个model
 * @author wennn
 * @time 2018.1.9
 */
import React, { Fragment } from 'react';
import { Card,Icon, Input,Button, Divider } from 'antd';
import { observer } from 'mobx-react';
import { Btns,Intler,WConfirm } from '@/components';
import styles from '@/pages/common.less';
import AgGridPro from '@/components/AgGrid/AgGridPro';
import rStyles from './index.less'
  
@observer
class RoleList extends React.Component {
    columns = [
        {
            headerName: Intler.getIntl('sm.menu.menuName'),
            field: 'roleName',
            key: 'roleName',
            width: 120,
        },
        {
            headerName: Intler.getIntl('sm.menu.menuCode'),
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

  constructor(props) {
    super(props); 
    this.roleStore = props.roleStore
    this.form = props.form
  }


  // 角色和菜单信息初始化
  componentDidMount = () => {
    
  };

  handleSearch = (v) =>{  
    this.agStore.submit({keyWord:v}).then(d=>{
      this.roleStore.clearInfo();
      this.agApi.clearSelectRows();
    });
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
    this.agApi.autoSizeAll();
  }

  handleOpe = (flag,data) =>{

    switch (flag) {
      case 'add':
        const nData = this.roleStore.editRecord(data);
        this.agApi.addItem({initItem:nData,selected:true})
        break;
      case 'edit':
        this.roleStore.editRecord(data);
          break;
      case 'save':
        this.roleStore.saveRoleInfo();
        break;
      case 'delete':
          this.roleStore.delRoleInfo([data.id]).then(_=>{
            this.handleSearch();
          });
          break;
      default:
        break;
    }
  }

  render() { 

    const agProps = {
        fetch: {
            queryKey: 'SYS_ROLE_LIST', // 后台api配置
            // queryMethod: Promise,                // 也可以自己定义请求方法 Promise对象
        },
        gridOptions: {
          rowSelection:'single',    // 是否多选
          onSelectionChanged:this.roleStore.onSelectionChanged, 
          frameworkComponents: {
            actionCellRenderer: params  => (
              <Fragment>
                <WConfirm
                  key="del"
                  type="del"
                  onConfirm={this.handleOpe.bind(this,'delete',params.data)}
                >
                  <Icon style={{ fontSize: '15px' }} type="delete" />
                </WConfirm>
              </Fragment>
            )
          }
        }
    }
 

    const extra = (
      <Button.Group className={styles.treeBtn}>
        {/* <Button type="primary" onClick={this.handleSearch} icon="search" /> */}
        <Button type="primary" title={Intler.getIntl("common.title.new")} onClick={this.handleOpe.bind(this,'add',{})} icon="plus" />
        <Button type="primary" title="common.title.save" onClick={this.handleOpe.bind(this,'save',{})} disabled={!this.roleStore.edittable} icon="save" />
      </Button.Group>
    )
   
    return (
      <div className={styles.treeWrap}>
        <Card 
          title={<Input.Search onSearch={this.handleSearch} placeholder={Intler.getIntl('common.search.keyword')} onChange={this.handleChange} />}
          // bodyStyle={{padding:'10px'}}
          className={rStyles.content}
          bordered={false}
          extra={extra}
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
