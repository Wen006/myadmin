import React from 'react'
import { connect } from 'dva'
import { Form, Row, Col, message } from 'antd'
import { InputLookUp, AutoRow, Intler,Inputs } from 'components';
import intl from 'react-intl-universal'
import { MessageBox } from 'utils';
import { Btns } from 'components'
import { savePassWord } from 'services/system/userinfo/userinfoService'
import { Link } from 'dva/router'
import lodash from 'lodash'
import PageHeaderLayout from 'layouts/PageHeaderLayout';
import styles from 'routes/common.less'
// import Intler from 'components/Intler/Intler'
// import { userInfo } from 'os';

const { NInput } = Inputs;


class EditPwd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      isK3: false,
      submiting: false,
    }
  }

  componentDidMount () {
    const { user, form } = this.props
    // form.setFieldsValue(userinfo)

    // getUserWithK3InfoById({ userId: user.id }).then(({ datas }) => {
    //   const { id, userAccount, userName, reservedField3, kThreeFlag } = datas
    //   const userinfo = { id, userAccount, userName, kThreeFlag }
    //   if (kThreeFlag === '0') {
    //     this.setState({ isK3: true })
    //     userinfo.reservedField3 = reservedField3
    //   }
    //   form.setFieldsValue(userinfo)
    // })
  }

  handleOk = () => {
    const { form, dispatch,user } = this.props;
    this.setState({submiting:true})
    form.validateFieldsAndScroll(null, { first: true, force: true }, (err, value) => {
      if (!err) { 
        const {NewPassword,confirm} = value
        if(NewPassword == "" || confirm == "" || NewPassword!=confirm){
          MessageBox.error("user.info.edit.pwd.errorinert");
          this.setState({submiting:false})
          return ;
        }
        user.password = value.NewPassword
        const obj = lodash.assign({},value,{id:user.id,password:value.NewPassword})
        savePassWord(obj).then((data) => {
          if (data.code === '200') {
            MessageBox.success('SaveSucAndRelogin',3,()=>{
              dispatch({
                type:'login/logout',
              })
            })
          } else {
            this.setState({submiting:false})
            message.error(data.returnMessage || 'EditFail')
          }
        })
      }else{
        this.setState({submiting:false})
      }
    })
  }


  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.props.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('NewPassword')) {
      callback(Intler.getIntl("ConfirmPassword")||'请输入新密码');
    } else {
      callback();
    }
  }
  render () {
    const { form,user } = this.props
    const { submiting } = this.state
    const item = {
      ...user,
    }
    const passOptions = {
      rules: [
        { required: true, message: Intler.getIntl("user.info.edit.pwd.npwd")||'请输入新密码' },
        { whitespace: true, message: Intler.getIntl("user.info.edit.pwd.notempty")||'不能为空字符串' },
        { max: 20, message:  Intler.getIntl("user.info.edit.pwd.notlong")||'不要超过20个字符,' },
        {
          pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}',
          message:  Intler.getIntl("user.info.edit.pwd.fzd")||'密码中必须包含字母、数字、特殊字符，且长度为8-16个字符。',
        },
        { validator: this.validateToNextPassword },
      ],
    };
    return (
      <PageHeaderLayout 
        // title={ Intler.getIntl("user.info.edit.pwd.update")||"密码修改"}
        >    
        <div className={styles.changePwd}>
          <Row >
            <Form >
              <NInput modalKey="id" hidden form={form} />
              <NInput modalKey="kThreeFlag" hidden form={form} />
              <Col span={12} offset={6}>
              <NInput
                label={intl&&intl.get("UserName")}
                modalKey="userName"
                options={{
                  initialValue: item.userName,
                }}
                form={form}
                disabled
                readOnly
              />
              </Col>
              <Col span={12} offset={6}>
              <NInput
                label={intl&&intl.get("USER_ACCOUNT")}
                modalKey="userAccount"
                options={{
                  initialValue: item.userAccount,
                }}
                form={form}
                disabled
                readOnly
              />
              </Col>
              <Col span={12} offset={6}>
              {/* 原密码 */}
              <NInput
                type="password"
                label={intl&&intl.get("OldPw")}
                modalKey="oldpassword"
                form={form}
                options={{ rules: [
                  { required: true, message: intl && intl.get('RePassword') },
                ] }}
              />
              </Col>
              <Col span={12} offset={6}>
              {/* 新密码 */}
              <NInput
                type="password"
                label={intl&&intl.get("NewPw")}
                modalKey="NewPassword"
                form={form}
                options={{ rules: [
                      { required: true, message: Intler.getIntl("user.info.edit.pwd.npwd")||'请输入新密码' },
                      { whitespace: true, message: Intler.getIntl("user.info.edit.pwd.notempty")||'不能为空字符串' },
                      { max: 20, message:  Intler.getIntl("user.info.edit.pwd.notlong")||'不要超过20个字符,' },
                      {
                        pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}',
                        message:  Intler.getIntl("user.info.edit.pwd.fzd")||'密码中必须包含字母、数字、特殊字符，且长度为8-16个字符。',
                      },
                      { validator: this.validateToNextPassword },
                    ]
                  }}
                onBlur={this.handleConfirmBlur} 
              />
              </Col>
              <Col span={12} offset={6}>
              {/* 确认密码 */}
              <NInput
                type="password"
                label={intl&&intl.get("PwConfirm")}
                modalKey="confirm"
                form={form}
                options={{
                  rules: [
                    { required: true, message: intl && intl.get('ConfirmInput') },
                    { validator: this.compareToFirstPassword },
                  ],
                }}
              />
              </Col>
            </Form>
          </Row>
          <div className={styles.btnBar}>
              <Link to="/"><Btns.back /></Link>
              <Btns.sure loading={submiting} onClick={this.handleOk} />
          </div>
        </div>
      </PageHeaderLayout>
    )
  }
}

// const Epwd = Form.create()(EditPwd)

export default connect(({
  user,
}) => ({
  user: user.currentUser,
}))(Form.create()(EditPwd))
