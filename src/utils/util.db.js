/**
 * @description 简单的浏览器store操作
 * @author wennn
 * @time 20190624
 */
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import cookie from 'cookiejs';

const adapter = new LocalStorage(`W-${process.env.APP_VERSION}`)
const db = low(adapter)

db
  .defaults({
    sys: {
      language:'zh-CN',
      login:{
          status:'no',
          info:{},
      },
      apiUrl:{},
    },
    database: {},
  })
  .write()

export function setItem(key,value){ 
 return db.set(key,value).write();
}

export function getItem(key){
 return db.get(key).value();
}

export function setStore(key,value){
}

export function getStore(exp){ 
}

export function setCookie(key,value,expiredays){
   return cookie(key,value,expiredays);
}

export function getCookie(key){
   return cookie.get(key);
}

export default db

export {
    cookie
}
