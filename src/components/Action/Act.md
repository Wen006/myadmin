



### Act  操作列

操作列显示

### 使用场景

操作列项目，超过几个显示隐藏

### 如何使用

```javascript
<Act>
  <MPCConfirm type="del" onConfirm={() => this.handleDel(params.data)}>
    <Icon type="delete" />
      </MPCConfirm>
	<Act.Item key="a" disabled onClick={()=>alert(1)}>a</Act.Item>
	<Act.Item key="b" onClick={()=>alert(1)}>b</Act.Item>
</Act>
```

### 引入方式

```javascript
import Act from 'plugins'
```

### 组件使用

#### Act

| 参数    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| maxShow | 最大显示项目 | number | 2      |

#### Act.Item

| 参数      | 说明      | 类型    | 默认值 |
| --------- | --------- | ------- | ------ |
| onClick   | 点击事件  | number  | -      |
| className | className | string  | -      |
| disabled  | 是否禁用  | boolean | false  |

`Act.children`这是针对所有被Act 包含到直系子标签

| 参数   | 必填 | 说明                                | 类型    | 默认值 |
| ------ | ---- | ----------------------------------- | ------- | ------ |
| hidden |      | 是否隐藏                            | boolean | false  |
| key    | ✅    | 唯一key，这个必须唯一，否则页面出错 | string  | -      |

```javascript
const rowData = [
    {id:1,name:'张三',age:22},
]
const columnDefs = [
  {
    headerName: '姓名',
    align: 'right',
    field: 'name',
  },{
    headerName: '年龄',
    align: 'right',
    field: 'age',
  },{
    headerName: '操作列',
    pinned:	'left',
    field: 'ope',
    cellRenderer:"actionCellRenderer",
  }
  
]

const gridProps ={
  gridOptions: {
        // 这里定义操作列注册 还有其他方式注入组件
        frameworkComponents: {
            actionCellRenderer: params => (
            <Act>
              <MPCConfirm type="del" onConfirm={() => this.handleDel(params.data)}>
                <Icon type="delete" />
              </MPCConfirm>
              <Act.Item key="a" disabled onClick={()=>alert(1)}>a</Act.Item>
              <Act.Item key="b" onClick={()=>alert(1)}>b</Act.Item>
            </Act>
          ),
        }
  }
}

<AgGrid
  columnDefs={columnDefs}
  rowData={rowData}
	{...gridProps}
/> 
```

