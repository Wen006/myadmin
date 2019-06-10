



### Renderer  格式化组件

格式化数据

### 使用场景

- AdRender  	  字典表格式化
- DateRender	日期

### 如何使用

`value` `config`

- 通用用法

  ```javascript
  <DateRender value={text} config={{format:'yyyy-MM-dd'}} />
  
  const dataSource=[
    {CODE_NAME:'是',CODE_VALUE:"01"},
    {CODE_NAME:'否',CODE_VALUE:"02"},
  ]
  <AdRender 
  	value={"01"} 
  	config={{
            // code:'COMMON_Y_N',
            dataSource:dataSource
           }}
    />
  ```

- AgGrid 用法

```javascript
const rowData = [
    {id:1,name:'Lady',gender:'01',brith:1552965351871},
]

const columnDefs = [
    {
      headerName:'性别',
      field:'gender',
      cellRenderer:'adRender', // 指定注册的组件
      cellRendererParams:{
        config:{ // 这里配置参数
          // 1.通过code获取缓存或者后台提供的字典表
          // code:'GENDER', 
          // 2.指定字典数据集
          dataSource:[
            {CODE_NAME:"男",CODE_VALUE:"01"},
            {CODE_NAME:"女",CODE_VALUE:"02"}
          ]
        }
      }
    },
    {headerName:'生日',
     field:'brith',
     cellRenderer:'dateRender', // 指定注册的组件
     cellRendererParams:{
       config:{ // 这里配置参数
         format:'yyyy-MM',
       }
     }
    },
]

<AgGrid
  columnDefs={columnDefs}
  rowData={rowData}
	gridOptions={{
        // 这里定义操作列注册 还有其他方式注入组件
        frameworkComponents: {
          adRender: AdRender,
          dateRender: DateRender,
        }}
  }
/> 
```

### 引入方式

```javascript
import {AdRender,DateRender} from 'plugins'
```

### 组件使用

#### DateRender

| 参数   | 说明          | 类型                 | 默认值 |
| ------ | ------------- | -------------------- | ------ |
| value  | 要格式化的值  | number\|moment\|date | -      |
| config | 参考下面cofig | number               | -      |

`config`

| 参数   | 说明         | 类型   | 默认值     |
| ------ | ------------ | ------ | ---------- |
| format | 格式化表达式 | string | yyyy-MM-dd |

```javascript
const rowData = [
    {id:1,date:10},
]
const columnDefs = [
  {
    headerName: '日期',
    align: 'right',
    field: 'date',
    cellRenderer:'dateRender', //	通用的日期格式化组件
    cellRendererParams:{
      config:{
        format:'yyyy-MM',
      }
    }
    
  }
]

const gridProps ={
  gridOptions: {
        // 这里定义操作列注册 还有其他方式注入组件
        frameworkComponents: {
          dateRender: DateRender, // 这里
        }
  }
}

<AgGrid
  columnDefs={columnDefs}
  rowData={rowData}
	{...gridProps}
/> 
```

#### AdRender

| 参数   | 说明     | 类型           | 默认值 |
| ------ | -------- | -------------- | ------ |
| value  | 提示内容 | string\|number | -      |
| config | 如下     | Obj            | -      |

`config`

| 参数       | 说明             | 类型   | 例子                               | 默认值 |
| ---------- | ---------------- | ------ | ---------------------------------- | ------ |
| code       | 对应代码表的code | string | COMMON_Y_N                         | -      |
| dataSource | 指定字典数据源   | Array  | [{CODE_VALUE:'01',CODE_NAME:"是"}] | []     |

```javascript
const rowData = [{id:1,comYN:'Y',age:12}]

const columnDefs = [
   {
        headerName: '有无借款',
        // hide: true,
        field: 'comYN',
        cellRenderer: 'adRender', // 通用自定义的格式化组件
        cellRendererParams: {
          config: {
            //1.后台字典表的code 组件自动查询
            code:'COMMON_Y_N',
            //2.直接写上dataSource
            // dataSource: [
            //   { CODE_NAME: '是', CODE_VALUE: '1' },
            //   { CODE_NAME: '否', CODE_VALUE: '0' },
            // ],
          },
        },
      },
    {headerName:'年龄',field:'age' },
]

const gridProps ={
  gridOptions: {
        // 这里定义操作列注册 还有其他方式注入组件
        frameworkComponents: {
          adRender: adRender, // 这里
        }
  }
}

<AgGrid
  columnDefs={columnDefs}
  rowData={rowData}
	{...gridProps}
/> 
```