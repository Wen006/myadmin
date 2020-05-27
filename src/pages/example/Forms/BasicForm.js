/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-case-declarations */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { connect } from 'dva'; 
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
} from 'antd'; 
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
import { axios } from '@/utils/request';
import { formatDate, Data_Format, toZoneMoment, toMoment, setDefaultZone } from '@/utils/util.date';
import { Btns } from '@/components';

const FormItem = Form.Item;

const getOffset = _ =>{
 return - (_||new Date()).getTimezoneOffset()/60;
}

const COUNTRYS = {
  "SH":"Asia/Shanghai",
  "AT":"America/Toronto"
}

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class BasicForms extends PureComponent {

  userDiffset = 8;

  state={
    err:{},
    values:[],
    defaultTimeOffset: getOffset(),
    timeOffset:getOffset(),
    result:{},
    // result:{"time":1572256020214,"timeStr":"2019-10-28 17:47:00","timeLong":1572256020214,"offset":8},
    showItem:{},
  }

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'form/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  clickSave = e =>{
    // this.props.form.validateFieldsAndScroll((err, values) => {
    //   const v = [...this.state.values,values]
    //   console.log('v', v)
    //  this.setState({err,values:v})
    // });
  }

  cliBtn = flag =>{
    const basUrl = 'http://10.20.11.236:8888/time/zone/';
    const bOset = getOffset();
    this.setState({timeOffset:bOset});
      switch (flag) {
        case "setTime":
           // 用户输入时间
            const time = this.props.form.getFieldValue("time");
            if(!time){
              return;
            } 

            const data = {time,offset:bOset};
           
            axios.post(basUrl+flag,data).then(result=>{
              this.setState({result:result.data})
            })
            this.setState({values:[...this.state.values,time]})
          break;
        case "setBackTime":
            axios.get(`${basUrl}genTime`,{
              params:{}
            }).then(result=>{
              this.setState({result:result.data,defaultTimeOffset:getOffset()})
            })
          break;
        case "getTime":
            axios.get(basUrl+flag,{
              params:{}
            }).then(result=>{
              this.setState({result:result.data})
            })
          break;
        case "resolveTime":
          const { result } = this.state
          if(result.time){
            const showTime = result.time;
            this.setState({
              showItem:{
                timeStamp:showTime,
                timeZoneStr:formatDate(showTime,Data_Format.YEAR_MONTH_DAY_HH_MM_SS),
                timeStr:formatDate(showTime,Data_Format.YEAR_MONTH_DAY_HH_MM_SS),
                userDiffset:this.userDiffset,
              }
            });
            const mt = toMoment(result.time);
            this.props.form.setFieldsValue({editTime:mt}) 
          }

          break;
        default:
          break;
      }
  }

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.forms.basic.title" />}
        content={<FormattedMessage id="app.forms.basic.description" />}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label={<FormattedMessage id="form.title.label" />}>
              {getFieldDecorator('time', 
              {
                
                rules: [
                  // {
                  //   required: true,
                  //   // message: formatMessage({ id: 'validation.title.required' }),
                  // },
                ],
              })(
                <DatePicker 
                  // dateRender={(cur,today)=>{
                  //   return toZoneMoment(cur).date();
                  // }
                // }
                />)}
            </FormItem> 
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.clickSave}>
                <FormattedMessage id="form.save" />
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={_=>this.cliBtn("setTime")}>
                前端设置时间
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={_=>this.cliBtn("setBackTime")}>
                后台设置时间
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={_=>this.cliBtn("getTime")}>
                获取时间
              </Button>
            </FormItem>
            <hr />
            {/* err: {JSON.stringify(this.state.err)}<br /> */}
           form-values:<br /> 
            {this.state.values.map(i=>{
             return <div>ISO:{JSON.stringify(i)}  ==  FORMAT:{i.format("L")} ==  FORMATS:{i.format(Data_Format.YEAR_MONTH_DAY_HH_MM_SS)}</div>
           })}
            <br />
            <strong>保存时前端时区偏移量{this.state.defaultTimeOffset}</strong>
            <br />
            <strong>当前浏览器时区偏移量：{this.state.timeOffset}</strong>
            <hr />
          result:<br />
            {JSON.stringify(this.state.result)}
            <br />
            <hr />

            {this.state.result.time?
              <div>
                <table bordered={1} cellPadding={2}>
                  <thead>
                    <th>来源</th>
                    <th>格式化时间戳 {this.state.result.time}</th>
                    <th>格式化str {this.state.result.timeStr}</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Date格式化</td>
                      <td>{formatDate(new Date(this.state.result.time),Data_Format.YEAR_MONTH_DAY_HH_MM_SS)}</td>
                      <td>{formatDate(new Date(this.state.result.timeStr),Data_Format.YEAR_MONTH_DAY_HH_MM_SS)}</td>
                    </tr>
                    <tr>
                      <td>Moment格式化</td>
                      <td>{toMoment(this.state.result.time).format()}</td>
                      <td>{toMoment(this.state.result.timeStr).format()}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </div>:null}
              对应时区转化：
            <Button onClick={_=>this.cliBtn('resolveTime')}>转化对应时区显示</Button>
            <InputNumber onChange={v=>this.userDiffset=v} />
            {/* <FormItem {...formItemLayout} label={<Button onClick={_=>this.cliBtn('resolveTime')}>转化对应时区显示</Button>}>
                  {getFieldDecorator('offset', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({ id: 'validation.title.required' }),
                      },
                    ],
                  })(
                    <InputNumber />)}
                </FormItem>  */}
            <FormItem {...formItemLayout} label="保存后修改的时间">
              {getFieldDecorator('editTime', {
                    rules: [
                      // {
                      //   required: true,
                      //   // message: formatMessage({ id: 'validation.title.required' }),
                      // },
                    ],
                  })(
                    <DatePicker format={Data_Format.YEAR_MONTH_DAY_HH_MM_SS} />)}
            </FormItem> 
            <Btns.Group>
              <Btns.default onClick={_=>setDefaultZone(COUNTRYS.SH)}>上海</Btns.default>
              <Btns.default onClick={_=>setDefaultZone(COUNTRYS.AT)}>美国</Btns.default>
            </Btns.Group>
            <div>
              {this.state.showItem&&JSON.stringify(this.state.showItem)}
            </div>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicForms;
