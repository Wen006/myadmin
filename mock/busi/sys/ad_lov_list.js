
import { getMockPre,Base64,writeOk, writeJson, ModuleReturn } from '../../mock.util'

const codeList = {
    "ECCLAIM_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "财务初审"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "待制证"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "待复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "待记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "记账中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P",
            "codeName": "支付中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "待支付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "I",
            "codeName": "影像退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "影像确认"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "财务签收"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "R",
            "codeName": "待稽核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "M",
            "codeName": "待确认"
        }
    ],
    "BC_EC_KIND_APPLY": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "201",
            "codeName": "资产采购申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "202",
            "codeName": "出差申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "203",
            "codeName": "其他对公费用申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "211",
            "codeName": "资产采购申请变更"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "221",
            "codeName": "资产采购申请终止"
        }
    ],
    "COMMON_Y_N": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "EC_SETTLE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "普通报账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "内部垫付"
        }
    ],
    "MD_PARTNER_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "供应商"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "员工"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "客户"
        }
    ],
    "BC_FIELD_REGION": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "主表信息"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "20",
            "codeName": "单据明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "21",
            "codeName": "其他明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "30",
            "codeName": "发票明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "40",
            "codeName": "核销明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "50",
            "codeName": "押款明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "60",
            "codeName": "扣款明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "90",
            "codeName": "支付明细"
        }
    ],
    "FM_FS_PAYWAGE_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "待审核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "待支付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "支付中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "支付完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "疑似重复"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "失败搁置"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "不明搁置"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "退回完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "另单支付"
        }
    ],
    "FSC_BD_UNIT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未打开"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "已打开"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已关闭"
        }
    ],
    "SYS_MD_ENTITY_CLASSIFY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "集团"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "公司"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "汇总管理组织"
        }
    ],
    "FSC_OPT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "变更"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "关闭"
        }
    ],
    "USING_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "启用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "停用"
        }
    ],
    "FSC_BD_ENTITY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "预算公司"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "预算部门"
        }
    ],
    "SYS_MD_ENTITY_FU_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "SCGLBM",
            "codeName": "生产管理部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "SCFZBM",
            "codeName": "生产辅助部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP05_SYS",
            "codeName": "采购部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP03_SYS",
            "codeName": "销售部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP07_SYS",
            "codeName": "劳务部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP06_SYS",
            "codeName": "研发部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP02_SYS",
            "codeName": "管理部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP01_SYS",
            "codeName": "基本生产部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DP04_SYS",
            "codeName": "辅助生产部门"
        }
    ],
    "EC_REC_SETTLE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "是"
        }
    ],
    "ACTION_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "(countersign)complete",
            "codeName": "(会签)通过"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "(countersign)submit",
            "codeName": "(会签)提交"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "(countersign)transfer",
            "codeName": "(会签)转办"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "addsign",
            "codeName": "加签"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "complete",
            "codeName": "通过"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "connect",
            "codeName": "沟通"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "rollback",
            "codeName": "驳回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "submit",
            "codeName": "提交"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "transfer",
            "codeName": "转办"
        }
    ],
    "PJ_PROJECT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "终止"
        }
    ],
    "WP_EXP_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "普通表达式"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "函数"
        }
    ],
    "WP_FSC_MODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "地域"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "流程"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "产品"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "职能"
        }
    ],
    "FM_PAYBACK_PERIOD_TYPE": [],
    "FSC_BUDGET_ADJUST_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "平衡调整"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "调增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "调减"
        }
    ],
    "BUDGET_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "固定"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "变动"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "资产"
        }
    ],
    "PERSONAL_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "总额控制"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "先进先出控制"
        }
    ],
    "FSC_BD_APPLY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "已启用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "已禁用"
        }
    ],
    "CLASSIFY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "管理组织"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "核算实体"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "核算部门"
        }
    ],
    "FM_BI_PAY_VOUCHER_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未创建"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "创建中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已创建"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "记账成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "记账中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "记账失败"
        }
    ],
    "MINUS_CO_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不结转"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "结转"
        }
    ],
    "VE_FI_DV_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "借"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "H",
            "codeName": "贷"
        }
    ],
    "MD_ENTITY_BLOCK": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z01",
            "codeName": "上市版块"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z02",
            "codeName": "非上市版块"
        }
    ],
    "TOTAL_CTRL_LEVEL": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "一级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "二级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "三级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "四级"
        }
    ],
    "SYS_MD_LAST_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "非末级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是末级"
        }
    ],
    "BD_PERIOD_INIT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "年度+半年"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "年度+季度"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "年度+月度"
        }
    ],
    "SYS_MD_ENTITY_HEAD_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "非总部"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "总部"
        }
    ],
    "EC_BASE_UNIT": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P.",
            "codeName": "P."
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C.",
            "codeName": "C."
        }
    ],
    "WIDGET_TYPE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "T",
            "codeName": "输入框"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P",
            "codeName": "弹出框"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "L",
            "codeName": "下拉框"
        }
    ],
    "FSC_DM_BILL_FLOW_ACTION": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "发送"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "R",
            "codeName": "签收"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "审单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "新增退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "退回中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "G",
            "codeName": "退回签收"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "归档"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "审核不通过"
        }
    ],
    "FM_FS_PAYOUT_TRADE_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "未执行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "失败"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "不明"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "8",
            "codeName": "部分成功部分失败"
        }
    ],
    "CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不控制"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "控制"
        }
    ],
    "VARIABLE_CTRL_LEVEL": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "一级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "二级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "三级"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "四级"
        }
    ],
    "BD_ADJUST_ITEM_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "跨一级项目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "同一级项目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "同末级项目"
        }
    ],
    "EC_TRADE_RESULT": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未支付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "支付完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "放弃支付"
        }
    ],
    "DE_DUCE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "FM_FS_PAYWAGE_TRADE_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "未执行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "失败"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "不明"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "8",
            "codeName": "部分成功部分失败"
        }
    ],
    "CM_PUR_TYPE_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "招标"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "竞争性谈判"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "邀标"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "13",
            "codeName": "单一来源"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "14",
            "codeName": "询价"
        }
    ],
    "SYS_ECKIND_BUDGET_NODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "报账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "不执行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "30",
            "codeName": "发票明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "40",
            "codeName": "核销明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "50",
            "codeName": "押款明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "60",
            "codeName": "扣款明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "90",
            "codeName": "支付明细"
        }
    ],
    "SYS_CT_CREDIT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        }
    ],
    "FS_BUDGET_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "待复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "未生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "已生效"
        }
    ],
    "ONLINE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "线下"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "线上"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "核算部门"
        }
    ],
    "FS_BUDGET_MONTH": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "1月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "2月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "3月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "4月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "5月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "6月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "7月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "8",
            "codeName": "8月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "9月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "10月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "11月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "12月"
        }
    ],
    "SYS_CT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "初始"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "无效"
        }
    ],
    "AR_WRITE_OFF_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "无红冲"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "待红冲"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "红冲中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已红冲"
        }
    ],
    "VE_ACCOUNT_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "OL",
            "codeName": "OL"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "AL",
            "codeName": "AL"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "YL",
            "codeName": "YL"
        },
        {
            "LANGUAGE_CODE": "zh_CN"
        }
    ],
    "EC_CLAIM_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "20",
            "codeName": "通用报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "一般员工差旅报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "21",
            "codeName": "业务招待报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "40",
            "codeName": "借款报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "41",
            "codeName": "还款报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "30",
            "codeName": "对公费用报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "31",
            "codeName": "对公事项报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "32",
            "codeName": "对公合同报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "33",
            "codeName": "原材料报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "90",
            "codeName": "付款报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "营销外勤差旅报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "23",
            "codeName": "差旅标准申请单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "22",
            "codeName": "资产申请单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "24",
            "codeName": "对公费用事前申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "89",
            "codeName": "应付付款单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "60",
            "codeName": "对公欠付报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "15",
            "codeName": "通讯费报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "404",
            "codeName": "预提待摊"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "618",
            "codeName": "私车公用报账单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "67",
            "codeName": "营业外支出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "35",
            "codeName": "资产采购报账"
        }
    ],
    "FSC_CLAIM_PAYMENT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "原材料"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "费用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "其它"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "现采"
        }
    ],
    "SYS_ECKIND_APPLY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不需要申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "需要申请"
        }
    ],
    "BA_PERIOD": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "1个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "2个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "3个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "4个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "5个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "6个月"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "45天"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "12个月"
        }
    ],
    "AREA_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "一线城市"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "二线城市"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "三线城市"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "04",
            "codeName": "四线城市"
        }
    ],
    "BALAD_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "SM_SCOPE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "公司+角色"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "公司"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "角色"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "用户"
        }
    ],
    "WP_USER_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "V",
            "codeName": "休假"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "O",
            "codeName": "正常"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "D",
            "codeName": "离职"
        }
    ],
    "FM_FS_PAYOUT_PAY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "电汇"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "支票"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "线下支付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "04",
            "codeName": "银行代扣"
        }
    ],
    "ROLL_CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "非滚动"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "滚动"
        }
    ],
    "WF_OPT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "同意"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不同意"
        }
    ],
    "YEAR_CO_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不结转"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "结转"
        }
    ],
    "BUDGET_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不控制"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "刚性控制"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "弹性控制"
        }
    ],
    "FS_BUDGET_PREPAY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "WP_FSC_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "集团共享中心"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "共享中心"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "共享中心组"
        }
    ],
    "FM_FS_PAYOUT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "审核中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "待执行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "执行中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "执行完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "疑似重复"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "失败搁置"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "不明搁置"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "放弃支付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "V",
            "codeName": "待初审"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "待复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "K",
            "codeName": "待记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "F",
            "codeName": "待选票"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "提交中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P",
            "codeName": "已出款确认"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "D",
            "codeName": "已记账"
        }
    ],
    "VE_ELEMENT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "凭证头"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "凭证分录"
        }
    ],
    "AD_ACTIVE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Y",
            "codeName": "启用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "停用"
        }
    ],
    "AUDIT_DATE_PERIOD": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "超过3天"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "超过10天"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "超过5天"
        }
    ],
    "BD_ADJUST_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "待生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        }
    ],
    "AR_DATA_LIST_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未清分"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "已清分"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "未记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "记账成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "记账失败"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "记账中"
        }
    ],
    "ABCDEFG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "0"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "1"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "2"
        }
    ],
    "WP_HIGH_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "趋低"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "趋高"
        }
    ],
    "WRITE_OFF_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "不需清账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "待清账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "清账中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "清账成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P",
            "codeName": "部分清账成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "清账失败"
        }
    ],
    "EC_ACCRUAL_ORIGIN": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "分摊明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "订单明细"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "报账明细"
        }
    ],
    "VE_REVERSE_BOOK_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "FSC_DISTRICT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "一类地区"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "二类地区"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "三类地区"
        }
    ],
    "YEAR_CO_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不结转"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "结转"
        }
    ],
    "PAY_ABLE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "800801",
            "codeName": "其它应付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "800802",
            "codeName": "其它应付-印花税"
        }
    ],
    "FSC_CM_AUTH_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "单位内"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "部门内"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "个人"
        }
    ],
    "READ_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "T",
            "codeName": "弹出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "正常"
        }
    ],
    "ACCOUNT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "收支户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "收入户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "支出户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "银票资金户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "银票台账户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "信用卡户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "中心户"
        }
    ],
    "SYS_MD_SCORE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "加分"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "减分"
        }
    ],
    "TOTAL_CTRL_RULE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "指定级项目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "其上级项目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "自身"
        }
    ],
    "BANK_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "银行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "第三方支付"
        }
    ],
    "CM_ALTER_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "原有"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "新增"
        }
    ],
    "RESET_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Y",
            "codeName": "是"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "否"
        }
    ],
    "DATE_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "报账日期"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "业务日期"
        }
    ],
    "FS_BUDGET_CTRL_DATA_FROM": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "报账数据"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "新增录入"
        }
    ],
    "CM_CONTRACT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "已关闭"
        }
    ],
    "BD_FORECAST_TURNOVER_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        }
    ],
    "RC_FLOW_CONFIGURATION_NAME": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "填单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "审核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "财务初审"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "04",
            "codeName": "财务复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "05",
            "codeName": "查看"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "填单(月末预提专用)"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "06",
            "codeName": "共享中心审批"
        }
    ],
    "SYS_MD_BANK_TAKE_EFFECT": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已注销"
        }
    ],
    "ADD_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "WP_DISPATCH_ADJUST_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "重新指派人"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "回单据池分配"
        }
    ],
    "JX_QQC_STAGE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "初审"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "全阶段"
        }
    ],
    "YN_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "WP_USING_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "启用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "停用"
        }
    ],
    "WP_DISPATCH_ATTR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "抢单"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "自动派单"
        }
    ],
    "FM_BI_PAY_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "发送中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "发送成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "发送失败"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "发送不明"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "支付成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "8",
            "codeName": "部分成功部分失败"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "放弃支付"
        }
    ],
    "SYS_ECKIND_ECTYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "普通报账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "发票后到"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "发票已到"
        }
    ],
    "IS_BUDGET_CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "EC_INVOICE_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "普通"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "专票"
        }
    ],
    "FM_FS_PAYOUT_GET_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增录入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "报账数据"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "请款数据"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "拆分单据"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "退汇单据"
        }
    ],
    "IMAGE_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "影像驳回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已扫描"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "待扫描"
        }
    ],
    "FSC_EC_PCCAR_MILEAGE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "<=5000KM"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": ">5000KM"
        }
    ],
    "BALAD_PERIOD_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "FM_FS_PAYOUT_CLR_CHANNEL": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ACH",
            "codeName": "普通"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "RTGS",
            "codeName": "加急"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "TT",
            "codeName": "跨境"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "BOOK",
            "codeName": "同行"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "RTGS",
            "codeName": "账单付款"
        }
    ],
    "DETAIN_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "撤柜"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "欠费"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "法律纠纷"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "其他"
        }
    ],
    "BUDGET_EXPENSE_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "撤回提交"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已提交待确认"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "已确认待汇总"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "已汇总待提交"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "待生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "F",
            "codeName": "已冻结"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "退回"
        }
    ],
    "ATTR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "国家"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "省/直辖市"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "地市"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "区县"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "乡镇"
        }
    ],
    "AR_DATA_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "销售货款收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "银行利息收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "废品废料收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "04",
            "codeName": "保险理赔收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "05",
            "codeName": "代垫费用收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "06",
            "codeName": "租赁业务收入"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "07",
            "codeName": "政府补贴收入"
        }
    ],
    "FM_FS_PAYOUT_DOWNLOAD_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未导出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "已导出"
        }
    ],
    "FM_FS_PAYOUT_PURPOSE_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "TT"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "DD"
        }
    ],
    "SYS_MASK_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "跳转"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "弹出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "侧滑"
        }
    ],
    "FSC_BOOK_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "资产号"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "G",
            "codeName": "会计科目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "V",
            "codeName": "供应商"
        }
    ],
    "EC_AFASL_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z000",
            "codeName": "Z000"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ZHS0",
            "codeName": "ZHS0"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ZHS1",
            "codeName": "ZHS1"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ZHS2",
            "codeName": "ZHS2"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ZHS3",
            "codeName": "ZHS3"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ZHS5",
            "codeName": "ZHS5"
        }
    ],
    "SYS_ECKIND_INOUT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "支出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "收入"
        }
    ],
    "VE_SGL_ACCOUNT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "G",
            "codeName": "总账科目"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "K",
            "codeName": "客户"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "V",
            "codeName": "供应商"
        }
    ],
    "BC_FIELD_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "扩展项"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "固定项"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "自定义项"
        }
    ],
    "SYS_SM_BULLETIN_CLASSFYFLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "业务公告"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "系统公告"
        }
    ],
    "BALAD_DEPT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "FSC_PJ_PROJECT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有批文号"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "事项活动"
        }
    ],
    "FSC_VE_ACCOUNT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "费用类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "非费用类"
        }
    ],
    "FEE_CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        }
    ],
    "USER_MODIFY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Y",
            "codeName": "可维护"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "不可维护"
        }
    ],
    "FSC_CT_CREDITGRAGE_STATE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "初始"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "无效"
        }
    ],
    "FSC_INV_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "普票"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "专票"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "电子发票"
        }
    ],
    "FM_FS_PAYOUT_CHARGE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "SHAR",
            "codeName": "双方承担"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "DEBT",
            "codeName": "付方承担"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CRED",
            "codeName": "收方承担"
        }
    ],
    "IN_OUT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "支出"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "收入"
        }
    ],
    "SYS_RC_GROUP_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CLAIM",
            "codeName": "报账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "PROJECT",
            "codeName": "立项"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CONTRACT",
            "codeName": "合同"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "APPLY",
            "codeName": "申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "BUDGET",
            "codeName": "预算"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ARREAR",
            "codeName": "欠付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "FSPAYOUT",
            "codeName": "资金"
        }
    ],
    "USER_EXTEND_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Y",
            "codeName": "可扩展"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "不可扩展"
        }
    ],
    "FSC_BD_ENTITY_CLASSIFY_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "自建"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "组织表导入"
        }
    ],
    "FORECAST_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "无"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "海信专用"
        }
    ],
    "CO_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不结转"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "结转"
        }
    ],
    "FM_FS_PAYOUT_REASON_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "工资发放"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "报销"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "额外补助"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "供应商付款"
        }
    ],
    "PUR_TYPE_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "招标"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "竞争性谈判"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "邀标"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "13",
            "codeName": "单一来源"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "14",
            "codeName": "询价"
        }
    ],
    "AR_AUTO_MATCH_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "未识别"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "系统识别"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "人工识别"
        }
    ],
    "WP_DISPATCH_SHEET_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "调整收回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "未处理"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "处理中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "处理完成"
        }
    ],
    "WP_RULE_PRIORTY": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "最高"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "最低"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "低"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "高"
        }
    ],
    "test0423": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "test",
            "codeName": "测试"
        }
    ],
    "SYS_ECKIND_BUSINESS_ATTR": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "普通费用类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "员工借款类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "预付款类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "普通收入类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "员工还款类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "13",
            "codeName": "预收款类"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "20",
            "codeName": "资产类"
        }
    ],
    "FSC_FINANCE_FIPAY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "退款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "付款核销"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "其他"
        }
    ],
    "BD_ADJUST_ORG_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "跨预算公司"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "同预算公司内"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "同预算部门"
        }
    ],
    "PJ_RESP_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "总部承担"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "本公司承担"
        }
    ],
    "VARIABLE_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "总费用率"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "指定级费用率"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "末级费用率"
        }
    ],
    "ECCLAIM_PAYMENT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "发票先到"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "发票后到"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "无发票"
        }
    ],
    "ECLOAN_BUSINESS_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "66660201",
            "codeName": "备用金借款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "66660202",
            "codeName": "差旅借款"
        }
    ],
    "BUDGET_FORECAST_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "已审批"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        }
    ],
    "CHECK_METHOD": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "随机"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "H",
            "codeName": "手动"
        }
    ],
    "SYS_LANGUAGE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "zh_CN",
            "codeName": "中文"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "en_US",
            "codeName": "英文"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ja_JP",
            "codeName": "日文"
        }
    ],
    "DIMENSION_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "没有"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有"
        }
    ],
    "BD_ADJUST_PROFITCENTER_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "跨利润中心"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "同利润中心"
        }
    ],
    "FSC_CM_PROJ_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "无立项"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "有立项"
        }
    ],
    "SYS_MD_ENTITY_BD_UNIT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "集团"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "预算公司"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "预算部门"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "汇总组织"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "非预算组织"
        }
    ],
    "FSC_BUDGET_YEAR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "年度预算"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "期间预测"
        }
    ],
    "USER_INFO_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "系统验证"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "LDAP验证"
        }
    ],
    "BALAD_ITEM_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "BC_VALUE_RANGE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "全部"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "正数"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "负数"
        }
    ],
    "FM_FS_PAYOUT_EXCHANGE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "SPOT",
            "codeName": "SPOT"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "AGRD",
            "codeName": "AGRD"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "SALE",
            "codeName": "SALE"
        }
    ],
    "JX_PLAN_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "启动评估"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "暂停"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "完成"
        }
    ],
    "FM_GET_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "导入"
        }
    ],
    "FSC_PJ_YEAR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Y",
            "codeName": "跨年"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "不跨年"
        }
    ],
    "PJ_PROJECT_APPLY_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "终止"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "影像确认"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "M",
            "codeName": "待确认"
        }
    ],
    "EA_OPT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "变更"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "终止"
        }
    ],
    "AR_RESP_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "供应商"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "客户"
        }
    ],
    "FM_FS_PAYOUT_LCTNMTD_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "FAX",
            "codeName": "FAX"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Email",
            "codeName": "Email"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "POST",
            "codeName": "POST"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "EDIC",
            "codeName": "EDIC"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "URID",
            "codeName": "URID"
        }
    ],
    "RC_FLOW_CONFIGURATION_APPCODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "FSC"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "FM"
        }
    ],
    "FSC_PAYMENT_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "发票先到"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "发票后到"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "无发票"
        }
    ],
    "AR_DATA_SYSTEM_ACCOUNT_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "本系统记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "其他系统已记账"
        }
    ],
    "INVOICE_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "待认证"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "认证成功"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "认证失败"
        }
    ],
    "ACTUAL_ENTER_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "生效"
        }
    ],
    "PJ_PROJECT_EFFECT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "已禁用"
        }
    ],
    "SYS_ECKIND_VOUCHER_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "不记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "手动记账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "自动记账"
        }
    ],
    "FSC_FINANCE_FIADVPAY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "还款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "报销核销"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "03",
            "codeName": "其他"
        }
    ],
    "INV_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "增值税发票"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "普通发票"
        }
    ],
    "EA_DETAIN_APPLY_STATUS_FLAG0": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "I",
            "codeName": "修改中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        }
    ],
    "BD_TURNOVER_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "审批完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "F",
            "codeName": "已冻结"
        }
    ],
    "PAY_REASON_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "工资发放"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "供应商付款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "额外补助"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "报销"
        }
    ],
    "EA_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新建"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "I",
            "codeName": "审批预定"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        }
    ],
    "FSC_DM_DOC_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CLAIM",
            "codeName": "报账单"
        }
    ],
    "EC_DETAIL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Drayage",
            "codeName": "Drayage"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Pier pass",
            "codeName": "Pier pass"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Night gate",
            "codeName": "Night gate"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Chassis fee",
            "codeName": "Chassis fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Initial storage fee",
            "codeName": "Initial storage fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Pre-pull",
            "codeName": "Pre-pull"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Chassis split fee",
            "codeName": "Chassis split fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Demurrage fee",
            "codeName": "Demurrage fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Port congestion fee",
            "codeName": "Port congestion fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Waiting time",
            "codeName": "Waiting time"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Per diem",
            "codeName": "Per diem"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Exam fee",
            "codeName": "Exam fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Segregation fee",
            "codeName": "Segregation fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Detention fee",
            "codeName": "Detention fee"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Inbound handling",
            "codeName": "Inbound handling"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ISF+Custom clearance",
            "codeName": "ISF+Custom clearance"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Stretch wrapping",
            "codeName": "Stretch wrapping"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Corner board",
            "codeName": "Corner board"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Storage",
            "codeName": "Storage"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Pallet",
            "codeName": "Pallet"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Outbound handling",
            "codeName": "Outbound handling"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "BOL",
            "codeName": "BOL"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Labeling",
            "codeName": "Labeling"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Label scan",
            "codeName": "Label scan"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Transportation",
            "codeName": "Transportation"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Overtime",
            "codeName": "Overtime"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Other",
            "codeName": "Other"
        }
    ],
    "SYS_MD_MDFAXTATE_SAPTAXTYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "01",
            "codeName": "浮动税率"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "02",
            "codeName": "固定税率"
        }
    ],
    "FSC_PJ_BUDGET_CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不受控"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "受控"
        }
    ],
    "AR_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "关闭"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "审批中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "X",
            "codeName": "作废"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "M",
            "codeName": "待确认"
        }
    ],
    "RULE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "A",
            "codeName": "固定字符串"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "D",
            "codeName": "日期"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "Z",
            "codeName": "流水号"
        }
    ],
    "AR_DATA_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "待匹配"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "待清分"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已清分待提交"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "待审批"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "待初审"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "待复核"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "记账中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "R",
            "codeName": "退回"
        }
    ],
    "WP_USER_AUTO_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "RETURN_STYLE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "现金"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "银联"
        }
    ],
    "FM_FS_PAYOUT_DELVY_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "MLDB",
            "codeName": "邮寄给收款方"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "MLCD",
            "codeName": "邮寄给付款方"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CRDB",
            "codeName": "快递付款方"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "CRCD",
            "codeName": "快递收款方"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "PUDB",
            "codeName": "付款方自取"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "PUCD",
            "codeName": "收款方自取"
        }
    ],
    "FM_FS_PAYOUT_BUSINESS_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "11",
            "codeName": "对外付款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "12",
            "codeName": "内部结算"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "13",
            "codeName": "资金调剂"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "21",
            "codeName": "员工付款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "22",
            "codeName": "工资付款"
        }
    ],
    "VE_ATTR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "单行分录"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "循环分录"
        }
    ],
    "CTRL_PERIOD_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "年"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "半年"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "季度"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "月"
        }
    ],
    "BANK_INTERFACE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "无接口"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "国内接口"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "境外接口"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "境内外接口"
        }
    ],
    "SYS_CT_EVENT_MODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "自动事件"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "手动事件"
        }
    ],
    "SM_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "未发布"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "已发布"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "取消"
        }
    ],
    "EC_PAY_CTRL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "合同"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "申请"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "不控制"
        }
    ],
    "CM_CONTRACT_EFFECT_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "E",
            "codeName": "已生效"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "S",
            "codeName": "已禁用"
        }
    ],
    "SYS_CT_EVALUATE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "年度"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "半年"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "季度"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "月度"
        }
    ],
    "LOAN_CTRL_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不控制"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "控制"
        }
    ],
    "VE_DATA_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "D",
            "codeName": "日期"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "T",
            "codeName": "文本"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "N",
            "codeName": "数字"
        }
    ],
    "MD_PARTNER_ATTR_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "集团外供应商"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "集团进出口供应商"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "集团关联方供应商"
        }
    ],
    "EC_ACCRUAL_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "预提"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "待摊"
        }
    ],
    "ROLL_TERM_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "年度内滚动"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "半年内滚动"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "季度内滚动"
        }
    ],
    "BD_ADJUST_PERIOD_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "跨期间"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "同期间"
        }
    ],
    "FSC_DM_BILL_FLOW_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "邮寄中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "签收中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "退回新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "5",
            "codeName": "退回中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "6",
            "codeName": "退回签收中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "7",
            "codeName": "退回已签收"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "已完成"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "B",
            "codeName": "审核不通过"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "P",
            "codeName": "审核通过"
        }
    ],
    "EC_KIND_BUSINESS_ATTR": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "10",
            "codeName": "员工费用"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "20",
            "codeName": "广告费"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "30",
            "codeName": "物流费"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "40",
            "codeName": "工资、保险、公积金"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "50",
            "codeName": "固定资产"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "60",
            "codeName": "在建工程"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "80",
            "codeName": "其他"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "90",
            "codeName": "总账"
        }
    ],
    "IS_BUDGET_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "否"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "是"
        }
    ],
    "FM_FS_PAYOUT_ABLE_TYPE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "800801",
            "codeName": "其它应付"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "800802",
            "codeName": "其它应付-印花税"
        }
    ],
    "FM_FS_PAYOUT_CLR_CHANNEL_MODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "TT",
            "codeName": "跨境转账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "ACH",
            "codeName": "普通付款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "RTGS",
            "codeName": "加急付款"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "BOOK",
            "codeName": "同行转账"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "BILL",
            "codeName": "账单付款"
        }
    ],
    "USER_INFO_STATUS": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "正常"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "F",
            "codeName": "冻结"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "C",
            "codeName": "注销"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "L",
            "codeName": "锁定"
        }
    ],
    "WP_USER_GRAB_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "不允许"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "允许"
        }
    ],
    "METHOD_FLAG_CODE": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "常量"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "4",
            "codeName": "自主选择"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "取转换函数值"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "规则因子"
        }
    ],
    "JX_QQC_STATUS_FLAG": [
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "3",
            "codeName": "待确认"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "0",
            "codeName": "退回"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "1",
            "codeName": "新增"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "2",
            "codeName": "抽检中"
        },
        {
            "LANGUAGE_CODE": "zh_CN",
            "codeValue": "9",
            "codeName": "抽检完成"
        }
    ]
}

function getCodeList(req, resp) {
  writeOk(resp, codeList);
}

function findCodeByCode(req, resp) {
  const { body, query, headers, url } = req;
  const { listCode } = { ...body, ...query };
  if (!listCode) writeOk(resp, {});
  const codelist = codeList[listCode];
  writeOk(resp, codelist);
}


export default {
    [`${getMockPre('AD_LOV_LIST_FIND_BY_CODE')}`]: findCodeByCode,
    // [`${getMockPre('SYS_AD_LOV_LIST_FIND_BY_CODE')}`]: findCodeByCode,
};
  
