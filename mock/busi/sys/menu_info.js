// /* eslint-disable no-unused-vars */
// /* eslint-disable import/named */
import lodash from 'lodash'
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import  { menuData, menuList }  from '../../mock.data'

const getMenuData = locale => 
  //   const m =  menuData[locale]||[]
  //   return formatter(m)
   menuData
;

function getMenu(req, resp) {
  const { headers } = req;
  const { sessionlocale = 'zh-CN' } = headers;
  writeOk(resp, getMenuData(sessionlocale));
}

function getMenuTData(req, resp) {
  const { headers } = req;
  const { sessionlocale = 'zh-CN' } = headers;
  // const list = treeToArray(lodash.cloneDeep(menuData));
  // console.log(list.length)
  writeOk(resp, menuList);
}
const ids = menuList.map(it=>it.id)
function getMenuKey(req, resp) {
  const { headers } = req;
  const { sessionlocale = 'zh-CN' } = headers;
  // const list = treeToArray(lodash.cloneDeep(menuData));
  // console.log(list.length)
  const idd = lodash.shuffle(ids)
  const map = {}
  for(let i=0;i<10;i+=1){
    const index = lodash.random(0,idd.length);
    map[`${index}`] = `${idd[index]}`;
  }
  writeOk(resp, lodash.values(map));
}

// export function getMenuLinkAll(req, resp) {
//   const { headers } = req;
//   const { sessionlocale = 'zh-CN' } = headers;
//   writeOk(resp, navMenu);
// }
export default {
    [`${getMockPre('SYS_MENU_QUERY_TREE')}`]: getMenu,
    [`${getMockPre('SYS_MENU_QUERY_DATA')}`]: getMenuTData,
    [`${getMockPre('SYS_GET_MENUID_BY_ROLE')}`]: getMenuKey,
};