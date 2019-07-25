/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Form, Card, Icon, Switch } from 'antd'; 
import { Btns, AdRender ,Act,MPCConfirm} from '@/components'; 
// import AbC  from '@/components/AgGrid/Editer/config' 
import { getNowTime } from '@/utils/util.date' 
import * as Rxjs from 'rxjs'
import lodash from 'lodash'
import AgGrid, {LookUpCell,InputCell,NumberCell,SelectCell,MonthCell,DateCell,SwitchCell} from '@/components/AgGrid/AgGrid'
import Global from '@/stores/common/Global';

// const {InputCell,NumberCell,SelectCell,MonthCell,DateCell,SwitchCell} = AbC 

class EditForm extends React.Component {
  
  cell = ["NumberCell","InputCell","SelectCell","LookupCell","MonthCell","DateCell","SwitchCell"]

  subject = new Rxjs.Subject(); // 这个用于监听数据变化的

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
        // cellEditorParams:{
        //   config:{
        //     observable:this.subject,
        //   }
        // }
      },
      {
        headerName:"NumberCell",
        field: 'Number',
        ...comProps,        
        cellEditorFramework: NumberCell,
        cellEditorParams:{
          config:{
            onChange:(val)=>{
              this.subject.next({Input:val})
            },
            observable:this.subject,
          }
        },
      },
      {
        headerName:"SelectCell",
        field: 'select',
        ...comProps,        
        cellEditorFramework: SelectCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"LookUpCell",
        field: 'lookup',
        ...comProps,        
        cellEditorFramework: LookUpCell,
        cellEditorParams:{
          config:{
            // observable:this.subject,
            lookUpKey:'SM_USER',
            modalKey:'userName',
            nameKey:'lookup',
          }
        },
      },
      {
        headerName:"MonthCell",
        field: 'month',
        ...comProps,        
        cellEditorFramework: MonthCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"DateCell",
        field: 'date',
        ...comProps,        
        cellEditorFramework: DateCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"SwitchCell",
        field: 'switch',
        ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"SwitchCell1",
        field: 'switch1',
        // ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"SwitchCell2",
        field: 'switch2',
        ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
          }
        },
      },
      {
        headerName:"SwitchCell3",
        field: 'switch2',
        // ...comProps,        
        cellEditorFramework: SwitchCell,
        cellEditorParams:{
          config:{
            observable:this.subject,
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
    const time = getNowTime();
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
            usingRenderer:params=><Switch 
              disabled={this.view}
              checkedChildren={Intler.getIntl("switch.open")} 
              unCheckedChildren={Intler.getIntl("switch.close")} 
              defaultChecked={params.data.activeFlag=="1"}
              onChange={(checked)=>{
                params.node.setDataValue("activeFlag",checked?"1":"0");
              }}
            />,
            actionCellRenderer: params =>(<Act><MPCConfirm type="del" onConfirm={this.handleDel.bind(this,params)}><Icon type="delete" /></MPCConfirm></Act>),
          },
          singleClickEdit:true,        // 单击编辑
          // editType:'fullRow' ,    // 是否开启整行编辑
          onCellValueChanged:(params)=>{  // 单元格停止编辑出发。
            // 可以通过params.newValue和oldValue对比值变化
            // console.log("onCellValueChanged",params)
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