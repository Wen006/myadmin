/**
 * @description 系统级配置
 * @author neusoft
 * @time 20190624
 */

export default {
  SYS_PARAMS: {
    url: '/security/init',
    method: 'get',
    desc: '初始化参数',
    auth: 'wennn',
  },
  SYS_USER_INFO_LOGIN: {
    url: '/security/login',
    method: 'formpost',
    desc: '用户登陆',
    auth: 'wennn',
  },
  SYS_USER_INFO_GETCURUSER: {
    url: '/security/success',
    method: 'get',
    desc: '获取当前用户信息',
    auth: 'wennn',
  },
  SYS_USER_INFO_LOGINOUT: {
    url: '/security/logout',
    method: 'GET',
    desc: '用户退出登陆',
    auth: 'wennn',
  },
  // SYS_USER_INFO_CHANGE_ROLE: {
  //   url: '/security/changeLoginRole',
  //   method: 'GET',
  //   desc: '用户切换角色',
  //   auth: 'wennn',
  // },

  SYS_USER_LIST_BY_DTO: {
    url: '/sm/user/listByDto',
    method: 'get',
    mockhandler: 'list',
    mocktable: 'SM_USER',
    desc: '用户列表',
    auth: 'wennn',
  },
  SYS_USER_EDIT_BY_ID: {
    url: '/sm/user/getUserInfo',
    method: 'get',
    mocktable: 'SM_USER',
    mockhandler: 'getone',
    desc: '查询用户信息,通过id',
    auth: 'wennn',
  },
  SYS_USER_SAVE_OR_UPDATE: {
    url: '/sm/user/saveOrUpdateUserInfo',
    method: 'post',
    mockhandler: 'saveorupdate',
    mocktable: 'SM_USER',
    desc: '用户保存',
    auth: 'wennn',
  }, 
  SYS_USER_DELETE_MULTI: {
    url: '/sm/user/delete',
    method: 'DELETE',
    mocktable: 'SM_USER',
    mockhandler: 'delete',
    auth: 'wennn',
  },
  SYS_USER_GETONE: {
    url: '/sm/user/getOne',
    method: 'GET',
    mocktable: 'SM_USER',
    mockhandler: 'getone',
    auth: 'wennn',
  },
  SYS_USER_SAVE_PWD: {
    url: '/sm/user/savePassword',
    method: 'post',
    mocktable: 'SM_USER',
    mockhandler: 'saveorupdate',
    desc: '用户代码修改',
    auth: 'wennn',
  },
  SYS_MENU_QUERY_DATA: {
    url: '/sm/menu/queryMenuData',
    method: 'get',
    desc: '菜单管理数据查询',
    // mocktable: 'SM_MENU',
    // mockhandler: 'list',
  },
  SYS_MENU_QUERY_TREE: {
    url: '/sm/menu/queryMenuTree',
    desc: '系统菜单查询',
    method: 'GET',
  },
  SYS_MENU_DELETE: {
    url: '/sm/menu/delete',
    desc: '系统菜单删除，传id数组',
    mocktable:'SM_MENU',
    mockhandler:'delete',
    method: 'DELETE',
  },
  SYS_MENU_SAVE_OR_UPDATE: {
    url: '/sm/menu/saveOrUpdate',
    desc: '系统菜单保存',
    mocktable:'SM_MENU',
    mockhandler:'saveorupdate',
    method: 'POST',
  },
  SYS_ROLE_LIST: {
    url: '/sm/role/listByDto',
    method: 'get',
    mocktable: 'SM_ROLE',
    mockhandler: 'list',
    auth:'wennn',
    desc:'# 角色管理获取角色列表'
  },
  SYS_ROLE_QUERY_FOR_USER: {
    url: '/sm/role/querySmRoleForUser',
    method: 'get',
    // mocktable: 'SM_ROLE',
    // mockhandler: 'list2',
    auth:'wennn',
    desc:'# 角色管理获取角色列表'
  },
  SYS_GET_MENUID_BY_ROLE: {
    url: '/sm/role/getMenuIdByRoleId',
    method: 'get',
    // mocktable: 'SM_ROLE',
    // mockhandler: 'list',
    desc:'# 角色管理通过角色获取选择的菜单id'
  },
  SYS_ROLE_SAVE_OR_UPDATE: {
    url: '/sm/role/saveOrUpdate',
    method: 'POST',
    mockhandler: 'saveorupdate',
    mocktable: 'SM_ROLE',
    auth:'wennn',
    desc:'#角色管理 保存角色信息'
  },
  SYS_ROLE_DELETE: {
    url: '/sm/role/delete',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'SM_ROLE',
    auth:'wennn',
    desc:'#角色管理， 角色删除'
  },
  SYS_USER_LIST_BY_ROLE: {
    url: '/sm/user/listByRole',
    method: 'get',
    mockhandler: 'list',
    mocktable: 'SM_USER',
    desc: '#角色管理 通过角色获取该角色下用户信息',
    auth: 'wennn', 
  },
  SYS_AD_LOVLIST_BY_DTO: {
    url: '/ad/lovlist/listByDto',
    method: 'get',
    mockhandler: 'list',
    mocktable: 'AD_LOV_LIST',
    desc: '# 字典管理 列表查询',
    auth: 'wennn',
  },

  SYS_AD_LOVLIST_GET_INFO: {
    url: '/ad/lovlist/getInfo',
    method: 'get',
    mockhandler: 'getone',
    mocktable: 'AD_LOV_LIST',
    desc: '# 字典管理 通过id查询 用于编辑和查看',
    auth: 'wennn',
  },
  SYS_AD_LOVLIST_SAVE_INFO: {
    url: '/ad/lovlist/saveAdInfo',
    method: 'post',
    mockhandler: 'saveorupdate',
    mocktable: 'AD_LOV_LIST',
    desc: '# 字典管理 保存',
    auth: 'wennn',
  },
  SYS_AD_LOVLIST_DEL_INFO: {
    url: '/ad/lovlist/delAdInfo',
    method: 'delete',
    mockhandler: 'delete',
    mocktable: 'AD_LOV_LIST',
    desc: '# 字典管理 删除',
    auth: 'wennn',
  },

  AD_LOV_LIST_FIND_BY_CODE: {
    url: '/ad/lovlist/getAdLovListByCode',
    // method: 'get',
    // mockhandler: 'list',
    // mocktable: 'AD_LOV_LIST',
    desc: '查询代码表通过listCode',
    auth: 'wennn',
  },



  SYS_MENU_GETONE: {
    url: '/system/menu/getOne',
    method: 'GET',
    auth: 'wennn',
    desc: '通过id获取菜单',
    mockhandler: 'getone',
    mocktable: 'SM_MENU',
  },
  SYS_MENU_DELMULT: {
    url: '/system/menu/deleteMulit',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'SM_MENU',
  },


  SYS_ROLE_GETONE: {
    url: '/system/role/getOne',
    method: 'POST',
    auth: 'zhaor',
    desc: '通过id获取',
    mockhandler: 'getone',
    mocktable: 'SM_ROLE',
  },


  SYS_MENUNEW_LIST: {
    url: '/system/menunew/listByDto',
    method: 'POST',
    mocktable: 'MENUNEW_INFO',
    mockhandler: 'list',
  },
  SYS_MENUNEW_GETONE: {
    url: '/system/menunew/getOne',
    method: 'GET',
    auth: 'zhaor',
    desc: '通过id获取',
    mockhandler: 'getone',
    mocktable: 'MENUNEW_INFO',
  },
  SYS_MENUNEW_DELMULT: {
    url: '/system/menunew/deleteMulit',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'MENUNEW_INFO',
  },
  SYS_MENUNEW_SAVE_OR_UPDATE: {
    url: '/system/menunew/saveOrUpdate',
    method: 'POST',
    mockhandler: 'saveorupdate',
    mocktable: 'MENUNEW_INFO',
  },
  SYS_AD_LOV_LIST_QUERY_CODELIST: {
    url: '/system/ad/adLovList/queryCodeList',
    method: 'GET',
    desc: '获取所有代码表缓存的',
    mockhandler: 'list2',
    mocktable: 'AD_LOV_LIST',
  },
  
  SYS_MD_CURRENCY_LIST: {
    url: '',
    method: '',
    mockhandler: '',
    mocktable: '',
  },
  SYS_MD_CURRENCY_GETONE: {
    url: '',
    method: '',
    mockhandler: '',
    mocktable: '',
  },
  SYS_MD_CURRENCY_DELMULT: {
    url: '',
    method: '',
    mockhandler: '',
    mocktable: '',
  },
  SYS_MD_CURRENCT_SAVA_OR_UPDATE: {
    url: '',
    method: '',
    mockhandler: '',
    mocktable: '',
  },
  SYS_LOVLIST_LIST: {
    url: '/system/ad/adLovList/queryByDto',
    method: 'GET',
    mocktable: 'AD_LOV_LIST',
    mockhandler: 'list',
    auth: 'zhaor',
  },
  SYS_LOVLIST_GETONE: {
    url: '/system/ad/adLovList/getAdLovCodeList',
    method: 'GET',
    desc: '通过id获取',
    mockhandler: 'getone',
    mocktable: 'AD_LOV_LIST',
    auth: 'zhaor',
  },
  AD_SYSTEM_PARAM_GET_CODE: {
    url: '/adSysParamType/getParamTypeByCode',
    method: 'GET',
    desc: '参数 paramCode',
    mockhandler: 'getone',
    mocktable: 'AD_SYSTEM_PARAM',
    auth: 'wennn',
  },
  SYS_LOVLIST_DELMULT: {
    url: '/system/ad/adLovList/deleteMultiLogic',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'AD_LOV_LIST',
    auth: 'zhaor',
  },
  SYS_LOVLIST_SAVE_OR_UPDATE: {
    url: '/system/ad/adLovList/saveRecords',
    method: 'POST',
    mockhandler: 'saveorupdate',
    mocktable: 'AD_LOV_LIST',
    auth: 'zhaor',
  }
};
