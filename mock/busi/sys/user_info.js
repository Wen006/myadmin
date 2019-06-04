// /* eslint-disable import/named */
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import { getTableData } from '../../mock.dao';

const sessionUser = {};
 function userLogin(req, resp) {
  const { body, query, headers, url } = req;
  const { userAccount: uA, password: pwd, checkCode } = { ...body, ...query };
  let currentUser = null;
  const { referer } = headers;
  const userAccount = Base64.decode(uA);
  const password = Base64.decode(pwd);
  console.log('用户登陆', userAccount, '==', password);
  if (
    getTableData('USER_INFO').some(it => {
      if (it.userAccount == userAccount) {
        currentUser = it;
        return true;
      }
    })
  ) {
    if (currentUser.password == password) {
      currentUser.currentAuthority = 'admin';
      sessionUser[`${referer}`] = currentUser;
      writeOk(resp, currentUser);
    } else {
      writeJson(resp, Object.assign(ModuleReturn, { returnMessage: '密码错误！', success: false }));
    }
  } else {
    writeJson(resp, Object.assign(ModuleReturn, { returnMessage: '用户不存在！', success: false }));
  }
}

 function getCurrentUser(req, resp) {
  const { body, query, headers, url } = req;
  const { userAccount, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  const currentUser = sessionUser[`${referer}`];
  if (currentUser) {
    writeOk(resp, currentUser);
  } else {
    writeJson(
      resp,
      Object.assign(ModuleReturn, { returnMessage: '用户Session过期', success: false })
    );
  }
}

 function loginOut(req, resp) {
  const { body, query, headers, url } = req;
  const { userAccount, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  sessionUser[`${referer}`] = undefined;
  writeOk(resp, {});
}

 function changeRole(req, resp) {
  const { body, query, headers, url } = req;
  const { userAccount, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  let currentUser = sessionUser[`${referer}`];
  writeOk(resp, currentUser);
}

 function getSysParams(req, resp) {
  const data = {
    isCaptcha: false, // 是否有验证
    district_version: '1557473185212',
  };
  writeOk(resp, data);
}



export default {
  [`${getMockPre('SYS_USER_INFO_LOGIN')}`]: userLogin,
  [`${getMockPre('SYS_USER_INFO_GETCURUSER')}`]: getCurrentUser,
  [`${getMockPre('SYS_USER_INFO_LOGINOUT')}`]: loginOut,
  [`${getMockPre('SYS_USER_INFO_CHANGE_ROLE')}`]: changeRole,
  [`${getMockPre('SYS_PARAMS')}`]: getSysParams,
};
