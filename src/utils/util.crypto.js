/**
 * @description 加密工具类
 * @author wennn
 * @time 20190624
 */
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8'
import Sha256 from 'crypto-js/sha256';


export function enBase64(enStr){
    const utf8Str = Utf8.parse(enStr);
    return Base64.stringify(utf8Str);
}

export function deBase64(deStr){
    const utf8Str = Base64.parse(deStr);
    return utf8Str.toString(Utf8);
}

export function sha256(enStr){
    return Sha256(enStr);
}