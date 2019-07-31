/* eslint-disable import/no-extraneous-dependencies */
/**
 *@description: 通用按钮
 * @author：zhang-tiantian
 * @time：2017.11.9
 */

import React from 'react'
import { formatMessage, FormattedMessage } from 'umi/locale';
import debounce from 'lodash/debounce'
import { Button, Icon, Popconfirm } from 'antd'

// 按钮组件包括
// 新增 add，返回 back，取消 cancel，删除 del，编辑 edit， 重置 reset， 查看 view
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

/**
 * // 下面两个是目前定义的属性
 * btnName  必填按钮的引用名称    <Btns.[btnName] />
 * btnLocaleName 非必填对用的国际化key      这在locales下语言/app.js 下配置
 * 
 * // 其他都是antd.button 属性
 * icon     非必填 按钮的图标
 */

const btnNames = [
  {
    btnName:'default',
  },
  {
    btnName: 'expansionToBusi',
    // btnLocaleName: 'expansionToBusi',
    icon: 'plus',
  },
  {
    btnName: 'expansionToEntity',
    btnLocaleName: 'expansionToEntity',
    icon: 'plus',
  },
  {
    btnName: 'jxLevel',
    btnLocaleName: 'jxLevel',
    icon: 'profile',
  },
  {
    btnName: 'vellamo',
    btnLocaleName: 'vellamo',
    icon: 'profile',
  },
  {
    btnName: 'finishEvaluate',
    btnLocaleName: 'finishEvaluate',
    icon: 'file-done',
  },
  {
    btnName: 'pauseEvaluate',
    btnLocaleName: 'pauseEvaluate',
    icon: 'play-circle',
  },
  {
    btnName: 'startupEvaluate',
    btnLocaleName: 'startupEvaluate',
    icon: 'enter',
  },
  {
    btnName: 'CreditInit',
    btnLocaleName: 'CreditInit',
    icon: 'pushpin',
  },
  {
    btnName: 'CreditAssess',
    btnLocaleName: 'CreditAssess',
    icon: 'like',
  },
  {
    btnName: 'fileAct',
    btnLocaleName: 'FileAct',
    icon: 'diff',
  },
  {
    btnName: 'sync',
    btnLocaleName: 'Sync',
    icon: 'swap',
  },
  {
    btnName: 'allDel',
    btnLocaleName: 'AllDel',
    icon: 'delete',
  },
  {
    btnName: 'exportAgain',
    btnLocaleName: 'ExportAgain',
    icon: 'cloud-download-o',
  },
  {
    btnName: 'noMoreExport',
    btnLocaleName: 'NoMoreExport',
    icon: 'minus',
  },
  {
    btnName: 'exportHis',
    btnLocaleName: 'ExportHis',
    icon: 'retweet',
  },
  {
    btnName: 'intervene',
    btnLocaleName: 'Intervene',
    icon: 'alert',
  },
  {
    btnName: 'turn',
    btnLocaleName: 'Turn',
    icon: 'share-alt',
  },
  {
    btnName: 'grant',
    btnLocaleName: 'Grant',
    icon: 'pushpin',
  },
  {
    btnName: 'connect',
    btnLocaleName: 'Connect',
    icon: 'smile',
  },
  {
    btnName: 'addCard',
    btnLocaleName: 'AddCard',
    icon: 'add',
  },
  {
    btnName: 'distribution',
    btnLocaleName: 'Distribution',
    icon: 'share-alt',
  },
  {
    btnName: 'valueAdd',
    btnLocaleName: 'ValueAdd',
    icon: 'copy',
  },
  {
    btnName: 'imgFile',
    btnLocaleName: 'ImgFile',
    icon: 'picture',
  },
  {
    btnName: 'autoAdd',
    btnLocaleName: 'autoAdd',
    icon: 'plus-circle',
  },
  {
    btnName: 'ebankExport',
    btnLocaleName: 'EbankExport',
    icon: 'money-collect',
  },
  {
    btnName: 'excelExport',
    btnLocaleName: 'ExcelExport',
    icon: 'money-collect',
  },
  {
    btnName: 'reasSign',
    btnLocaleName: 'ReasSign',
    icon: 'file-add',
  },
  {
    btnName: 'printing',
    btnLocaleName: 'Printing',
    icon: 'printer',
  },
  {
    btnName: 'ensurePay',
    btnLocaleName: 'EnsurePay',
    icon: 'money-collect',
  },
  {
    btnName: 'approve',
    btnLocaleName: 'Approve',
    icon: 'check-circle',
  },
  {
    btnName: 'approveNot',
    btnLocaleName: 'ApproveNot',
    icon: 'warning',
  },
  {
    btnName: 'reApprove',
    btnLocaleName: 'ReApprove',
    icon: 'check-circle',
  },
  {
    btnName: 'reApproveNot',
    btnLocaleName: 'ReApproveNot',
    icon: 'warning',
  },
  {
    btnName: 'accOnline',
    btnLocaleName: 'AccOnline',
    icon: 'form',
  },
  {
    btnName: 'reAccOnline',
    btnLocaleName: 'ReAccOnline',
    icon: 'check-square',
  },
  {
    btnName: 'amtMoney',
    btnLocaleName: 'AmtMoney',
    icon: 'red-envelope',
  },
  {
    btnName: 'taxNoShare',
    btnLocaleName: 'TaxNoShare',
    icon: 'export',
  },
  {
    btnName: 'quota',
    btnLocaleName: 'Quota',
    icon: 'export',
  },
  {
    btnName: 'bcStop',
    btnLocaleName: 'BcStop',
    icon: 'pause-circle',
  },
  {
    btnName: 'continuePay',
    btnLocaleName: 'ContinuePay',
    icon: 'calculator',
  },
  {
    btnName: 'create',
    btnLocaleName: 'Create',
    icon: 'plus-circle',
  },
  {
    btnName: 'adjSure',
    btnLocaleName: 'adjSure',
    icon: 'check-circle-o',
  },
  {
    btnName: 'retCom',
    btnLocaleName: 'RetCom',
    icon: 'select',
  },
  {
    btnName: 'allSum',
    btnLocaleName: 'AllSum',
    icon: 'form',
  },
  {
    btnName: 'bcAdd',
    btnLocaleName: 'BcAdd',
    icon: 'plus-circle',
  },
  {
    btnName: 'stop',
    btnLocaleName: 'Stop',
    icon: 'lock',
  },
  {
    btnName: 'start',
    btnLocaleName: 'Start',
    icon: 'unlock',
  },
  {
    btnName: 'disAble',
    btnLocaleName: 'Disable',
    icon: 'exclamation-circle-o',
  },
  {
    btnName: 'preview',
    btnLocaleName: 'Preview',
    icon: 'eye-o',
  },
  {
    btnName: 'effect',
    btnLocaleName: 'Effect',
    icon: 'tag',
  },
  {
    btnName: 'checkImg',
    btnLocaleName: 'CheckImg',
    icon: 'picture',
  },
  {
    btnName: 'checkOut',
    btnLocaleName: 'CheckOut',
    icon: 'export',
  },
  {
    btnName: 'search',
    btnLocaleName: 'app.btn.search',
    icon: 'search',
  }, {
    btnName: 'add',
    btnLocaleName: 'app.btn.add',
    icon: 'plus',
  },{
    btnName: 'view',
    btnLocaleName: 'app.btn.view',
    icon: 'eye',
  }, {
    btnName: 'back',
    btnLocaleName: 'app.btn.back',
    icon: 'left',
    type: 'default',
  }, {
    btnName: 'cancel',
    btnLocaleName: 'app.btn.cancel',
    icon: 'close',
    type: 'default',
  }, {
    btnName: 'del',
    btnLocaleName: 'app.btn.delete',
    icon: 'delete',
  },
  {
    btnName: 'great',
    btnLocaleName: 'Great',
    icon: 'plus',
  }, {
    btnName: 'edit',
    btnLocaleName: 'app.btn.edit',
    icon: 'edit',
  }, {
    btnName: 'reset',
    btnLocaleName: 'app.btn.reset',
    icon: 'retweet',
    type: 'default',
  }, {
    btnName: 'save',
    btnLocaleName: 'app.btn.save',
    icon: 'save',
  }, {
    btnName: 'sure',
    btnLocaleName: 'app.btn.sure',
    icon: 'check',
  }, {
    btnName: 'update',
    btnLocaleName: 'app.btn.update',
    icon: 'retweet',
  }, {
    btnName: 'delAll',
    btnLocaleName: 'Remove_1',
    icon: 'delete',
  }, {
    btnName: 'submit',
    btnLocaleName: 'Submit',
    icon: 'check',
  }, {
    btnName: 'adopt',
    btnLocaleName: 'Adopt',
    icon: 'check-square',
  }, {
    btnName: 'disAdopt',
    btnLocaleName: 'DisAdopt',
    icon: 'close-square',
  },
  {
    btnName: 'bcImport',
    btnLocaleName: 'BcImport',
    icon: 'arrow-down',
  },
  {
    btnName: 'mgImport',
    btnLocaleName: 'MgImport',
    icon: 'download',
  }, {
    btnName: 'ins',
    btnLocaleName: 'Import',
    icon: 'cloud-download-o',
  }, {
    btnName: 'outs',
    btnLocaleName: 'Export',
    icon: 'cloud-upload-o',
  }, {
    btnName: 'next',
    icon: 'right',
    btnLocaleName: 'Next',

  },
  {
    btnName: 'prev',
    icon: 'left',
    btnLocaleName: 'Prev',

  },
  {
    btnName: 'downTemp',
    btnLocaleName: 'DownTemp',
    icon: 'download',
  }, {
    btnName: 'upFile',
    btnLocaleName: 'UpFile',
    icon: 'upload',
  }, {
    btnName: 'csh',
    btnLocaleName: 'Csh',
    icon: 'inbox',
  }, {
    btnName: 'revise',
    btnLocaleName: 'Revise',
    icon: 'edit',
  }, {
    btnName: 'revoke',
    btnLocaleName: 'Revoke',
    icon: 'reload',
  },
  {
    btnName: 'return',
    btnLocaleName: 'Return',
    icon: 'rollback',
  },
  {
    btnName: 'goBack',
    btnLocaleName: 'GoBack',
    icon: 'logout',
  }, {
    btnName: 'invalid',
    btnLocaleName: 'Invalid',
    icon: 'exclamation-circle-o',
  }, {
    btnName: 'execute',
    btnLocaleName: 'Execute',
    icon: 'check-circle-o',
  }, {
    btnName: 'pay',
    btnLocaleName: 'Pay',
    icon: 'pay-circle-o',
  }, {
    btnName: 'split',
    btnLocaleName: 'Split',
    icon: 'disconnect',
  }, {
    btnName: 'success',
    btnLocaleName: 'Success',
    icon: 'smile-o',
  }, {
    btnName: 'copy',
    btnLocaleName: 'Copy',
    icon: 'copy',
  }, {
    btnName: 'freeze',
    btnLocaleName: 'Freeze',
    icon: 'exception',
  }, {
    btnName: 'newRow',
    btnLocaleName: 'NewRow',
    icon: 'file-add',
  }, {
    btnName: 'saveSub',
    btnLocaleName: 'SaveDraft',
    icon: 'save',
  }, {
    btnName: 'addPlan',
    btnLocaleName: 'AddPlan',
    icon: 'file-ppt',
  },
  // 保存草稿
  // {
  //   btnName: 'saveDraft',
  //   btnLocaleName: 'SaveDraft',
  //   icon: 'file-add',
  // }, 
  {
    btnName: 'insRecord',
    btnLocaleName: 'InsRecord',
    icon: 'rollback',
  }, {
    btnName: 'uploadFile',
    btnLocaleName: 'UploadFile',
    icon: 'upload',
  }, {
    btnName: 'insList',
    btnLocaleName: 'InsList',
    icon: 'file-text',
  }, {
    btnName: 'insMdDown',
    btnLocaleName: 'InsMdDown',
    icon: 'swap-left',
  }, {
    btnName: 'affirm',
    btnLocaleName: 'Affirm',
    icon: 'check-circle-o',
  },
  {
    btnName: 'bcAffirm',
    btnLocaleName: 'BcAffirm',
    icon: 'check-circle',
  }, {
    btnName: 'bcReturn',
    btnLocaleName: 'BcReturn',
    icon: 'close-square',
  }, {
    btnName: 'bcEffect',
    btnLocaleName: 'BcEffect',
    icon: 'check-circle',
  }, {
    btnName: 'bcAdopt',
    btnLocaleName: 'BcAdopt',
    icon: 'check-square',
  }, {
    btnName: 'bcEnable',
    btnLocaleName: 'BcEnable',
    icon: 'pause-circle',
  }, {
    btnName: 'bcSub',
    btnLocaleName: 'BcSub',
    icon: 'check-circle',
  },
  {
    btnName: 'agree',
    btnLocaleName: 'Agree',
    icon: 'check-circle-o',
  },
  {
    btnName: 'disAgree',
    btnLocaleName: 'DisAgree',
    icon: 'minus-circle-o',
  },
  {
    btnName: 'bcAgree',
    btnLocaleName: 'BcAgree',
    icon: 'smile',
  }, {
    btnName: 'bcDisAgree',
    btnLocaleName: 'BcDisAgree',
    icon: 'frown',
  }, {
    btnName: 'bcOpen',
    btnLocaleName: 'BcOpen',
    icon: 'pause-circle',
  }, {
    btnName: 'bcDisable',
    btnLocaleName: 'BcDisable',
    icon: 'exclamation-circle',
  },
  {
    btnName: 'bcThaw',
    btnLocaleName: 'BcThaw',
    icon: 'key',
  }, {
    btnName: 'bcFrozen',
    btnLocaleName: 'BcFrozen',
    icon: 'minus-circle',
  }, {
    btnName: 'factor',
    btnLocaleName: 'Factor',
    icon: 'profile',
  }, {
    btnName: 'insBudget',
    btnLocaleName: 'InsBudget',
    icon: 'cloud-upload',
  }, {
    btnName: 'addSample',
    btnLocaleName: 'AddSample',
    icon: 'plus-square',
  }, {
    btnName: 'revMerge',
    btnLocaleName: 'RevMerge',
    icon: 'export',
  }, {
    btnName: 'mergeBdg',
    btnLocaleName: 'MergeBdg',
    icon: 'calculator',
  }, {
    btnName: 'createBill',
    btnLocaleName: 'CreateBill',
    icon: 'plus-circle-o',
  }, {
    btnName: 'payPer',
    btnLocaleName: 'PayPer',
    icon: 'flag',
  }, {
    btnName: 'rggy',
    btnLocaleName: 'Rggy',
    icon: 'usergroup-add',
  }, {
    btnName: 'addArea',
    btnLocaleName: 'AddArea',
    icon: 'layout',
  }, {
    btnName: 'selTarget',
    btnLocaleName: 'SelTarget',
    icon: 'bar-chart',
  }, {
    btnName: 'adaOrg',
    btnLocaleName: 'AdaOrg',
    icon: 'sync',
  }, {
    btnName: 'planState',
    btnLocaleName: 'PlanState',
    icon: 'clock-circle-o',
  }, {
    btnName: 'startSys',
    btnLocaleName: 'StartSys',
    icon: 'tags',
  }, {
    btnName: 'stopSys',
    btnLocaleName: 'StopSys',
    icon: 'close-square-o',
  }, {
    btnName: 'startAss',
    btnLocaleName: 'StartAss',
    icon: 'pause',
  }, {
    btnName: 'finishAss',
    btnLocaleName: 'FinishAss',
    icon: 'check',
  }, {
    btnName: 'startSam',
    btnLocaleName: 'StartSam',
    icon: 'info',
  }, {
    btnName: 'finishSam',
    btnLocaleName: 'FinishSam',
    icon: 'check-circle-o',
  }, {
    btnName: 'hand',
    btnLocaleName: 'Hand',
    icon: 'solution',
  }, {
    btnName: 'addReim',
    btnLocaleName: 'AddReim',
    icon: 'plus-circle-o',
  }, {
    btnName: 'addPay',
    btnLocaleName: 'AddPay',
    icon: 'plus-circle',
  }, {
    btnName: 'gainCode',
    btnLocaleName: 'gainVerCode',
  }, {
    btnName: 'extBill',
    btnLocaleName: 'ExtBill',
    icon: 'filter',
  }, {
    btnName: 'close',
    btnLocaleName: 'Close',
    icon: 'close',
  },
  {
    btnName: 'busCard',
    btnLocaleName: 'BusCard',
    icon: 'credit-card',
  },
  {
    btnName: 'adjDiff',
    btnLocaleName: 'AdjDiff',
    icon: 'fork',
  },
  {
    btnName: 'conPay',
    btnLocaleName: 'ConPay',
    icon: 'red-envelope',
  },
  {
    btnName: 'rggySuc',
    btnLocaleName: 'RggySuc',
    icon: 'smile-o',
  },
  {
    btnName: 'rggyFail',
    btnLocaleName: 'RggyFail',
    icon: 'meh-o',
  },
  {
    btnName: 'print',
    btnLocaleName: 'Print',
    icon: 'printer',
  },
  {
    btnName: 'giveup',
    btnLocaleName: 'Giveup',
    icon: 'minus-circle',
  },
  {
    btnName: 'invalidAll',
    btnLocaleName: 'invalidAll',
    icon: 'rest',
  },
  {
    btnName: 'sny',
    btnLocaleName: '手工同步',
    icon: 'printer',
  },
  {
    btnName: 'confirmAsset',
    btnLocaleName: 'ConfirmAsset',
    icon: 'check',
  },
  {
    btnName: 'refresh',
    btnLocaleName: 'Refresh',
    icon: 'reset',
  },
  {
    btnName: 'autoAlca',
    btnLocaleName: '自动分摊',
    icon: 'disconnect',
  },
  {
    btnName: 'invOCRDS',
    btnLocaleName: '发票OCR数据同步',
    icon: 'disconnect',
  },
  {
    btnName: 'batchAuthion',
    btnLocaleName: '批量认证',
    icon: 'disconnect',
  },
  {
    btnName: 'redRush',
    btnLocaleName: '红冲',
    icon: 'check-square',
  },
  {
    btnName: 'ensureAdjust',
    btnLocaleName: '确认调整范围',
    icon: 'save',
  },
  {
    btnName: 'changeAdjust',
    btnLocaleName: '变更调整范围',
    icon: 'edit',
  },
]

const getLocale = (key) =>{
  return key?formatMessage({id:key}):key;
}

const GenComp = (btnLocaleName, btnName, cfg) => {
  
  return class BtnComponent extends React.PureComponent {
 
    // 防事件抖动
    btnsClick = debounce((e) => {
      const { onClick } = this.props;
      if(onClick) onClick();
    },30);

    render() {
      const { text,children, ...otherProps } = this.props;
      const label = text || children || getLocale(btnLocaleName)
      return (
        <Button type='primary' size="default" {...cfg} {...otherProps} onClick={this.btnsClick}>
          {label}
        </Button>
      )
    }

  }
}

const Btns = {}
btnNames.forEach((btnCfg) => {
  const { btnName, btnLocaleName, ...other } = btnCfg
  Btns[`${btnName}`] = GenComp(btnLocaleName, btnName, other);
})

Btns.Group = Button.Group

export default Btns
