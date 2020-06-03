

### Ag-Grid 表格

高效快速，展示行列数据，并可以进行复杂交互。
正常情况下数据1w 没有问题。
前端分页。
适用行编辑暂存，然后一起传后台保存

### 使用场景

- 大量结构化的数据需要展现。
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
- 想要复杂类型编辑。

### 如何使用

数据源 ```rowData``` 数组

```javascript
const rowData = [
    {id:1,name:'Lady',age:12},
    {id:2,name:'Jack',age:15},
    {id:2,name:'Luck',age:28},
]

const columnDefs = [
    {headerName:'姓名',field:'name'},
    {headerName:'年龄',field:'age' },
]

<AgGrid
  columnDefs={columnDefs}
  rowData={rowData}
/> 
```

### 引入方式

```javascript
import AgGrid,{ DateCell, LookUpCell } from 'plugins/AgGrid/AgGrid';
```

### Cloumn常用配置

#### 属性

```json
 {
     headerName:'',			// 表头显示名称
     field:'',				// 属性
     hide:false,			// 是否隐藏
     algin:'left',			// 内容位置。   该属性咱们自己定义的  
     width:100,				// 宽度
     pinned:'right',		// 冻结列
     checkboxSelection:true,// checkbox
     sortable:true,			// 是否排序
     editable:true,			// 是否编辑
 }
```

#### 函数

```json
{
    headerName:'',
    field:'',
    cellRenderer:'actionCellRenderer',	// 指定格式显示
    valueFormatter:(params)=>params.value,// 格式化显示
    cellEditor:'', 						// 指定注册的编辑框
    cellEditorFramework:NumberCell,		// 自定义编辑框
    cellEditorParams:()=>{return {}}	// 自定义参数
}
```





### 选择和操作列

checkboxSelection,

frameworkComponents,

cellRenderer

```javascript
 const gridProps = {
   columnDefs:[
       {headerName:'姓名',field:'name',width:100,hide:false,checkboxSelection:true},
       {headerName:'年龄',field:'age'},
       {headerName:'操作列',field:'ope',cellRenderer:'actionCellRenderer' }, // 使用注册的操作列
   ],
   rowData:[
       {id:1,name:'Lady',age:12},
       {id:2,name:'Jack',age:15},
       {id:2,name:'Luck',age:28},
   ],
   gridOptions:{
     frameworkComponents: { // 这里定义操作列注册
       actionCellRenderer: (params)=><Act>
         <WConfirm type="del" onConfirm={alert(1)}><Icon type="delete" /></WConfirm>			</Act>,
     },
   },
 }
 
 <AgGrid {...gridProps} /> 
```



### 可编辑单元格

editable 是否可编辑					   //默认是String类型编辑

cellEditor: 'agTextCellEditor' 			    // 指定编辑类型

cellEditorFramework：LookUpCell 		//自定义编辑

```javascript
const gridProps = {
   columnDefs:[
       {headerName:'姓名',field:'name',width:100,editable:true, 						
       	cellEditorFramework:LookUpCell, // 指定编辑组件
        cellEditorParams:()=>{	// 用户自定义参数
         return {
                lookUpConfig:{
                    lookUpKey:'BC_EC_ITEM',
                    modalKey:'itemName',
                    onSearchBefore:()=>{return {}}, // 查询条件
                    onOk:(idArr,rowArr,api)=>{	// 确认赋值
                      const { id, itemCode, itemName } = rowArr[0]
                      const data =  {ecItemId: id, ecItemName: itemName}
                      api.updateRowData(data);
                    },
                    onClear:(api)=>{ // 清除按钮
                      const data =  {ecItemId: "", ecItemName: "", ecItemCode: ""}
                      api.updateRowData(data);
                    },
                    onCancel:()=>{},
                },
            }
          },},
       {headerName:'年龄',field:'age',editable:true,cellEditor: 'agTextCellEditor' },
   ],
   rowData:[
       {id:1,name:'Lady',age:12},
       {id:2,name:'Jack',age:15},
       {id:2,name:'Luck',age:28},
   ],
   gridOptions:{
     rowSelection:'multiple',	// 是否多选
     rowMultiSelectWithClick:false, // 单机选择
     onSelectionChanged:()=>{ 	// 选择触发器
     	const selectedRows = this.gridApi.getSelectedRows();
     },
     singleClickEdit:true,		// 单击编辑
     // editType:'fullRow' ,	// 是否开启整行编辑
     onCellClicked:()=>{},		// 单击cell事件
     onCellValueChanged:(params)=>{  // 单元格停止编辑出发。
         // 可以通过params.newValue和oldValue对比值变化
     },
     onRowValueChanged:(a,b,c)=>{// 行停止编辑触发
     },
   },
 }
 <AgGrid {...gridProps} /> 
```



