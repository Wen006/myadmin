import example from './routes/example'
import sys from './routes/sys'

export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: ((urlPre,pageDir)=>[
      { path: `${urlPre}`, redirect: `${urlPre}/login` },
      { path: `${urlPre}/login`, component: `${pageDir}/Login` },
      { path: `${urlPre}/register`, component: `./example/User/Register` },
      { path: `${urlPre}/register-result`, component: `./example/User/RegisterResult` },
    ])('/user','./sys/user/login'),
  },
  // app 
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      ...sys,
      ...example,
      {
        component: '404',
      },
    ]
  }
];
