
import { getLocalInfo } from 'utils/webUtils';
import data from './json/printerInfo';
import spData from './json/spPrinterInfo';

export default class PrinterStore {
  /**
   * @description 公共打印方法调用
   * @author hanxiaoling
   * @param {*} originRowId 报账单ID
   * @param {*} claimType  单据类型
   * @param {*} businessTypeId 业务类型
   * @param {*} unitId 单据所在的国家ID
   * @returns {reportObj} 
   */
  ecPrinter = (originRowId, claimType, businessTypeId,unitId) => {
    const reportObj = {};
    reportObj.id = originRowId;
    const datas = data;
    const spDatas = spData;
    const languageType = getLocalInfo();
    console.log(`${unitId}-${claimType}-${businessTypeId}${languageType}`);
    const printKey = `${claimType}-${businessTypeId}${languageType}`;
      if(unitId === 8110 || unitId==='8110'){
        reportObj.reportId = spDatas[printKey];  
      }else{
        reportObj.reportId = datas[printKey];
      }
    return reportObj;
  }

  /**
   * 判断是否支持打印
   * @param {*} businessTypeId 
   * @param {*} statusFlag
   * @returns disabled:true Or false  
   *  203：对公费用申请，404,405预提欠付和待摊欠付，410待摊规则单，
   *  642待摊费用报账单，
   */
  printInfoArr = (statusFlag,businessTypeId) => {
    if(statusFlag === '1' || statusFlag==='0'){
      return true
    }
  
    // // 目前支持打印的业务类型数组
    // const arr = [
    //               101,102,111,112,121,122,201,202,
    //               401,420,422,431,501,502,503,505,506,507,
    //               601,602,603,604,605,607,608,609,610,611,618,620,621,622,631,641,661,
    //               614,615,630,6301,6302,6303,6304,6305,6306,6307,6308,6309,6310,6311,6312,6313,6314,635,
    //               700,701,702,703,
    //               801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,100101,
    //               632,
    //             ]
                
    // if(arr.indexOf(businessTypeId) === -1){
    //   return true
    // }
    return false
  }
}

const printerStore = new PrinterStore()

/**
 * @description 公共打印方法调用
 * @author hanxiaoling
 * @param {*} originRowId 报账单ID
 * @param {*} claimType  单据类型
 * @param {*} businessTypeId 业务类型
 * @param {*} unitId 单据所在的国家ID
 * @returns {reportObj} 
 */
export const ecPrinter = (originRowId, claimType, businessTypeId,unitId) => {
  return printerStore.ecPrinter(originRowId, claimType, businessTypeId,unitId);
}

/**
 * 判断是否支持打印
 * @param {*} businessTypeId 
 * @param {*} statusFlag
 * @returns disabled:true Or false  
 *  203：对公费用申请，404,405预提欠付和待摊欠付，410待摊规则单，
 *  642待摊费用报账单，
 */
export const printInfoArr = (statusFlag,businessTypeId) => {
  return printerStore.printInfoArr(statusFlag,businessTypeId);
}
// 合同打印信息暂时禁用，打印模板ID信息
// "301301zh_CN":"b831a1b8-e087-4530-b967-426a7837aa34",
// "311311zh_CN":"f850dec1-ee3c-4203-ae9c-3551169f9e2f",
// "321321zh_CN":"f9ef3825-b235-45e0-9e18-27bba156baf8",
// "301301en_US":"",
// "311311en_US":"",
// "321321en_US":"",

// "99-501zh_CN":"4266ada1-86ad-4445-b34e-085b15fa698f",