### 常用属性

##### 使用

```javascript
const gridProps = {
      toolBars: [	// 自己封装的toolBars
        <span key="title" align="left" style={{ paddingLeft: '8px' }}>
          表格工具栏
        </span>,
        <Btns.add key="btn_add" align="right" size="small"/>,
      ],
      columnDefs: [
        // uses the default column properties
        {headerName: 'Col A', field: 'a',pinned:'left'},
        {headerName: 'Col B', field: 'B'},
      ],
      defaultColDef : { // 通用配置
            sortable: true,
            resizable: true,
      },
      gridOptions: {
        frameworkComponents: {
          actionCellRenderer: params => (<Act><Button>修改</Button></Act>),
        },
        rowSelection: 'multiple', // 多选
        rowMultiSelectWithClick: false,
        onSelectionChanged: () => {
          const selectedRows = this.gridApi.getSelectedRows();
        },
        singleClickEdit: true,	// 单击修改
        onCellClicked: () => {},
        onCellValueChanged: this.onCellValueChanged,
        onRowValueChanged: (a, b, c) => {},
      },
    };

<AgGrid {...gridOptions} />
```



- **Columns**

  - **columnDefs**   	定义grid表头和字段属性信息 	相当于 ant.table.columns
    - headerName	列标题			相当于columns.title
    - field			对应显示的属性	相当于columns.dataIndex
    - pinned	[left,right] 冻结列		相当于columns.fixed
    - editable,singleClickEdit	是否编辑，是否单击编辑
    - cellEditor				编辑类型：agSelectCellEditor（官网的）	
    - cellEditorFramework	自定义编辑组件
    - cellEditorParams		自定义参数 可用于自定义编辑组件配置
    - onCellValueChanged	单元格数据变化触发
    - valueGetter ,valueSetter,valueParser	用于特殊值处理
    - valueFormatter		显示格式化
    - width, minWidth, maxWidth
    - cellClass,cellStyle
    - tooltip，hide	内容提示，列隐藏
    - sortable，filter，filterFramework	是否排序，指定排序组件，自定义排序组件
  - **defaultColDef**	给columnDefs设置默认属性，提取相同的配置在这里

- **Sort & Filter**

- **Selection**

  - **rowSelection**	 'single' or 'multiple'
  - **rowMultiSelectWithClick**	单击多选

- **Editing**

  - **singleClickEdit**	      单机编辑
  - **suppressClickEdit**	单机，双击，回车 都可以编辑
  - **editType**			若editType = 'fullRow' 则整行编辑

- **Headers**

  - **headerHeight**	表头高度

- **RowGrouping & Pivoting**

- **Data & Row Models**

  - **rowData**		 数据源（我们需要定义在store里） 	相当于ant.table.dataSource
  - **pinnedTopRowData**		顶部冻结行 可用与汇总
  - **pinnedBottomRowData** 	低部冻结行 可用与汇总

- **Pagination**	分页

- **Rendering & Styling**	样式图标

  

### 常用功能API

#### 用法

