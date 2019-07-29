/**
 * @description 系统功能路由配置
 * @author wennn
 */

 export default [
    {
      path: '/sys',
      name: '系统管理',
      icon: 'dashboard',
      routes: [
        {
          path: `/sys/sm/user/info/userIndex`,
          name: '用户信息',
          author: 'wennn',
          component: `./sys/sm/user/info/userInfoList`,
        },
        {
          path: `/sys/sm/user/info/userIndex/edit`,
          name: '修改信息',
          author: 'wennn',
          component: `./sys/sm/user/info/userInfoEdit`,
        },
        {
          path: `/sys/menu/info/menuInfoIndex`,
          name: '菜单管理',
          author: 'wennn',
          component: `./sys/sm/menu`,
        },
        {
          path: `/sys/role/info/roleInfoIndex`,
          name: '角色管理',
          author: 'wennn',
          component: `./sys/sm/role/`,
        },
        {
          path: `/sys/ad/lovlist/lovlistIndex`,
          name: '系统字典 列表页面',
          author: 'wennn',
          component: `./sys/ad/lovlist/adLovList`,
        },
        {
          path: `/sys/ad/lovlist/lovlistIndex/lovlistEdit`,
          name: '系统字典 编辑页面',
          author: 'wennn',
          component: `./sys/ad/lovlist/adLovEdit`,
        },
        // {
        //     path: `/sys/menu/info/menuInfoIndex`,
        //     name: 'MenuManage',
        //     component: `./sys/menu/info/menuInfoEdit`,
        // },
        // {
        //     path: `/sys/role/info/roleInfoIndex`,
        //     name: 'RoleManage',
        //     component: `./sys/role/info`,
        // },
      ],
    },
]