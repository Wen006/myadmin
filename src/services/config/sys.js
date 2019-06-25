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
  SYSTEM_LOCALE_TIME: {
    url: '/security/getTimeZoneDateTime',
    method: 'get',
    desc: '获取当前用的时间',
    auth: 'wennn',
  },
  SYSTEM_CHECK: {
    url: '/security/check',
    method: 'get',
    desc: '这个是用于iframe的校验是否过期登陆的',
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
  SYS_USER_INFO_CHANGE_ROLE: {
    url: '/security/changeLoginRole',
    method: 'GET',
    desc: '用户切换角色',
    auth: 'wennn',
  },

  SYS_USER_LIST_BY_DTO: {
    url: '/sm/user/list',
    method: 'get',
    mockhandler: 'list',
    mocktable: 'USER_INFO',
    desc: '用户列表',
    auth: 'wennn',
  },
  SYS_USER_EDIT_BY_ID: {
    url: '/sm/user/editUserInfo',
    method: 'get',
    mocktable: 'USER_INFO',
    mockhandler: 'getone',
    desc: '查询用户信息,通过id',
    auth: 'wennn',
  },
  SYS_USER_SAVE_OR_UPDATE: {
    url: '/sm/user/saveOrUpdateUserInfo',
    method: 'post',
    mockhandler: 'saveorupdate',
    mocktable: 'USER_INFO',
    desc: '用户保存',
    auth: 'wennn',
  }, 
  SYS_USER_DELETE_MULTI: {
    url: '/sm/user/delete',
    method: 'DELETE',
    mocktable: 'USER_INFO',
    mockhandler: 'delete',
    auth: 'wennn',
  },
  SYS_USER_GETONE: {
    url: '/sm/user/getOne',
    method: 'GET',
    mocktable: 'USER_INFO',
    mockhandler: 'getone',
    auth: 'wennn',
  },
  SYS_USER_SAVE_PWD: {
    url: '/sm/user/savePassword',
    method: 'post',
    mocktable: 'USER_INFO',
    mockhandler: 'saveorupdate',
    desc: '用户代码修改',
    auth: 'wennn',
  },
  SYS_MENU_QUERY_DATA: {
    url: '/sm/menu/queryMenuData',
    method: 'get',
    // mocktable: 'MENU_INFO',
    // mockhandler: 'list',
  },
  SYS_MENU_QUERY_TREE: {
    url: '/sm/menu/queryMenuTree',
    method: 'GET',
  },
  SYS_MENU_GETONE: {
    url: '/system/menu/getOne',
    method: 'GET',
    auth: 'wennn',
    desc: '通过id获取菜单',
    mockhandler: 'getone',
    mocktable: 'MENU_INFO',
  },
  SYS_MENU_DELMULT: {
    url: '/system/menu/deleteMulit',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'MENU_INFO',
  },
  SYS_MENU_SAVE_OR_UPDATE: {
    url: '/system/menu/saveOrUpdate',
    method: 'POST',
    mockhandler: 'saveorupdate',
    mocktable: 'MENU_INFO',
  },
  SYS_ROLE_LIST: {
    url: '/system/role/listByDto',
    method: 'POST',
    mocktable: 'ROLE_INFO',
    mockhandler: 'list',
  },
  SYS_ROLE_GETONE: {
    url: '/system/role/getOne',
    method: 'POST',
    auth: 'zhaor',
    desc: '通过id获取',
    mockhandler: 'getone',
    mocktable: 'ROLE_INFO',
  },
  SYS_ROLE_DELMULT: {
    url: '/system/role/deleteMulit',
    method: 'DELETE',
    mockhandler: 'delete',
    mocktable: 'ROLE_INFO',
  },
  SYS_ROLE_SAVE_OR_UPDATE: {
    url: '/system/role/saveOrUpdate',
    method: 'POST',
    mockhandler: 'saveorupdate',
    mocktable: 'ROLE_INFO',
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
  SYS_AD_LOV_LIST_FIND_BY_CODE: {
    url: '/system/ad/adLovList/getAdLovListByCode',
    method: 'POST',
    desc: '查询代码表通过listCode',
    auth: 'wennn',
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
  },
  SYS_BILLNORULE_LIST: {
    url: '/system/ad/adBillnoRule/list',
    method: 'GET',
    mocktable: 'AD_BILLNORULE',
    mockhandler: 'list',
    auth: 'zhaor',
  },
  BC_FIVENDOR_LIST: {
    url: '/system/md/partner/list',
    method: 'GET',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'list',
  },
  BC_FIVENDOR_GETONE: {
    url: '/system/md/partner/getOne',
    method: 'GET',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'getone',
  },
  BC_FIVENDOR_DEL: {
    url: '/system/md/partner/delete',
    method: 'POST',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'delete',
  },
  BC_FIVENDOR_SAVE: {
    url: '/system/md/partner/saveOrUpdateMdPartner',
    method: 'POST',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'save',
  },
  CT_CREDITTARGETTYPE_DELETELOGICAL: {
    url: '/system/md/creditTargetType/deleteLogical',
    method: 'delete',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'delete',
  },
  CT_CREDITTARGETTYPE_DELETEMULTI: {
    url: '/system/md/creditTargetType/deleteMulti',
    method: 'delete',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'delete',
  },
  CT_CREDITTARGETTYPE_GETONE: {
    url: '/system/md/creditTargetType/getOne',
    method: 'get',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'getone',
  },
  CT_CREDITTARGETTYPE_SAVEORUPDATE: {
    url: '/system/md/creditTargetType/saveOrUpdate',
    method: 'POST',
    auth: 'huangh',
    desc: '供应商',
    mockhandler: 'save',
  },

  MD_PARTNER_UNIT_GETMDPARTNERBYID: {
    url: '/system/md/partnerUnit/getMdPartnerUnitById',
    method: 'GET',
    auth: 'huangh',
    desc: '根据业务伙伴ID查询已分配公司',
    mockhandler: 'getMdPartnerUnitById',
  },
  MD_PARTNER_UNIT_SAVE: {
    url: '/system/md/partnerUnit/saveOrUpdateMdPartnerUnit',
    method: 'POST',
    auth: 'huangh',
    desc: '根据业务伙伴ID重新分配公司',
    mockhandler: 'saveOrUpdateMdPartnerUnit',
  },
  VG_POSTINGCONDITION_DEL: {
    url: '/ve/vgdocvoucher/vgPostingCondition/deleteLogical',
    method: 'DELETE',
    auth: 'linzm',
    desc: '单据记账条件',
  },
  VG_POSTINGCONDITION_LISTBYDTO: {
    url: '/ve/vgdocvoucher/vgPostingCondition/selectPageOrderMap',
    method: 'GET',
    auth: 'linzm',
    desc: '单据记账条件',
  },
  VG_POSTINGCONDITION_SAVEORUPDATE: {
    url: '/ve/vgdocvoucher/vgPostingCondition/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '单据记账条件',
  },
  VG_POSTINGCONDITION_GETONE: {
    url: '/ve/vgdocvoucher/vgPostingCondition/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '单据记账条件',
  },
  BC_FICUSTOMER_SAVEORUPDATE: {
    url: '/system/bc/fiCustomer/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '客户',
  },
  BC_FICUSTOMER_GETONE: {
    url: '/system/bc/fiCustomer/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '客户',
  },
  BC_FICUSTOMER_DEL: {
    url: '/system/bc/fiCustomer/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '客户',
  },
  BC_FICUSTOMER_LISTBYDTO: {
    url: '/system/bc/fiCustomer/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '客户',
  },
  BC_EXCHANGERATE_SAVEORUPDATE: {
    url: '/system/bc/exchangeRate/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '汇率',
  },
  BC_EXCHANGERATE_GETONE: {
    url: '/system/bc/exchangeRate/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '汇率',
  },
  BC_EXCHANGERATE_DEL: {
    url: '/system/bc/exchangeRate/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '汇率',
  },
  BC_EXCHANGERATE_LISTBYDTO: {
    url: '/system/bc/exchangeRate/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '汇率',
  },
  BC_FIENTITY_DEL: {
    url: '/system/bc/fiEntity/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '成本中心',
  },
  BC_FIENTITY_LISTBYDTO: {
    url: '/system/bc/fiEntity/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '成本中心',
  },
  BC_FIENTITY_GETONE: {
    url: '/system/bc/fiEntity/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '成本中心',
  },
  BC_FIENTITY_SAVEORUPDATE: {
    url: '/system/bc/fiEntity/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '成本中心',
  },
  BC_FIPROFITCENTER_DEL: {
    url: '/system/bc/fiProfitCenter/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '利润中心',
  },
  BC_FIPROFITCENTER_LISTBYDTO: {
    url: '/system/bc/fiProfitCenter/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '利润中心',
  },
  BC_FIPROFITCENTER_GETONE: {
    url: '/system/bc/fiProfitCenter/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '利润中心',
  },
  BC_FIPROFITCENTER_SAVEORUPDATE: {
    url: '/system/bc/fiProfitCenter/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '利润中心',
  },
  BC_PAYCONDITION_DEL: {
    url: '/system/bc/bcFiPaycondition/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '付款条件',
  },
  BC_PAYCONDITION_LISTBYDTO: {
    url: '/system/bc/bcFiPaycondition/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '付款条件',
  },
  BC_PAYCONDITION_GETONE: {
    url: '/system/bc/bcFiPaycondition/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '付款条件',
  },
  BC_PAYCONDITION_SAVEORUPDATE: {
    url: '/system/bc/bcFiPaycondition/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '付款条件',
  },
  BC_REASON_DEL: {
    url: '/system/bc/reason/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '原因代码',
  },
  BC_REASON_LISTBYDTO: {
    url: '/system/bc/reason/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '原因代码',
  },
  BC_REASON_GETONE: {
    url: '/system/bc/reason/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '原因代码',
  },
  BC_REASON_SAVEORUPDATE: {
    url: '/system/bc/reason/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '原因代码',
  },
  BC_ORDER_DEL: {
    url: '/system/bc/bcSapOrder/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '内部订单',
  },
  BC_ORDER_LISTBYDTO: {
    url: '/system/bc/bcSapOrder/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '内部订单',
  },
  BC_ORDER_GETONE: {
    url: '/system/bc/bcSapOrder/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '内部订单',
  },
  BC_ORDER_SAVEORUPDATE: {
    url: '/system/bc/bcSapOrder/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '内部订单',
  },
  CT_CREDITTARGET_LIST: {
    url: '/system/md/creditTarget/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_QUERYBYPARAM: {
    url: '/system/md/creditTarget/queryByParam',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_DELETELOGICAL: {
    url: '/system/md/creditTarget/deleteLogical',
    method: 'delete',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_DELETEMULTI: {
    url: '/system/md/creditTarget/deleteMulti',
    method: 'delete',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_GETONE: {
    url: '/system/md/creditTarget/getOne',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_SAVEORUPDATE: {
    url: '/system/md/creditTarget/saveOrUpdate',
    method: 'post',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_DOENABLEORDISABLEMULTI: {
    url: '/system/md/creditTarget/doEnableOrDisableMulti',
    method: 'post',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_QUERYUNITTREEBYPARAM: {
    url: '/system/md/mdEntity/queryUnitTreeByParam',
    method: 'post',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_QUERYTARGETUNITBYCREDITID: {
    url: '/system/md/creditTargetUnit/queryTargetUnitByCreditId',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_QUERYCREDITTARGETSBYCOMPANYPARAM: {
    url: '/system/md/creditTargetUnit/queryCreditTargetsByCompanyParam',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_SAVEUNITTARGETS: {
    url: '/system/md/creditTargetUnit/saveUnitTargets',
    method: 'post',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  CT_CREDITTARGET_SELECTLISTBYPARAM: {
    url: '/system/md/creditTarget/selectListByParam',
    method: 'GET',
    auth: 'yuanrr',
    desc: '信用指标',
    mockhandler: 'list',
  },
  MD_BRAND_SAVEORUPDATE: {
    url: '/system/md/mdBrand/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '品牌',
  },
  MD_BRAND_DEL: {
    url: '/system/md/mdBrand/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '品牌',
  },
  MD_BRAND_LISTBYDTO: {
    url: '/system/md/mdBrand/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '品牌',
  },
  MD_BRAND_GETONE: {
    url: '/system/md/mdBrand/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '品牌',
  },
  MD_PRODLINE_SAVEORUPDATE: {
    url: '/system/md/mdProdLine/saveOrUpdate',
    method: 'POST',
    auth: 'linzm',
    desc: '产品线',
  },
  MD_PRODLINE_DEL: {
    url: '/system/md/mdProdLine/deleteMulti',
    method: 'DELETE',
    auth: 'linzm',
    desc: '产品线',
  },
  MD_PRODLINE_LISTBYDTO: {
    url: '/system/md/mdProdLine/listByDto',
    method: 'GET',
    auth: 'linzm',
    desc: '产品线',
  },
  MD_PRODLINE_GETONE: {
    url: '/system/md/mdProdLine/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '产品线',
  },
  BC_ECKIND_TREE: {
    url: '/system/bc/ecKind/queryBcEcKindTreeListAll',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型树',
    mockhandler: 'list',
  },
  BC_ECKIND_DELETE: {
    url: '/system/bc/ecKind/deleteLogical',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型树',
    mockhandler: 'list',
  },
  BC_ECKIND_ONE: {
    url: '/system/bc/ecKind/getOne',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKIND_ENABLE: {
    url: '/system/bc/ecKind/enable',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKIND_DISABLE: {
    url: '/system/bc/ecKind/disable',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKIND_SAVE: {
    url: '/system/bc/ecKind/saveOrUpdate',
    method: 'POST',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKINDPERSON_SAVE: {
    url: '/system/bc/bcEcKindPerson/doSaveEcKindPerson',
    method: 'POST',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKINDITEM_SAVE: {
    url: '/system/bc/ecKindItem/doSaveEcKindItem',
    method: 'POST',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_MDENTITY_TREE: {
    url: '/system/md/mdEntity/queryMdEntityTreeList',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ECKINDPERSON_TREE: {
    url: '/system/bc/ecKind/selectEcItemIdsByEntityId',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_ITEMTREE_TREE: {
    url: '/system/bc/ecItem/queryBcEcItemTreeList',
    method: 'GET',
    auth: 'hxl',
    desc: '费用项目树加载',
    mockhandler: 'list',
  },
  BC_ITEMTREE_ONE: {
    url: '/system/bc/ecItem/getBcEcItemById',
    method: 'GET',
    auth: 'hxl',
    desc: '费用项目点击事件',
    mockhandler: 'list',
  },
  BC_ITEMTREE_SAVE: {
    url: '/system/bc/ecItem/saveOrUpdateBcEcItemDto',
    method: 'POST',
    auth: 'hxl',
    desc: '费用项目保存',
    mockhandler: 'list',
  },
  BC_ITEMTREE_PERMISSION_SAVE: {
    url: '/system/bc/bcEcItemEntity/doSaveBcEcItemEntity',
    method: 'POST',
    auth: 'hxl',
    desc: '费用项目对应权限保存',
    mockhandler: 'list',
  },
  BC_ITEMTREE_DELETE_LOGICAL: {
    url: '/system/bc/ecItem/deleteLogicalById',
    method: 'DELETE',
    auth: 'hxl',
    desc: '费用项目对应删除接口',
    mockhandler: 'list',
  },
  BC_ITEMTREE_ENABLE: {
    url: '/system/bc/ecItem/changeUsingFlag',
    method: 'POST',
    auth: 'hxl',
    desc: '启停用接口',
    mockhandler: 'list',
  },
  BC_ECITEMLIST_TREE: {
    url: '/system/bc/ecItem/queryBcEcItemTreeList',
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_PERMISSIONS_TREE: {
    url: '/system/md/mdEntity/queryMdEntityByDto',
    method: 'GET',
    auth: 'hxl',
    desc: '费用项目实体权限', // 全部预算项目
    mockhandler: 'list',
  },
  BC_PERMISSIONS_PERSON_TREE: {
    url: '/system/bc/bcEcItemEntity/selectEntityIdsByItemId',
    method: 'GET',
    auth: 'hxl',
    desc: '费用项目权限', // //分配预算项目
    mockhandler: 'list',
  },
  BC_PERMISSIONS_PERSON_SAVE: {
    url: '/system/bc/bcDocKindEntity/doSaveBcDocKindEntity',
    method: 'GET',
    auth: 'hxl',
    desc: '费用项目权限', // 保存费用项目的实体权限
    mockhandler: 'list',
  },
  BC_DOCKIND_BYENTITYID: {
    url: '/system/bc/bcDocKindEntity/selectDocKindIdsByEntityId',
    method: 'GET',
    auth: 'hxl',
    desc: '单据类型-组织机构', // 查询单据类型分配组织机构
    mockhandler: 'list',
  },

  BC_ECKINDITEM_TREE: {
    url: '/system/bc/ecKindItem/selectEcItemsByKindId', // /system/bc/ecKind/selectEcItemIdsByKindId;   改后： /system/bc/ecKindItem/selectEcItemsByKindId
    method: 'GET',
    auth: 'xs',
    desc: '业务类型',
    mockhandler: 'list',
  },
  BC_FIVENDOR_ADDINIT: {
    url: '/fsc/claim/payable/addInit',
    method: 'POST',
    desc: '付款单报账单',
    auth: 'huangh',
  },
  MD_DISTRICT_CLASSIFY_LOOKUP: {
    url: '/system/lookup/selectMdDistrictClassifyForLookup',
    method: 'GET',
    desc: '地区分类',
    auth: 'wennn',
  },
  BC_ENTITY_LIST: {
    url: '/system/md/partnerUnit/getMdPartnerUnitForLookUp',
    method: 'POST',
    desc: '查询所有的公司',
    auth: 'wennn',
  },
  SYS_WORKFLOW_HISTORY: {
    url: '/system/rc/workflow/queryFlowHistory',
    method: 'GET',
    desc: '审批历史',
    auth: 'wyh',
  },
  SYS_FILE_UPLOAD: {
    url: '/file/upload',
    method: 'POST',
    desc: '文件上传 {*file,tName,docId,service}',
    auth: 'wennn',
  },
  SYS_FILE_DOWNLOAD: {
    url: '/file/download',
    method: 'GET',
    desc: '文件下载 {*fileId}',
    auth: 'wennn',
  },
  SYS_FILE_REMOVE: {
    url: '/file/removeFile',
    method: 'DELETE',
    desc: '删除附件{*fileId}',
    auth: 'wennn',
  },
  SYS_FILE_QUERY_LIST: {
    url: '/file/queryFileList',
    method: 'POST',
    desc: '查询文件列表{ *tName,*docId,*service,pageNum,pageSize}',
    auth: 'wennn',
  },
  FIBOOK_CODE_LIST: {
    url: '/system/bc/fiBook/listByDto',
    method: 'GET',
    desc: '公司代码',
    auth: 'hxl',
  },
  SYS_SCREENAGE_URL: {
    url: '/exif/client/image/attrUpload',
    method: 'POST',
    desc: '查询影像地址',
    auth: 'wyh',
  },
  SYS_SCREENAGE_FJNUM: {
    url: '/exif/client/image/imageAttachedCounts',
    method: 'POST',
    desc: '查询影像附件数量',
    auth: 'wyh',
  },
  SYS_RC_PAYFLOW_LIST: {
    url: '/system/rc/rcBusinessFlowUnit/queryPageList',
    method: 'GET',
    desc: '资金流程分配列表',
    auth: 'wyh',
  },
  SYS_RC_PAYFLOW_GETONE: {
    url: '/system/rc/rcBusinessFlowUnit/getOne',
    method: 'GET',
    desc: '资金流程分配详情',
    auth: 'wyh',
  },
  SYS_MD_CORP_SEARCHLIST: {
    url: '/system/md/corp/searchList',
    method: 'POST',
    desc: '资金流程 结算单位结构树',
    auth: 'wyh',
  },
  SYS_RC_WORKFLOW: {
    url: '/system/rc/workflow/getModels',
    method: 'GET',
    desc: '流程名称',
    auth: 'wyh',
  },
  SYS_RC_FLOWUNIT_SAVEORUPDATE: {
    url: '/system/rc/rcBusinessFlowUnit/saveOrUpdateFlowUnit',
    method: 'POST',
    desc: '资金流程 保存',
    auth: 'wyh',
  },
  SYS_RC_FLOWUNIT_DELETELOGICAL: {
    url: '/system/rc/rcBusinessFlowUnit/deleteLogical',
    method: 'DELETE',
    desc: '资金流程 删除',
    auth: 'wyh',
  },
  SYS_RC_FLOWUNIT_DELETEMULTI: {
    url: '/system/rc/rcBusinessFlowUnit/deleteMulti',
    method: 'DELETE',
    desc: '资金流程 批量删除',
    auth: 'wyh',
  },
  SYS_MD_BANK_MDBANK: {
    url: '/system/lookup/getMdBankForLookup',
    method: 'GET',
    desc: '银行 lookup',
    auth: 'wyh',
  },
  SYS_MD_BANK_MDHOUSEBANK: {
    url: '/system/lookup/getMdHouseBankForLookup',
    method: 'GET',
    desc: '开户行 lookup',
    auth: 'wyh',
  },
  SYS_LOOKUP_DISTRICT: {
    url: '/system/md/mdDistrict/queryMdDistrict',
    method: 'GET',
    desc: '地区 极联使用',
    auth: 'wyh',
  },
  SYS_EC_CLAIM_LOOKUP_DISTRICT: {
    url: '/system/md/mdDistrict/queryMdDistrictAndClassify',
    method: 'get',
    desc: '差旅报账明细地区选择// parentId,reimUnitId',
    auth: 'wennn',
  },

  SYS_MD_PARTNER_GETONCEMDPARTNER: {
    url: '/system/md/partner/getOnceMdPartnerByDocId',
    method: 'FORMPOST',
    desc: '一次性供应商查询',
    auth: 'yuanrr',
  },
  SYS_MD_PARTNER_DELETEONCEMDPARTNER: {
    url: '/system/md/partner/deleteOnceMdPartner',
    method: 'POST',
    desc: '一次性供应商删除',
    auth: 'yuanrr',
  },
  SYS_MD_PARTNER_SAVEORUPDATEONCEMDPARTNER: {
    url: '/system/md/partner/saveOrUpdateOnceMdPartner',
    method: 'POST',
    desc: '一次性供应商保存修改',
    auth: 'yuanrr',
  },
  SYS_SELECT_USER: {
    url: '/system/lookup/selectSignUserForLookup',
    method: 'GET',
    auth: 'huangh',
    desc: '加签 转办  沟通 报账 人',
  },
  SYS_SELECT_USER_BY_ID: {
    url: '/userInfo/editUserInfo',
    method: 'GET',
    auth: 'wennn',
    mockhandler: 'getone',
    mocktable: 'user_info',
    desc: '修改用户通过id查询用户信息',
  },
  SYS_GET_AD_USER_DATA_PRI_RULE: {
    url: '/system/ad/adUserDataPri/getAdUserDataPriRuleDto',
    method: 'GET',
    auth: 'xia_zhh',
    desc: '查询指定人的模块查看权限',
  },
  SYS_SELECTECKIND_BYECKINDID: {
    url: '/system/bc/bcEcKindImp/selectBcEcKindImpByEcKindId',
    method: 'POST',
    auth: 'wyh',
    desc: '导入模版服务',
  },
  AUTHORITY_HISTORY_LIST: {
    url: '/system/rc/rcFlowDelegate/searchList',
    method: 'GET',
    auth: 'linzm',
    desc: '审批授权--查询列表',
  },

  AUTHORITY_HISTORY_GETONE: {
    url: '/system/rc/rcFlowDelegate/getOne',
    method: 'GET',
    auth: 'linzm',
    desc: '审批授权',
  },

  AUTHORITY_HISTORY_UPDATE: {
    url: '/system/rc/rcFlowDelegate/updateRecord',
    method: 'POST',
    auth: 'linzm',
    desc: '审批授权---修改',
  },

  AUTHORITY_HISTORY_DELETE: {
    url: '/system/rc/rcFlowDelegate/deleteRecordLogical',
    method: 'POST',
    auth: 'linzm',
    desc: '审批授权---删除',
  },

  AUTHORITY_HISTORY_DELMulti: {
    url: '/system/rc/rcFlowDelegate/deleteRecordMultLogical',
    method: 'POST',
    auth: 'linzm',
    desc: '审批授权---批量删除',
  },

  MDBANKACCOUNT_CHANGEUSINGFLAG: {
    url: '/system/md/bank/mdBankAccount/changeUsingFlag',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '银行账号启用停用',
  },
};
