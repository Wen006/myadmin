

### AgGridPro 表格

后台翻页，无缓存。
结合mobx封装。

适合用编辑一行就保存一行的

### 使用场景

- 常用列表需要后台分页
- 数据量庞大
- 大量结构化的数据需要展现。
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
- 想要复杂类型编辑。

### 如何使用

无需自己指定数据源
配置后台服务 ```fetch.queryKey```  (该配置是在services/config 下配置的后台服务)

```javascript
const columnDefs = [
    {headerName:'姓名',field:'name'},
    {headerName:'年龄',field:'age' },
]
const agProps = {
      fetch: {
        queryKey: 'SYS_USER_LIST_BY_DTO', // 后台api配置
        // queryMethod: Promise,				// 也可以自己定义请求方法 Promise对象
      },
}

<AgGridPro
	ref={ref => {this.gridRef = ref}}
	columnDefs={columnDefs}
	{...agProps}
/>
```

### 引入方式

```javascript
import AgGridPro,{ DateCell, LookUpCell } from 'plugins/AgGrid/AgGridPro';
```



### 常用属性

- toolBars 工具栏目	***方便布局***

  数组：每个元素要有 **唯一的key**

  元素位置： 通过元素的**align** 属性

```javascript
const agProps = {
    toolBars:[	// 这是个数组 注意数组里每个元素要有 唯一的key
        <Btns.add algin="left" key="add" onClick={this.handleAdd.bind(this, 'add')} />,
        <Btns.update disabled algin="left" key="edit"/>,
         // 下面的同上面的 （不推荐）
        { buttons:'update', label:'更新', disabled:true, size:'small',onClick:()=>{}}, 
 		<MPCConfirm key="del" type="del" onConfirm={() => this.handleDel.bind(this)}>
          <Btns.del algin="left" key="delete" />
        </MPCConfirm>,
		<span algin="right">合计：¥200</span>
    ]
    fetch: {
        queryKey: 'SYS_USER_LIST_BY_DTO', // 后台api配置
         // queryMethod: Promise,				// 也可以自己定义请求方法 Promise对象
    },
}
```

- toolPanel 自定义工具栏	***自定义布局***

  Func：返回一个字符串或者组件

  ```javascript
  const agProps = {
      toolBars:[	// 这是个数组 注意数组里每个元素要有 唯一的key
          <Btns.add algin="left" key="add" onClick={this.handleAdd.bind(this, 'add')} />,
  		<span algin="right">合计：¥200</span>
      ],
      toolPanel:()=>{
  	    return <span>我是toolBar和表格之间的部分</span>
      },
      fetch: {
          queryKey: 'SYS_USER_LIST_BY_DTO', // 后台api配置
           // queryMethod: Promise,				// 也可以自己定义请求方法 Promise对象
      },
  }
  ```

  

  ![image-20190312200732681](/Users/wen/Library/Application Support/typora-user-images/image-20190312200732681.png)

  

  

### 常用API

- 获取API对象

```javascript
// aggrid 初始化回调 通过这个拿到 grid封装的store 和aggrid官网api
onGridReady = (params, agStore) => {
    this.agStore = agStore;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.agStore.submit({}); // 调用store查询数据 页面一加载就查询
};

<AgGridPro
	ref={ref => {this.gridRef = ref}} // 获取咱们封装的grid引用
	columnDefs={columnDefs}
	onGridReady={this.onGridReady}
	{...agProps}
/>
```

- 使用

  - 咱们封装的	***调用方式this.agStore.\*或者this.gridRef.\****

    查询：this.agStore.submit(params); 	或者 	this.gridRef.submit(params)

    ```这里的params可以传带分页信息，pageNo，pageSize 但是不建议，因为分页信息都在mobx维护好了```

    **其他的api参考编辑的AgGrid**

  - 官网api		***调用方式this.gridApi.\* 、this.gridColumnApi.\****

    **详情参考aggrid官网的api**

### 可编辑

​	***这里建议针对编辑一行就保存一条的情况下使用。***

​	基本上功能和可编辑AgGrid差不多，但是后台翻页的情况下处理数据源麻烦（编辑AgGrid 不带后台翻页）。

### 示例代码



```javascript
import React from 'react';
import PageHeaderLayout from 'layouts/PageHeaderLayout';
import Intler from 'components/Intler/Intler';
import { Btns } from 'components';
import AgGridPro from 'plugins/AgGrid/AgGridPro';
import MPCConfirm from 'components/MPCConfirm/MPCConfirm';
import Navigator from 'stores/common/Navigator';
import Act from 'plugins/Action/Act';
import lodash from 'lodash';
import UserFilter from './UserFilter';

const ActItem = ({ text, className, ...others }) => {
  return (
    <a key="a" className='ant-dropdown-link' {...others} href="javascript:;">
      {text}
    </a>
  );
};

export default class UserList extends React.Component {

  // 查询
  handleSearch = params => {
    // params = this.props.form.getFieldsValue();
    this.agStore.submit(params);
  };

  handleAdd = ope => {};

  handleDel = () => {};

  handleOpe = async (ope, record) => {};

  // 通过这个拿到 table的store  调用api
  onGridReady = (params, agStore) => {
    this.agStore = agStore;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.agStore.submit({}); // 调用store查询数据
  };

  render() {
    const columnDefs = [
      { headerName:'',width:40,checkboxSelection:true},
      { headerName: Intler.getIntl('UserAccount'),
        field: 'userName',align: 'left',cellRenderer: 'infoCellRenderer'},
      { headerName: Intler.getIntl('UserName'), field: 'userName', align: 'left' },
      { headerName: Intler.getIntl('User_UnitName'), field: 'unitName', align: 'left' },
      { headerName: Intler.getIntl('User_EntityName'), field: 'entityName', align: 'left' },
      { headerName: Intler.getIntl('Email'), field: 'email', align: 'left' },
      { headerName: Intler.getIntl('Operation'), field: 'operation',
       	width: 180,align: 'center', cellRenderer: 'actionCellRenderer',
      },
    ];

    const agProps = {
      toolBars: [
        <Btns.add algin="left" key="add" onClick={this.handleAdd.bind(this, 'add')} />,
        <Btns.update algin="left" key="edit" onClick={this.handleAdd.bind(this, 'edit')}/>,
        <MPCConfirm key="del" type="del" onConfirm={() => this.handleDel.bind(this)}>
          <Btns.del algin="left" key="delete" />
        </MPCConfirm>,
      ],
      toolPanel:()=>{
        return <span>我是toolBar和表格之间的部分</span>
      },
      fetch: {
        queryKey: 'SYS_USER_LIST_BY_DTO',
        // queryMethod: Promise,
      },
      gridOptions: {
        frameworkComponents: {
          infoCellRenderer: params => (	// 自定义详情链接组件
            <ActItem
              text={params.value}
              key="view"
              onClick={() => {
                this.handleOpe('view', params.data);
              }}
            />
          ),
          actionCellRenderer: params => {	// 自定义操作列
            const record = params.data;
            return (
              <Act>
                <ActItem
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
                    this.handleOpe('del', record);
                  }}
                >
                  <ActItem text="删除" key="del_item" />
                </MPCConfirm>
              </Act>
            );
          },
        },
      },
    };

    return (
      <PageHeaderLayout>
        <UserFilter submit={this.handleSearch} />
        <AgGridPro
          key="aggrid"
          ref={ref => {
            this.gridRef = ref;
          }}
          columnDefs={columnDefs}
          onGridReady={this.onGridReady}
          {...agProps}
        />
      </PageHeaderLayout>
    );
  }
}

```

