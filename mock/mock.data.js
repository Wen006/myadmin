/**
 * @desc 当有些数据需要自定义无法模拟生成的时候用这个办法
 */

// 用于登陆的账号
const user = {
  id: 1,
  userCode: 'Kevin',
  userAccount: 'Kevin',
  password: '111111',
  userName: 'Kevin',
  userType: '0',
  updPwdTime: 1520352000000,
  invalidPwdTime: 1837785600000,
  countryId: 10,
  districtId: 10,
  province: '山东省',
  city: '青岛市',
  block: '市南区',
  address: '山东,青岛,市南区',
  status: '1',
  phoneNumber: '17625915360',
  timezoneId: 10051,
  timezoneCode: 'EST',
  timezoneName: '亚特兰大时间',
  timezoneDiff: -13,
  languageId: 1,
  languageCode: 'zh_CN',
  languageName: '中文',
  positionId: 80,
  positionClassifyCode: 'USPL04',
  positionClassifyName: '普通员工',
  unitId: 8110,
  unitName: '海信美国有限公司',
  entityId: 88888,
  entityName: '美国销售虚拟测试部',
  reimUnitId: 8110,
  reimUnitName: '海信美国有限公司',
  reimUnitCode: '8110',
  reimEntityId: 88888,
  reimEntityName: '美国销售虚拟测试部',
  bdUnitId: 8110,
  bdUnitCode: '8110',
  bdUnitName: '海信美国有限公司',
  bdEntityId: 88888,
  bdEntityCode: '88888',
  bdEntityName: '美国销售虚拟测试部',
  bdCurrencyId: 5,
  bdCurrencyName: 'USD',
  fiCorpId: 8110,
  fiCorpName: '海信美国销售公司',
  lgCorpId: 8110,
  lgCorpName: '海信美国销售公司',
  fiBookId: 8110,
  fiBookCode: '8110',
  fiBookName: '海信美国有限公司',
  bankAccountId: -1,
  reservedField1: '100013',
  reservedField10: '0',
  remark: '985854704@qq.com',
  currencyId: 5,
  currencyName: 'USD',
  fiCurrencyId: 5,
  fiCurrencyCode: 'USD',
  fiCurrencyName: 'USD',
  glCurrencyId: 1,
  glCurrencyName: 'CNY',
  levelId: 40,
  levelCode: 'USPL04',
  levelName: '普通员工',
  currentAuthority: 'admin',
  avatar:'user.png',
  extInfo: [
    {
      id: null,
      unitId: 8120,
      unitName: '海信加拿大销售公司',
      entityId: 81208,
      entityName: '加拿大销售市场部',
    },
    {
      id: null,
      unitId: 8110,
      unitName: '海信美国有限公司',
      entityId: 81102,
      entityName: '美国销售综管部',
    },
    {
      id: null,
      unitId: 8110,
      unitName: '海信美国有限公司',
      entityId: 81101,
      entityName: '美国销售人资部',
    },
    {
      id: null,
      unitId: 8110,
      unitName: '海信美国有限公司',
      entityId: 811011,
      entityName: '美国销售业务拓展部',
    },
    {
      id: null,
      unitId: 8110,
      unitName: '海信美国有限公司',
      entityId: 81104,
      entityName: '美国销售市场部',
    },
  ],
};

