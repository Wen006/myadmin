/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-case-declarations */
/* eslint-disable prefer-destructuring */
import React from 'react';
import AgGridPro from '@/components/AgGrid/AgGridPro';
import { AdRender, Act, VPro, Intler, Btns,MPCConfirm } from '@/components';
import UserInfoStore from '@/stores/sys/user/UserInfoStore';
import Navigator from '@/stores/common/Navigator';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Toolbar from '@/components/Toolbar'
import SearchBar from '@/components/SearchBar'
import styles from '@/pages/common.less';
import UserInfo from './common/UserInfo';
import UserPwdEdit from './common/UserPwdEdit'
import FilterItems from './FilterItems'

class UserInfoList extends React.Component {

  columnDefs = [
    {
      headerName: Intler.getIntl('user.info.userCode'),
      field: 'userCode',
      align: 'left',
      cellRenderer: 'infoCellRenderer',
    },
    {
      headerName: Intler.getIntl('user.info.userName'),
      field: 'userName',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('user.info.unitName'),
      field: 'unitName',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('user.info.entityName'),
      field: 'entityName',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('user.info.email'),
      field: 'email',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('status'),
      field: 'status',
      width: 60,
      cellRendererParams: {
        config: {
          code: 'USER_INFO_STATUS',
        },
      },
      cellRenderer: 'adRender',
    },
    {
      headerName: Intler.getIntl('action'),
      field: 'action',
      width: 180,
      cellRenderer: 'actionCellRenderer',
    },
  ];

  constructor(props) {
    super(props);
    const { userInfoStore } = props;
    this.userInfoStore = userInfoStore || new UserInfoStore();
    this.state = {
      selectCount: 0,
      queryParams:{}, // 存放lookup选择的条件
    };
  }

  // 每一行的操作列函数
  handleOpe = (key, record) => {
    // 按钮的触发事件 key 和下面的按钮的key对应 record 代表 弹出删除的框 ok与no 的值
    if (key === 'delete') {
      this.userInfoStore.deleteRecord([record.id]).then(success => {
        if (success) this.handleSubmit();
      });
    } else if (key === 'edit') {
      Navigator.forward({
        url: '/system/user/info/userInfoEdit',
        params: record,
        title: '用户编辑',
      });
    } else if (key === 'editPassword') {
      this.modalApi.showModal(true, record);
    } else if (key === 'resetpwd') {
      this.userInfoStore.resetPwd(record);
    }
  };

  handleBarOpe = ope => {
    switch (ope) {
      case 'add':
        Navigator.forward({ url: '/system/user/info/userInfoEdit', params: {}, title: '新增用户' });
        break;
      case 'edit':
        const record = this.agStore.getSelectOneRecord();
        this.handleOpe('edit', record);
        break;
      case 'delete':
        const { selectedRowKeys } = this.agStore.getSelect();
        this.userInfoStore.deleteRecord(selectedRowKeys).then(success => {
          if (success) this.handleSubmit();
          this.setState({selectCount:0})
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = params => {
    this.agStore.submit(params); // 调用store查询数据 页面一加载就查询
  };

  render() {
    const { selectCount } = this.state;

    const agPropPros = {
      fetch: {
        // 这里是和后台交互的 不配置该项 需要自己维护数据源 DataSource  以及分页信息
        queryKey: 'SYS_USER_LIST_BY_DTO',
      },
      onGridReady: (params, agStore) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridProApi = params.gridProApi;
        this.agStore = agStore;
        this.agStore.submit({}); // 调用store查询数据 页面一加载就查询
      },
      gridOptions: {
        // rowSelection:'single',    // 是否多选
        rowSelection:'multiple',    // 是否多选
        onRowSelected:params=>{
          const {selectedRowKeys} = this.agStore.getSelect();
          this.setState({selectCount:selectedRowKeys.length},()=>{
            this.agStore.gridProApi.reloadToolBar();
          })
        },
        frameworkComponents: {
          adRender: AdRender,
          infoCellRenderer: (
            params // 自定义详情链接组件
          ) => (
            <VPro
              tiggerTitle={params.value}
              cache={false}
              title="查看页面"
              onReady={r => {
                this.vProApi = r;
              }}
            >
              <UserInfo
                record={params.data}
                userInfoStore={this.userInfoStore}
                onClose={() => {
                  this.vProApi.showViewer(false);
                }}
              />
            </VPro>
          ),
          actionCellRenderer: params => {
            // 自定义操作列
            const record = params.data;
            return (
              <Act>
                <Act.Item
                  text={Intler.getIntl("common.title.edit")}
                  key="edit"
                  onClick={() => {
                    this.handleOpe('edit', record);
                  }}
                />
                <MPCConfirm
                  key="del"
                  type="del"
                  onConfirm={() => {
                    this.handleOpe('delete', record);
                  }}
                >
                  <Act.Item text={Intler.getIntl("common.title.delete")} key="delete" />
                </MPCConfirm> 
                <VPro
                  tiggerTitle={Intler.getIntl("user.info.pwd.update")}
                  cache={false}
                  title={Intler.getIntl("user.info.pwd.update")}
                  onReady={r => {
                    this.vProApi = r;
                  }}
                >
                  <UserPwdEdit 
                    record={record}
                    onClose={()=>{this.vProApi.showViewer(false)}}
                    onSave={(value)=>{}} 
                  />
                </VPro> 
                <MPCConfirm
                  key="reset"
                  type="reset"
                  onConfirm={() => {
                    this.handleOpe('resetpwd', record);
                  }}
                >
                  <Act.Item text={Intler.getIntl("user.info.pwd.reset")} key="reset_pwd" />
                </MPCConfirm>
              </Act>
            );
          },
        },
      },
    };

    // 查询条件
    const searchBarProps = {
      columns:FilterItems(this),
      onSearch: values => {
        this.handleSubmit({...values,...this.state.queryParams});
      }
    };
    
    return (
      <PageHeaderWrapper>
        <Toolbar
          appendLeft={
            <Btns.Group>
              <Btns.add onClick={this.handleBarOpe.bind(this,'add')} /> 
              <Btns.update 
                onClick={this.handleBarOpe.bind(this,'edit')} 
                disabled={selectCount != 1}
              />
              <MPCConfirm
                key="del"
                disabled={selectCount < 1}
                type="del"
                onConfirm={this.handleBarOpe.bind(this,'delete')}
              >
                <Btns.del algin="left" disabled={selectCount < 1} key="delete" />
              </MPCConfirm>
            </Btns.Group>
            }
          pullDown={<SearchBar key="grid" type="grid" {...searchBarProps} onReady={(ref)=>{this.searchBarRef=ref}} />}
        >
          <SearchBar type="inline" group="simple" {...searchBarProps} onReady={(ref)=>{this.searchBarRef=ref}} />
        </Toolbar>
        <div className={styles.agListBox}>
          <AgGridPro key="dataGrid" columnDefs={this.columnDefs} {...agPropPros} />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default UserInfoList;
