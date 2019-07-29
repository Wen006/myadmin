import example from './zh-CN/example'
import exception from './zh-CN/exception'; 
import globalHeader from './zh-CN/globalHeader';
import login from './zh-CN/login'; 
import settingDrawer from './zh-CN/settingDrawer'; 
import sys from './zh-CN/sys'
import app from './zh-CN/app'
import lookup from './zh-CN/lookup'

export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.home.introduce': '介绍',
  'app.forms.basic.title': '基础表单',
  'app.forms.basic.description':
    '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
    ...example,
    ...sys,
    ...lookup,
    ...app, 
  ...exception, 
  ...globalHeader,
  ...login,  
  ...settingDrawer, 
};
