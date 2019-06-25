
const lookUpConfigs = {
  // USER_INFO
  // MENU_INFO
  USER_INFO: {
    desc: '用户选择---菜单管理，角色管理', // 解释干啥的，哪模块用到了，用逗号隔开
    auth: 'wennn', // 作者信息
    title: 'lookup.user.info.title', // 弹出框的标题 国际化key
    api: 'SYS_USER_LIST_BY_DTO', // service的api
    columns: [
      {
        headerName: 'user.info.userName', // 国际化 key
        field: 'userName',
      },
      {
        headerName: 'user.info.userCode',
        field: 'userCode',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'user.info.userName', // 国际化 key
          key: 'userName',
          type: 'string',
        },
        {
          label: 'user.info.userCode',
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
        headerName: 'menu.info.menuName',
        field: 'menuName',
        width: '40%',
      },
      {
        headerName: 'menu.info.menuCode',
        field: 'menuCode',
        width: '50%',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'menu.info.menuName',
          key: 'menuName',
        },
        {
          label: 'menu.info.menuCode',
          key: 'menuCode',
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


