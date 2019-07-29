/**
 * @description 静态案例
 * @author neusoft
 * 
 */
export default [
    // dashboard
    { path: '/', redirect: '/dashboard/home' },
    { path: '/example/aggrid/main', component: './example/AgGrid/AgGridMain' },
    { path: '/example/store/main', component: './example/Store/StoreMain' },
    { path: '/example/formmark/baseform', component: './example/FormMark/BaseForm' },
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      routes: [
        {
          path: '/dashboard/home',
          name: 'home',
          component: './example/Dashboard/Analysis',
        },
        {
          path: '/dashboard/monitor',
          name: 'monitor',
          component: './example/Dashboard/Monitor',
        },
        {
          path: '/dashboard/workplace',
          name: 'workplace',
          component: './example/Dashboard/Workplace',
        },
      ],
    },
    // forms
    {
      path: '/example/ant/form',
      icon: 'form',
      name: 'form',
      routes: [
        {
          path: '/example/ant/form/basic-form',
          name: 'basicform',
          component: './example/Forms/BasicForm',
        },
        {
          path: '/example/ant/form/step-form',
          name: 'stepform',
          component: './example/Forms/StepForm',
          hideChildrenInMenu: true,
          routes: [
            {
              path: '/example/ant/form/step-form',
              redirect: '/example/ant/form/step-form/info',
            },
            {
              path: '/example/ant/form/step-form/info',
              name: 'info',
              component: './example/Forms/StepForm/Step1',
            },
            {
              path: '/example/ant/form/step-form/confirm',
              name: 'confirm',
              component: './example/Forms/StepForm/Step2',
            },
            {
              path: '/example/ant/form/step-form/result',
              name: 'result',
              component: './example/Forms/StepForm/Step3',
            },
          ],
        },
        {
          path: '/example/ant/form/advanced-form',
          name: 'advancedform',
          authority: ['admin'],
          component: './example/Forms/AdvancedForm',
        },
      ],
    },
    // // list
    // {
    //   path: '/list',
    //   icon: 'table',
    //   name: 'list',
    //   routes: [
    //     {
    //       path: '/list/table-list',
    //       name: 'searchtable',
    //       component: './List/TableList',
    //     },
    //     {
    //       path: '/list/basic-list',
    //       name: 'basiclist',
    //       component: './List/BasicList',
    //     },
    //     {
    //       path: '/list/card-list',
    //       name: 'cardlist',
    //       component: './List/CardList',
    //     },
    //     {
    //       path: '/list/search',
    //       name: 'searchlist',
    //       component: './List/List',
    //       routes: [
    //         {
    //           path: '/list/search',
    //           redirect: '/list/search/articles',
    //         },
    //         {
    //           path: '/list/search/articles',
    //           name: 'articles',
    //           component: './List/Articles',
    //         },
    //         {
    //           path: '/list/search/projects',
    //           name: 'projects',
    //           component: './List/Projects',
    //         },
    //         {
    //           path: '/list/search/applications',
    //           name: 'applications',
    //           component: './List/Applications',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   icon: 'profile',
    //   routes: [
    //     // profile
    //     {
    //       path: '/profile/basic',
    //       name: 'basic',
    //       component: './Profile/BasicProfile',
    //     },
    //     {
    //       path: '/profile/advanced',
    //       name: 'advanced',
    //       authority: ['admin'],
    //       component: './Profile/AdvancedProfile',
    //     },
    //   ],
    // },
    // {
    //   name: 'result',
    //   icon: 'check-circle-o',
    //   path: '/result',
    //   routes: [
    //     // result
    //     {
    //       path: '/result/success',
    //       name: 'success',
    //       component: './Result/Success',
    //     },
    //     { path: '/result/fail', name: 'fail', component: './Result/Error' },
    //   ],
    // },
    // {
    //   name: 'exception',
    //   icon: 'warning',
    //   path: '/exception',
    //   routes: [
    //     // exception
    //     {
    //       path: '/exception/403',
    //       name: 'not-permission',
    //       component: './Exception/403',
    //     },
    //     {
    //       path: '/exception/404',
    //       name: 'not-find',
    //       component: './Exception/404',
    //     },
    //     {
    //       path: '/exception/500',
    //       name: 'server-error',
    //       component: './Exception/500',
    //     },
    //     {
    //       path: '/exception/trigger',
    //       name: 'trigger',
    //       hideInMenu: true,
    //       component: './Exception/TriggerException',
    //     },
    //   ],
    // },
    // {
    //   name: 'account',
    //   icon: 'user',
    //   path: '/account',
    //   routes: [
    //     {
    //       path: '/account/center',
    //       name: 'center',
    //       component: './Account/Center/Center',
    //       routes: [
    //         {
    //           path: '/account/center',
    //           redirect: '/account/center/articles',
    //         },
    //         {
    //           path: '/account/center/articles',
    //           component: './Account/Center/Articles',
    //         },
    //         {
    //           path: '/account/center/applications',
    //           component: './Account/Center/Applications',
    //         },
    //         {
    //           path: '/account/center/projects',
    //           component: './Account/Center/Projects',
    //         },
    //       ],
    //     },
    //     {
    //       path: '/account/settings',
    //       name: 'settings',
    //       component: './Account/Settings/Info',
    //       routes: [
    //         {
    //           path: '/account/settings',
    //           redirect: '/account/settings/base',
    //         },
    //         {
    //           path: '/account/settings/base',
    //           component: './Account/Settings/BaseView',
    //         },
    //         {
    //           path: '/account/settings/security',
    //           component: './Account/Settings/SecurityView',
    //         },
    //         {
    //           path: '/account/settings/binding',
    //           component: './Account/Settings/BindingView',
    //         },
    //         {
    //           path: '/account/settings/notification',
    //           component: './Account/Settings/NotificationView',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  