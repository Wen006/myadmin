/**
 * @description 查询form
 * @author wennn
 * @time 2018.1.9
 */
import React from 'react';
import { Form, Icon, Input, Row, Col } from 'antd';
import { Btns } from 'components';
import styles from 'routes/common.less';

const FormItem = Form.Item;

// 简单查询
const SimpleQuery = ({
  handleSubmit,
  handleShowMoreCondition,
  moreCondition,
  handleReset,
  getFieldDecorator,
  intl,
}) => {
  return (
    <div className={styles.selectnormal}>
      <Row gutter={16}>
        <Col lg={8} md={12} sm={24}>
          <FormItem label={intl && intl.get('RoleName')}>
            {getFieldDecorator('roleName')(<Input placeholder={intl && intl.get('RoleName')} />)}
          </FormItem>
        </Col>
        <Col lg={8} md={12} sm={24}>
          <Btns.search onClick={handleSubmit} text={intl && intl.get('Search')} />
          <Btns.reset onClick={handleReset} text={intl && intl.get('Reset')} />
          <a onClick={handleShowMoreCondition}>
            {intl && intl.get('ComplexQuery')}
            <Icon type={moreCondition ? 'up' : 'down'} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

// 高级查询
const ComplexQuery = ({
  handleSubmit,
  handleShowMoreCondition,
  moreCondition,
  handleReset,
  getFieldDecorator,
  intl,
}) => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <FormItem label={intl && intl.get('RoleName')}>
          {getFieldDecorator('roleName')(<Input placeholder={intl && intl.get('RoleName')} />)}
        </FormItem>
      </Col>
      <Col span={8}>
        <FormItem label={intl && intl.get('RoleCode')}>
          {getFieldDecorator('roleCode')(<Input placeholder={intl && intl.get('RoleCode')} />)}
        </FormItem>
      </Col>
      <Col span={8}>
        <Btns.search onClick={handleSubmit} text={intl && intl.get('Search')} />
        <Btns.reset onClick={handleReset} text={intl && intl.get('Reset')} />
        <a onClick={handleShowMoreCondition}>
          {intl && intl.get('SimpleQuery')}
          <Icon type={moreCondition ? 'up' : 'down'} />
        </a>
      </Col>
    </Row>
  );
};

class MenuInfoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreCondition: false,
    };
  }

  // 查询
  handleSubmit = () => {
    const { form, handleSubmit } = this.props;
    const fls = form.getFieldsValue();
    handleSubmit(fls);
  };

  // 重置条件
  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.handleSubmit({});
  };

  // 点击跟多条件切换
  handleShowMoreCondition = e => {
    e.preventDefault();
    this.setState({
      moreCondition: !this.state.moreCondition,
    });
  };

  render() {
    const { intl, form } = this.props;
    const { getFieldDecorator } = form;
    const { moreCondition } = this.state;

    const queryProps = {
      intl,
      getFieldDecorator,
      moreCondition,
      handleReset: this.handleReset,
      handleShowMoreCondition: this.handleShowMoreCondition,
      handleSubmit: this.handleSubmit,
    };

    return (
      <Form>
        {moreCondition ? (
          <ComplexQuery {...queryProps} key="a" />
        ) : (
          <SimpleQuery {...queryProps} key="b" />
        )}
      </Form>
    );
  }
}

export default Form.create()(MenuInfoFilter);