```javascript
 
// 模拟数据
const dbData=[{id:1,name:'Lady',age:12},{id:2,name:'Jack',age:15}];

class App extends React.Component{
    
    state = {
        rowData:undefined,
        columnDefs:[
             {headerName:'姓名',field:'name',width:100,hide:false,checkboxSelection:true},
             {headerName:'年龄',field:'age'},
        ]
    }

    componentDidMount(){
        // 初始化数据 fetch("url").then(data=>{this.setState({rowData:data})}) 
        this.setState({rowData:dbData})
    }

    // 回调拿到aggrid的api
    onGridReady = (params) =>{	// 通过aggrid api 进行表格操作
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    
    // 通过值编辑修改
    onCellValueChanged = (params) =>{
        const {data,column,newValue,oldValue,rowIndex,node} = params
        if(newValue == oldValue) return;
        if("age".includes(column.colId)){
          data.name = data.name+data.age;
          this.gridRef.updateItem(data);  // 调用官网api
        }  
    }
    
    addItem = () =>{
        // 调用咱们封装的新增
        this.gridRef.addItem({});
    }
    
    render(){
       
        const gridProps = {
          ref:(ref)=>{this.gridRef = ref}, // 这是拿到aggrid表格引用，从而调用aggrid组件暴露方法
          gridOptions:{
             frameworkComponents: { // 这里定义操作列注册
                actionCellRenderer: (params)=>
                 <Act>
                    <WConfirm type="del" onConfirm={alert(1)}>del</WConfirm>
            	 </Act>,
             },
             onCellValueChanged:this.onCellValueChanged,// 页面停止编辑触发
          },
        }
             
     	return <AgGrid 
                onGridReady={this.onGridReady} 
                rowData={this.state.rowData}
                columnDefs={this.state.columnDefs}
                {...gridProps} 
			/> 
    }
}

 
 
```

##### 封装API

**调用方式： **this.gridRef. *

- autoSizeAll()					调整列最佳宽度
- getDataSource()				 获取页面数据 包括没有展示的
- getSelectRows()				  获取选择的记录
- clearSelectRows()			      清除选择记录
- stopEditing()				       停止编辑
- addItem(initData,addIndex)	    新增一条
- updateItem(data)			      更新记录
- removeItem(data)			     删除记录
- removeAll()					 删除所有

##### 官网API说明

**调用方式：**this.gridApi.*

- gridApi
  - 样式
    - **sizeColumnsToFit**		调整表格宽带。让grid不留白
  - 表格数据操作
    - **setDatasource(datasource)**
    - **setRowData(rows)**
    - **updateRowData(transaction)**
    - **getRowNode(id)**			通过行id获取行引用
    - **forEachNode((node, index))**	获取所有行引用RowNode
    - **selectAll()**，**deselectAll()**
    - **getSelectedNodes()**
    - **getSelectedRows()**
  - 刷新渲染
    - **refreshCells(params)**		指定单元格刷新 编辑联动可能会用到
    - **redrawRows(params)**		强刷 会把dom重新渲染
  - 编辑
    - **stopEditing(cancel?)**	
    - **startEditingCell(params)**	指定编辑单元格
    - **getEditingCells()**
  - 事件
    - **addEventListener(eventType, listener)**	
    - **addGlobalListener(listener)** 	
  - 翻页
  - 其他
- columnApi
  - **getColumn(colKey)** 	获取列对象



- params属性 相关对象引用
  - **GridApi**	表格api
  - **colDef**	  列配置信息
  - **column** 	列信息和api
  - **data**		当前行数据 
  - newValue	新修改的值
  - oldValue	旧值
  - value		新修改的值 显示用的值
  - rowIndex	下标
  - **RowNode**	行对象 里面不仅包含当前api和属性还包含其他api
    - id		行id 这个是aggrid的。不是咱们业务数据id
    - selectable	
    - selected 。。。





### 自定义组件

1.实现官网提供的接口

2.注册到表格的component或者framework中

3.通过注册的名称引用

```
  const gridProps = {    
      columnDefs: [
        {headerName: 'Col A', field: 'a',pinned:'left'},
        {headerName: 'Col B', field: 'B',
        pinned: 'right',cellRenderer: 'actionCellRenderer'},
      ],
      gridOptions: {
        frameworkComponents: {
          actionCellRenderer: params => (<Act><Button>修改</Button></Act>),
        }
      },
      //components: 
 }
 
 <AgGrid {...gridOptions} />
```





### 编辑控件

- 官网

