// /* eslint-disable import/named */
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import { getTableData } from '../../mock.dao';
import lodash from 'lodash'

const getToken = userAccount => (tokens[userAccount] = lodash.uniqueId(userAccount))

const sessionUser = {};

const tokens = {}

const urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62}|(:[0-9]{1,4}))+\.?/;

const getReferer = reff => urlReg.exec(reff)[0];

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
      return false;
    })
  ) {
    if (currentUser.password == password) {
      currentUser.currentAuthority = 'admin';
      currentUser.accessToken = getToken(currentUser.userAccount);
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
  const currentUser = sessionUser[`${getReferer(referer)}`];
  console.log("cuur",currentUser,sessionUser)
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
  sessionUser[`${getReferer(referer)}`] = undefined;
  writeOk(resp, {});
}

 function changeRole(req, resp) {
  const { body, query, headers, url } = req;
  const { userAccount, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  let currentUser = sessionUser[`${getReferer(referer)}`];
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
