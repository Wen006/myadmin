
const lookUpConfigs = {
  // SM_USER
  // MENU_INFO
  SM_USER: {
    intlDone:false, // 设置false 就会自动国际化，true 不会自动国际化
    desc: '用户选择---菜单管理，角色管理', // 解释干啥的，哪模块用到了，用逗号隔开
    auth: 'wennn', // 作者信息
    title: 'lookup.sm.user.title', // 弹出框的标题 国际化key
    api: 'SYS_USER_LIST_BY_DTO', // service的api
    columns: [
      {
        headerName: 'sm.user.userName', // 国际化 key
        field: 'userName',
      },
      {
        headerName: 'sm.user.userCode',
        field: 'userCode',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'sm.user.userName', // 国际化 key
          key: 'userName',
          type: 'string',
        },
        {
          label: 'sm.user.userCode',
          key: 'userCode',
          type: 'number',
        },
      ],
    },
  },
  MENU_INFO: {
    api: 'SYS_MENU_LIST',
    title: '',
    desc: '菜单选择',
    columns: [
      {
        headerName: 'sm.menu.menuName',
        field: 'menuName',
        width: '40%',
      },
      {
        headerName: 'sm.menu.menuCode',
        field: 'menuCode',
        width: '50%',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'sm.menu.menuName',
          key: 'menuName',
        },
        {
          label: 'sm.menu.menuCode',
          key: 'menuCode',
        },
      ],
    },
  },
  LOOKUP_SM_ROLE_LIST:{
    desc: '用户选择---菜单管理，角色管理', // 解释干啥的，哪模块用到了，用逗号隔开
    auth: 'wennn', // 作者信息
    title: 'lookup.sm.role.title', // 弹出框的标题 国际化key
    api: 'SM_ROLE_SELECT_FOR_USER', // service的api
    columns: [
      {
        headerName: 'sm.role.roleName', // 国际化 key
        field: 'userName',
      },
      {
        headerName: 'sm.role.roleCode',
        field: 'userCode',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'sm.role.roleName', // 国际化 key
          key: 'roleName',
          type: 'string',
        },
        {
          label: 'sm.role.roleCode',
          key: 'roleCode',
          type: 'string',
        },
      ],
    },
  },
};

export default lookUpConfigs;

export function getConfig(key){
  if(!lookUpConfigs[key])throw Error(`lookup.config.LookLookUpKey >>>> ${this.lookUpKey} 配置不存在! `);
  return lookUpConfigs[key];
}

// function checkSameConfig() {
//   const vs = Object.values(lookUpConfigs);
//   const ks = Object.keys(lookUpConfigs);
//   const mp = {};
//   // console.info('check lookup config start========================================');
//   vs.forEach(({ api, auth = '未配置', desc = '未配置', columns, condition }, index) => {
//     const bj = {
//       api,
//     };
//     bj.col = columns.map(({ field }) => {
//       return {
//         field,
//       };
//     });
//     bj.cod = (condition.inputItems || []).map(({ key }) => {
//       return {
//         key,
//       };
//     });
//     const ab = JSON.stringify(bj);
//     if (mp[ab]) {
//       // console.warn('疑似重复的LOOKUP配置KEY:', ks[index], '作者:', auth, '详情:', desc);
//     }
//     mp[ab] = index;
//   });
//   // console.info('check lookup config end========================================');
// }


