/* eslint-disable no-unused-expressions */
import React from 'react';
import { Form, Card, Col } from 'antd';
import { AdRender,Act,InputH,MPCConfirm } from '@/components/FormMark';
import { Btns, Intler, MBox, AutoRow } from '@/components'; 
import AgGrid from '@/components/AgGrid/AgGrid'
import styles from '@/pages/common.less';   
import Global from '@/stores/common/Global';  
import { DefaultField } from '@/pages/plugins';

const getIntl = _ => Intler.getIntl(`ad.${_}`)

class EditForm extends React.Component {
  formField = ["id","deletedFlag","modificationNum","createdBy","createdDate","lastUpdBy","lastUpdDate","originApp","originFlag","lovcode","listName"];
 
  columnDefs = [
    {
      headerName: getIntl('lovcode.lovCode'),
      field: 'lovCode',
      align: 'left',
      cellRenderer: 'infoCellRenderer',
    },
    {
      headerName: getIntl('lovcode.lovName'),
      field: 'lovName',
      align: 'left',
    },
    {
      headerName: getIntl('lovcode.seqNum'),
      field: 'seqNum',
      align: 'left',
    },
    {
      headerName: getIntl('lovcode.activeFlag'),
      field: 'activeFlag',
      align: 'left',
      cellRendererParams: {
        config: {
          code: 'USER_INFO_STATUS',
        },
      },
      cellRenderer: 'adRender',
    },
    {
      headerName: Intler.getIntl('remark'),
      field: 'remark',
      align: 'left',
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
    this.state = {
        USING_FLAG: [], 
    };
    Global.findAdLovByCode('USING_FLAG').then(data => {
      this.setState({ USING_FLAG: data });
    });
  }

  componentDidMount() { 
  } 

  render() {
    const { form,view } = this.props;
     
    const comFormItemProps = {
      view,
      form,
    }; 
 
    const agPropPros = {
        onGridReady: (params, agStore) => {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          this.gridProApi = params.gridProApi;
          this.agStore = agStore;
        },
        rowData:[],
        gridOptions: {
          // rowSelection:'single',    // 是否多选
        //   rowSelection:'multiple',    // 是否多选
        //   onRowSelected:params=>{
        //     const {selectedRowKeys} = this.agStore.getSelect();
        //     this.setState({selectCount:selectedRowKeys.length},()=>{
        //       this.agStore.gridProApi.reloadToolBar();
        //     })
        //   },
          frameworkComponents: {
            adRender: AdRender, 
            actionCellRenderer: params => {
              // 自定义操作列
              const record = params.data;
              return (
                <Act> 
                  <MPCConfirm
                    key="del"
                    type="del"
                    onConfirm={() => {
                      this.handleOpe('delete', record);
                    }}
                  >
                    <Act.Item text={Intler.getIntl("common.title.delete")} key="delete" />
                  </MPCConfirm>
                </Act>
              );
            },
          },
        },
      };

    return ( 
      <Form layout="inline" labelAlign="left">
        <div className={styles.mainBox}>
          <DefaultField form={form} />
          <AutoRow>
            <InputH label={getIntl("lovlist.listCode")} id="lovcode" {...comFormItemProps} />
            <InputH label={getIntl("lovlist.listName")} id="listName" {...comFormItemProps} />
          </AutoRow>
          <Card title={getIntl('lovcode.title')} bordered={false} extra={<Btns.add/>} size="small">
            <AgGrid key="dataGrid" columnDefs={this.columnDefs} {...agPropPros} />
          </Card>
            
          <div className={styles.btnBar}> 
            <Btns.save type="primary" />
          </div>
        </div>
      </Form>
      
    );
  }
}


export default Form.create()(EditForm)