
const lookUpConfigs = {
  // USER_INFO
  // MENU_INFO
  USER_INFO: {
    desc: '用户选择---菜单管理，角色管理', // 解释干啥的，哪模块用到了，用逗号隔开
    auth: 'wennn', // 作者信息
    title: 'lookup.userinfo.headerName', // 弹出框的标题 国际化key
    api: 'SYS_USER_LIST', // service的api
    columns: [
      {
        headerName: 'userinfo.username', // 国际化 key
        field: 'userName',
        width: '40%',
      },
      {
        headerName: 'USER_CODE',
        field: 'userCode',
        width: '50%',
      },
    ],
    condition: {
      inputItems: [
        {
          label: 'userinfo.username', // 国际化 key
          key: 'userName',
          type: 'string',
        },
        {
          label: '年龄',
          key: 'userCode',
          type: 'number',
        },
        {
          label: '生日',
          key: 'bir',
          type: 'date',
          align: 'center',
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
        headerName: 'MENU_NAME',
        field: 'menuName',
        width: '40%',
      },
      {
        headerName: 'MENU_CODE',
        field: 'menuCode',
        width: '50%',
      },
    ],
    condition: {
      inputItems: [
        {
          label: '菜单名称',
          key: 'userName',
        },
        {
          label: '菜单代码',
          key: 'menuCode',
        },
      ],
    },
  },
};

export default lookUpConfigs;

export function getConfig(key){
  console.log("getConfig ------")
  if(!lookUpConfigs[key])throw Error(`lookup.config.LookLookUpKey >>>> ${this.lookUpKey} 配置不存在! `);
  console.log(lookUpConfigs[key])
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


