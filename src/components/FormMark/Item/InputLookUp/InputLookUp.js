
import React, { Fragment } from 'react'
import { Icon, Form, Input, Tooltip } from 'antd'
import Intler from 'components/Intler/Intler'
import styles from 'components/FormMark/formMark.less'
import rcStyles from 'routes/common.less'

import { getLookUpConfig } from 'components/LookUp/LooUpConfig'
import LookUp from '../LookUp/LookUp'


class Tooltips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showVal: '',
    }
  }

  showValue = (visible) => {
    const { form, nameKey } = this.props
    if (visible) {
      const val = form.getFieldValue(nameKey) || "";
      this.setState({ showVal: val });
    }
  }

  render() {
    const { children } = this.props
    const { showVal } = this.state
    return (
      <Tooltip
        title={showVal}
        onMouseEnter={() => this.showValue(true)}
        onVisibleChange={visible => {
          this.showValue(visible);
        }}
      >
        {children}
      </Tooltip>
    )
  }
}

const showTip = (label) => {
  return <Tooltip title={label}>{label}</Tooltip>;
}
const FormItem = ({ children, labelOptions = {}, label, extraIsDisplayFlag, ...oFormItemProps }) => {
  label = Intler.getHTML(label)
  const { extraLa } = oFormItemProps
  let html = <Fragment />;
  html = children
  if (extraLa && !extraIsDisplayFlag) {
    html = (
      <Fragment>
        <div className={styles.specialTxt}>{children}<span className={styles.detailLink}>{extraLa}</span></div>
      </Fragment>
    )
  }
  return (<Form.Item {...labelOptions} label={showTip(label)}> {html} </Form.Item>)
}
// eslint-disable-next-line react/no-multi-comp
export default class InputLookUp extends React.Component {
  constructor(props) {
    super(props)
    const { modalKey, nameKey, lookUpKey } = this.props
    const { modalKey: configModalKey } = getLookUpConfig(lookUpKey) || {};

    this.modalKey = modalKey || configModalKey
    this.nameKey = nameKey || modalKey || configModalKey
    this.state = {
      showClear: false,
      value: undefined,
    }
  }

  componentDidMount() {
    const { defaultValue, initialValue } = this.props;
    const val = defaultValue || initialValue;
    if (val) this.setValue(val);
  }

  onMouseEnter = () => {
    let { showClear, value } = this.state;
    const { form } = this.props
    if (!value) value = form && form.getFieldValue(this.nameKey)
    if (value && !showClear) this.setState({ showClear: true, value });
  }

  onMouseLeave = () => {
    const { showClear, value } = this.state;
    if (value && showClear) this.setState({ showClear: false });
  }

  setValue = (value) => {
    const { form: { setFieldsValue } } = this.props
    if (setFieldsValue) setFieldsValue({ [`${this.nameKey}`]: value });
  }


  handleModalOk = (selectedKeys, selectedRows, obj = {}) => {
    const { onOk } = this.props;
    let values = selectedRows.map(it => it[`${this.modalKey}`]).join(',')
    if (obj.name) { values = obj.name }
    this.setState({ value: values, showClear: false }, () => {
      this.setValue(values);
      if (onOk) onOk(selectedKeys, selectedRows, obj);
    });
  }

  handleChange = (proxy) => {
    const value = (proxy && proxy.target && proxy.target.value) || ''
    this.setState({ value, showClear: value.trim() != '' }, () => {
      this.setValue(value)
    })
  }

  // 清楚值效验
  hClearVal = () => {
    const { value } = this.state
    const { onClear } = this.props
    this.setState({ value: '', showClear: false }, () => {
      this.setValue(value);
      if (onClear) {
        const clearFlag = onClear()
        if (clearFlag && clearFlag != undefined) {
          return
        }
        this.setValue(undefined);
      }
    });
  }

  handleClickIcon = () => {
    const { showClear } = this.state
    const { clickBefore } = this.props
    if (showClear) {
      let cbFun
      if (typeof clickBefore === 'function') {
        cbFun = clickBefore();
        if (typeof cbFun === 'boolean' && cbFun) { return }
      }
      // promise 
      if (typeof cbFun === 'object' && cbFun.toString().indexOf('.then(') < 0) {
        cbFun.then(dFlag => {
          if (dFlag) { return };
          this.hClearVal();
        });
        return
      }
      this.hClearVal()



    }
  }

