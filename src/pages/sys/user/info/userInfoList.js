/* eslint-disable no-case-declarations */
/* eslint-disable prefer-destructuring */
import React from 'react';
import AgGridPro from '@/components/AgGrid/AgGridPro';
import { AdRender, Act, VPro, Intler, Btns } from '@/components';
import MPCConfirm from '@/components/MPCConfirm/MPCConfirm';
import UserInfoStore from '@/stores/sys/user/UserInfoStore';
import Navigator from '@/stores/common/Navigator';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from '@/pages/common.less';
import UserFilter from './common/UserFilter';
import UserInfo from './common/UserInfo';
// import PasswdModal from './common/PasswdModal';

class UserInfoList extends React.Component {
  columnDefs = [
    {
      width: 80,
      checkboxSelection: true,
    },
    {
      headerName: Intler.getIntl('user.info.userAccount'),
      field: 'userAccount',
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
      toolBars: [
        // 这是个数组 注意数组里每个元素要有 唯一的key
        <Btns.search algin="left" key="search" onClick={() => this.handleSubmit()} />,
        <Btns.add algin="left" key="add" onClick={() => this.handleBarOpe('add')} />,
        <Btns.update
          algin="left"
          disabled={selectCount != 1}
          key="edit"
          onClick={() => this.handleBarOpe('edit')}
        />,
        <MPCConfirm
          key="del"
          disabled={selectCount < 1}
          type="del"
          onConfirm={() => this.handleBarOpe('delete')}
        >
          <Btns.del algin="left" disabled={selectCount < 1} key="delete" />
        </MPCConfirm>,
      ],
      fetch: {
        // 这里是和后台交互的 不配置该项 需要自己维护数据源 DataSource  以及分页信息
        queryKey: 'SYS_USER_LIST_BY_DTO',
      },
      onGridReady: (params, agStore) => {
        this.agStore = agStore;
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridProApi = params.gridProApi;
        this.agStore.submit({}); // 调用store查询数据 页面一加载就查询
      },
      onSelectionChanged: params => {
        const selectedRows = this.gridApi.getSelectedRows();
        this.setState({ selectCount: selectedRows.length }, () => {
          this.gridProApi.reloadToolBar(); // 这里需要手动刷新toolbar上对按钮
        });
      },
      gridOptions: {
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
                  text="编辑"
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
                  <Act.Item text="删除" key="delete" />
                </MPCConfirm>
                <Act.Item
                  text="修改密码"
                  key="update_pwd"
                  onClick={() => this.handleOpe('editPassword', record)}
                />
                <MPCConfirm
                  key="reset"
                  type="reset"
                  onConfirm={() => {
                    this.handleOpe('resetpwd', record);
                  }}
                >
                  <Act.Item text="重置密码" key="reset_pwd" />
                </MPCConfirm>
              </Act>
            );
          },
        },
      },
    };
    
    return (
      <PageHeaderWrapper>
        <UserFilter key="filter" handleSubmit={this.handleSubmit} />
        <div className={styles.agListBox}>
          <AgGridPro key="dataGrid" columnDefs={this.columnDefs} {...agPropPros} />
        </div>
        {/* <PasswdModal
          onReady={api => {
            this.modalApi = api;
          }}
          userInfoStore={this.userInfoStore}
        /> */}
      </PageHeaderWrapper>
    );
  }
}

export default UserInfoList;
