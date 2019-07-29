
## 后台服务对应配置,配置后可以通过 ServiceHandler 来调用


```javascript
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/**
 * @desc 这里配置所有服务restapi 模版配置
 * 如果与重复的key 则会覆盖（请确保配置都key都重复）
 *
 *  "KEY请大写唯一(服务模块_具体表_功能)":{
 *      "url":"/system/user/listByDto", //后台对应restapi url
 *      "method":"POST",                //请求方式 formpost，delete,post,get
 *      "header":['Accept': 'application/json'], // 可以设置请求的头
 *      "mocktable":"SM_USER",        //用户模拟数据的找mocktable的 这里的表明一定和mock dbDao.js配置的要一致
 *      "mockhandler":"list",           //配置该项mock会统一处理 可选【list(翻页),list2(无翻页)),saveorupdate,delete,getone】
 *      "auth":"wennn",                 //作者
 *      “desc":"用户列表查询"             //方法描述
 *  },
 *
 * @time 20180731
 * @auth wennn
 */
```