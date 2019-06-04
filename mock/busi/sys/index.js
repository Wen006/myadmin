// import { writeOk, writeJson, ModuleReturn, getMockPre } from '../../utils';

import { getTableData } from '../../mock.dao';

// import { userLogin, getCurrentUser, loginOut, changeRole, getSysParams } from './user_info';

// import { getCodeList, findCodeByCode } from './ad_lov_list';

// import { getMenu, getMenuLinkAll } from './menu_info';

// import { wlGetcount, bcEckindEcbcsearch, favourateMenu } from './home';

// export default {
//   [`${getMockPre('SYS_USER_INFO_LOGIN')}`]: userLogin,
//   [`${getMockPre('SYS_USER_INFO_GETCURUSER')}`]: getCurrentUser,
//   [`${getMockPre('SYS_USER_INFO_LOGINOUT')}`]: loginOut,
//   [`${getMockPre('SYS_USER_INFO_CHANGE_ROLE')}`]: changeRole,
//   [`${getMockPre('SYS_AD_LOV_LIST_QUERY_CODELIST')}`]: getCodeList,
//   [`${getMockPre('SYS_MENU_INFO_GET_MENU')}`]: getMenu,
//   [`${getMockPre('SYS_PARAMS')}`]: getSysParams,
//   [`${getMockPre('SYS_FAVOURATE_MENU')}`]: favourateMenu,
//   [`${getMockPre('SYS_BC_ECKIND_ECBCSEARCH')}`]: bcEckindEcbcsearch,
//   [`${getMockPre('WL_GETCOUNT')}`]: wlGetcount,
//   [`${getMockPre('SYS_AD_LOV_LIST_FIND_BY_CODE')}`]: findCodeByCode,
//   [`${getMockPre('MENU_LINK_ALL')}`]: getMenuLinkAll,
// };

export default {
    'get /ss':[1],
    'get /ssd':getTableData("USER_INFO"),
}
