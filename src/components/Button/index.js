/**
 *@description: 通用按钮
 * @author：zhang-tiantian
 * @time：2017.11.9
 */

import React from 'react'
import { formatMessage, FormattedMessage } from 'umi/locale';
import debounce from 'lodash/debounce'
import { Button, Icon, Popconfirm } from 'antd'

/* import intl from 'react-intl-universal' */


// 按钮组件包括
// 新增 add，返回 back，取消 cancel，删除 del，编辑 edit， 重置 reset
// 创建 create
// 保存 save，查询 search，确定 sure，更新 update，
// 提交 submit  通过adopt 不通过disAdopt
// 导入ins  导出outs
// 下一步 next
// 上一步 prev
// 下载模板 downTemp
// 上传文件 upFile
// 获取验证码 gainCode
// 初始化 Btns.csh
// 修改  Btns.revise
// 撤回  Btns.revoke
// 退回  Btns.return
// 作废 Btns.invalid
// 执行 Btns.execute
// 支付 Btns.pay
// 拆分 Btns.split
// 成功 Btns.success
// 复制 Btns.copy
// 冻结 Btns.freeze
// 新增行 Btns.newRow
// 暂存 Btns.saveSub
// 添加合同付款计划 Btns.addPlan
// 保存草稿 Btns.saveDraft
// 导入事项记录 Btns.insRecord
// 上传附件 Btns.uploadFile
// 导入付款清单 Btns.insList 
// 导入模板下载 Btns.insMdDown
// 确认 Btns.affirm
// 批量新增 bcAdd
// 批量确认  Btns.bcAffirm
// 批量退回 Btns.bcReturn
// 批量生效 Btns.bcEffect
// 批量通过 Btns.bcAdopt
// 批量删除 delAll
// 批量启用 Btns.bcEnable
// 批量提交 Btns.bcSub
// 同意 Btns.agree
// 不同意 Btns.disAgree
// 批量同意 Btns.bcAgree
// 批量不同意  Btns.bcDisAgree
// 批量开启 Btns.bcOpen
// 批量禁用 Btns.bcDisable
// 批量解冻 Btns.bcThaw
// 批量冻结 Btns.bcFrozen
// 从组织导入预算体 Btns.insBudget
// 从样本新增 Btns.addSample
// 撤销合并 Btns.revMerge
// 合并报账 Btns.mergeBudget
// 从预付创建报账单据 Btns.createBill
// 绩效支付 Btns.payPer
// 人工干预 Btns.rggy
// 新增业务范围 Btns.addArea
// 查看所属绩效指标  Btns.selTarget
// 适配组织 Btns.adaOrg
// 绩效计划生成状态 Btns.planstate
// 启动系统评估 Btns.startSys
// 停止系统评估 Btns.stopSys
// 开始评估 Btns.startAss
// 完成评估 Btns.finishAss
// 开始抽检 Btns.startSam
// 完成抽检 Btns.finishSam
// 手动生成 Btns.hand
// 预览凭证要素 Btns.factor
// 新增红冲报账 Btns.addReim
// 新增支付红冲 Btns.addPay
// 关闭 Btns.close
// 提取单据 Btns.extBill
// 制证 Btns.busCard
// 调整尾差 Btns.adjDiff
// 继续支付 Btns.conPay
// 人工干预成功 Btns.rggySuc
// 人工干预失败 Btns.rggyFail
// 批量导入 Btns.bcImport
// 合并导入 Btns.mgImport
// 校验 Btns.checkOut
// 查看影像 Btns.checkImg
// 生效 Btns.effect
// 预览 Btns.preview
// 禁用 Btns.disable
// 启用 Btns.start
// 停用 Btns.stop
// 批量停用 Btns.bcStop
// 全部汇总 Btns.allSum,
// 撤销确认 Btns.retCom
// 确认调整 Btns.adjSure
// 继续支付 Btns.continuePay
// 放弃支付Btns.giveup
// 指标分配  Btns.quota
// 金额总汇 Btns.amtMoney
// 分配税码到公司 Btns.taxNoShare
// 初审通过 Btns.approve
// 初审不通过 Btns.approveNot
// 复核通过 Btns.reApprove
// 复核不通过 Btns.reApproveNot
// 在线记账 Btns.accOnline
// 确认记账完成 Btns.reAccOnline
// 出款确认 Btns.ensurePay
// 打印审批单 Btns.printing
// 加签 Btns.reasSign
// 网银导出 Btns.ebankExport
// excel导出 Btns.excelExport
// 自动新增  Btns.autoAdd
// 影像   Btns.imgFile
// 复制新增 Btns.valueAdd
// 分配 Btns.distribution
// 批量作废 Btns.invalidAll
// 创建资产卡片 Btns.addCard
// 确认创建完成 Btns.confirmAsset
// 沟通 Btns.connect
// 授权 Btns.grant
// 转办 Btns.turn
// 导出历史 Btns.ExportHis
// 干预 Btns.Intervene
// 再导 Btns.ExportAgain
// 不再导 Btns.NoMoreExport
// 刷新缓存 Btns.refresh
// 全部删除 Btns.allDel
// 手工同步  Btns.sny
// 附件操作 Btns.FileAct
// 信用初始化 Btns.CreditInit
// 信用评定  Btns.CreditAssess
// 自动分摊 Btns.autoAlca
// 发票OCR数据同步 Btns.invOCRDS
// 批量认证 Btns.batchAuthion
// 启动评估 Btns.startupEvaluate
// 暂停评估 Btns.pauseEvaluate
// 完成评估 Btns.finishEvaluate
// 系统评分 Btns.vellamo
// 绩效等级测定 Btns.jxLevel
// 扩展到业务 Btns.expansionToBusi
// 扩展到组织 Btns.expansionToEntity
// 确认调整范围 Btns.ensureAdjust
// 变更调整范围 Btns.changeAdjust
/*
*/

