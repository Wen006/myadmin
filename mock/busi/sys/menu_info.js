// /* eslint-disable no-unused-vars */
// /* eslint-disable import/named */
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import  { menuData }  from '../../mock.data'

// const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

// export function isUrl(path) {
//   return reg.test(path);
// }

// function formatter(data, parentPath = '/', parentAuthority) {
//   return data.map(item => {
//     let { path } = item;
//     if (!isUrl(path)) {
//       path = parentPath + item.path;
//     }
//     const result = {
//       ...item,
//       path,
//       authority: item.authority || parentAuthority,
//     };
//     if (item.children) {
//       result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
//     }
//     return result;
//   });
// }

const getMenuData = locale => {
  //   const m =  menuData[locale]||[]
  //   return formatter(m)
  return menuData;
};

function getMenu(req, resp) {
  const { headers } = req;
  const { sessionlocale = 'zh_CN' } = headers;
  writeOk(resp, getMenuData(sessionlocale));
}

// export function getMenuLinkAll(req, resp) {
//   const { headers } = req;
//   const { sessionlocale = 'zh_CN' } = headers;
//   writeOk(resp, navMenu);
// }
export default {
    [`${getMockPre('SYS_MENU_INFO_GET_MENU')}`]: getMenu,
};