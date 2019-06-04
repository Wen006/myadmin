import request from '@/utils/request';
import { callMethod } from '@/services/ServiceHandler'

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  // return request('/api/currentUser');
  console.log('hello')
  return callMethod({key:'SYS_USER_INFO_GETCURUSER'});
}
