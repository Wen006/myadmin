/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Form, Card, Icon, Switch } from 'antd'; 
import lodash from 'lodash'
import { Btns, AdRender, DateRender,Act,WConfirm} from '@/components'; 
// import AbC  from '@/components/AgGrid/Editer/config' 
import { getNow } from '@/utils/util.date' 
import AgGrid, {LookUpCell,InputCell,NumberCell,SelectCell,MonthCell,DateCell,SwitchCell} from '@/components/AgGrid/AgGrid'
import Global from '@/stores/common/Global';

// const {InputCell,NumberCell,SelectCell,MonthCell,DateCell,SwitchCell} = AbC 

class EditForm extends React.Component {
  
  cell = ["NumberCell","InputCell","SelectCell","LookupCell","MonthCell","DateCell","SwitchCell"]
 
  constructor(props) {
    super(props);  
       
    const comProps = {
        editable:true,
        required:true,
    }

    this.columnDefs = [
      {
        headerName: "InputCell",
        field: 'Input', 
        ...comProps,
        // cellEditorFramework:InputCell,
      },
      {
        headerName:"NumberCell",
        field: 'Number',
        ...comProps,        
        cellEditorFramework: NumberCell,
      },
      {
        headerName:"计数联动",
        field: 'Number2',   
        valueFormatter:(a,b,c)=>{ 
          return a.value?`$ ${a.value}`:"";
        }   
      },
      {
        headerName:"SelectCell",
        field: 'select',
        ...comProps,        
        cellEditorFramework: SelectCell,
        cellEditorParams:{
          config:{
            code:'COMMON_Y_N',
          }
        },
        cellRenderer:'adRender',
        cellRendererParams:{
          config:{
            code:'COMMON_Y_N'
          }
        }
      },
      {
        headerName:"LookUpCell",
        field: 'lookup',
        ...comProps,        
        cellEditorFramework: LookUpCell,
        cellEditorParams:{
          config:{
            lookUpKey:'SM_USER',
            modalKey:'userName',
            nameKey:'lookup',
            onOk:(select,api)=>{
              const row = select.selectedRows&&select.selectedRows[0]||{}
              api.setDataValue("userCode",row.userCode);
            },
            onClear:(api)=>{
              api.setDataValue("userCode","");
            },
            onCancel:(api)=>{

            }
          }
        },
      },
      {
        headerName:'根据用户选择带出来的UserCode',
        field:'userCode',
      },
      {
        headerName:"MonthCell",
        field: 'month',
        ...comProps,        
        cellEditorFramework: MonthCell,
        cellEditorParams:{
        },
        cellRenderer:'dateRender',
        cellRendererParams:{
          config:{
            format:'YYYY-MM',
          }
        }
      },
      {
        headerName:"DateCell",
        field: 'date',
        ...comProps,        
        cellEditorFramework: DateCell,
        cellEditorParams:{
          config:{
          }
        },
        cellRenderer:'dateRender',
        cellRendererParams:{
          config:{
            format:'YYYY-MM-DD',
          }
        }
      },
      {
        headerName:"SwitchCell",
        field: 'switch',
        ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{ 
            checkedChildren:{codeName:'开',codeValue:'1'},
            unCheckedChildren:{codeName:'关',codeValue:'0'},
          }
        },
        cellRenderer:'adRender',
        cellRendererParams:{
          config:{
            dataSource:[
              {codeName:'开',codeValue:'1'},
              {codeName:'关',codeValue:'0'}
            ]
          }
        }
      },
      {
        headerName:"SwitchCell1",
        field: 'switch1',
        // ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{
          }
        },
      },
    ];
   
    this.columnDefs.push({
      headerName: '操作列',
      field: 'action',
      width: 180,
      cellRenderer: 'actionCellRenderer',
    })
  } 

  handleAdd = () =>{
    const time = +getNow();
    this.agApi.addItem({
      lovCode:time,
      lovName:time,
      seqNum:0,
      activeFlag:'1',
    }); 
  }

  handleDel = (params) =>{
    this.agApi.removeItem(params.data);
  }

  handleSave = () =>{
    const ds =  this.agApi.validValues();
    if(!ds) return;
    const del = this.agApi.getDelItems();
  }

  render() {  
    const agPropPros = {
        onGridReady: (params) => {
          this.gridApi = params.api;
          this.agApi = params.agApi;
        },
        rowData:[],
        gridOptions: {
          frameworkComponents: {
            adRender: AdRender, 
            dateRender:DateRender,
            actionCellRenderer: params =>(<Act><WConfirm type="del" onConfirm={this.handleDel.bind(this,params)}><Icon type="delete" /></WConfirm></Act>),
          },
          singleClickEdit:true,        // 单击编辑
          // editType:'fullRow' ,    // 是否开启整行编辑
          onCellValueChanged:(params)=>{  // 单元格停止编辑出发。
            // 可以通过params.newValue和oldValue对比值变化
            if(params.newValue != params.oldValue){
              if(params.colDef.field == "Number"){
                params.node.setDataValue("Number2",params.newValue*2);
              } 
            }
          },
          onRowValueChanged:(a,b,c)=>{// 行停止编辑触发
            // console.log("onRowValueChanged",a,b,c)

          },
        },
      };
    return ( 
      <Form layout="inline" labelAlign="left">
        {/* {JSON.stringify(Global.getUser())} */}
        <Card 
          title="编辑表格测试代码" 
          bordered={false} 
          extra={this.view?null:<Btns.add onClick={this.handleAdd.bind(this)} />} 
          size="small"
        >
          <AgGrid.Blur key="dataGrid" columnDefs={this.columnDefs} {...agPropPros} />
        </Card>
      </Form>
      
    );
  }
}


export default Form.create()(EditForm)