const menuData =[
  {
      "id": 525336578,
      "name": "首页",
      "path": "/dashboard/home",
      "parentId": -1,
      "otherId": null,
      "icon": "shouyexianshi",
      "leaf": false,
      "children": null
  },
  {
      "id": 395313156,
      "name": "业务导航",
      "path": "/dashboard/menulink",
      "parentId": -1,
      "otherId": null,
      "icon": "dingshirenwuguanli",
      "leaf": false,
      "children": null
  },
  {
      "id": 100,
      "name": "系统管理",
      "path": "/system",
      "parentId": -1,
      "otherId": null,
      "icon": "shenhe",
      "leaf": false,
      "children": [
          {
              "id": 800060445,
              "name": "任务调度中心",
              "path": "/system/discenter",
              "parentId": 100,
              "otherId": null,
              "icon": "xitongguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 800060446,
                      "name": "任务管理",
                      "path": "/system/discenter/job/jobInfoIndex",
                      "parentId": 800060445,
                      "otherId": null,
                      "icon": "xitongcanshushezhi",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060447,
                      "name": "调度日志",
                      "path": "/system/discenter/job/jobLogIndex",
                      "parentId": 800060445,
                      "otherId": null,
                      "icon": "zhushujuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060448,
                      "name": "执行器管理",
                      "path": "/system/discenter/job/jobGroupIndex",
                      "parentId": 800060445,
                      "otherId": null,
                      "icon": "yusuanshezhi",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 10001,
              "name": "菜单管理",
              "path": "/system/menu/info/menuInfoIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "hetongshengxiao",
              "leaf": false,
              "children": null
          },
          {
              "id": 10002,
              "name": "角色管理",
              "path": "/system/role/info/roleInfoIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "shixiangbiangengshenqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 10003,
              "name": "用户管理",
              "path": "/system/user/info/userInfoIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "yonghuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 10004,
              "name": "组织管理",
              "path": "/system/md/entityIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 10005,
              "name": "工作流管理",
              "path": "/system/wfmag",
              "parentId": 100,
              "otherId": null,
              "icon": "gongzibaozhang",
              "leaf": false,
              "children": [
                  {
                      "id": 1000501,
                      "name": "工作流",
                      "path": "/system/wfmag/wf/wfIndex",
                      "parentId": 10005,
                      "otherId": null,
                      "icon": "gongzibaozhang",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000502,
                      "name": "工作流程设置",
                      "path": "/system/wfmag/rc/flow/activity/propertyIndex",
                      "parentId": 10005,
                      "otherId": null,
                      "icon": "yusuantiaozheng",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000503,
                      "name": "工作流程待办调整",
                      "path": "/system/wfmag/rc/workflow/workflowIndex",
                      "parentId": 10005,
                      "otherId": null,
                      "icon": "shixiangguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000504,
                      "name": "报账流程分配",
                      "path": "/system/wfmag/rc/business/flow/flowIndex",
                      "parentId": 10005,
                      "otherId": null,
                      "icon": "zhushujuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000505,
                      "name": "资金流程分配",
                      "path": "/system/wfmag/rc/business/payFlow/payFlowIndex",
                      "parentId": 10005,
                      "otherId": null,
                      "icon": "zhushujuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 10006,
              "name": "数据字典",
              "path": "/system/ad/lovlist/lovlistIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "huijipingzhengyinqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 10007,
              "name": "单据编码规则",
              "path": "/system/ad/adBillnoRuleIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "huijipingzhengyinqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 10008,
              "name": "审批授权",
              "path": "/system/approvalAuthority",
              "parentId": 100,
              "otherId": null,
              "icon": "hetongshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 800060418,
              "name": "系统参数",
              "path": "/system/ad/sysparam/sysParamIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "zhushujuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 800060429,
              "name": "公告",
              "path": "/system/notice/noticeIndex",
              "parentId": 100,
              "otherId": null,
              "icon": "caidanguanli",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 200,
      "name": "主数据",
      "path": "/main",
      "parentId": -1,
      "otherId": null,
      "icon": "shixiangbiangengshenqing",
      "leaf": false,
      "children": [
          {
              "id": 20001,
              "name": "基础设置",
              "path": "/main/baseset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 2000101,
                      "name": "行政区域",
                      "path": "/main/baseset/md/mdDistrict/mdDistrictIndex",
                      "parentId": 20001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000102,
                      "name": "行政区域分类",
                      "path": "/main/baseset/md/mddistrict/mdDistrictClassifyIndex",
                      "parentId": 20001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000103,
                      "name": "货币",
                      "path": "/main/baseset/md/mdcurrency/mdCurrencyIndex",
                      "parentId": 20001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20003,
              "name": "报账设置",
              "path": "/main/bzset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 483645,
                      "name": "业务规范",
                      "path": "/main/bzset/bc/eckindrule/bcKindRule/bcKind",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "setting",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060442,
                      "name": "影像开关控制",
                      "path": "/main/bzset/bc/docImage/docImageIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "jichushezhi3",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000301,
                      "name": "单据类型",
                      "path": "/main/bzset/bc/dockind/docKindIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000302,
                      "name": "业务类型",
                      "path": "/main/bzset/bc/eckind/eckKindIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000304,
                      "name": "费用项目",
                      "path": "/main/bzset/bc/ecitem/ecItemIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000305,
                      "name": "交通工具",
                      "path": "/main/bzset/bc/bcVehicle/bcVehicleIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000308,
                      "name": "职务级别",
                      "path": "/main/bzset/bc/positionlevel/positionLevelIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 333882,
                      "name": "差旅标准",
                      "path": "/main/bzset/bc/travelStandard/travelStandardIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 334128,
                      "name": "通讯费标准",
                      "path": "/main/bzset/bc/phoneStandard/phoneStandardIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 334139,
                      "name": "私车公用标准",
                      "path": "/main/bzset/bc/mileStandard/mileStandardIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 442536,
                      "name": "业务单据",
                      "path": "/main/bzset/bc/businessdoc/ListIndex",
                      "parentId": 20003,
                      "otherId": null,
                      "icon": "shixiangchaxun",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20004,
              "name": "结算设置",
              "path": "/main/settleset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 2000401,
                      "name": "结算方式",
                      "path": "/main/settleset/md/paymentmode/paymentModeIndex",
                      "parentId": 20004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000402,
                      "name": "银行",
                      "path": "/main/settleset/md/bank/bankIndex",
                      "parentId": 20004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000403,
                      "name": "开户行",
                      "path": "/main/settleset/md/housebank/houseBankIndex",
                      "parentId": 20004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000404,
                      "name": "银行账号",
                      "path": "/main/settleset/md/bankaccount/bankaccountIndex",
                      "parentId": 20004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060431,
                      "name": "结算单位",
                      "path": "/main/settleset/md/paymentunit/paymentUnitIndex",
                      "parentId": 20004,
                      "otherId": null,
                      "icon": "danjubianmaguize",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20005,
              "name": "财务设置",
              "path": "/main/financeset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 800060430,
                      "name": "核算维度",
                      "path": "/main/financeset/bc/voucherassist/voucherAssistIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "caidanguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060440,
                      "name": "记账类型",
                      "path": "/main/financeset/bc/bcBookType/bcBookTypeIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "hetongluru",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000501,
                      "name": "公司代码",
                      "path": "/main/financeset/bc/fibook/fiBookIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000504,
                      "name": "会计科目",
                      "path": "/main/financeset/bc/fiaccount/fiAccountIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000505,
                      "name": "供应商",
                      "path": "/main/financeset/bc/fivendor/fiVendorIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000507,
                      "name": "费用项目记账配置",
                      "path": "/main/financeset/bc/bcEcFiAccount/bcEcFiAccountIndex",
                      "parentId": 20005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20006,
              "name": "税务设置",
              "path": "/main/taxset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 2000601,
                      "name": "税码",
                      "path": "/main/taxset/md/mdtaxRate/mdTaxRateIndex",
                      "parentId": 20006,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20007,
              "name": "信用设置",
              "path": "/main/credit",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 300704,
                      "name": "信用等级",
                      "path": "/main/credit/credit/ctCreditGrade/creditgradeIndex",
                      "parentId": 20007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000701,
                      "name": "信用指标",
                      "path": "/main/credit/md/credittarget/creditTargetIndex",
                      "parentId": 20007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000702,
                      "name": "信用指标分类",
                      "path": "/main/credit/md/credittargettype/creditTargetTypeIndex",
                      "parentId": 20007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 20009,
              "name": "规则设置",
              "path": "/main/ruleset",
              "parentId": 200,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 2000901,
                      "name": "业务数据定义",
                      "path": "/main/ruleset/rc/business/type/typeIndex",
                      "parentId": 20009,
                      "otherId": null,
                      "icon": "danjuguizeshezhi",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 2000904,
                      "name": "规则表达式定义",
                      "path": "/main/ruleset/rc/rule/expression/expressionIndex",
                      "parentId": 20009,
                      "otherId": null,
                      "icon": "shuiwushezhi",
                      "leaf": false,
                      "children": null
                  }
              ]
          }
      ]
  },
  {
      "id": 1000,
      "name": "预算管理",
      "path": "/fsc/bd",
      "parentId": -1,
      "otherId": null,
      "icon": "caidanguanli",
      "leaf": false,
      "children": [
          {
              "id": 1000001,
              "name": "预算设置",
              "path": "/fsc/bd/bdBudgetSet",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000001001,
                      "name": "预算期间",
                      "path": "/fsc/bd/bdBudgetSet/budgetPeriod",
                      "parentId": 1000001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000001002,
                      "name": "预算组织",
                      "path": "/fsc/bd/bdBudgetSet/budgetOrganization",
                      "parentId": 1000001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000002,
              "name": "预算方案",
              "path": "/fsc/bd/bdBudgetSchema",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 1000003,
              "name": "预算部门项目",
              "path": "/fsc/bd/bdBudgetOrganizationItem",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 1000014,
              "name": "费用预算执行录入",
              "path": "/budgetmag/bd/actualEnter",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 1000004,
              "name": "年度费用编制",
              "path": "/fsc/bd/bdAnnualExpensesPrepare",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000004001,
                      "name": "固定费用编制",
                      "path": "/fsc/bd/bdAnnualExpensesPrepare/fixedChargePrpe",
                      "parentId": 1000004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000004002,
                      "name": "收入预算编制",
                      "path": "/fsc/bd/bdAnnualExpensesPrepare/revenueBudgetPrpe",
                      "parentId": 1000004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000004003,
                      "name": "费用率编制",
                      "path": "/fsc/bd/bdAnnualExpensesPrepare/expenseRatePrpe",
                      "parentId": 1000004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000004004,
                      "name": "变动费用编制",
                      "path": "/fsc/bd/bdAnnualExpensesPrepare/variableExpensePrpe",
                      "parentId": 1000004,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000005,
              "name": "年度费用审批",
              "path": "/fsc/bd/bdAnnualExpenseApproval",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000005001,
                      "name": "收入预算审批",
                      "path": "/fsc/bd/bdAnnualExpenseApproval/revenueBudgetApro",
                      "parentId": 1000005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000005002,
                      "name": "费用率审批",
                      "path": "/fsc/bd/bdAnnualExpenseApproval/expenseRateApro",
                      "parentId": 1000005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000005003,
                      "name": "年度预算汇总审批",
                      "path": "/fsc/bd/bdAnnualExpenseApproval/annualBudgetSumApro",
                      "parentId": 1000005,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000006,
              "name": "年度费用生效",
              "path": "/fsc/bd/bdAnnualExpenseEffect",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000006001,
                      "name": "收入预算生效",
                      "path": "/fsc/bd/bdAnnualExpenseEffect/revenueBudgetEft",
                      "parentId": 1000006,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000006002,
                      "name": "费用率生效",
                      "path": "/fsc/bd/bdAnnualExpenseEffect/expenseRateEft",
                      "parentId": 1000006,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000006003,
                      "name": "年度预算生效",
                      "path": "/fsc/bd/bdAnnualExpenseEffect/annualBudgetEft",
                      "parentId": 1000006,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000007,
              "name": "期间预测编制",
              "path": "/fsc/bd/bdForecastPeriodPrepare",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000007001,
                      "name": "固定费用编制",
                      "path": "/fsc/bd/bdForecastPeriodPrepare/fixedChargePrpe",
                      "parentId": 1000007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000007002,
                      "name": "收入预算编制",
                      "path": "/fsc/bd/bdForecastPeriodPrepare/revenueBudgetPrpe",
                      "parentId": 1000007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000007003,
                      "name": "变动费用编制",
                      "path": "/fsc/bd/bdForecastPeriodPrepare/variableExpensePrpe",
                      "parentId": 1000007,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000008,
              "name": "期间预测审批",
              "path": "/fsc/bd/bdForecastPeriodApproval",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000008001,
                      "name": "固定费用审批",
                      "path": "/fsc/bd/bdForecastPeriodApproval/fixedChargeApro",
                      "parentId": 1000008,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000008002,
                      "name": "收入预算审批",
                      "path": "/fsc/bd/bdForecastPeriodApproval/revenueBudgetApro",
                      "parentId": 1000008,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000008003,
                      "name": "变动费用审批",
                      "path": "/fsc/bd/bdForecastPeriodApproval/variableExpenseApro",
                      "parentId": 1000008,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000009,
              "name": "期间预测生效",
              "path": "/fsc/bd/bdForecastPeriodEffect",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000009001,
                      "name": "固定费用生效",
                      "path": "/fsc/bd/bdForecastPeriodEffect/fixedChargeEft",
                      "parentId": 1000009,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000009002,
                      "name": "收入预算生效",
                      "path": "/fsc/bd/bdForecastPeriodEffect/revenueBudgetEft",
                      "parentId": 1000009,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000009003,
                      "name": "变动费用生效",
                      "path": "/fsc/bd/bdForecastPeriodEffect/variableExpenseEft",
                      "parentId": 1000009,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000010,
              "name": "年度预算调整",
              "path": "/fsc/bd/bdAnnualBudgetAdjust",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000010001,
                      "name": "年度预算调增",
                      "path": "/fsc/bd/bdAnnualBudgetAdjust/annualBudgetIncrease",
                      "parentId": 1000010,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000010002,
                      "name": "年度预算调减",
                      "path": "/fsc/bd/bdAnnualBudgetAdjust/annualBudgetReduce",
                      "parentId": 1000010,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000010003,
                      "name": "年度预算平衡调整",
                      "path": "/fsc/bd/bdAnnualBudgetAdjust/annualBudgetBalance",
                      "parentId": 1000010,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000011,
              "name": "期间预测调整",
              "path": "/fsc/bd/bdForecastPeriodAdjust",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000011001,
                      "name": "期间预测调增",
                      "path": "/fsc/bd/bdForecastPeriodAdjust/forecastPeriodIncrease",
                      "parentId": 1000011,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000011002,
                      "name": "期间预测调减",
                      "path": "/fsc/bd/bdForecastPeriodAdjust/forecastPeriodReduce",
                      "parentId": 1000011,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000012,
              "name": "预算控制",
              "path": "/fsc/bd/bdBudgetControl",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000012001,
                      "name": "预算结转",
                      "path": "/fsc/bd/bdBudgetControl/budgetCarryOver",
                      "parentId": 1000012,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000012002,
                      "name": "预算冻结",
                      "path": "/fsc/bd/bdBudgetControl/budgetFreeze",
                      "parentId": 1000012,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 1000013,
              "name": "预算查询",
              "path": "/fsc/bd/bdBudgetQuery",
              "parentId": 1000,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 1000013001,
                      "name": "年度固定预算查询",
                      "path": "/fsc/bd/bdBudgetQuery/annualFixedBudget",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013002,
                      "name": "年度费用率查询",
                      "path": "/fsc/bd/bdBudgetQuery/annualExpenseRatio",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013003,
                      "name": "年度收入预算查询",
                      "path": "/fsc/bd/bdBudgetQuery/1",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013004,
                      "name": "年度变动预算查询",
                      "path": "/fsc/bd/bdBudgetQuery/2",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013005,
                      "name": "期间固定预测查询",
                      "path": "/fsc/bd/bdBudgetQuery/forecastFixedPeriod",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013006,
                      "name": "期间收入预测查询",
                      "path": "/fsc/bd/bdBudgetQuery/3",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013007,
                      "name": "期间变动预测查询",
                      "path": "/fsc/bd/bdBudgetQuery/4",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013008,
                      "name": "年度预算调增查询",
                      "path": "/fsc/bd/bdBudgetQuery/annualPrepareIncrease",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013009,
                      "name": "年度预算调减查询",
                      "path": "/fsc/bd/bdBudgetQuery/annualPrepareReduce",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013010,
                      "name": "年度预算调剂查询",
                      "path": "/fsc/bd/bdBudgetQuery/annualPrepareBalance",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013011,
                      "name": "期间预测调增查询",
                      "path": "/fsc/bd/bdBudgetQuery/forecastPeriodIncrease",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013012,
                      "name": "期间预测调减查询",
                      "path": "/fsc/bd/bdBudgetQuery/forecastPeriodReduce",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013013,
                      "name": "预算执行数查询",
                      "path": "/fsc/bd/bdBudgetQuery/budgetExecuteNum",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 1000013014,
                      "name": "报账项目可用额查询",
                      "path": "/fsc/bd/bdBudgetQuery/expenseProjectUsable",
                      "parentId": 1000013,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          }
      ]
  },
  {
      "id": 400,
      "name": "立项管理",
      "path": "/projectmag",
      "parentId": -1,
      "otherId": null,
      "icon": "zhixing",
      "leaf": false,
      "children": [
          {
              "id": 40001,
              "name": "草稿箱",
              "path": "/projectmag/project/apply/projectList",
              "parentId": 400,
              "otherId": null,
              "icon": "chalvjihuashenqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 231072,
              "name": "我的立项",
              "path": "/projectmag/project/fsc/pj/MyProjectApply",
              "parentId": 400,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 40002,
              "name": "立项复核",
              "path": "/projectmag/project/apply/audit/projectAuditList",
              "parentId": 400,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 40010,
              "name": "立项查询",
              "path": "/projectmag/project/query/projectQueryIndex",
              "parentId": 400,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 40011,
              "name": "立项追踪",
              "path": "/projectmag/project/tracking/projectTrackingIndex",
              "parentId": 400,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 500,
      "name": "合同管理",
      "path": "/contractmag",
      "parentId": -1,
      "otherId": null,
      "icon": "yewuzhaodaifeishiqianshenqing",
      "leaf": false,
      "children": [
          {
              "id": 50001,
              "name": "草稿箱",
              "path": "/contractmag/contract/apply/cmContractList",
              "parentId": 500,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 50012,
              "name": "我的合同",
              "path": "/contractmag/contract/myApplylist",
              "parentId": 500,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 50002,
              "name": "合同复核",
              "path": "/contractmag/contract/apply/audit/cmContractAuditList",
              "parentId": 500,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 50010,
              "name": "合同查询",
              "path": "/contractmag/contract/query/cmContractQueryList",
              "parentId": 500,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 50009,
              "name": "合同追踪",
              "path": "/contractmag/tracking/cmContractTrackingIndex",
              "parentId": 500,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 582074912,
      "name": "申请管理",
      "path": "/applymag",
      "parentId": -1,
      "otherId": null,
      "icon": "shuiwushezhi",
      "leaf": false,
      "children": [
          {
              "id": 121625851981856,
              "name": "草稿箱",
              "path": "/applymag/ea/apply/draft",
              "parentId": 582074912,
              "otherId": null,
              "icon": "hetongguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 231525,
              "name": "我的申请",
              "path": "/applymag/ea/apply/myapply",
              "parentId": 582074912,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 122065614469152,
              "name": "申请单审批",
              "path": "/applymag/ea/apply/mytask",
              "parentId": 582074912,
              "otherId": null,
              "icon": "shixiangshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 767329824,
              "name": "申请单查询",
              "path": "/applymag/ea/query/List",
              "parentId": 582074912,
              "otherId": null,
              "icon": "shixiangchaxun",
              "leaf": false,
              "children": null
          },
          {
              "id": 262144137,
              "name": "申请单追踪",
              "path": "/applymag/ea/apply/trace",
              "parentId": 582074912,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 483729,
              "name": "申请单确认",
              "path": "/applymag/ea/apply/applyConfirm",
              "parentId": 582074912,
              "otherId": null,
              "icon": "shenhe",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 395313157,
      "name": "订单管理",
      "path": "/owepaymag",
      "parentId": -1,
      "otherId": null,
      "icon": "dingshirenwuguanli",
      "leaf": false,
      "children": [
          {
              "id": 395313159,
              "name": "草稿箱",
              "path": "/owepaymag/ec/arrear/Draft",
              "parentId": 395313157,
              "otherId": null,
              "icon": "hetongguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 242879,
              "name": "我的订单",
              "path": "/owepaymag/ec/arrear/myowepay",
              "parentId": 395313157,
              "otherId": null,
              "icon": "yusuanshezhi",
              "leaf": false,
              "children": null
          },
          {
              "id": 395313160,
              "name": "订单审批",
              "path": "/owepaymag/ec/arrear/Audit",
              "parentId": 395313157,
              "otherId": null,
              "icon": "shixiangshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 395313161,
              "name": "订单查询",
              "path": "/owepaymag/ec/arrear/List",
              "parentId": 395313157,
              "otherId": null,
              "icon": "shixiangchaxun",
              "leaf": false,
              "children": null
          },
          {
              "id": 421946,
              "name": "订单追踪",
              "path": "/owepaymag/ec/arrear/traceList",
              "parentId": 395313157,
              "otherId": null,
              "icon": "hetongzhongzhishenqing",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 600,
      "name": "报账管理",
      "path": "/rbmag",
      "parentId": -1,
      "otherId": null,
      "icon": "hetongshenpi",
      "leaf": false,
      "children": [
          {
              "id": 6000601,
              "name": "草稿箱",
              "path": "/rbmag/docquery/claim/query/drafts/draftsIndex",
              "parentId": 600,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 6000602,
              "name": "我报销的",
              "path": "/rbmag/docquery/claim/query/myclaim/queryIndex",
              "parentId": 600,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 6000402,
              "name": "我审批的",
              "path": "/rbmag/busiaudit/claim/approve/myhandle/approveIndex",
              "parentId": 600,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 6000401,
              "name": "待我审批",
              "path": "/rbmag/busiaudit/claim/approve/mytask/approveIndex",
              "parentId": 600,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 6000603,
              "name": "报账单查询",
              "path": "/rbmag/docquery/claim/query/claimOcQueryIndex",
              "parentId": 600,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 408018,
              "name": "发票管理",
              "path": "/invoice",
              "parentId": 600,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": [
                  {
                      "id": 408019,
                      "name": "发票池",
                      "path": "/fsc/claim/ecclaiminvoice/apply/inputInvoiceList",
                      "parentId": 408018,
                      "otherId": null,
                      "icon": "setting",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 408021,
                      "name": "发票认证",
                      "path": "/fsc/claim/ecclaiminvoice/authentication/authenticationList",
                      "parentId": 408018,
                      "otherId": null,
                      "icon": "setting",
                      "leaf": false,
                      "children": null
                  }
              ]
          }
      ]
  },
  {
      "id": 406625,
      "name": "信用管理",
      "path": "/credit",
      "parentId": -1,
      "otherId": null,
      "icon": "dingshirenwuguanli",
      "leaf": false,
      "children": [
          {
              "id": 406693,
              "name": "信用调整申请",
              "path": "/credit/sys/ct/userCreditAdjust/userCreditAdjustIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "shixiangshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 406721,
              "name": "信用调整审核",
              "path": "/credit/sys/ct/creditAdjustAudit/creditAdjustAuditIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "chalvjihuashenqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 406718,
              "name": "信用调整查询",
              "path": "/credit/sys/ct/queryCreditAdjust/queryCreditAdjustIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "shixiangshenqing",
              "leaf": false,
              "children": null
          },
          {
              "id": 406722,
              "name": "信用考核",
              "path": "/credit/fsc/credit/ctUserCredit/userCreditIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 406723,
              "name": "员工信用",
              "path": "/credit/fsc/credit/ctUserCreditGrade/userCreditGradeIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 406789,
              "name": "信用考核方案设置",
              "path": "/credit/fsc/credit/ctCreditScheme/creditSchemeIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "shixiangbiangengshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 406626,
              "name": "信用事件",
              "path": "/credit/fsc/credit/ctClaimEventList/eventListIndex",
              "parentId": 406625,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 700,
      "name": "运营平台",
      "path": "/operate",
      "parentId": -1,
      "otherId": null,
      "icon": "duigongfeiyongbaozhang",
      "leaf": false,
      "children": [
          {
              "id": 70001,
              "name": "基础设置-运营",
              "path": "/operate/baseset",
              "parentId": 700,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 7000101,
                      "name": "业务系统",
                      "path": "/operate/baseset/wp/base/businessapplication/wpBusinessApplicationIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000102,
                      "name": "业务大类",
                      "path": "/operate/baseset/wp/base/businesstype/wpBusinessTypeIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000103,
                      "name": "单据类型",
                      "path": "/operate/baseset/wp/base/doctype/wpDocTypeIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000104,
                      "name": "共享中心",
                      "path": "/operate/baseset/wp/base/fsscenter/bcFssCenterIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000105,
                      "name": "共享中心用户配置",
                      "path": "/operate/baseset/wp/base/fsscenter/bcFssCenterUserIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000106,
                      "name": "共享中心业务配置",
                      "path": "/operate/baseset/wp/base/fsscenter/bcFssCenterSettingIndex",
                      "parentId": 70001,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 70002,
              "name": "派工规则",
              "path": "/operate/dworkrule",
              "parentId": 700,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 7000201,
                      "name": "派工节点",
                      "path": "/operate/dworkrule/wp/base/dispatchnode/wpDispatchNodeIndex",
                      "parentId": 70002,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000202,
                      "name": "派工规则设置",
                      "path": "/operate/dworkrule/wp/base/rule/wpDispatchRuleIndex",
                      "parentId": 70002,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800060421,
                      "name": "派工参数",
                      "path": "/operate/dworkrule/wp/base/dispatchparam/wpDispatchParamIndex",
                      "parentId": 70002,
                      "otherId": null,
                      "icon": "shixiangchaxun",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 70003,
              "name": "作业平台",
              "path": "/operate/wkplatform",
              "parentId": 700,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 7000301,
                      "name": "我的作业平台",
                      "path": "/operate/wkplatform/wp/work/docpool/docPoolIndex",
                      "parentId": 70003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000303,
                      "name": "派工调整申请",
                      "path": "/operate/wkplatform/wp/work/adjust/dispatchAdjustIndex",
                      "parentId": 70003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 7000304,
                      "name": "派工调整审批",
                      "path": "/operate/wkplatform/wp/work/adjust/audit/dispatchAdjustAuditIndex",
                      "parentId": 70003,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 407954,
              "name": "绩效质量",
              "path": "/operate/wkplatform/wp/performance",
              "parentId": 700,
              "otherId": null,
              "icon": "caiwufuhe",
              "leaf": false,
              "children": [
                  {
                      "id": 407955,
                      "name": "绩效计划",
                      "path": "/operate/wkplatform/wp/performance/jxplan/jxPlanListIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "zijincunkuanribaobiao",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 407956,
                      "name": "绩效评估管理",
                      "path": "/operate/wkplatform/wp/performance/jxevaluation/jxevaluationListIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "shixiangshenpi",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 407957,
                      "name": "绩效主管评估",
                      "path": "/operate/wkplatform/wp/performance/jxchargeassess/listIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "caiwuchushen",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 407958,
                      "name": "绩效领导评估",
                      "path": "/operate/wkplatform/wp/performance/jxleaderassess/listIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "hetongzhongzhishenpi",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 424687,
                      "name": "绩效等级测定",
                      "path": "/operate/wkplatform/wp/performance/jxLevel/listIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "yusuantixiangmu",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 407959,
                      "name": "质量抽检",
                      "path": "/operate/wkplatform/wp/performance/qqc/qsc/listIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "danjuchaxun",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 407968,
                      "name": "抽检结果确认",
                      "path": "/operate/wkplatform/wp/performance/qqc/qac/listIndex",
                      "parentId": 407954,
                      "otherId": null,
                      "icon": "woshenpide",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 417074,
              "name": "统计分析",
              "path": "/operate/wkplatform/wp/report",
              "parentId": 700,
              "otherId": null,
              "icon": "baobiao",
              "leaf": false,
              "children": [
                  {
                      "id": 417075,
                      "name": "处理时校分析",
                      "path": "/operate/wkplatform/wp/report/processtime/listIndex",
                      "parentId": 417074,
                      "otherId": null,
                      "icon": "baobiao",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 417079,
                      "name": "不同业务单据处理时校分析",
                      "path": "/operate/wkplatform/wp/report/processtime/detailIndex",
                      "parentId": 417074,
                      "otherId": null,
                      "icon": "baobiao",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 417080,
                      "name": "不合格率分析",
                      "path": "/operate/wkplatform/wp/report/errsrate/listIndex",
                      "parentId": 417074,
                      "otherId": null,
                      "icon": "baobiao",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 417081,
                      "name": "工作量统计",
                      "path": "/operate/wkplatform/wp/report/workload/listIndex",
                      "parentId": 417074,
                      "otherId": null,
                      "icon": "baobiao",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 417082,
                      "name": "不同业务单据工作量分析",
                      "path": "/operate/wkplatform/wp/report/workload/detailIndex",
                      "parentId": 417074,
                      "otherId": null,
                      "icon": "baobiao",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 900,
              "name": "会计凭证引擎",
              "path": "/operate/ave",
              "parentId": 700,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 90001,
                      "name": "基础设置-会计",
                      "path": "/operate/ave/baseset",
                      "parentId": 900,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": [
                          {
                              "id": 9000101,
                              "name": "核算系统",
                              "path": "/operate/ave/baseset/ve/vesystem/veserviceIndex",
                              "parentId": 90001,
                              "otherId": null,
                              "icon": "dingshirenwuguanli",
                              "leaf": false,
                              "children": null
                          },
                          {
                              "id": 9000102,
                              "name": "凭证要素",
                              "path": "/operate/ave/baseset/ve/voucherelement/elementIndex",
                              "parentId": 90001,
                              "otherId": null,
                              "icon": "dingshirenwuguanli",
                              "leaf": false,
                              "children": null
                          },
                          {
                              "id": 9000103,
                              "name": "单据记账条件",
                              "path": "/operate/ave/baseset/vg/postingcondition/postingConditionIndex",
                              "parentId": 90001,
                              "otherId": null,
                              "icon": "dingshirenwuguanli",
                              "leaf": false,
                              "children": null
                          }
                      ]
                  },
                  {
                      "id": 90002,
                      "name": "凭证模板",
                      "path": "/operate/ave/pzmoban",
                      "parentId": 900,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": [
                          {
                              "id": 9000201,
                              "name": "凭证模板",
                              "path": "/operate/ave/pzmoban/ve/docvoucher/applyIndex",
                              "parentId": 90002,
                              "otherId": null,
                              "icon": "dingshirenwuguanli",
                              "leaf": false,
                              "children": null
                          }
                      ]
                  },
                  {
                      "id": 90003,
                      "name": "凭证管理",
                      "path": "/operate/ave/pzguanli",
                      "parentId": 900,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": [
                          {
                              "id": 9000301,
                              "name": "预制凭证查询",
                              "path": "/operate/ave/pzguanli/ve/firstcheck/queryIndex",
                              "parentId": 90003,
                              "otherId": null,
                              "icon": "dingshirenwuguanli",
                              "leaf": false,
                              "children": null
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": 80001,
      "name": "支付管理",
      "path": "/payment",
      "parentId": -1,
      "otherId": null,
      "icon": "dingshirenwuguanli",
      "leaf": false,
      "children": [
          {
              "id": 8000111,
              "name": "供应商付款",
              "path": "/payment/publicpay",
              "parentId": 80001,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 800011101,
                      "name": "供应商付款申请",
                      "path": "/payment/publicpay/fm/fs/payout/fc/apply/payoutList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011102,
                      "name": "供应商付款审批",
                      "path": "/payment/publicpay/fm/fs/payout/fc/audit/payoutAuditList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011105,
                      "name": "供应商付款执行",
                      "path": "/payment/publicpay/fm/fs/payout/fc/execute/payoutExecuteList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011112,
                      "name": "批导人工干预",
                      "path": "/payment/publicpay/fm/fs/payout/fc/exportManual/payoutExportManualList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011111,
                      "name": "支票出款确认",
                      "path": "/payment/publicpay/fm/fs/payout/fc/chequePayment/payoutChequePaymentList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011110,
                      "name": "供应商付款查询",
                      "path": "/payment/publicpay/fm/fs/payout/fc/search/payoutSearchList",
                      "parentId": 8000111,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 8000113,
              "name": "员工报销",
              "path": "/payment/privatepay",
              "parentId": 80001,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 800011301,
                      "name": "员工报销申请",
                      "path": "/payment/privatepay/fm/fs/payexpense/fc/apply/payexpenseList",
                      "parentId": 8000113,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011302,
                      "name": "员工报销审核",
                      "path": "/payment/privatepay/fm/fs/payexpense/fc/audit/payexpenseAuditList",
                      "parentId": 8000113,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011305,
                      "name": "员工报销执行",
                      "path": "/payment/privatepay/fm/fs/payexpense/fc/execute/payexpenseExecuteList",
                      "parentId": 8000113,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011312,
                      "name": "批导人工干预",
                      "path": "/payment/privatepay/fm/fs/payexpense/fc/exportManual/payexpenseExportManualList",
                      "parentId": 8000113,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011310,
                      "name": "员工报销查询",
                      "path": "/payment/privatepay/fm/fs/payexpense/fc/search/payexpenseSearchList",
                      "parentId": 8000113,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          },
          {
              "id": 8000115,
              "name": "资金调拨",
              "path": "/payment/inTransfer",
              "parentId": 80001,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": [
                  {
                      "id": 800011501,
                      "name": "资金调拨申请",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/apply/inTransferList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011502,
                      "name": "资金调拨审批",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/audit/inTransferAuditList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011505,
                      "name": "资金调拨执行",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/execute/inTransferExecuteList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011510,
                      "name": "资金调拨查询",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/search/inTransferSearchList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011511,
                      "name": "支票出款确认",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/chequePayment/inTransferChequePaymentList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  },
                  {
                      "id": 800011512,
                      "name": "批导人工干预",
                      "path": "/payment/inTransfer/fm/fs/inTransfer/fc/exportManual/inTransferExportManualList",
                      "parentId": 8000115,
                      "otherId": null,
                      "icon": "dingshirenwuguanli",
                      "leaf": false,
                      "children": null
                  }
              ]
          }
      ]
  },
  {
      "id": 602,
      "name": "财务管理",
      "path": "/finance",
      "parentId": -1,
      "otherId": null,
      "icon": "tongyongbaozhang",
      "leaf": false,
      "children": [
          {
              "id": 800060417,
              "name": "补录借款台账",
              "path": "/finance/finance/fiPsnLoan/fiPsnLoanIndex",
              "parentId": 602,
              "otherId": null,
              "icon": "shenhe",
              "leaf": false,
              "children": null
          },
          {
              "id": 800060419,
              "name": "补录借款核销",
              "path": "/finance/finance/fiVerification/fiVerificationIndex",
              "parentId": 602,
              "otherId": null,
              "icon": "zaixiantiandan",
              "leaf": false,
              "children": null
          },
          {
              "id": 800060420,
              "name": "补录预付款",
              "path": "/finance/finance/fiAdvPay/fiAdvPayIndex",
              "parentId": 602,
              "otherId": null,
              "icon": "shixiangshenpi",
              "leaf": false,
              "children": null
          },
          {
              "id": 800060425,
              "name": "我的借款",
              "path": "/finance/finance/myPsnLoan/myPsnLoanIndex",
              "parentId": 602,
              "otherId": null,
              "icon": "qingkuanguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 60204,
              "name": "财务红冲",
              "path": "/finance/finance/redflush/redflushIndex",
              "parentId": 602,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 609011,
              "name": "预提待摊",
              "path": "/finance/claim/ecarclaim/apply/ecarclaimList",
              "parentId": 602,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          },
          {
              "id": 602009,
              "name": "资金凭证",
              "path": "/finance/fm/voucher/account/arDataProcessingAccount",
              "parentId": 602,
              "otherId": null,
              "icon": "dingshirenwuguanli",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 417545,
      "name": "收入清分",
      "path": "/fm/ar",
      "parentId": -1,
      "otherId": null,
      "icon": "xitongguanli",
      "leaf": false,
      "children": [
          {
              "id": 417546,
              "name": "收入清分申请",
              "path": "/fm/ar/arDataProcessing/apply/arDataProcessingList",
              "parentId": 417545,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": null
          },
          {
              "id": 417547,
              "name": "收入清分审批",
              "path": "/fm/ar/arDataProcessing/audit/arDataProcessingList",
              "parentId": 417545,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": null
          },
          {
              "id": 417548,
              "name": "收入清分查询",
              "path": "/fm/ar/arDataProcessing/query/arDataProcessingList",
              "parentId": 417545,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": null
          },
          {
              "id": 417549,
              "name": "清分规则配置",
              "path": "/fm/ar/typeHouseRel/typeHouseRelList",
              "parentId": 417545,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": null
          },
          {
              "id": 417550,
              "name": "客户账户配置",
              "path": "/fm/ar/CustomerAccount/bcCustomerAccountRelaList",
              "parentId": 417545,
              "otherId": null,
              "icon": "setting",
              "leaf": false,
              "children": null
          }
      ]
  },
  {
      "id": 501591,
      "name": "测试",
      "path": "#",
      "parentId": -1,
      "otherId": null,
      "icon": "shenhe",
      "leaf": false,
      "children": [
          {
              "id": 501593,
              "name": "用户信息",
              "path": "demo/user/list",
              "parentId": 501591,
              "otherId": null,
              "icon": "danjuguizeshezhi",
              "leaf": false,
              "children": null
          }
      ]
  }
]

module.exports = {
  user,menuData
};