  render() {
    // eslint-disable-next-line prefer-const
    let { disabled = false, readOnly = false, title, multiple = false, view, form, initialValue = undefined, extraLa, clickBefore, zIndex, extralaKey, autoId = false, onSearchBefore, fields,
      lookUpKey,
      hidden,
      label = "没有配置",
      options = { rules: [{ required: true, message: Intler.getIntl('app.form.input.require') }] },
    } = this.props

    if (!fields) { fields = {} }
    if (typeof fields !== 'object') { fields = {} }
    // eslint-disable-next-line no-unused-expressions
    !fields[this.nameKey] && (fields[this.nameKey] = {})
    const { isRequiedFlag, isReadFlag, isDisplayFlag, labelKey, dataOrigin, ...fieldApi } = fields[`${this.nameKey}`]
    if (isRequiedFlag) (options = { rules: [] })
    if (isRequiedFlag != undefined && !isRequiedFlag) { options = { rules: [{ required: true, message: Intler.getIntl('app.form.input.require') }] } }
    if (labelKey) { label = labelKey }

    if (dataOrigin && lookUpKey == 'dtLook') {
      lookUpKey = dataOrigin
    }


    let extPro = {}
    if (fields && fields[extralaKey]) {
      const {
        isRequiedFlag: exisRequiedFlag,
        isReadFlag: extraIsReadFlag,
        isDisplayFlag: extraIsDisplayFlag,
        labelKey: extraLabelKey,
      } = fields.vendorNameExtra
      extPro = { extraIsDisplayFlag }
    }

    title = Intler.getHTML(title)
    if (isDisplayFlag != undefined) { hidden = isDisplayFlag }
    if (isReadFlag != undefined) { readOnly = isReadFlag }

    const inputProps = {
      form,
      label,
      options,
      disabled,
      readOnly,
      hidden,
    }

    if (initialValue) {
      options.initialValue = initialValue
    }

    const { getFieldDecorator, getFieldValue } = form;
    const { showClear } = this.state

    if (hidden) { return <Fragment /> }
    if (view) {

      let divExtra = <Fragment />
      if (extraLa) {
        const { noViewExtraLa } = extraLa.props || {}
        divExtra = extraLa
        if (noViewExtraLa) divExtra = <Fragment />
      }

      return (
        <FormItem label={label}>
          {getFieldDecorator(this.nameKey)(<div>{getFieldValue(this.nameKey)}{divExtra}</div>)}
        </FormItem>
      );
    }

    if (inputProps.readOnly) {
      return (
        <FormItem {...this.props} {...extPro}>
          {getFieldDecorator(this.nameKey, options)(
            <Input
              onChange={this.handleChange}
              {...inputProps}
              disabled
              readOnly
              suffix={<Icon
                type={showClear ? "close-circle" : "search"}
              />
              }
            />
          )}
        </FormItem>
      )
    }

    if (showClear) {
      return (
        <FormItem {...this.props} {...extPro}>
          {getFieldDecorator(this.nameKey, options)(
            <Input
              onChange={this.handleChange}
              {...inputProps}
              readOnly
              suffix={<Icon
                onMouseEnter={() => { this.onMouseEnter() }}
                onMouseLeave={() => { this.onMouseLeave() }}
                onClick={() => (this.handleClickIcon())}
                type={showClear ? "close-circle" : "search"}
              />
              }
            />
          )}
        </FormItem>
      )
    }

    return (
      <FormItem {...this.props} {...extPro}>
        {lookUpKey == 'dtLook' ?
          // <div>{`lookUpKey：${lookUpKey} 没取到值`}</div> 
          getFieldDecorator(this.nameKey, { ...options, initialValue: `lookUpKey：${lookUpKey} 没取到值` })(
            <Input readOnly />
          )
          : (
            <LookUp
              onOk={(r, k, obj) => (this.handleModalOk(r, k, obj))}
              onCancel={this.handleModalCancel}
              type={multiple ? "checkbox" : "radio"}
              title={title}
              onSearchBefore={onSearchBefore}
              lookUpKey={lookUpKey}
              clickBefore={clickBefore}
              zIndex={zIndex}
              autoId={autoId}
            >
              <Tooltips nameKey={this.nameKey} form={form}>
                {getFieldDecorator(this.nameKey, options)(
                  <Input
                    onChange={this.handleChange}
                    {...inputProps}
                    readOnly
                    suffix={<Icon
                      onMouseEnter={() => { this.onMouseEnter() }}
                      onClick={() => (this.handleClickIcon())}
                      onMouseLeave={() => { this.onMouseLeave() }}
                      type={showClear ? "close-circle" : "search"}
                    />
                    }
                  />
                )
                }
              </Tooltips>
            </LookUp>
          )}
      </FormItem>
    );
  }
}
