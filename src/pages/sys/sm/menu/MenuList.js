import React, { Fragment } from 'react';
import { connect } from 'dva';
import PureBaseComp from 'routes/Base/PureBaseComp';
import { Btns, Viewer } from 'components';
import PageHeaderLayout from 'layouts/PageHeaderLayout';

import { Row, Col, Form, Input, Select, Icon, DatePicker, Divider } from 'antd';
import StandardTable from 'components/StandardTable';

import styles from 'routes/common.less';

const FormItem = Form.Item;
const { Option } = Select;

const ViewFrom = props => {
  const { curItem = {} } = props;

  return (
    <Fragment>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="菜单名称">
        <Input value={curItem.menuName} />
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="菜单代码">
        <Input value={curItem.menuCode} />
      </FormItem>
    </Fragment>
  );
};

@connect(({ tablelist, loading, global }) => ({
  dataModal: tablelist,
  loading: loading.effects['tablelist/fetchData'],
  delLoading: loading.effects['tablelist/deleteRows'],
  updateLoading: loading.effects['tablelist/saveOrUpdateItem'],
  intl: global.intl,
  languageInfo: global.languageInfo,
}))
@Form.create()
export default class TableList extends PureBaseComp {
  state = {
    expandForm: false,
    viewVisable: false,
    formValues: {},
    curItem: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'tablelist/initParam',
      payload: {
        queryKey: 'SYS_MENU_LIST',
        deleteKey: 'SYS_MENU_DELMULT',
        updateKey: 'SYS_MENU_SAVE_OR_UPDATE',
        list: [],
        queryParam: {},
        pagination: {
          pageSize: 10,
          current: 1,
        },
      },
      callback: () => {
        this.fetchData({}); // 页面加载好 查询数据
      },
    });
  }

  fetchData = param => {
    this.props.dispatch({ type: 'tablelist/fetchData', payload: { ...param } });
  };

  // 翻页和排序
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { formValues } = this.state;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = filtersArg[key].Object.keys(obj)
        .map(key => obj[key])
        .join(',');
      return newObj;
    }, {});

    const params = {
      current: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }
    this.fetchData(params);
  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    this.fetchData({});
  };

  // 切换查询列表
  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handlerOpe = ope => {
    const { dispatch } = this.props;
    const { selectedRows, selectedKeys } = this.props.dataModal;

    if (!selectedRows) return;
    if (ope == 'delete') {
      dispatch({
        type: 'tablelist/deleteRows',
        payload: selectedKeys,
        callback: () => {
          this.handleSearch();
        },
      });
    }
  };

  handleSelectRows = (selectedRows, selectedKeys) => {
    const payload = {
      selectedRows,
      selectedKeys,
    };
    this.props.dispatch({ type: 'tablelist/rChangeSelectRows', payload });
  };

  handleSearch = e => {
    const { form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };
      this.setState({
        formValues: values,
      });
      this.fetchData(values);
    });
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  renderBtn() {
    const { expandForm } = this.state;
    const { loading } = this.props;
    const spanProps = {};
    spanProps.className = expandForm ? '' : styles.submitButtons;
    spanProps.style = expandForm ? { float: 'right', marginBottom: 24 } : {};

    return (
      <span {...spanProps}>
        <Btns.search htmlType="submit" loading={loading} />
        <Btns.reset htmlType="submit" onClick={this.handleFormReset} />
        <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
          {this._getMsg('EXPAND') || '展开'} <Icon type={expandForm ? 'up' : 'down'} />
        </a>
      </span>
    );
  }

  // 简单表单
  renderSimpleForm() {
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={styles.selectnormal}>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={16}>
            <Col md={8} sm={24}>
              <FormItem label="菜单名称">
                {getFieldDecorator('menuName')(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col md={8} sm={24}>
              <FormItem label="代码">
                {getFieldDecorator('status')(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col md={8} sm={24}>
              {this.renderBtn()}
            </Col>
          </Row>
        </Form>
      </div>
    );
  }

  // 复杂表单
  renderAdvancedForm() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={styles.selectbox}>
        <Form onSubmit={this.handleSearch} layout="inline">
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={8} sm={24}>
              <FormItem label="菜单名称">
                {getFieldDecorator('menuName')(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col md={8} sm={24}>
              <FormItem label="代码">
                {getFieldDecorator('status')(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col md={8} sm={24}>
              <FormItem label="更新日期">
                {getFieldDecorator('date')(
                  <DatePicker style={{ width: '100%' }} placeholder="请输入更新日期" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={8} sm={24}>
              <FormItem label="权限">
                {getFieldDecorator('authority')(
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    <Option value="admin">admin</Option>
                    <Option value="user">user</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ overflow: 'hidden' }}>{this.renderBtn()}</div>
        </Form>
      </div>
    );
  }

  // 表单渲染
  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  // 查看
  handlerView(r) {
    this.setState({ curItem: r, viewVisable: true });
  }

  columns = [
    {
      title: this._getMsg('MENU_NAME') || '菜单名称',
      dataIndex: 'menuName',
    },
    {
      title: this._getMsg('CODE') || '代码',
      dataIndex: 'menuCode',
      sorter: true,
    },
    {
      title: 'URL',
      dataIndex: 'url',
      sorter: true,
      align: 'right',
      // render: val => `${val} 万`,
      // mark to display a total number
      // needTotal: true,
    },
    {
      title: 'ICON',
      dataIndex: 'icon',
      // onFilter: (value, record) => record.status.toString() === value,
      render(val) {
        return <Icon type={val || 'setting'} />;
      },
    },
    {
      title: '前段权限',
      dataIndex: 'authority',
      // onFilter: (value, record) => record.status.toString() === value,
      // render(val) {
      //   return <Badge status={statusMap[val]} text={status[val]} />;
      // },
      // sorter: true,
      // render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: this._getMsg('OPERARE_COL') || '操作',
      render: (t, r, i) => (
        <Fragment>
          <a href="">删除</a>
          <Divider type="vertical" />
          <a href="">修改</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" onClick={() => this.handlerView(r)}>
            查看
          </a>
        </Fragment>
      ),
    },
  ];

  render() {
    const {
      dataModal: { list = [], pagination = {}, selectedRows = [] },
      loading,
    } = this.props;

    const { viewVisable, curItem } = this.state;

    const data = {
      list,
      pagination,
    };

    return (
      <PageHeaderLayout refs="cc">
        <div className={styles.contentInner}>
          {this.renderForm()}
          <div className={styles.tableListOperator}>
            <Btns.add onClick={() => this.handlerOpe('add')} />
            <Btns.del
              onClick={() => this.handlerOpe('delete')}
              disabled={selectedRows.length == 0}
            />
          </div>
          <StandardTable
            selectedRows={selectedRows}
            loading={loading}
            data={data}
            columns={this.columns}
            onSelectRow={this.handleSelectRows}
            onChange={this.handleStandardTableChange}
          />
        </div>
        <Viewer
          open={viewVisable}
          onMaskClick={() => {
            this.setState({ viewVisable: false });
          }}
        >
          <ViewFrom curItem={curItem} />
        </Viewer>
      </PageHeaderLayout>
    );
  }
}
