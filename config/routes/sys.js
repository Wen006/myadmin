/**
 * @description 系统功能路由配置
 * @author wennn
 */

 export default [
    {
      path: '/system',
      name: 'system',
      icon: 'dashboard',
      routes: [
        {
          path: `/system/user/info/userInfoIndex`,
          name: '用户信息',
          component: `./sys/sm/user/info/userInfoList`,
        },
        {
          path: `/system/user/info/userInfoEdit`,
          name: '修改信息',
          component: `./sys/sm/user/info/userInfoEdit`,
        },
        // {
        //     path: `/system/menu/info/menuInfoIndex`,
        //     name: 'MenuManage',
        //     component: `./sys/menu/info/menuInfoEdit`,
        // },
        // {
        //     path: `/system/role/info/roleInfoIndex`,
        //     name: 'RoleManage',
        //     component: `./sys/role/info`,
        // },
      ],
    },
]