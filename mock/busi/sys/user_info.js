/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable import/named */
// /* eslint-disable import/named */
import lodash from 'lodash'
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'
import { getTableData } from '../../mock.dao';

const tokens = {}

const sessionUser = {};

const getToken = userName => (tokens[userName] = lodash.uniqueId(userName))

const urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62}|(:[0-9]{1,4}))+\.?/;

const getReferer = ref => (urlReg.exec(ref)[0]||"SESSION_USER");

function userLogin(req, resp) {
  const { body, query, headers, url } = req;
  const { username: uA, password: pwd, checkCode } = { ...body, ...query };
  let currentUser = null;
  const { referer } = headers;
  let userName; 
  let password;
  try { 
   userName = Base64.decode(uA); 
   password = Base64.decode(pwd);
  } catch (error) {
    console.log("Base64 解密出错了",error);
    userName = uA;
    password = pwd;
  }
  console.log('用户登陆', userName, '==', password);
  if (
    getTableData('SM_USER').some(it => {
      if (it.userName == userName) {
        currentUser = it;
        return true;
      }
      return false;
    })
  ) {
    if (currentUser.password == password) {
      currentUser.currentAuthority = 'admin';
      currentUser.accessToken = getToken(currentUser.userName);
      sessionUser[`${getReferer(referer)}`] = currentUser;
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
  const { userName, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  const currentUser = sessionUser[`${getReferer(referer)}`];
  
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
  const { userName, password, checkCode } = { ...body, ...query };
  const { referer } = headers;
  sessionUser[`${getReferer(referer)}`] = undefined;
  writeOk(resp, {});
}

 function changeRole(req, resp) {
  const { body, query, headers, url } = req;
  const { userName, password, checkCode } = { ...body, ...query };
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
