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
            name: 'UserManage',
            component: `./sys/user/info/userInfoList`,
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