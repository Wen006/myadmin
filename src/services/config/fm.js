/*
 * @Author: wyh 
 * @Date: 2018-09-18 17:36:35 
 * @Last Modified by: wyh
 * @Last Modified time: 2019-02-13 13:48:08
 * @Description: fm模块服务设置
 */
export default {
  FM_PAYBACK_LIST: {
    url: '/fm/fs/payback/fsPayback/listByDto',
    method: 'GET',
    desc: '退汇（国内、国际列表）',
  },
  AR_DATAPROCESSING_GETLIST: {
    url: '/fm/ar/arDataProcessing/list',
    method: 'GET',
    auth: 'wyh',
    desc: '清分 查询列表',
  },
  FM_PAYBACK_SAVEORUPDATE: {
    url: '/fm/fs/payback/fsPayback/saveOrUpdateApply',
    method: 'POST',
    desc: '退汇（国内、国际保存或提交）',
  },
  FM_PAYBACK_SAVEANDSUBMIT: {
    url: '/fm/fs/payback/fsPayback/saveAndsubmitApply',
    method: 'POST',
    desc: '退汇（国内、国际保存并提交）',
  },
  FM_PAYBACK_SUBMITBYID: {
    url: '/fm/fs/payback/fsPayback/submitById',
    method: 'POST',
    desc: '退汇（国内、国际提交）',
  },
  FM_PAYBACK_DELETEMULTI: {
    url: '/fm/fs/payback/fsPayback//deletePayback',
    method: 'DELETE',
    desc: '退汇（国内、国际删除）',
  },
  FM_PAY_GETONE: {
    url: '/fm/fs/pay/fsPay/getOne',
    method: 'GET',
    desc: '支付获取单条详情',
  },
  FM_PAYOUT_LIST: {
    url: '/fm/fs/payout/fsPayout/listByDto',
    method: 'GET',
    desc: '对公支付 查询',
  },
  FM_PAYOUT_GETONE: {
    url: '/fm/fs/payout/fsPayout/getOne',
    method: 'GET',
    desc: '对公支付获取单条详情',
  },
  FM_PAYOUT_APPLY_LIST: {
    url: '/fm/fs/payout/fsPayout/apply/listByDto',
    method: 'GET',
    desc: '对公支付 申请 列表',
  },
  FM_PAYOUT_APPLY_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/apply/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 申请 放弃支付',
  },
  FM_PAYOUT_APPLY_SAVEORUPDATE: {
    url: '/fm/fs/payout/fsPayout/apply/saveOrUpdateApply',
    method: 'POST',
    desc: '对公支付 申请 保存',
  },
  FM_PAYOUT_APPLY_SAVEANDSUBMIT: {
    url: '/fm/fs/payout/fsPayout/apply/saveAndsubmitApply',
    method: 'POST',
    desc: '对公支付 申请 详情 保存并提交',
  },
  FM_PAYOUT_APPLY_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/apply/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 申请 列表 提交',
  },
  FM_PAYOUT_CHECKANDDELETE: {
    url: '/fm/fs/payout/fsPayout/apply/checkAndDeleteLogical',
    method: 'FORMPOST',
    desc: '对公支付 申请 删除',
  },
  FM_PAYOUT_AUDIT_LIST: {
    url: '/fm/fs/payout/fsPayout/audit/listByDto',
    method: 'GET',
    desc: '对公支付 审核 列表',
  },
  FM_PAYOUT_AUDIT_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/audit/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 审批 不同意',
  },
  FM_PAYOUT_AUDIT_SUBMITBYIDSFORHANLDE: {
    url: '/fm/fs/payout/fsPayout/audit/submitByIdsForHandle',
    method: 'FORMPOST',
    desc: '对公支付 审核 代办列表审批',
  },
  FM_PAYOUT_AUDIT_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/audit/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 审核 列表提交',
  },
  FM_PAYOUT_EXECUTE_LIST: {
    url: '/fm/fs/payout/fsPayout/execute/listByDto',
    method: 'GET',
    desc: '对公支付 执行 批量',
  },
  FM_PAYOUT_EXECUTE_SAVEANDSUBMIT: {
    url: '/fm/fs/payout/fsPayout/execute/saveAndSumbitExecute',
    method: 'POST',
    desc: '对公支付 执行 操作列',
  },
  FM_PAYOUT_EXECUTE_CONFIRMBKOOKDATE: {
    url: '/fm/fs/payout/fsPayout/execute/confirmBookDate',
    method: 'FORMPOST',
    desc: '对公支付 执行 查看当前记账期间',
  },
  FM_PAYOUT_EXECUTE_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/execute/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 执行 退回',
  },
  FM_PAYOUT_EXECUTE_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/execute/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 执行 列表提交',
  },
  FM_FS_EXECUTE_EDXPORTFILE: {
    url: '/fm/fs/payout/fsPayout/execute/exportFile',
    method: 'FORMPOST',
    desc: '网银批量导出',
  },
  FM_FS_EXECUTE_CHECKEDXPORTFILE: {
    url: '/fm/fs/payout/fsPayout/execute/checkExportFile',
    method: 'FORMPOST',
    desc: '网银预校验',
  },
  FM_PAYOUT_CONFIRM_LIST: {
    url: '/fm/fs/payout/fsPayout/confirm/listByDto',
    method: 'GET',
    desc: '对公支付 确认 列表',
  },
  FM_PAYOUT_CONFIRM_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/confirm/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 确认 退回',
  },
  FM_PAYOUT_CONFIRM_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/confirm/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 确认 列表提交',
  },
  FM_PAYOUT_MANUAL_LIST: {
    url: '/fm/fs/payout/fsPayout/manual/listByDto',
    method: 'GET',
    desc: '对公支付 人工干预 列表',
  },
  FM_PAYOUT_MANUAL_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/manual/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 人工干预 退回',
  },
  FM_PAYOUT_MANUAL_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/manual/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 人工干预 列表提交',
  },
  FM_PAYOUT_DUPLICATE_LIST: {
    url: '/fm/fs/payout/fsPayout/duplicate/listByDto',
    method: 'GET',
    desc: '对公支付 疑似重复处理 列表',
  },
  FM_PAYOUT_DUPLICATE_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/duplicate/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 疑似重复处理 退回',
  },
  FM_PAYOUT_DUPLICATE_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/duplicate/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 疑似重复处理 列表提交',
  },
  FM_PAYOUT_FAIL_LIST: {
    url: '/fm/fs/payout/fsPayout/fail/listByDto',
    method: 'GET',
    desc: '对公支付 失败 列表',
  },
  FM_PAYOUT_FAIL_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/fail/backByIds',
    method: 'FORMPOST',
    desc: '对公支付 失败 退回',
  },
  FM_PAYOUT_FAIL_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/fail/submitByIds',
    method: 'FORMPOST',
    desc: '对公支付 失败 列表提交',
  },
  FM_PAYOUT_CHEQUEPAYMENT_LIST: {
    url: '/fm/fs/payout/fsPayout/chequePayment/listByDto',
    method: 'GET',
    desc: '对公支付 支票出款确认 列表',
  },
  FM_PAYOUT_CHEQUEPAYMENT_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/chequePayment/submitChequePayment',
    method: 'POST',
    desc: '对公支付 支票出款确认 提交',
  },
  FM_PAYOUT_SAVECHEQUENO: {
    url: '/fm/fs/payout/fsPayout/chequePayment/saveChequeNo',
    method: 'POST',
    desc: '对公支付 支票 保存支票号',
  },
  FM_PAYEXPENSE_LIST: {
    url: '/fm/fs/payout/fsPayout/listByDto',
    method: 'GET',
    desc: '对私支付 查询',
  },
  FM_PAYEXPENSE_GETONE: {
    url: '/fm/fs/payout/fsPayout/getOne',
    method: 'GET',
    desc: '对私支付获取单条详情',
  },
  FM_PAYEXPENSE_APPLY_LIST: {
    url: '/fm/fs/payout/fsPayout/apply/listByDto',
    method: 'GET',
    desc: '对私支付 申请 列表',
  },
  FM_PAYEXPENSE_APPLY_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/apply/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 申请 放弃支付',
  },
  FM_PAYEXPENSE_APPLY_SAVEORUPDATE: {
    url: '/fm/fs/payout/fsPayout/apply/saveOrUpdateApply',
    method: 'POST',
    desc: '对私支付 申请 保存',
  },
  FM_PAYEXPENSE_APPLY_SAVEANDSUBMIT: {
    url: '/fm/fs/payout/fsPayout/apply/saveAndsubmitApply',
    method: 'POST',
    desc: '对私支付 申请 详情 保存并提交',
  },
  FM_PAYEXPENSE_APPLY_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/apply/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 申请 列表 提交',
  },
  FM_PAYEXPENSE_CHECKANDDELETE: {
    url: '/fm/fs/payout/fsPayout/apply/checkAndDeleteLogical',
    method: 'FORMPOST',
    desc: '对私支付 申请 删除',
  },
  FM_PAYEXPENSE_AUDIT_LIST: {
    url: '/fm/fs/payout/fsPayout/audit/listByDto',
    method: 'GET',
    desc: '对私支付 审核 列表',
  },
  FM_PAYEXPENSE_AUDIT_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/audit/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 审核 不同意',
  },
  FM_PAYEXPENSE_AUDIT_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/audit/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 审核 列表提交',
  },
  FM_PAYEXPENSE_EXECUTE_LIST: {
    url: '/fm/fs/payout/fsPayout/execute/listByDto',
    method: 'GET',
    desc: '对私支付 执行 列表',
  },
  FM_PAYEXPENSE_EXECUTE_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/execute/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 执行 退回',
  },
  FM_PAYEXPENSE_EXECUTE_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/execute/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 执行 列表提交',
  },
  FM_PAYEXPENSE_CONFIRM_LIST: {
    url: '/fm/fs/payout/fsPayout/confirm/listByDto',
    method: 'GET',
    desc: '对私支付 确认 列表',
  },
  FM_PAYEXPENSE_CONFIRM_BACKBYIDS: {
    url: '/fm/fs/payout/fsPayout/confirm/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 确认 退回',
  },
  FM_PAYEXPENSE_CONFIRM_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/confirm/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 确认 列表提交',
  },
  FM_PAYEXPENSE_MANUAL_LIST: {
    url: '/fm/fs/payout/fsPayout/manual/listByDto',
    method: 'GET',
    desc: '对私支付 人工干预 列表',
  },
  FM_PAYEXPENSE_MANUAL_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/manual/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 人工干预 退回',
  },
  FM_PAYEXPENSE_MANUAL_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/manual/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 人工干预 列表提交',
  },
  FM_PAYEXPENSE_DUPLICATE_LIST: {
    url: '/fm/fs/payout/fsPayout/duplicate/listByDto',
    method: 'GET',
    desc: '对私支付 疑似重复处理 列表',
  },
  FM_PAYEXPENSE_DUPLICATE_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/duplicate/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 疑似重复处理 退回',
  },
  FM_PAYEXPENSE_DUPLICATE_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/duplicate/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 疑似重复处理 列表提交',
  },
  FM_PAYEXPENSE_FAIL_LIST: {
    url: '/fm/fs/payout/fsPayout/fail/listByDto',
    method: 'GET',
    desc: '对私支付 失败 列表',
  },
  FM_PAYEXPENSE_FAIL_BACKBYID: {
    url: '/fm/fs/payout/fsPayout/fail/backByIds',
    method: 'FORMPOST',
    desc: '对私支付 失败 退回',
  },
  FM_PAYEXPENSE_FAIL_SUBMITBYID: {
    url: '/fm/fs/payout/fsPayout/fail/submitByIds',
    method: 'FORMPOST',
    desc: '对私支付 失败 列表提交',
  },
  FM_IMPORT_LEADIN: {
    url: '/fm/fs/payout/fsPayout/apply/importPay',
    method: 'FORMPOST',
    desc: '对公支付 导入付款单',
  },
  FSC_CLAIM_QUERYDOVIEW: {
    url: '/fsc/claim/query/myclaim/doView',
    method: 'POST',
    desc: '报账单详情',
  },
  FM_PAY_GETEXPENSEPAYFORM: {
    url: '/fm/bi/pay/biPay/getExpensePayFromFsc',
    method: 'POST',
    desc: '',
  },
  FC_PAYWAGE_LIST: {
    url: '/fm/fs/paywage/fsPaywage/apply/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)列表',
  },
  FC_PAYWAGE_DELETEMULTI: {
    url: '/fm/fs/paywage/fsPaywage/apply/checkAndDeleteLogical',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)删除',
  },
  FC_PAYWAGE_GETONE: {
    url: '/fm/fs/paywage/fsPaywage/getOne',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)获取单个项',
  },
  FC_PAYWAGE_SAVEORUPDATEAPPLY: {
    url: '/fm/fs/paywage/fsPaywage/apply/saveOrUpdateApply',
    method: 'post',
    auth: 'yuanrr',
    desc: '工资支付(境外)保存',
  },
  FC_PAYWAGE_SUBMITBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/apply/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)批量提交',
  },

  FC_PAYWAGE_BACKBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/apply/backByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)放弃支付',
  },
  FC_PAYWAGE_SAVEANDSUBMITAPPLY: {
    url: '/fm/fs/paywage/fsPaywage/apply/saveAndsubmitApply',
    method: 'post',
    auth: 'yuanrr',
    desc: '工资支付(境外)提交',
  },
  FC_PAYWAGE_BIPAY: {
    url: '/fm/bi/pay/biPay/listByDto',
    method: 'get',
    auth: 'yuanrr',
    desc: '导入付款清单',
  },
  FC_PAYWAGE_IMPORTPAY: {
    url: '/fm/fs/paywage/fsPaywage/apply/importPay',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)导入付款清单',
  },
  FC_PAYWAGE_AUDIT_LIST: {
    url: '/fm/fs/paywage/fsPaywage/audit/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)审批列表',
  },
  FC_PAYWAGE_AUDIT_SUBMITBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/audit/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)审批同意',
  },
  FC_PAYWAGE_AUDIT_BACKBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/audit/backByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)审批退回',
  },
  FC_PAYWAGE_CONFIRM_LIST: {
    url: '/fm/fs/paywage/fsPaywage/confirm/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)确认列表',
  },
  FC_PAYWAGE_CONFIRM_SUBMITBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/confirm/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)确认',
  },
  FC_PAYWAGE_CONFIRM_BACKBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/confirm/backByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)确认--人工干预',
  },
  FC_PAYWAGE_EXCUTE_LIST: {
    url: '/fm/fs/paywage/fsPaywage/execute/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)执行列表',
  },
  FC_PAYWAGE_EXCUTE_SUBMITBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/execute/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)执行同意',
  },
  FC_PAYWAGE_EXCUTE_BACKBYIDS: {
    url: '/fm/fs/paywage/fsPaywage/execute/backByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)执行退回',
  },
  FC_PAYWAGE_MANUAL_LIST: {
    url: '/fm/fs/paywage/fsPaywage/manual/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)人工干预列表',
  },
  FC_PAYWAGE_MANUAL_SUBMITBYLISTIDS: {
    url: '/fm/fs/paywage/fsPaywage/manual/submitByListIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)人工干预成功',
  },
  FC_PAYWAGE_MANUAL_BACKBYLISTIDS: {
    url: '/fm/fs/paywage/fsPaywage/manual/backByListIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)人工干预失败',
  },
  FC_PAYWAGE_SPLIT_LIST: {
    url: '/fm/fs/paywage/fsPaywage/split/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)拆分列表',
  },
  FC_PAYWAGE_SPLIT_SUBMITBYLISTIDS: {
    url: '/fm/fs/paywage/fsPaywage/split/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)拆分提交',
  },
  FC_PAYWAGE_FAIL_LIST: {
    url: '/fm/fs/paywage/fsPaywage/fail/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)失败处理列表',
  },
  FC_PAYWAGE_FAIL_SUBMITBYLISTIDS: {
    url: '/fm/fs/paywage/fsPaywage/fail/submitByIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)失败处理成功',
  },
  FC_PAYWAGE_FAIL_BACKBYLISTIDS: {
    url: '/fm/fs/paywage/fsPaywage/fail/backByListIds',
    method: 'formPost',
    auth: 'yuanrr',
    desc: '工资支付(境外)失败处理退回',
  },
  FC_PAYWAGE_QUERY_LIST: {
    url: '/fm/fs/paywage/fsPaywage/listByDto',
    method: 'GET',
    auth: 'yuanrr',
    desc: '工资支付(境外)查询列表',
  },
  FS_PAYOUT_VOUCHER_SUBMIT: {
    url: '/fm/fs/payout/fsPayout/voucher/submitByIds',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '初审 通过',
  },
  FS_PAYOUT_VOUCHER_BACK: {
    url: '/fm/fs/payout/fsPayout/voucher/backByIds',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '初审 退回',
  },
  FS_PAYOUT_CHECK_SUBMIT: {
    url: '/fm/fs/payout/fsPayout/check/submitByIds',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '复核 通过',
  },
  FS_PAYOUT_CHECK_BACK: {
    url: '/fm/fs/payout/fsPayout/check/backByIds',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '复核 不通过',
  },
  FS_PAYOUT_CHECK_ONLINEACCOUNT: {
    url: '/fm/fs/payout/fsPayout/check/onlineAccount',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '复核 在线记账',
  },
  FS_PAYOUT_CHECK_BOOKCOMPLETE: {
    url: '/fm/fs/payout/fsPayout/check/confirmAccount',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '复核 确认记账完成',
  },
  FS_PAYOUT_INITDATA: {
    url: '/fm/fs/payout/fsPayout/initData',
    method: 'GET',
    auth: 'wyh',
    desc: '对公、对私 新增',
  },
  FS_PAYOUT_EXPORTHIS: {
    url: '/fm/fs/batch/fsBatchExport/selectByPaymentId',
    method: 'GET',
    auth: 'wyh',
    desc: '对公、对私 导出历史',
  },
  FS_PAYOUT_MANUEXPORT_SUBMIT: {
    url: '/fm/fs/payout/fsPayout/execute/sumitManuExport',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '对公、对私 执行干预',
  },
  FS_PAYOUT_MANUEXPORT_PAYMENT: {
    url: '/fm/fs/payout/fsPayout/manual/manuExportPayment',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '对公、对私 导出干预 再导不再导',
  },
  GET_DISTRICT_JSON: {
    url: '/json/world.json',
    method: 'GET',
    auth: 'wyh',
    desc: '城市数据',
  },
  FS_PAYOUT_MANUEXPORT_BACK: {
    url: '/fm/fs/payout/fsPayout/manual/backById',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '对公、对私 导出干预 退回',
  },
  FS_PAYOUT_EXECUTE_SENDVOUCHER: {
    url: '/fm/fs/payout/fsPayout/execute/sendVoucherAgain',
    method: 'FORMPOST',
    auth: 'wyh',
    desc: '对公、对私 执行 在线记账',
  },
  FS_PAYOUT_EXCEL_EXPORT: {
    url: '/fm/fs/payout/fsPayout/exportExcel',
    method: 'GET',
    auth: 'wyh',
    desc: '对公、对私 执行 excel导出',
  },
};
