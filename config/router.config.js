import example from './routes/example'

export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: ((urlPre,baseDir)=>[
      { path: `${urlPre}`, redirect: `${urlPre}/login` },
      { path: `${urlPre}/login`, component: `${baseDir}/Login` },
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
      ...example,
      {
        component: '404',
      },
    ]
  }
];
