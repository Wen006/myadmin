---
title: 
  en-US: Viewer
  zh-CN: Viewer
subtitle: 侧边滑动
cols: 1
order: 14
---

从旁边滑动出来，一般用于查看，审批，等等 快捷简单，无复杂交互的页面。

## API

```html

<Viewer tiggerTitle="侧边滑动" onReady={(vApi)=>{this.vApi=vApi}}>
    侧边滑动内容，这里其实是业务组件
</Viewer>

<Btns.default onClick={_=>{this.vApi.showViewer(true)}}>侧边滑动按钮触发</Btns.default>
```

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| cache | true or false,是否缓存组件 | Boolean | true |
| isView | true or false,是否是查看显示返回按钮 | Boolean | false |
| tiggerTitle | 标题点击触发滑动的| ReactDom or string | - |
| onClose | 滑动关闭触发 | func | - |
| onReady | 获取组件api | func | - |

api:
showViewer
