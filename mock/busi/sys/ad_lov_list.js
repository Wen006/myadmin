// import { writeOk } from '../../utils';

// const codeList = {
//   ECCLAIM_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '财务初审',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '待制证',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '待复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '待记账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '记账中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P',
//       CODE_NAME: '支付中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '待支付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'I',
//       CODE_NAME: '影像退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '影像确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '财务签收',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'R',
//       CODE_NAME: '待稽核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'M',
//       CODE_NAME: '待确认',
//     },
//   ],
//   BC_EC_KIND_APPLY: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '201',
//       CODE_NAME: '资产采购申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '202',
//       CODE_NAME: '出差申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '203',
//       CODE_NAME: '其他对公费用申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '211',
//       CODE_NAME: '资产采购申请变更',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '221',
//       CODE_NAME: '资产采购申请终止',
//     },
//   ],
//   COMMON_Y_N: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   EC_SETTLE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '普通报账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '内部垫付',
//     },
//   ],
//   MD_PARTNER_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '供应商',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '员工',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '客户',
//     },
//   ],
//   BC_FIELD_REGION: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '主表信息',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '20',
//       CODE_NAME: '单据明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '21',
//       CODE_NAME: '其他明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '30',
//       CODE_NAME: '发票明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '40',
//       CODE_NAME: '核销明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '50',
//       CODE_NAME: '押款明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '60',
//       CODE_NAME: '扣款明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '90',
//       CODE_NAME: '支付明细',
//     },
//   ],
//   FM_FS_PAYWAGE_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '待审核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '待支付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '支付中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '支付完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '疑似重复',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '失败搁置',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '不明搁置',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z',
//       CODE_NAME: '退回完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '另单支付',
//     },
//   ],
//   FSC_BD_UNIT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未打开',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '已打开',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已关闭',
//     },
//   ],
//   SYS_MD_ENTITY_CLASSIFY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '集团',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '公司',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '汇总管理组织',
//     },
//   ],
//   FSC_OPT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '变更',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '关闭',
//     },
//   ],
//   USING_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '启用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '停用',
//     },
//   ],
//   FSC_BD_ENTITY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '预算公司',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '预算部门',
//     },
//   ],
//   SYS_MD_ENTITY_FU_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'SCGLBM',
//       CODE_NAME: '生产管理部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'SCFZBM',
//       CODE_NAME: '生产辅助部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP05_SYS',
//       CODE_NAME: '采购部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP03_SYS',
//       CODE_NAME: '销售部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP07_SYS',
//       CODE_NAME: '劳务部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP06_SYS',
//       CODE_NAME: '研发部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP02_SYS',
//       CODE_NAME: '管理部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP01_SYS',
//       CODE_NAME: '基本生产部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DP04_SYS',
//       CODE_NAME: '辅助生产部门',
//     },
//   ],
//   EC_REC_SETTLE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '是',
//     },
//   ],
//   ACTION_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '(countersign)complete',
//       CODE_NAME: '(会签)通过',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '(countersign)submit',
//       CODE_NAME: '(会签)提交',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '(countersign)transfer',
//       CODE_NAME: '(会签)转办',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'addsign',
//       CODE_NAME: '加签',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'complete',
//       CODE_NAME: '通过',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'connect',
//       CODE_NAME: '沟通',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'rollback',
//       CODE_NAME: '驳回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'submit',
//       CODE_NAME: '提交',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'transfer',
//       CODE_NAME: '转办',
//     },
//   ],
//   PJ_PROJECT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '终止',
//     },
//   ],
//   WP_EXP_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '普通表达式',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '函数',
//     },
//   ],
//   WP_FSC_MODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '地域',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '流程',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '产品',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '职能',
//     },
//   ],
//   FM_PAYBACK_PERIOD_TYPE: [],
//   FSC_BUDGET_ADJUST_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '平衡调整',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '调增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '调减',
//     },
//   ],
//   BUDGET_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '固定',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '变动',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '资产',
//     },
//   ],
//   PERSONAL_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '总额控制',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '先进先出控制',
//     },
//   ],
//   FSC_BD_APPLY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '已启用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '已禁用',
//     },
//   ],
//   CLASSIFY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '管理组织',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '核算实体',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '核算部门',
//     },
//   ],
//   MINUS_CO_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不结转',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '结转',
//     },
//   ],
//   VE_FI_DV_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '借',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'H',
//       CODE_NAME: '贷',
//     },
//   ],
//   MD_ENTITY_BLOCK: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z01',
//       CODE_NAME: '上市版块',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z02',
//       CODE_NAME: '非上市版块',
//     },
//   ],
//   TOTAL_CTRL_LEVEL: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '一级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '二级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '三级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '四级',
//     },
//   ],
//   SYS_MD_LAST_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '非末级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是末级',
//     },
//   ],
//   BD_PERIOD_INIT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '年度+半年',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '年度+季度',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '年度+月度',
//     },
//   ],
//   SYS_MD_ENTITY_HEAD_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '非总部',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '总部',
//     },
//   ],
//   EC_BASE_UNIT: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P.',
//       CODE_NAME: 'P.',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C.',
//       CODE_NAME: 'C.',
//     },
//   ],
//   WIDGET_TYPE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'T',
//       CODE_NAME: '输入框',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P',
//       CODE_NAME: '弹出框',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'L',
//       CODE_NAME: '下拉框',
//     },
//   ],
//   FSC_DM_BILL_FLOW_ACTION: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '发送',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'R',
//       CODE_NAME: '签收',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '审单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '新增退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '退回中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'G',
//       CODE_NAME: '退回签收',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z',
//       CODE_NAME: '归档',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '审核不通过',
//     },
//   ],
//   FM_FS_PAYOUT_TRADE_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '未执行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '失败',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '不明',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '8',
//       CODE_NAME: '部分成功部分失败',
//     },
//   ],
//   CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不控制',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '控制',
//     },
//   ],
//   VARIABLE_CTRL_LEVEL: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '一级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '二级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '三级',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '四级',
//     },
//   ],
//   BD_ADJUST_ITEM_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '跨一级项目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '同一级项目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '同末级项目',
//     },
//   ],
//   EC_TRADE_RESULT: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未支付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '支付完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z',
//       CODE_NAME: '放弃支付',
//     },
//   ],
//   DE_DUCE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   FM_FS_PAYWAGE_TRADE_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '未执行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '失败',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '不明',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '8',
//       CODE_NAME: '部分成功部分失败',
//     },
//   ],
//   CM_PUR_TYPE_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '招标',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '竞争性谈判',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '邀标',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '13',
//       CODE_NAME: '单一来源',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '14',
//       CODE_NAME: '询价',
//     },
//   ],
//   SYS_ECKIND_BUDGET_NODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '报账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '不执行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '30',
//       CODE_NAME: '发票明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '40',
//       CODE_NAME: '核销明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '50',
//       CODE_NAME: '押款明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '60',
//       CODE_NAME: '扣款明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '90',
//       CODE_NAME: '支付明细',
//     },
//   ],
//   SYS_CT_CREDIT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//   ],
//   FS_BUDGET_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '待复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '未生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '已生效',
//     },
//   ],
//   ONLINE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '线下',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '线上',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '核算部门',
//     },
//   ],
//   FS_BUDGET_MONTH: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '1月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '2月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '3月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '4月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '5月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '6月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '7月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '8',
//       CODE_NAME: '8月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '9月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '10月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '11月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '12月',
//     },
//   ],
//   SYS_CT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '初始',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '无效',
//     },
//   ],
//   AR_WRITE_OFF_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '无红冲',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '待红冲',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '红冲中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已红冲',
//     },
//   ],
//   VE_ACCOUNT_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'OL',
//       CODE_NAME: 'OL',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'AL',
//       CODE_NAME: 'AL',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'YL',
//       CODE_NAME: 'YL',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//     },
//   ],
//   EC_CLAIM_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '20',
//       CODE_NAME: '通用报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '一般员工差旅报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '21',
//       CODE_NAME: '业务招待报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '40',
//       CODE_NAME: '借款报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '41',
//       CODE_NAME: '还款报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '30',
//       CODE_NAME: '对公费用报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '31',
//       CODE_NAME: '对公事项报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '32',
//       CODE_NAME: '对公合同报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '33',
//       CODE_NAME: '原材料报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '90',
//       CODE_NAME: '付款报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '营销外勤差旅报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '23',
//       CODE_NAME: '差旅标准申请单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '22',
//       CODE_NAME: '资产申请单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '24',
//       CODE_NAME: '对公费用事前申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '89',
//       CODE_NAME: '应付付款单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '60',
//       CODE_NAME: '对公欠付报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '15',
//       CODE_NAME: '通讯费报账单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '404',
//       CODE_NAME: '预提待摊',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '618',
//       CODE_NAME: '私车公用报账单',
//     },
//   ],
//   FSC_CLAIM_PAYMENT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '原材料',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '费用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '其它',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '现采',
//     },
//   ],
//   SYS_ECKIND_APPLY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不需要申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '需要申请',
//     },
//   ],
//   BA_PERIOD: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '1个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '2个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '3个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '4个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '5个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '6个月',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '45天',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '12个月',
//     },
//   ],
//   AREA_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '一线城市',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '二线城市',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '三线城市',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '04',
//       CODE_NAME: '四线城市',
//     },
//   ],
//   BALAD_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   WP_USER_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'V',
//       CODE_NAME: '休假',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'O',
//       CODE_NAME: '正常',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'D',
//       CODE_NAME: '离职',
//     },
//   ],
//   FM_FS_PAYOUT_PAY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '电汇',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '支票',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '线下支付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '04',
//       CODE_NAME: '银行代扣',
//     },
//   ],
//   ROLL_CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '非滚动',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '滚动',
//     },
//   ],
//   WF_OPT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '同意',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不同意',
//     },
//   ],
//   YEAR_CO_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不结转',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '结转',
//     },
//   ],
//   BUDGET_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不控制',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '刚性控制',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '弹性控制',
//     },
//   ],
//   FS_BUDGET_PREPAY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   WP_FSC_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '集团共享中心',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '共享中心',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '共享中心组',
//     },
//   ],
//   FM_FS_PAYOUT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '审核中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '待执行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '执行中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '执行完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '疑似重复',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '失败搁置',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '不明搁置',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z',
//       CODE_NAME: '放弃支付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'V',
//       CODE_NAME: '待初审',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '待复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'K',
//       CODE_NAME: '待记账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'F',
//       CODE_NAME: '待选票',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '提交中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P',
//       CODE_NAME: '已出款确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'D',
//       CODE_NAME: '已记账',
//     },
//   ],
//   VE_ELEMENT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '凭证头',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '凭证分录',
//     },
//   ],
//   AD_ACTIVE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Y',
//       CODE_NAME: '启用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '停用',
//     },
//   ],
//   AUDIT_DATE_PERIOD: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '超过3天',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '超过10天',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '超过5天',
//     },
//   ],
//   BD_ADJUST_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '待生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//   ],
//   AR_DATA_LIST_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未清分',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '已清分',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '未记账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '记账成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '记账失败',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '记账中',
//     },
//   ],
//   WP_HIGH_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '趋低',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '趋高',
//     },
//   ],
//   WRITE_OFF_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '不需清账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '待清账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '清账中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '清账成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P',
//       CODE_NAME: '部分清账成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '清账失败',
//     },
//   ],
//   EC_ACCRUAL_ORIGIN: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '分摊明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '订单明细',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '报账明细',
//     },
//   ],
//   VE_REVERSE_BOOK_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   FSC_DISTRICT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '一类地区',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '二类地区',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '三类地区',
//     },
//   ],
//   YEAR_CO_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不结转',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '结转',
//     },
//   ],
//   PAY_ABLE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '800801',
//       CODE_NAME: '其它应付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '800802',
//       CODE_NAME: '其它应付-印花税',
//     },
//   ],
//   FSC_CM_AUTH_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '单位内',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '部门内',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '个人',
//     },
//   ],
//   READ_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'T',
//       CODE_NAME: '弹出',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '正常',
//     },
//   ],
//   ACCOUNT_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '收支户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '收入户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '支出户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '银票资金户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '银票台账户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '中心户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '信用卡户',
//     },
//   ],
//   SYS_MD_SCORE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '加分',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '减分',
//     },
//   ],
//   TOTAL_CTRL_RULE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '指定级项目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '其上级项目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '自身',
//     },
//   ],
//   BANK_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '银行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '第三方支付',
//     },
//   ],
//   CM_ALTER_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '原有',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '新增',
//     },
//   ],
//   RESET_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Y',
//       CODE_NAME: '是',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '否',
//     },
//   ],
//   DATE_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '报账日期',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '业务日期',
//     },
//   ],
//   FS_BUDGET_CTRL_DATA_FROM: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '报账数据',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '新增录入',
//     },
//   ],
//   CM_CONTRACT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '已关闭',
//     },
//   ],
//   BD_FORECAST_TURNOVER_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//   ],
//   RC_FLOW_CONFIGURATION_NAME: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '填单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '审核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '财务初审',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '04',
//       CODE_NAME: '财务复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '05',
//       CODE_NAME: '查看',
//     },
//   ],
//   SYS_MD_BANK_TAKE_EFFECT: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已注销',
//     },
//   ],
//   ADD_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   WP_DISPATCH_ADJUST_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '重新指派人',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '回单据池分配',
//     },
//   ],
//   JX_QQC_STAGE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '初审',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '全阶段',
//     },
//   ],
//   YN_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   WP_USING_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '启用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '停用',
//     },
//   ],
//   WP_DISPATCH_ATTR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '抢单',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '自动派单',
//     },
//   ],
//   SYS_ECKIND_ECTYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '普通报账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '发票后到',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '发票已到',
//     },
//   ],
//   IS_BUDGET_CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   EC_INVOICE_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '普通',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '专票',
//     },
//   ],
//   FM_FS_PAYOUT_GET_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '新增录入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '报账数据',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '请款数据',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '拆分单据',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '退汇单据',
//     },
//   ],
//   FSC_EC_PCCAR_MILEAGE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '<=5000KM',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '>5000KM',
//     },
//   ],
//   BALAD_PERIOD_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   FM_FS_PAYOUT_CLR_CHANNEL: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ACH',
//       CODE_NAME: '普通',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'RTGS',
//       CODE_NAME: '加急',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'TT',
//       CODE_NAME: '跨境',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'BOOK',
//       CODE_NAME: '同行',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'RTGS',
//       CODE_NAME: '账单付款',
//     },
//   ],
//   DETAIN_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '撤柜',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '欠费',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '法律纠纷',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '其他',
//     },
//   ],
//   BUDGET_EXPENSE_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '撤回提交',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已提交待确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '已确认待汇总',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '已汇总待提交',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '待生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'F',
//       CODE_NAME: '已冻结',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '退回',
//     },
//   ],
//   ATTR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '国家',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '省/直辖市',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '地市',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '区县',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '乡镇',
//     },
//   ],
//   AR_DATA_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '销售货款收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '银行利息收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '废品废料收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '04',
//       CODE_NAME: '保险理赔收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '05',
//       CODE_NAME: '代垫费用收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '06',
//       CODE_NAME: '租赁业务收入',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '07',
//       CODE_NAME: '政府补贴收入',
//     },
//   ],
//   FM_FS_PAYOUT_DOWNLOAD_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未导出',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '已导出',
//     },
//   ],
//   FM_FS_PAYOUT_PURPOSE_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: 'TT',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: 'DD',
//     },
//   ],
//   SYS_MASK_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '跳转',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '弹出',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '侧滑',
//     },
//   ],
//   FSC_BOOK_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '资产号',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'G',
//       CODE_NAME: '会计科目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'V',
//       CODE_NAME: '供应商',
//     },
//   ],
//   EC_AFASL_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z000',
//       CODE_NAME: 'Z000',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ZHS0',
//       CODE_NAME: 'ZHS0',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ZHS1',
//       CODE_NAME: 'ZHS1',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ZHS2',
//       CODE_NAME: 'ZHS2',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ZHS3',
//       CODE_NAME: 'ZHS3',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ZHS5',
//       CODE_NAME: 'ZHS5',
//     },
//   ],
//   SYS_ECKIND_INOUT_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '支出',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '收入',
//     },
//   ],
//   VE_SGL_ACCOUNT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'G',
//       CODE_NAME: '总账科目',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'K',
//       CODE_NAME: '客户',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'V',
//       CODE_NAME: '供应商',
//     },
//   ],
//   SYS_SM_BULLETIN_CLASSFYFLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '业务公告',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '系统公告',
//     },
//   ],
//   BALAD_DEPT_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   FSC_PJ_PROJECT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有批文号',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '事项活动',
//     },
//   ],
//   FSC_VE_ACCOUNT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '费用类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '非费用类',
//     },
//   ],
//   FEE_CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//   ],
//   USER_MODIFY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Y',
//       CODE_NAME: '可维护',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '不可维护',
//     },
//   ],
//   FSC_CT_CREDITGRAGE_STATE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '初始',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '无效',
//     },
//   ],
//   FSC_INV_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '普票',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '专票',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '电子发票',
//     },
//   ],
//   FM_FS_PAYOUT_CHARGE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'SHAR',
//       CODE_NAME: '双方承担',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'DEBT',
//       CODE_NAME: '付方承担',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CRED',
//       CODE_NAME: '收方承担',
//     },
//   ],
//   IN_OUT_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '支出',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '收入',
//     },
//   ],
//   SYS_RC_GROUP_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CLAIM',
//       CODE_NAME: '报账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'PROJECT',
//       CODE_NAME: '立项',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CONTRACT',
//       CODE_NAME: '合同',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'APPLY',
//       CODE_NAME: '申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'BUDGET',
//       CODE_NAME: '预算',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ARREAR',
//       CODE_NAME: '欠付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'FSPAYOUT',
//       CODE_NAME: '资金',
//     },
//   ],
//   USER_EXTEND_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Y',
//       CODE_NAME: '可扩展',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '不可扩展',
//     },
//   ],
//   FSC_BD_ENTITY_CLASSIFY_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '自建',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '组织表导入',
//     },
//   ],
//   FORECAST_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '无',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '海信专用',
//     },
//   ],
//   CO_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不结转',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '结转',
//     },
//   ],
//   FM_FS_PAYOUT_REASON_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '工资发放',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '报销',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '额外补助',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '供应商付款',
//     },
//   ],
//   PUR_TYPE_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '招标',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '竞争性谈判',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '邀标',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '13',
//       CODE_NAME: '单一来源',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '14',
//       CODE_NAME: '询价',
//     },
//   ],
//   AR_AUTO_MATCH_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '未识别',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '系统识别',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '人工识别',
//     },
//   ],
//   WP_DISPATCH_SHEET_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '调整收回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '未处理',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '处理中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '处理完成',
//     },
//   ],
//   WP_RULE_PRIORTY: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '最高',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '最低',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '低',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '高',
//     },
//   ],
//   test0423: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'test',
//       CODE_NAME: '测试',
//     },
//   ],
//   SYS_ECKIND_BUSINESS_ATTR: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '普通费用类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '员工借款类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '预付款类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '普通收入类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '员工还款类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '13',
//       CODE_NAME: '预收款类',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '20',
//       CODE_NAME: '资产类',
//     },
//   ],
//   FSC_FINANCE_FIPAY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '退款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '付款核销',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '其他',
//     },
//   ],
//   BD_ADJUST_ORG_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '跨预算公司',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '同预算公司内',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '同预算部门',
//     },
//   ],
//   PJ_RESP_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '总部承担',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '本公司承担',
//     },
//   ],
//   VARIABLE_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '总费用率',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '指定级费用率',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '末级费用率',
//     },
//   ],
//   ECCLAIM_PAYMENT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '发票先到',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '发票后到',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '无发票',
//     },
//   ],
//   ECLOAN_BUSINESS_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '66660201',
//       CODE_NAME: '备用金借款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '66660202',
//       CODE_NAME: '差旅借款',
//     },
//   ],
//   BUDGET_FORECAST_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '已审批',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//   ],
//   CHECK_METHOD: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '随机',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'H',
//       CODE_NAME: '手动',
//     },
//   ],
//   SYS_LANGUAGE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'zh_CN',
//       CODE_NAME: '中文',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'en_US',
//       CODE_NAME: '英文',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ja_JP',
//       CODE_NAME: '日文',
//     },
//   ],
//   DIMENSION_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '没有',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有',
//     },
//   ],
//   BD_ADJUST_PROFITCENTER_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '跨利润中心',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '同利润中心',
//     },
//   ],
//   FSC_CM_PROJ_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '无立项',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '有立项',
//     },
//   ],
//   SYS_MD_ENTITY_BD_UNIT_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '集团',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '预算公司',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '预算部门',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '汇总组织',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '非预算组织',
//     },
//   ],
//   FSC_BUDGET_YEAR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '年度预算',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '期间预测',
//     },
//   ],
//   BALAD_ITEM_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   BC_VALUE_RANGE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '全部',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '正数',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '负数',
//     },
//   ],
//   FM_FS_PAYOUT_EXCHANGE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'SPOT',
//       CODE_NAME: 'SPOT',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'AGRD',
//       CODE_NAME: 'AGRD',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'SALE',
//       CODE_NAME: 'SALE',
//     },
//   ],
//   JX_PLAN_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '启动评估',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '暂停',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '完成',
//     },
//   ],
//   FM_GET_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '导入',
//     },
//   ],
//   FSC_PJ_YEAR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Y',
//       CODE_NAME: '跨年',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '不跨年',
//     },
//   ],
//   PJ_PROJECT_APPLY_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '终止',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '影像确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'M',
//       CODE_NAME: '待确认',
//     },
//   ],
//   EA_OPT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '变更',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '终止',
//     },
//   ],
//   AR_RESP_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '供应商',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '客户',
//     },
//   ],
//   FM_FS_PAYOUT_LCTNMTD_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'FAX',
//       CODE_NAME: 'FAX',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Email',
//       CODE_NAME: 'Email',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'POST',
//       CODE_NAME: 'POST',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'EDIC',
//       CODE_NAME: 'EDIC',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'URID',
//       CODE_NAME: 'URID',
//     },
//   ],
//   RC_FLOW_CONFIGURATION_APPCODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: 'FSC',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: 'FM',
//     },
//   ],
//   FSC_PAYMENT_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '发票先到',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '发票后到',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '无发票',
//     },
//   ],
//   INVOICE_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '待认证',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '认证成功',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '认证失败',
//     },
//   ],
//   ACTUAL_ENTER_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '生效',
//     },
//   ],
//   PJ_PROJECT_EFFECT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '已禁用',
//     },
//   ],
//   SYS_ECKIND_VOUCHER_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '不记账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '手动记账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '自动记账',
//     },
//   ],
//   FSC_FINANCE_FIADVPAY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '还款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '报销核销',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '03',
//       CODE_NAME: '其他',
//     },
//   ],
//   INV_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '增值税发票',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '普通发票',
//     },
//   ],
//   EA_DETAIN_APPLY_STATUS_FLAG0: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'I',
//       CODE_NAME: '修改中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//   ],
//   BD_TURNOVER_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '审批完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'F',
//       CODE_NAME: '已冻结',
//     },
//   ],
//   PAY_REASON_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '工资发放',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '供应商付款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '额外补助',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '报销',
//     },
//   ],
//   EA_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新建',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'I',
//       CODE_NAME: '审批预定',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//   ],
//   FSC_DM_DOC_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CLAIM',
//       CODE_NAME: '报账单',
//     },
//   ],
//   EC_DETAIL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Drayage',
//       CODE_NAME: 'Drayage',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Pier pass',
//       CODE_NAME: 'Pier pass',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Night gate',
//       CODE_NAME: 'Night gate',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Chassis fee',
//       CODE_NAME: 'Chassis fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Initial storage fee',
//       CODE_NAME: 'Initial storage fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Pre-pull',
//       CODE_NAME: 'Pre-pull',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Chassis split fee',
//       CODE_NAME: 'Chassis split fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Demurrage fee',
//       CODE_NAME: 'Demurrage fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Port congestion fee',
//       CODE_NAME: 'Port congestion fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Waiting time',
//       CODE_NAME: 'Waiting time',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Per diem',
//       CODE_NAME: 'Per diem',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Exam fee',
//       CODE_NAME: 'Exam fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Segregation fee',
//       CODE_NAME: 'Segregation fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Detention fee',
//       CODE_NAME: 'Detention fee',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Inbound handling',
//       CODE_NAME: 'Inbound handling',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ISF+Custom clearance',
//       CODE_NAME: 'ISF+Custom clearance',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Stretch wrapping',
//       CODE_NAME: 'Stretch wrapping',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Corner board',
//       CODE_NAME: 'Corner board',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Storage',
//       CODE_NAME: 'Storage',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Pallet',
//       CODE_NAME: 'Pallet',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Outbound handling',
//       CODE_NAME: 'Outbound handling',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'BOL',
//       CODE_NAME: 'BOL',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Labeling',
//       CODE_NAME: 'Labeling',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Label scan',
//       CODE_NAME: 'Label scan',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Transportation',
//       CODE_NAME: 'Transportation',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Overtime',
//       CODE_NAME: 'Overtime',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Other',
//       CODE_NAME: 'Other',
//     },
//   ],
//   SYS_MD_MDFAXTATE_SAPTAXTYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '01',
//       CODE_NAME: '浮动税率',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '02',
//       CODE_NAME: '固定税率',
//     },
//   ],
//   FSC_PJ_BUDGET_CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不受控',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '受控',
//     },
//   ],
//   AR_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '关闭',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '审批中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'X',
//       CODE_NAME: '作废',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'M',
//       CODE_NAME: '待确认',
//     },
//   ],
//   RULE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'A',
//       CODE_NAME: '固定字符串',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'D',
//       CODE_NAME: '日期',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'Z',
//       CODE_NAME: '流水号',
//     },
//   ],
//   AR_DATA_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '待匹配',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '待清分',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已清分待提交',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '待确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '待初审',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '待复核',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '记账中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'R',
//       CODE_NAME: '退回',
//     },
//   ],
//   WP_USER_AUTO_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   RETURN_STYLE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '现金',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '银联',
//     },
//   ],
//   FM_FS_PAYOUT_DELVY_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'MLDB',
//       CODE_NAME: '邮寄给收款方',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'MLCD',
//       CODE_NAME: '邮寄给付款方',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CRDB',
//       CODE_NAME: '快递付款方',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'CRCD',
//       CODE_NAME: '快递收款方',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'PUDB',
//       CODE_NAME: '付款方自取',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'PUCD',
//       CODE_NAME: '收款方自取',
//     },
//   ],
//   FM_FS_PAYOUT_BUSINESS_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '11',
//       CODE_NAME: '对外付款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '12',
//       CODE_NAME: '内部结算',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '13',
//       CODE_NAME: '资金调剂',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '21',
//       CODE_NAME: '员工付款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '22',
//       CODE_NAME: '工资付款',
//     },
//   ],
//   VE_ATTR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '单行分录',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '循环分录',
//     },
//   ],
//   CTRL_PERIOD_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '年',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '半年',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '季度',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '月',
//     },
//   ],
//   BANK_INTERFACE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '无接口',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '国内接口',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '境外接口',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '境内外接口',
//     },
//   ],
//   SYS_CT_EVENT_MODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '自动事件',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '手动事件',
//     },
//   ],
//   SM_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '未发布',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '已发布',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '取消',
//     },
//   ],
//   EC_PAY_CTRL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '合同',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '申请',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '不控制',
//     },
//   ],
//   CM_CONTRACT_EFFECT_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'E',
//       CODE_NAME: '已生效',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'S',
//       CODE_NAME: '已禁用',
//     },
//   ],
//   SYS_CT_EVALUATE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '年度',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '半年',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '季度',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '月度',
//     },
//   ],
//   LOAN_CTRL_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不控制',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '控制',
//     },
//   ],
//   VE_DATA_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'D',
//       CODE_NAME: '日期',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'T',
//       CODE_NAME: '文本',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'N',
//       CODE_NAME: '数字',
//     },
//   ],
//   MD_PARTNER_ATTR_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '集团外供应商',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '集团进出口供应商',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '集团关联方供应商',
//     },
//   ],
//   EC_ACCRUAL_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '预提',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '待摊',
//     },
//   ],
//   ROLL_TERM_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '年度内滚动',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '半年内滚动',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '季度内滚动',
//     },
//   ],
//   BD_ADJUST_PERIOD_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '跨期间',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '同期间',
//     },
//   ],
//   FSC_DM_BILL_FLOW_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '邮寄中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '签收中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '退回新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '5',
//       CODE_NAME: '退回中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '6',
//       CODE_NAME: '退回签收中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '7',
//       CODE_NAME: '退回已签收',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '已完成',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'B',
//       CODE_NAME: '审核不通过',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'P',
//       CODE_NAME: '审核通过',
//     },
//   ],
//   EC_KIND_BUSINESS_ATTR: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '10',
//       CODE_NAME: '员工费用',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '20',
//       CODE_NAME: '广告费',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '30',
//       CODE_NAME: '物流费',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '40',
//       CODE_NAME: '工资、保险、公积金',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '50',
//       CODE_NAME: '固定资产',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '60',
//       CODE_NAME: '在建工程',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '80',
//       CODE_NAME: '其他',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '90',
//       CODE_NAME: '总账',
//     },
//   ],
//   IS_BUDGET_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '否',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '是',
//     },
//   ],
//   FM_FS_PAYOUT_ABLE_TYPE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '800801',
//       CODE_NAME: '其它应付',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '800802',
//       CODE_NAME: '其它应付-印花税',
//     },
//   ],
//   FM_FS_PAYOUT_CLR_CHANNEL_MODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'TT',
//       CODE_NAME: '跨境转账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'ACH',
//       CODE_NAME: '普通付款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'RTGS',
//       CODE_NAME: '加急付款',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'BOOK',
//       CODE_NAME: '同行转账',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'BILL',
//       CODE_NAME: '账单付款',
//     },
//   ],
//   WP_USER_GRAB_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '不允许',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '允许',
//     },
//   ],
//   METHOD_FLAG_CODE: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '常量',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '4',
//       CODE_NAME: '自主选择',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '取转换函数值',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '规则因子',
//     },
//   ],
//   JX_QQC_STATUS_FLAG: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '3',
//       CODE_NAME: '待确认',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '0',
//       CODE_NAME: '退回',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '新增',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '2',
//       CODE_NAME: '抽检中',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '9',
//       CODE_NAME: '抽检完成',
//     },
//   ],
//   USER_INFO_STATUS: [
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: '1',
//       CODE_NAME: '正常',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'F',
//       CODE_NAME: '冻结',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'C',
//       CODE_NAME: '注销',
//     },
//     {
//       LANGUAGE_CODE: 'zh_CN',
//       CODE_VALUE: 'L',
//       CODE_NAME: '锁定',
//     },
//   ],
// };

// export function getCodeList(req, resp) {
//   writeOk(resp, codeList);
// }

// export function findCodeByCode(req, resp) {
//   const { body, query, headers, url } = req;
//   const { listCode } = { ...body, ...query };
//   if (!listCode) writeOk(resp, {});
//   const codelist = codeList[listCode];
//   writeOk(resp, codelist);
// }
