

[TOC]

### CachePager 页面缓存

 正对页面缓存

### 使用场景

兄弟组件切换的时候，希望缓存其中的组件的时候

### 如何使用

```javascript
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'antd';
import CachePager,{ Page } from './cachepage/CachePager'

class APage extends React.Component {
  msg = "我是APage 页面"+new Date().getTime();

  componentDidMount() {
    console.log(this.msg)
  }
  render() {
    return <div>{this.msg}</div>
  }
}

class BPage extends React.Component {
  msg = "我是BPage 页面"+new Date().getTime();

  componentDidMount() {
    console.log(this.msg)
  }
  render() {
    return <div>{this.msg}</div>
  }
}

export default class PageIndex extends React.Component {
  state = {
    opeFlag: 'list',
  };

  handleClick = () => {
    let { opeFlag } = this.state
    opeFlag = opeFlag == "edit" ? "list" : "edit";
    this.setState({ opeFlag });
    this.cacheRef.loadPage(opeFlag);
  }

  render() {
    return (
      <div style={{ margin: '0px 150px', width: '100%' }}>
        <Button onClick={this.handleClick.bind(this)}>切换</Button>
        <CachePager 
          ref={(ref) => { this.cacheRef = ref }} 
          // defaultKey="list"
          // current={this.state.opeFlag}
        >
          <APage key="list" cache/>
          <BPage key="edit" />
          <Page key="view"> 若组件为原生元素比如div，span的时候可以用这个标签包裹一下 </Page>
        </CachePager>
      </div>
    );
  }
}

```

### 引入方式

```javascript
import CachePager,{ Page } from './cachepage/CachePager'
```

### 属性

CachePager

| 参数       | 说明                                 | 类型   | 默认值 |
| ---------- | ------------------------------------ | ------ | ------ |
| current    | 切换哪一个                           | string | -      |
| defaultKey | 默认展示哪个，如果不指定会定位第一个 | string | -      |

CachePager 子组件 children

| 参数  | 说明                                                         | 类型   | 默认值 |
| ----- | ------------------------------------------------------------ | ------ | ------ |
| key   | 必须唯一，通过这个切换定位页面的                             | string | -      |
| cache | 页面是否缓存，请不要用在原生元素（div，span），若是原生用Page标签包裹一下 | false  |        |

```javascript
   <CachePager current={opeFlag}> // opeFlag 对应子组件key
     <APage key="list" cache/> // 这里子组件cache=true 意思这个组件缓存
     <BPage key="edit" />
     <Page key="view" cache> 若组件为原生元素比如div，span的时候可以用这个标签包裹一下 </Page>
   </CachePager>
```



### API

**如何使用**

通过react属性ref 拿到组件引用	`ref={(ref) => { this.cacheRef = ref }} `

然后通过`this.cacheRef.*`调用

- loadPage(current) 	`切换哪一个`

  

### 案例1 受控型 (金轮建议)

```javascript
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'antd';
import CachePager from './cachepage/CachePager'

class APage extends React.Component {
  msg = "我是APage 页面"+new Date().getTime(); 
  render() {
    return <div>{this.msg}</div>
  }
}

class BPage extends React.Component {
  msg = "我是BPage 页面"+new Date().getTime();
  render() {
    return <div>{this.msg}</div>
  }
}

export default class PageIndex extends React.Component {
  state = {
    opeFlag: 'list',
  };

  handleClick = () => {
    let { opeFlag } = this.state
    opeFlag = opeFlag == "edit" ? "list" : "edit";
    this.setState({ opeFlag }); 
  }

  render() {
    const {opeFlag} = this.state
    return (
      <div style={{ margin: '0px 150px', width: '100%' }}>
        <Button onClick={this.handleClick.bind(this)}>切换</Button>
        <CachePager current={opeFlag}>
          <APage key="list" cache/> // 这里子组件cache=true 意思这个组件缓存
          <BPage key="edit" />
        </CachePager>
      </div>
    );
  }
}
```



### 案例2 通过api方式调用

```javascript
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'antd';
import CachePager from './cachepage/CachePager'

class APage extends React.Component {
  msg = "我是APage 页面"+new Date().getTime();

  componentDidMount() {
    console.log(this.msg)
  }
  render() {
    return <div>{this.msg}</div>
  }
}

class BPage extends React.Component {
  msg = "我是BPage 页面"+new Date().getTime();

  componentDidMount() {
    console.log(this.msg)
  }
  render() {
    return <div>{this.msg}</div>
  }
}

export default class PageIndex extends React.Component {
  state = {
    opeFlag: 'list',
  };

  handleClick = () => {
    let { opeFlag } = this.state
    opeFlag = opeFlag == "edit" ? "list" : "edit";
    this.setState({ opeFlag });
    this.cacheRef.loadPage(opeFlag); // 通过调用api这种方式切换
  }

  render() {
    return (
      <div style={{ margin: '0px 150px', width: '100%' }}>
        <Button onClick={this.handleClick.bind(this)}>切换</Button>
        <CachePager 
          ref={(ref) => { this.cacheRef = ref }} 
          defaultKey="list" // 不写默认list
        >
          <APage key="list" cache/> // 这里子组件cache=true 意思这个组件缓存
          <BPage key="edit" />
        </CachePager>
      </div>
    );
  }
}
```

