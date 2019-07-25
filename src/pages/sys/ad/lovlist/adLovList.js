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
    };
  }
 
  handleBarOpe = (ope,record) => {
    switch (ope) {
      case 'add':
        Navigator.forward({url:'/system/ad/lovlist/lovlistEdit',title:'新增',params:{}})
        break;
      case 'view': 
        // 把选择的记录  放在store中record变量中 然后调用侧边滑
        this.adLovlistStore.record = !record ? this.agStore.getSelectOneRecord():record;
        this.vProApi.showViewer(true);
        break;
      case 'edit':
        const editRow = !record ? this.agStore.getSelectOneRecord():record;
        Navigator.forward({url:'/system/ad/lovlist/lovlistEdit',title:'编辑',params:{...editRow}})
        break;
      case 'delete': 
        const selectedRowKeys = record?[record.id]:this.agStore.getSelect().selectedRowKeys;
        this.adLovlistStore.deleteRecord(selectedRowKeys).then(success => {
          if (success) {
            this.handleSubmit();
            this.agApi.clearSelectRows();
            this.setState({selectCount:0})
          }
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
        this.agApi = params.agApi;
        this.agStore = agStore;
        this.agStore.submit({}); // 调用store查询数据 页面一加载就查询
      },
      gridOptions: {
        // rowSelection:'single',    // 是否多选
        rowSelection:'multiple',    // 是否多选
        onRowSelected:params=>{
          const {selectedRowKeys} = this.agStore.getSelect();
          this.setState({selectCount:selectedRowKeys.length},()=>{
            this.agApi.reloadToolBar();
          })
        },
        frameworkComponents: {
          adRender: AdRender,
          infoCellRenderer: (
            params // 自定义详情链接组件
          ) => {
            const re = params.data
            // 1.方式1 查看 这个要预先放一个VPro标签和 要画出的内容
            // return (
            //   <Act.Item onClick={()=>this.handleBarOpe('view',params.data)}>
            //     {params.value}
            //   </Act.Item>
            // )
            // 2.方式2 查看
            return  (
              <VPro
                tiggerTitle={params.value}
                cache={false}
                title={`方式2 ${Intler.getIntl("common.title.view")}`}
                onReady={r => {
                  this.vProApi = r;
                }}
              >
                <EditFrom view record={re} />
              </VPro>
            )
          },
          usingRenderer:params=><Switch 
            checkedChildren={Intler.getIntl("switch.open")} 
            unCheckedChildren={Intler.getIntl("switch.close")} 
            defaultChecked={params.data.status=="1"}
            onChange={(checked)=>{
              params.node.setDataValue("activeFlag",checked?"1":"0");
            }}
          />,
          actionCellRenderer: params => {
            // 自定义操作列
            const record = params.data;
            return (
              <Act>
                <Act.Item onClick={()=>this.handleBarOpe('edit',record)}>
                  <Icon type='edit' />
                </Act.Item> 
                <MPCConfirm
                  key="del"
                  type="del"
                  onConfirm={()=>this.handleBarOpe('delete',record)}
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
        this.handleSubmit({...values});
      }
    };
    
    return (
      <PageHeaderWrapper>
        <Toolbar
          appendLeft={
            <Btns.Group>
              <Btns.add onClick={()=>this.handleBarOpe('add')} /> 
              <Btns.update 
                onClick={()=>this.handleBarOpe('edit')} 
                disabled={selectCount != 1}
              />
              <MPCConfirm
                key="del"
                disabled={selectCount < 1}
                type="del"
                onConfirm={()=>this.handleBarOpe('delete')}
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
        {/* 侧边滑动 */}
        <VPro
          cache={false}
          title={`方式1${Intler.getIntl("common.title.view")}`}
          onReady={r => {
           this.vProApi = r;
         }}
        >
          <EditFrom 
            view
            record={()=> this.adLovlistStore.record}
          />
        </VPro>
      </PageHeaderWrapper>
    );
  }
}

export default AdLovList;