const btnNames = [
  {
    btnName: 'expansionToBusi',
    btnLocaleName: 'expansionToBusi',
    iconType: 'plus',
  },
  {
    btnName: 'expansionToEntity',
    btnLocaleName: 'expansionToEntity',
    iconType: 'plus',
  },
  {
    btnName: 'jxLevel',
    btnLocaleName: 'jxLevel',
    iconType: 'profile',
  },
  {
    btnName: 'vellamo',
    btnLocaleName: 'vellamo',
    iconType: 'profile',
  },
  {
    btnName: 'finishEvaluate',
    btnLocaleName: 'finishEvaluate',
    iconType: 'file-done',
  },
  {
    btnName: 'pauseEvaluate',
    btnLocaleName: 'pauseEvaluate',
    iconType: 'play-circle',
  },
  {
    btnName: 'startupEvaluate',
    btnLocaleName: 'startupEvaluate',
    iconType: 'enter',
  },
  {
    btnName: 'CreditInit',
    btnLocaleName: 'CreditInit',
    iconType: 'pushpin',
  },
  {
    btnName: 'CreditAssess',
    btnLocaleName: 'CreditAssess',
    iconType: 'like',
  },
  {
    btnName: 'fileAct',
    btnLocaleName: 'FileAct',
    iconType: 'diff',
  },
  {
    btnName: 'sync',
    btnLocaleName: 'Sync',
    iconType: 'swap',
  },
  {
    btnName: 'allDel',
    btnLocaleName: 'AllDel',
    iconType: 'delete',
  },
  {
    btnName: 'exportAgain',
    btnLocaleName: 'ExportAgain',
    iconType: 'cloud-download-o',
  },
  {
    btnName: 'noMoreExport',
    btnLocaleName: 'NoMoreExport',
    iconType: 'minus',
  },
  {
    btnName: 'exportHis',
    btnLocaleName: 'ExportHis',
    iconType: 'retweet',
  },
  {
    btnName: 'intervene',
    btnLocaleName: 'Intervene',
    iconType: 'alert',
  },
  {
    btnName: 'turn',
    btnLocaleName: 'Turn',
    iconType: 'share-alt',
  },
  {
    btnName: 'grant',
    btnLocaleName: 'Grant',
    iconType: 'pushpin',
  },
  {
    btnName: 'connect',
    btnLocaleName: 'Connect',
    iconType: 'smile',
  },
  {
    btnName: 'addCard',
    btnLocaleName: 'AddCard',
    iconType: 'add',
  },
  {
    btnName: 'distribution',
    btnLocaleName: 'Distribution',
    iconType: 'share-alt',
  },
  {
    btnName: 'valueAdd',
    btnLocaleName: 'ValueAdd',
    iconType: 'copy',
  },
  {
    btnName: 'imgFile',
    btnLocaleName: 'ImgFile',
    iconType: 'picture',
  },
  {
    btnName: 'autoAdd',
    btnLocaleName: 'autoAdd',
    iconType: 'plus-circle',
  },
  {
    btnName: 'ebankExport',
    btnLocaleName: 'EbankExport',
    iconType: 'money-collect',
  },
  {
    btnName: 'excelExport',
    btnLocaleName: 'ExcelExport',
    iconType: 'money-collect',
  },
  {
    btnName: 'reasSign',
    btnLocaleName: 'ReasSign',
    iconType: 'file-add',
  },
  {
    btnName: 'printing',
    btnLocaleName: 'Printing',
    iconType: 'printer',
  },
  {
    btnName: 'ensurePay',
    btnLocaleName: 'EnsurePay',
    iconType: 'money-collect',
  },
  {
    btnName: 'approve',
    btnLocaleName: 'Approve',
    iconType: 'check-circle',
  },
  {
    btnName: 'approveNot',
    btnLocaleName: 'ApproveNot',
    iconType: 'warning',
  },
  {
    btnName: 'reApprove',
    btnLocaleName: 'ReApprove',
    iconType: 'check-circle',
  },
  {
    btnName: 'reApproveNot',
    btnLocaleName: 'ReApproveNot',
    iconType: 'warning',
  },
  {
    btnName: 'accOnline',
    btnLocaleName: 'AccOnline',
    iconType: 'form',
  },
  {
    btnName: 'reAccOnline',
    btnLocaleName: 'ReAccOnline',
    iconType: 'check-square',
  },
  {
    btnName: 'amtMoney',
    btnLocaleName: 'AmtMoney',
    iconType: 'red-envelope',
  },
  {
    btnName: 'taxNoShare',
    btnLocaleName: 'TaxNoShare',
    iconType: 'export',
  },
  {
    btnName: 'quota',
    btnLocaleName: 'Quota',
    iconType: 'export',
  },
  {
    btnName: 'bcStop',
    btnLocaleName: 'BcStop',
    iconType: 'pause-circle',
  },
  {
    btnName: 'continuePay',
    btnLocaleName: 'ContinuePay',
    iconType: 'calculator',
  },
  {
    btnName: 'create',
    btnLocaleName: 'Create',
    iconType: 'plus-circle',
  },
  {
    btnName: 'adjSure',
    btnLocaleName: 'adjSure',
    iconType: 'check-circle-o',
  },
  {
    btnName: 'retCom',
    btnLocaleName: 'RetCom',
    iconType: 'select',
  },
  {
    btnName: 'allSum',
    btnLocaleName: 'AllSum',
    iconType: 'form',
  },
  {
    btnName: 'bcAdd',
    btnLocaleName: 'BcAdd',
    iconType: 'plus-circle',
  },
  {
    btnName: 'stop',
    btnLocaleName: 'Stop',
    iconType: 'lock',
  },
  {
    btnName: 'start',
    btnLocaleName: 'Start',
    iconType: 'unlock',
  },
  {
    btnName: 'disAble',
    btnLocaleName: 'Disable',
    iconType: 'exclamation-circle-o',
  },
  {
    btnName: 'preview',
    btnLocaleName: 'Preview',
    iconType: 'eye-o',
  },
  {
    btnName: 'effect',
    btnLocaleName: 'Effect',
    iconType: 'tag',
  },
  {
    btnName: 'checkImg',
    btnLocaleName: 'CheckImg',
    iconType: 'picture',
  },
  {
    btnName: 'checkOut',
    btnLocaleName: 'CheckOut',
    iconType: 'export',
  },
  {
    btnName: 'search',
    btnLocaleName: 'app.btn.search',
    iconType: 'search',
  }, {
    btnName: 'add',
    btnLocaleName: 'app.btn.add',
    iconType: 'plus',
  }, {
    btnName: 'back',
    btnLocaleName: 'Back',
    iconType: 'left',
    btnType: 'default',
  }, {
    btnName: 'cancel',
    btnLocaleName: 'app.btn.cancel',
    iconType: 'close',
    btnType: 'default',
  }, {
    btnName: 'del',
    btnLocaleName: 'app.btn.remove',
    iconType: 'delete',
  },
  {
    btnName: 'great',
    btnLocaleName: 'Great',
    iconType: 'plus',
  }, {
    btnName: 'edit',
    btnLocaleName: 'Edit',
    iconType: 'edit',
  }, {
    btnName: 'reset',
    btnLocaleName: 'app.btn.reset',
    iconType: 'retweet',
    btnType: 'default',
  }, {
    btnName: 'save',
    btnLocaleName: 'Save',
    iconType: 'save',
  }, {
    btnName: 'sure',
    btnLocaleName: 'app.btn.sure',
    iconType: 'check',
  }, {
    btnName: 'update',
    btnLocaleName: 'app.btn.update',
    iconType: 'retweet',
  }, {
    btnName: 'delAll',
    btnLocaleName: 'Remove_1',
    iconType: 'delete',
  }, {
    btnName: 'submit',
    btnLocaleName: 'Submit',
    iconType: 'check',
  }, {
    btnName: 'adopt',
    btnLocaleName: 'Adopt',
    iconType: 'check-square',
  }, {
    btnName: 'disAdopt',
    btnLocaleName: 'DisAdopt',
    iconType: 'close-square',
  },
  {
    btnName: 'bcImport',
    btnLocaleName: 'BcImport',
    iconType: 'arrow-down',
  },
  {
    btnName: 'mgImport',
    btnLocaleName: 'MgImport',
    iconType: 'download',
  }, {
    btnName: 'ins',
    btnLocaleName: 'Import',
    iconType: 'cloud-download-o',
  }, {
    btnName: 'outs',
    btnLocaleName: 'Export',
    iconType: 'cloud-upload-o',
  }, {
    btnName: 'next',
    iconType: 'right',
    btnLocaleName: 'Next',

  },
  {
    btnName: 'prev',
    iconType: 'left',
    btnLocaleName: 'Prev',

  },
  {
    btnName: 'downTemp',
    btnLocaleName: 'DownTemp',
    iconType: 'download',
  }, {
    btnName: 'upFile',
    btnLocaleName: 'UpFile',
    iconType: 'upload',
  }, {
    btnName: 'csh',
    btnLocaleName: 'Csh',
    iconType: 'inbox',
  }, {
    btnName: 'revise',
    btnLocaleName: 'Revise',
    iconType: 'edit',
  }, {
    btnName: 'revoke',
    btnLocaleName: 'Revoke',
    iconType: 'reload',
  },
  {
    btnName: 'return',
    btnLocaleName: 'Return',
    iconType: 'rollback',
  },
  {
    btnName: 'goBack',
    btnLocaleName: 'GoBack',
    iconType: 'logout',
  }, {
    btnName: 'invalid',
    btnLocaleName: 'Invalid',
    iconType: 'exclamation-circle-o',
  }, {
    btnName: 'execute',
    btnLocaleName: 'Execute',
    iconType: 'check-circle-o',
  }, {
    btnName: 'pay',
    btnLocaleName: 'Pay',
    iconType: 'pay-circle-o',
  }, {
    btnName: 'split',
    btnLocaleName: 'Split',
    iconType: 'disconnect',
  }, {
    btnName: 'success',
    btnLocaleName: 'Success',
    iconType: 'smile-o',
  }, {
    btnName: 'copy',
    btnLocaleName: 'Copy',
    iconType: 'copy',
  }, {
    btnName: 'freeze',
    btnLocaleName: 'Freeze',
    iconType: 'exception',
  }, {
    btnName: 'newRow',
    btnLocaleName: 'NewRow',
    iconType: 'file-add',
  }, {
    btnName: 'saveSub',
    btnLocaleName: 'SaveDraft',
    iconType: 'save',
  }, {
    btnName: 'addPlan',
    btnLocaleName: 'AddPlan',
    iconType: 'file-ppt',
  },
  // 保存草稿
  // {
  //   btnName: 'saveDraft',
  //   btnLocaleName: 'SaveDraft',
  //   iconType: 'file-add',
  // }, 
  {
    btnName: 'insRecord',
    btnLocaleName: 'InsRecord',
    iconType: 'rollback',
  }, {
    btnName: 'uploadFile',
    btnLocaleName: 'UploadFile',
    iconType: 'upload',
  }, {
    btnName: 'insList',
    btnLocaleName: 'InsList',
    iconType: 'file-text',
  }, {
    btnName: 'insMdDown',
    btnLocaleName: 'InsMdDown',
    iconType: 'swap-left',
  }, {
    btnName: 'affirm',
    btnLocaleName: 'Affirm',
    iconType: 'check-circle-o',
  },
  {
    btnName: 'bcAffirm',
    btnLocaleName: 'BcAffirm',
    iconType: 'check-circle',
  }, {
    btnName: 'bcReturn',
    btnLocaleName: 'BcReturn',
    iconType: 'close-square',
  }, {
    btnName: 'bcEffect',
    btnLocaleName: 'BcEffect',
    iconType: 'check-circle',
  }, {
    btnName: 'bcAdopt',
    btnLocaleName: 'BcAdopt',
    iconType: 'check-square',
  }, {
    btnName: 'bcEnable',
    btnLocaleName: 'BcEnable',
    iconType: 'pause-circle',
  }, {
    btnName: 'bcSub',
    btnLocaleName: 'BcSub',
    iconType: 'check-circle',
  },
  {
    btnName: 'agree',
    btnLocaleName: 'Agree',
    iconType: 'check-circle-o',
  },
  {
    btnName: 'disAgree',
    btnLocaleName: 'DisAgree',
    iconType: 'minus-circle-o',
  },
  {
    btnName: 'bcAgree',
    btnLocaleName: 'BcAgree',
    iconType: 'smile',
  }, {
    btnName: 'bcDisAgree',
    btnLocaleName: 'BcDisAgree',
    iconType: 'frown',
  }, {
    btnName: 'bcOpen',
    btnLocaleName: 'BcOpen',
    iconType: 'pause-circle',
  }, {
    btnName: 'bcDisable',
    btnLocaleName: 'BcDisable',
    iconType: 'exclamation-circle',
  },
  {
    btnName: 'bcThaw',
    btnLocaleName: 'BcThaw',
    iconType: 'key',
  }, {
    btnName: 'bcFrozen',
    btnLocaleName: 'BcFrozen',
    iconType: 'minus-circle',
  }, {
    btnName: 'factor',
    btnLocaleName: 'Factor',
    iconType: 'profile',
  }, {
    btnName: 'insBudget',
    btnLocaleName: 'InsBudget',
    iconType: 'cloud-upload',
  }, {
    btnName: 'addSample',
    btnLocaleName: 'AddSample',
    iconType: 'plus-square',
  }, {
    btnName: 'revMerge',
    btnLocaleName: 'RevMerge',
    iconType: 'export',
  }, {
    btnName: 'mergeBdg',
    btnLocaleName: 'MergeBdg',
    iconType: 'calculator',
  }, {
    btnName: 'createBill',
    btnLocaleName: 'CreateBill',
    iconType: 'plus-circle-o',
  }, {
    btnName: 'payPer',
    btnLocaleName: 'PayPer',
    iconType: 'flag',
  }, {
    btnName: 'rggy',
    btnLocaleName: 'Rggy',
    iconType: 'usergroup-add',
  }, {
    btnName: 'addArea',
    btnLocaleName: 'AddArea',
    iconType: 'layout',
  }, {
    btnName: 'selTarget',
    btnLocaleName: 'SelTarget',
    iconType: 'bar-chart',
  }, {
    btnName: 'adaOrg',
    btnLocaleName: 'AdaOrg',
    iconType: 'sync',
  }, {
    btnName: 'planState',
    btnLocaleName: 'PlanState',
    iconType: 'clock-circle-o',
  }, {
    btnName: 'startSys',
    btnLocaleName: 'StartSys',
    iconType: 'tags',
  }, {
    btnName: 'stopSys',
    btnLocaleName: 'StopSys',
    iconType: 'close-square-o',
  }, {
    btnName: 'startAss',
    btnLocaleName: 'StartAss',
    iconType: 'pause',
  }, {
    btnName: 'finishAss',
    btnLocaleName: 'FinishAss',
    iconType: 'check',
  }, {
    btnName: 'startSam',
    btnLocaleName: 'StartSam',
    iconType: 'info',
  }, {
    btnName: 'finishSam',
    btnLocaleName: 'FinishSam',
    iconType: 'check-circle-o',
  }, {
    btnName: 'hand',
    btnLocaleName: 'Hand',
    iconType: 'solution',
  }, {
    btnName: 'addReim',
    btnLocaleName: 'AddReim',
    iconType: 'plus-circle-o',
  }, {
    btnName: 'addPay',
    btnLocaleName: 'AddPay',
    iconType: 'plus-circle',
  }, {
    btnName: 'gainCode',
    btnLocaleName: 'gainVerCode',
  }, {
    btnName: 'extBill',
    btnLocaleName: 'ExtBill',
    iconType: 'filter',
  }, {
    btnName: 'close',
    btnLocaleName: 'Close',
    iconType: 'close',
  },
  {
    btnName: 'busCard',
    btnLocaleName: 'BusCard',
    iconType: 'credit-card',
  },
  {
    btnName: 'adjDiff',
    btnLocaleName: 'AdjDiff',
    iconType: 'fork',
  },
  {
    btnName: 'conPay',
    btnLocaleName: 'ConPay',
    iconType: 'red-envelope',
  },
  {
    btnName: 'rggySuc',
    btnLocaleName: 'RggySuc',
    iconType: 'smile-o',
  },
  {
    btnName: 'rggyFail',
    btnLocaleName: 'RggyFail',
    iconType: 'meh-o',
  },
  {
    btnName: 'print',
    btnLocaleName: 'Print',
    iconType: 'printer',
  },
  {
    btnName: 'giveup',
    btnLocaleName: 'Giveup',
    iconType: 'minus-circle',
  },
  {
    btnName: 'invalidAll',
    btnLocaleName: 'invalidAll',
    iconType: 'rest',
  },
  {
    btnName: 'sny',
    btnLocaleName: '手工同步',
    iconType: 'printer',
  },
  {
    btnName: 'confirmAsset',
    btnLocaleName: 'ConfirmAsset',
    iconType: 'check',
  },
  {
    btnName: 'refresh',
    btnLocaleName: 'Refresh',
    iconType: 'reset',
  },
  {
    btnName: 'autoAlca',
    btnLocaleName: '自动分摊',
    iconType: 'disconnect',
  },
  {
    btnName: 'invOCRDS',
    btnLocaleName: '发票OCR数据同步',
    iconType: 'disconnect',
  },
  {
    btnName: 'batchAuthion',
    btnLocaleName: '批量认证',
    iconType: 'disconnect',
  },
  {
    btnName: 'redRush',
    btnLocaleName: '红冲',
    iconType: 'check-square',
  },
  {
    btnName: 'ensureAdjust',
    btnLocaleName: '确认调整范围',
    iconType: 'save',
  },
  {
    btnName: 'changeAdjust',
    btnLocaleName: '变更调整范围',
    iconType: 'edit',
  },
]

const GenComp = (btnLocaleName, btnType, iconType, btnName) => {
  return class GeneralComponent extends React.PureComponent {
 
    btnsClick = debounce((e) => {
      const { onClick } = this.props;
      if(onClick) onClick();
    })

    render() {
      const { text, textTit, ...otherProps } = this.props;
      const label = text || textTit || formatMessage({id:btnLocaleName})
      return (
        <Button size="default" type={btnType} {...otherProps} onClick={this.btnsClick}>
          {iconType ? <Icon type={iconType} /> : ""}
          {label || btnLocaleName}
        </Button>
      )
    }

  }
}

const Btns = {}
btnNames.forEach((btnCfg, key) => {
  const { btnName, btnLocaleName, btnType = 'primary', iconType } = btnCfg
  Btns[`${btnName}`] = GenComp(btnLocaleName, btnType, iconType, btnName)
})

export default Btns