```
agTextCellEditor
agPopupTextCellEditor
agLargeTextCellEditor
agSelectCellEditor
agPopupSelectCellEditor
agRichSelectCellEditor

```

- 自定义的

```
DateCell     日期        完成
LookUpCell   弹框选择    完成
NumberCell   数字        完成80%

SelectCell   下拉选择    待完成
SwitchCell   开关        待完成

```

- 使用：

```javascript
  const gridProps = {    
      columnDefs: [
        {headerName: 'Col A', field: 'a',pinned:'left',editable: true,
        cellEditor: 'agTextCellEditor'
        },
        {headerName: 'Col B', field: 'B',editable: true,
        cellEditorFramework: LookUpCell, // 这也是一种注册方式 指定编辑组件
        cellEditorParams: () => {
          return {
            lookUpConfig: {},
          };
        }},
      ],
      gridOptions: {
        frameworkComponents: {
          actionCellRenderer: params => (<Act><Button>修改</Button></Act>),
        }
      },
      //components: 
 }
 
 <AgGrid {...gridOptions} />
```



### 应用示例

http://localhost:3000/#/Demo

#### 效果

![image-20190307200512766](/Users/wen/Library/Application Support/typora-user-images/image-20190307200512766.png)

#### Code

```javascript
import React from 'react'
import Act from 'plugins/Action/Act'
import AgGrid from 'plugins/AgGrid/AgGrid'
import { Btns } from 'components'
import WConfirm from 'components/WConfirm/WConfirm'
import { formatDate } from 'utils/dateUtils'
import { numFormatStr } from 'utils/utils'
import { Icon } from 'antd';
import lodash from 'lodash'

// 编辑表格控件
const {LookUpCell,DateCell,NumberCell} = AgGrid

// 模拟数据
const dbData = [
  {id:1,"entityName":'通信部', "entityCode":'001', "rate":0.6, "date":new Date().getTime()},
  {id:2,"entityName":'保卫部', "entityCode":'002', "rate":0.4, "date":new Date().getTime()},
]

// 简单的计算税率
const calc = ({price, rate}) =>{
  const seprice = price* rate;
  return {
    seprice,
    jeprice:price - seprice,
  }
}

// 编辑表格示例
export default class AgGridMain extends React.Component{

    // 咱们封装到组件引用，可以通过这个调用咱们封装的aggrid方法
    gridRef=undefined; 

    state = {
      // 这里定义表单的初始数据
      // rowData=undefined时 表格会有一个loading的效果，  rowData=[]时没有
      // 注意 rowData 除非重新 赋值 aggrid 才会受影响 否则  两者新增和删除互不影响
      // 初始化后 rowData 里的对象的值修改的时候 会相互影响 （双向绑定）  
      rowData:undefined,  
    }

    componentDidMount(){
      // 初始化数据 fetch("url").then(data=>{this.setState({rowData:data})})
      setTimeout(()=>{
        this.setState({rowData:dbData});
      // this.gridRef.autoSizeAll();
      },2000); // 模拟请求
    }

    // 回调拿到aggrid的api
    onGridReady = (params) =>{	// 通过aggrid api 进行表格操作
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
    
    // 页面编辑框停止编辑触发
    onCellValueChanged = (params) =>{
      const {data,column,newValue,oldValue,rowIndex,node} = params
      if(newValue == oldValue) return; // 值没有变不必要继续
      if("price,rate".includes(column.colId)){
        // 这里在赋值的时候 不要把data 或者 node.data深拷贝 
        // 1. lodash.assign(node.data,calc(data)); 
        // 这里在赋值的时候 不要把node.data深拷贝 
        // 2. lodash.assign(data,calc(data)); 
        // 这里主要让aggrid 重新渲染
        this.gridRef.updateItem(lodash.assign(data,calc(data))); 
      }  
    }

    // 保存 ,页面数据，删除的，新增的
    handleSave = () =>{
      const ds = this.gridRef.getDataSource(); // 获取列表所有
      const del = this.gridRef.delItems
      const add = this.gridRef.addItems
      console.log("所有数据",ds);
      console.log("删除的",del);
      console.log("新增的",add);
    }

    // 新增记录
    handleAdd= () =>{
      this.gridRef.addItem({entityName:'新增赋初始值'});
    }

    // 删除所有
    handleDelAll =() =>{
      this.gridRef.removeAll();
    }

    // 删除数据
    handleDel = (data) =>{
      if (data) return this.gridRef.removeItem(data);
      const selectRows = this.gridApi.getSelectedRows();
      this.gridRef.removeItem(selectRows);
    }
    
    render(){
      const {rowData} = this.state
      const columnDefs = [
        {headerName: "部门名称", field: "entityName",editable:true,
        checkboxSelection:true,
        cellEditorFramework:LookUpCell,
        cellEditorParams:()=>{ // 自定义参数
          return {
            lookUpConfig:{
              lookUpKey:'ENTITY',
              modalKey:'entityName',
              onSearchBefore:()=>{return {unitId:8110}},
              onOk:(idArr,rowArr,api)=>{
                const entityCode = rowArr.map(it=>it.entityCode);
                const entityName = rowArr.map(it=>it.entityName);
                api.updateRowData({entityName,entityCode});
              },
              onClear:(api)=>{
                api.updateRowData({entityName:"",entityCode:""});
              },
              onCancel:()=>{},
            },
          }
        }},
        {headerName: "部门代码", field: "entityCode",editable:true},
        {headerName: "总额", align:'right', field: "price",editable:true,
          cellEditorFramework:NumberCell,
          valueFormatter:(params)=>numFormatStr(params.value)},
        {headerName: "税率", align:'right', field: "rate",editable:true,
          cellEditorFramework:NumberCell,
          valueFormatter:(params)=>`${params.value}%`,
        },
        {headerName: "净额", align:'right', field: "jeprice",editable:true,
          cellEditorFramework:NumberCell,
          valueFormatter:(params)=>numFormatStr(params.value)},
        {headerName: "税额", align:'right', field: "seprice",editable:true,
          cellEditorFramework:NumberCell,
          valueFormatter:(params)=>numFormatStr(params.value)},
        {headerName: "日期", align:'center', field: "date", editable:true,
          cellEditorFramework:DateCell,
          valueFormatter:(params)=>formatDate(params.value)},
          // 隐藏字段
        {headerName: "有无借款",hide:true, field: "agPopupSelectCellEditor", editable:true,
          cellEditor:"agPopupSelectCellEditor",
          cellEditorParams:{values: ['有', '无']}},
        // aggrid 提供的几种编辑框
        // agTextCellEditor，agPopupTextCellEditor，agSelectCellEditor，agRichSelectCellEditor
        {headerName: "备注", field: "agLargeTextCellEditor", editable:true,
         cellEditor:"agLargeTextCellEditor"},
        {headerName: "操作列", field: "ope", pinned:'right',align:'center',
         cellRenderer:'actionCellRenderer'},
    ]
    
      const gridProps = {
        // 这是拿到aggrid表格引用，从而调用aggrid组件暴露方法
        ref:(ref)=>{this.gridRef = ref}, 
        // 表格头工具栏
        toolBars:[
          <Btns.save onClick={this.handleSave} key="save" size="small" />,
          <Btns.add onClick={this.handleAdd} key="add" size="small" />,
          <Btns.del align="right" onClick={this.handleDelAll} text="清空" 
        	key="add" size="small" />,
          <WConfirm align="right" key="del" type="del" onConfirm={() => this.handleDel()}>
            <Btns.del size='small' />
          </WConfirm>,
        ],
        gridOptions:{
          // 这里定义操作列注册 还有其他方式注入组件
          frameworkComponents: { 
              actionCellRenderer:(params)=>( 
                <Act>
                  <WConfirm type="del" onConfirm={()=>this.handleDel(params.data)}>
                    <Icon type="delete" />
                  </WConfirm>
                </Act>
              ),
          },
          onCellValueChanged:this.onCellValueChanged,
        },
      }
            
      return (
        <AgGrid
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={this.onGridReady} 
          {...gridProps}
        />
      ) 
    }
}
```



