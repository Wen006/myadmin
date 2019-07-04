/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-case-declarations */
/* eslint-disable prefer-destructuring */
import React from 'react';
import AgGridPro from '@/components/AgGrid/AgGridPro';
import { AdRender, Act, VPro, Intler, Btns,MPCConfirm } from '@/components';
import AdLovlistStore from '@/stores/sys/ad/lovlist/AdLovlistStore';
import Navigator from '@/stores/common/Navigator';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Toolbar from '@/components/Toolbar'
import SearchBar from '@/components/SearchBar'
import styles from '@/pages/common.less';
import { Switch, Icon } from 'antd';
import FilterItems from './common/FilterItems'
import EditFrom from './common/EditForm'

class AdLovList extends React.Component {

  // 在这里写比在render里定义性能要高
  columnDefs = [
    {
      headerName: Intler.getIntl('ad.lovlist.listCode'),
      field: 'listCode',
      align: 'left',
      cellRenderer: 'infoCellRenderer',
    },
    {
      headerName: Intler.getIntl('ad.lovlist.listName'),
      field: 'listName',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('ad.lovlist.status'),
      field: 'status',
      align: 'center',
      cellRenderer:'adRender',
      cellRendererParams:{
        config:{
          code:'USING_FLAG',
        }
      }
    },
    {
      headerName: Intler.getIntl('ad.lovlist.usingFlag'),
      field: 'usingFlag',
      align: 'center',
      cellRenderer:'usingRenderer',
    },
    {
      headerName: Intler.getIntl('ad.lovlist.listDesc'),
      field: 'listDesc',
      align: 'left',
    },
    {
      headerName: Intler.getIntl('action'),
      field: 'action',
      algin: 'center',
      width: 180,
      cellRenderer: 'actionCellRenderer',
    },
  ];

  constructor(props) {
    super(props); 
    this.adLovlistStore = new AdLovlistStore();
    this.state = {
      selectCount: 0,
      queryParams:{}, // 存放lookup选择的条件
    };
  }

  // 每一行的操作列函数
  handleOpe = (key, record) => {
    // 按钮的触发事件 key 和下面的按钮的key对应 record 代表 弹出删除的框 ok与no 的值
    if (key === 'delete') {
      this.adLovlistStore.deleteRecord([record.id]).then(success => {
        if (success) this.handleSubmit();
      });
    }  
  };

  handleBarOpe = ope => {
    switch (ope) {
      case 'add':
       this.vProApi.showViewer(true);
        break;
      case 'edit':
        const record = this.agStore.getSelectOneRecord();
        this.handleOpe('edit', record);
        break;
      case 'delete':
        const { selectedRowKeys } = this.agStore.getSelect();
        this.adLovlistStore.deleteRecord(selectedRowKeys).then(success => {
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
        queryKey: 'SYS_AD_LOVLIST_BY_DTO',
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
            <Act.Item onClick={this.handleBarOpe.bind(this,'view')} >
             {params.value}
            </Act.Item>
          ),
          usingRenderer:params=><Switch 
            checkedChildren={Intler.getIntl("switch.open")} 
            unCheckedChildren={Intler.getIntl("switch.close")} 
            defaultChecked={params.data.status=="1"}
          />,
          actionCellRenderer: params => {
            // 自定义操作列
            const record = params.data;
            return (
              <Act>
                <Act.Item onClick={this.handleBarOpe.bind(this,'edit')} >
                  <Icon type='edit' />
                </Act.Item> 
                <MPCConfirm
                  key="del"
                  type="del"
                  onConfirm={() => {
                    this.handleOpe('delete', record);
                  }}
                >
                  <Act.Item>
                    <Icon type='delete' />
                  </Act.Item>
                  {/* <Act.Item text={Intler.getIntl("common.title.delete")} key="delete" /> */}
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
        <VPro
          cache={false}
          title={Intler.getIntl("common.title.edit")}
          onReady={r => {
           this.vProApi = r;
         }}
        >
          <EditFrom 
            adLovlistStore={this.adLovlistStore}
          />
        </VPro>
      </PageHeaderWrapper>
    );
  }
}

export default AdLovList;
