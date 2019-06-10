## 导入模版


###页面使用
```js

    import importTemplate from 'routes/common/importTemplate/importTemplate' //导入模块

    importTemplate.show({
        title: '标题，写名字就行后缀会自动加上导入',
        serviceUrl:"接口地址大概这个样子=>/fsc/budget/xxx/xxx",
        params:{key:"要随着文件流传到后台的参数"},  }).then(res => {
      if (!res) return;
      const { code, datas, returnMessage } = res;
      if (code == '200') {
       
      } else {
        // message.error(returnMessage)
      }
    });    

```