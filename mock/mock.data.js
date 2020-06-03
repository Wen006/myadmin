/**
 * @desc 当有些数据需要自定义无法模拟生成的时候用这个办法
 */

// 用于登陆的账号
const user = {
  id: 1,
  userCode: 'admin',
  userName: 'admin',
  password: '1',
  currentAuthority: 'admin',
  avatar:'user.png',
  roles: [
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
    }
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
      "id": 100,
      "name": "系统管理",
      "path": "/sys",
      "parentId": -1,
      "otherId": null,
      "icon": "shenhe",
      "leaf": false,
      "children": [
        {
            "id": 10003,
            "name": "用户管理",
            "path": "/sys/sm/user/info/userIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "yonghuguanli",
            "leaf": false,
            "children": null
        },
        {
            "id": 10001,
            "name": "菜单管理",
            "path": "/sys/sm/menu/info/menuInfoIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "hetongshengxiao",
            "leaf": false,
            "children": null
        },
        {
            "id": 10002,
            "name": "角色管理",
            "path": "/sys/sm/role/info/roleInfoIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "shixiangbiangengshenqing",
            "leaf": false,
            "children": null
        },
        {
            "id": 10004,
            "name": "组织管理",
            "path": "/sys/md/entityIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "dingshirenwuguanli",
            "leaf": false,
            "children": null
        },
        {
            "id": 10006,
            "name": "数据字典",
            "path": "/sys/ad/lovlist/lovlistIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "huijipingzhengyinqing",
            "leaf": false,
            "children": null
        },
        {
            "id": 800060418,
            "name": "系统参数",
            "path": "/sys/ad/sysparam/sysParamIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "zhushujuguanli",
            "leaf": false,
            "children": null
        },
        {
            "id": 800060429,
            "name": "公告",
            "path": "/sys/notice/noticeIndex",
            "parentId": 100,
            "otherId": null,
            "icon": "caidanguanli",
            "leaf": false,
            "children": null
        }
      ]
  },
  {
    "id": 101,
    "name": "用例代码",
    "path": "/example",
    "parentId": -1, 
    "icon": "shenhe", 
    "children": [
        {id:10101,name:'数据处理',icon:'morentongyong',path:'/example/store/main'},
        {id:10102,name:'编辑表格',icon:'morentongyong',path:'/example/aggrid/main'},
        {id:10103,name:'编辑表单',icon:'morentongyong',path:'/example/formmark/baseform'},
        {id:10105,name:'其他组件',icon:'morentongyong',path:'/example/component/basecomp'},
        {
            "id": 10104,
            "name": "Ant用例代码",
            "path": "/example/ant",
            "parentId": -1, 
            "icon": "shenhe", 
            "children": [
                {id:1010401,name:'Ant基础表单',icon:'morentongyong',path:'/example/ant/form/basic-form'},
                {id:1010401,name:'Ant步骤表单',icon:'morentongyong',path:'/example/ant/form/step-form'},
            ]
        }
    ]
  }
  
]


const menuList = [ 
]

module.exports = {
  user,menuData,menuList
};
