// /* eslint-disable no-unused-vars */
// /* eslint-disable import/named */
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import  { menuData, menuList }  from '../../mock.data'

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

function getMenuTData(req, resp) {
  const { headers } = req;
  const { sessionlocale = 'zh_CN' } = headers;
  // const list = treeToArray(lodash.cloneDeep(menuData));
  // console.log(list.length)
  writeOk(resp, menuList);
}

// export function getMenuLinkAll(req, resp) {
//   const { headers } = req;
//   const { sessionlocale = 'zh_CN' } = headers;
//   writeOk(resp, navMenu);
// }
export default {
    [`${getMockPre('SYS_MENU_QUERY_TREE')}`]: getMenu,
    [`${getMockPre('SYS_MENU_QUERY_DATA')}`]: getMenuTData,
};