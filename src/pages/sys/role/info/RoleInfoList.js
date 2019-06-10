/**
 * @description 角色管理和菜单公用一个model
 * @author wennn
 * @time 2018.1.9
 */
import React from 'react';
import {
  Table,
  Row,
  Col,
  Form,
  Input,
  Tabs,
  message,
  Icon,
  Button,
  Popover,
  Popconfirm,
  Card,
  Divider,
} from 'antd';
import { Btns, LookUp } from 'components';
import * as roleInfoService from 'services/system/role/info/roleService';
import * as menuInfoService from 'services/system/menu/info/menuService';
import * as userService from 'services/system/userinfo/userinfoService';
import styles from 'routes/common.less';
import FilterForm from 'routes/common/FilterForm/simpleKeyCode';
import ReactDom from 'react-dom';
import { isArray } from 'util';
import RoleInfoTree from './RoleInfoTree';

const FormItem = Form.Item;
const { TabPane } = Tabs;
// const confirm = Modal.confirm
const { Search } = Input;

// 用户tabl
const UserInfoTab = ({ dataSource, intl, pagination }) => {
  const columns = [
    {
      title: intl && intl.get('sys.roleinfo.UserCode'),
      dataIndex: 'userCode',
      key: 'userCode',
      width: 100,
      // render: t => {
      //   return <Tip text={t} max={20} alwaysShow={false} />;
      // },
      align: 'left',
    },
    {
      title: intl && intl.get('sys.roleinfo.UserName'),
      dataIndex: 'userName',
      key: 'userName',
      width: 100,
      // render: t => {
      //   return <Tip text={t} max={20} alwaysShow={false} />;
      // },
      align: 'left',
    },

    {
      title: intl && intl.get('sys.roleinfo.UnitName'),
      dataIndex: 'unitName',
      key: 'unitName',
      width: 100,
      // render: t => {
      //   return <Tip text={t} max={8} alwaysShow={false} />;
      // },
      align: 'left',
    },
    {
      title: intl && intl.get('sys.roleinfo.EntityName'),
      dataIndex: 'entityName',
      key: 'entityName',
      width: 100,
      // render: t => {
      //   return <Tip text={t} max={8} alwaysShow={false} />;
      // },
      align: 'left',
    },
  ];

  const tableProps = {
    columns,
    dataSource,
    size: 'small',
    rowKey: 'id',
    pagination,
  };

  return (
    <div className={styles.roleCon}>
      <Table {...tableProps} />
    </div>
  );
};

class RoleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // 选择项
      dataSource: [], // 角色列表
      record: {}, // 当前选择项
      tabActiveKey: '', // tab 激活面板
      treeJson: [], //  菜单所有项
      userLookupVisble: false,
      menuCheckedKeys: [], // 菜单选择项
      menuHalfCheckedKeys: [], // 菜单半选择
      userDataSource: [], // 用户菜单
      userDelIds: [], // 用户删除项目
      menuDelIds: [], // 菜单删除项目
      fetchDataPage: {
        pageNo: 1,
        pageSize: 10,
      },
      pagination: {
        current: 1,
        size: 'small',
      },
      // currentRoleNum: 1,
      currentNum: 1,
      keyCode: '',
    };
  }

  // 角色和菜单信息初始化
  componentDidMount = () => {
    this.fetchData();
    this.fetchTreeJson();
  };

  // 获取所有的上级节点
  getParentIds(item, expandedKeys) {
    const { treeJson } = this.state;
    const { mpid } = item;
    if (mpid && mpid !== '' && mpid !== '-1') {
      expandedKeys.push(`${mpid}`);
      this.getParentIds(treeJson[mpid], expandedKeys);
    }
  }

  fillForm = ({ role = {}, users = [], menuIds = [] }) => {
    const { form } = this.props;
    const { roleName = '', roleCode = '', remark = '' } = role;
    const { setFieldsValue } = form;
    setFieldsValue({ roleName, roleCode, remark });
    this.setState({
      record: role,
      userDataSource: users,
      menuCheckedKeys: menuIds,
    });
  };

  // 通过角色id获取角色，可用菜单，用户信息
  fetchDataRoleInfo = roleId => {
    if (!roleId) {
      return;
    }
    roleInfoService.queryRoleInfo({ roleId }).then(data => {
      const { code, datas } = data;
      if (code === '200') {
        this.fillForm(datas);
      } else {
        this.fillForm({});
      }
    });
  };

  // table的 排序和选效果
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState(
      {
        pagination: pager,
        fetchDataPage: {
          pageSize: pagination.pageSize || 10,
          pageNo: pagination.current || 1,
          sortName: sorter.field,
          sort: sorter.order,
          ...filters,
        },
      },
      () => {
        this.fetchData();
      }
    );
  };

  // 选择左边的角色
  handlerTableonChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      userDataSource: [],
      currentNum: 1,
    });
    const { id } = selectedRows[0];
    this.setState({
      selectedRowKeys,
      record: selectedRows[0],
    });

    if (id) {
      this.fetchDataRoleInfo(selectedRowKeys[0]);
    } else {
      this.fillForm({ role: selectedRows[0] });
    }
  };

  // 加载角色信息
  fetchData = () => {
    const { fetchDataPage, keyCode } = this.state;
    const param = { keyCode, ...fetchDataPage };
    roleInfoService.listByDto(param).then(data1 => {
      const { data = [] } = data1;
      const { pagination } = this.state;
      pagination.total = data1.total || pagination.total;
      const dataSource = data.map(it => {
        it.itemid = it.id;
        return it;
      });
      this.setState({
        dataSource,
        pagination,
      });
    });
  };

  // 查询
  // handleSubmit = param => {
  //   const { fetchDataPage, pagination } = this.state;
  //   const keyCode = param;
  //   roleInfoService.listByDto({ keyCode, ...fetchDataPage }).then(data => {
  //     const datas = data.data;
  //     if (Array.isArray(datas)) {
  //       const dataSource = datas.map(it => {
  //         it.itemid = it.id;
  //         return it;
  //       });
  //       pagination.total = data.total || pagination.total;
  //       this.setState({
  //         dataSource,
  //         pagination,
  //       });
  //     }
  //   });
  // };

  // 查询树结构数据
  fetchTreeJson = () => {
    const { intl } = this.props;
    this.setState({ loading: true });
    menuInfoService.queryMenuData({}).then(
      data => {
        const { code, datas } = data;
        if (code === '200') {
          const treeJson = {};
          datas.forEach(it => {
            treeJson[`${it.id}`] = it;
          });
          this.setState({ treeJson }); // && this.props.form.resetFields()
        }
      },
      () => {
        message.error(intl && intl.get('LoadFailed'));
      }
    );
  };

  // 新增按钮
  handlerAddRole = () => {
    const { dataSource = [] } = this.state;
    const item = {};
    item.itemid = dataSource.length + 1;
    item.roleName = item.itemid;
    item.roleCode = item.itemid;
    dataSource.unshift(item);
    this.setState({ dataSource, record: item, selectedRowKeys: [item.itemid] });
    this.fillForm({ role: item });
  };

  // 删除记录
  handlerDelete = r => {
    const { intl } = this.props;
    if (!r.id) {
      let { dataSource } = this.state;
      dataSource = dataSource.filter(item => r.itemid !== item.itemid);
      this.setState({
        dataSource,
        selectedRowKeys: [], // 角色选择项
        menuCheckedKeys: [], // 菜单选择项
        menuHalfCheckedKeys: [], // 菜单半选择
        userDelIds: [], // 用户删除
        menuDelIds: [], // 菜单删除项
      });
      this.fillForm({});
    } else {
      this.fetchDataRoleInfo(r.id);
      const { menuCheckedKeys, userDataSource } = this.state;
      if (menuCheckedKeys.length === 0 && userDataSource.length === 0) {
        roleInfoService.delRoleInfo(r.id).then(data => {
          const { code } = data;
          if (code === '200') {
            this.setState({
              selectedRowKeys: [], // 角色选择项
              menuCheckedKeys: [], // 菜单选择项
              menuHalfCheckedKeys: [], // 菜单半选择
              userDelIds: [], // 用户删除
              menuDelIds: [], // 菜单删除项
            });
            this.fetchData();
            this.fillForm({});
            message.success(intl && intl.get('DeletedSuccessed'));
          }
        });
      } else {
        message.error(intl && intl.get('DeleteDatasource'));
      }
    }
  };

  // 删除用户
  handlerDelUser = id => {
    let { userDataSource } = this.state;
    const { userDelIds } = this.state;
    userDataSource = userDataSource.filter(it => {
      return it.id !== id;
    });
    id && !userDelIds.some(it => it == id) && userDelIds.push(id);
    this.setState({ userDataSource, userDelIds });
  };

  // 新增用户信息
  handlerAddUser = () => {
    this.setState({ userLookupVisble: true });
  };

  // 保存
  handlerSave = () => {
    const { form } = this.props;
    const { validateFields } = form;
    validateFields((err, value) => {
      if (!err) {
        const {
          record,
          menuCheckedKeys,
          menuHalfCheckedKeys,
          menuDelIds,
          userDataSource = [],
          userDelIds,
        } = this.state;
        const role = { ...record, ...value };

        role.menuAddIds = menuCheckedKeys.concat(menuHalfCheckedKeys);
        role.menuDelIds = menuDelIds.filter(mId => {
          return !role.menuAddIds.includes(mId);
        });
        role.userAddIds = userDataSource.map(it => it.id);
        role.userDelIds = userDelIds.filter(uId => {
          return !role.userAddIds.includes(uId);
        });

        roleInfoService.saveOrUpdateRoleInfo(role).then(data => {
          const { code, datas = [] } = data;
          if (code === '200') {
            const { intl } = this.props;
            this.fetchData();
            this.setState({
              record: datas,
              menuDelIds: [],
            });
            message.success(intl && intl.get('SaveSuccessed'));
          }
        });
      }
    });
  };

  // 查询filter
  // handleFilter = () => {
  //   const filterProps = {
  //     handleSubmit: this.handleSubmit,
  //   };
  //   return <FilterForm {...filterProps} key="a" />;
  // };

  // 用户列表
  changePage = page => {
    this.setState({ currentNum: page });
  };
  // 角色列表
  changeRolePage = page => {
    let { pagination } = this.state;
    pagination.current = page;
    this.setState({ pagination });
  };

  // 查询
  handleSearch = keyCode => {
    let { fetchDataPage, pagination } = this.state;
    fetchDataPage.pageNo = 1;
    pagination.current = 1;
    this.setState({ keyCode, fetchDataPage, pagination }, () => {
      this.fetchData();
    });
  };

  render() {
    const { intl, form } = this.props;
    const { getFieldDecorator } = form;
    const {
      selectedRowKeys,
      treeJson = {},
      dataSource = [],
      menuCheckedKeys = [],
      menuHalfCheckedKeys = [],
      userLookupVisble = false,
      record = {},
      pagination,
      tabActiveKey,
    } = this.state;
    let { userDataSource = [], currentNum} = this.state;

    const columns = [
      {
        title: intl && intl.get('RoleName'),
        dataIndex: 'roleName',
        key: 'roleName',
        width: 120,
      },
      {
        title: intl && intl.get('RoleCode'),
        dataIndex: 'roleCode',
        key: 'roleCode',
        align: 'center',
        width: 60,
      },
      {
        title: intl && intl.get('Operation'),
        dataIndex: 'operation',
        key: 'operation',
        width: 60,
        align: 'center',
        render: (t, r) => {
          return (
            <Popconfirm
              title={intl && intl.get('delConfirm')}
              okText={(intl && intl.get('Yes')) || 'Yes'}
              cancelText={(intl && intl.get('No')) || 'No'}
              onConfirm={() => {
                this.handlerDelete(r);
              }}
            >
              <a href="javascript:;">
                <Icon style={{ fontSize: '20px' }} type="delete" />
              </a>
            </Popconfirm>
          );
        },
      },
    ];
    // 角色列表
    const tableProps = {
      columns,
      dataSource,
      rowSelection: {
        type: 'radio',
        selectedRowKeys,
        onChange: this.handlerTableonChange,
      },
      // size: 'small',
      // rowKey: 'itemid', // 旧
      // pagination: { current: currentRoleNum, onChange: this.changeRolePage },
      rowKey: 'id',
    };

    // 用户列表属性
    const userTableProps = {
      intl,
      dataSource: userDataSource,
      handlerDelUser: this.handlerDelUser,
      pagination: { current: currentNum, onChange: this.changePage },
    };

    // 树列表属性
    const treeListProps = {
      treeJson: Object.values(treeJson),
      // checkedKeys: menuCheckedKeys,
      checkedKeys: {
        checked: menuCheckedKeys,
        halfChecked: menuHalfCheckedKeys,
      },
      // checkStrictly: true,
      onCheck: (checkedKeys, { checked, halfCheckedKeys = [] }) => {
        let { menuDelIds } = this.state;
        if (!checked) {
          const nowKeys = checkedKeys.concat(halfCheckedKeys);
          const dels = menuCheckedKeys.concat(menuHalfCheckedKeys).filter(it => {
            return !nowKeys.includes(it) && !menuDelIds.includes(it);
          });
          menuDelIds = menuDelIds.concat(dels);
        }
        this.setState({
          menuCheckedKeys: checkedKeys,
          menuHalfCheckedKeys: halfCheckedKeys,
          menuDelIds,
        });
      },
    };
    // 当前选择角色id
    const userId = userDataSource.map(it => it.id).join(',');
    // 用户选择lookup
    const userLookupProps = {
      title: (intl && intl.get('ChoseUser')) || '选择用户', // 弹出框标题 非必填
      type: 'checkbox', // 单选还是多选 默认单选 radio
      dataKey: 'datas',
      visible: userLookupVisble, // 是否显示弹框  必填（自己维护）
      width: 900, // 弹出框宽度  非必填
      height: 100, // 弹出框高度 非必填
      condition: {
        inputItems: [
          // 用于条件框 目前只支持input
          { key: 'userName', label: intl && intl.get('UserName'), span: '8' },
        ],
        initParam: { userId }, // 传入的条件
      },
      remoteFunc: userService.queryUserInfoNotInId, // 对应远程服务的方法 （后台service的list方法） 必填
      columns: [
        // 表的显示的列表   必填
        {
          title: (intl && intl.get('UserName')) || '用户名称',
          dataIndex: 'userName',
          key: 'userName',
          width: 150,
        },
        {
          title: (intl && intl.get('UserCode')) || '用户代码',
          dataIndex: 'userCode',
          key: 'userCode',
          width: 150,
        },
      ],
      onOk: selects => {
        // 点击确认后回调的参数
        const sStr = selects
          .map(it => {
            return it.id;
          })
          .join(',');
        userDataSource = userDataSource.filter(it => {
          return sStr.indexOf(`${it.id}`) === -1;
        });
        userDataSource = userDataSource.concat(selects);
        this.setState({ userLookupVisble: false, userDataSource });
      },
      onCancel: () => {
        this.setState({ userLookupVisble: false });
      }, // 点击取消后的事件
    };
    // const btns = <Btns.add onClick={this.handlerAddRole} className="treeBtn" />;

    const btns = (
      <div id="pop">
        {' '}
        <Popover
          placement="bottomRight"
          content={intl && intl.get('New')}
          getPopupContainer={function() {
            return ReactDom.findDOMNode(document.getElementById('pop'));
          }}
        >
          <Button type="primary" icon="plus" onClick={this.handlerAddRole} className="treeBtn" />
        </Popover>
      </div>
    );
    const searchdiv = (
      <Search
        // placeholder={(intl && intl.get('RoleInfo')) || '角色信息'}
        style={{ marginRight: '8px' }}
        // enterButton
        onSearch={value => {
          // this.handleSubmit(value);
          this.handleSearch(value);
        }}
      />

      // <div>
      //   <Row>
      //     <Col>
      //       <FormItem>
      //         {getFieldDecorator('roleName')(<Input placeholder={intl && intl.get('RoleInfo')} />)}
      //       </FormItem>
      //     </Col>
      //     <Col>
      //       <Btns.search onClick={this.handleSubmit()} text={intl && intl.get('Search')} />
      //       {/* <Btns.reset onClick={this.handleReset} text={intl && intl.get('Reset')} /> */}
      //     </Col>
      //   </Row>
      // </div>
    );
    return (
      <div className={styles.treeWrap}>
        <Row>
          <Col span={11}>
            <Card title={searchdiv} bordered={false} extra={btns}>
              {/* {this.handleFilter()} */}
              <Table
                {...tableProps}
                showHeader
                onChange={this.handleTableChange}
                pagination={pagination}
                className={styles.roleCon}
              />
            </Card>
          </Col>
          <Col span={1}>
            <Divider type="vertical" className={styles.fullDri} />
          </Col>
          <Col span={12}>
            <Tabs
              key="role_tab_2165412315485"
              defaultActiveKey="1"
              tabPosition="top"
              onChange={() => {
                this.setState({ tabActiveKey });
              }}
            >
              <TabPane tab={(intl && intl.get('BaseInfo')) || '基本信息'} key="role_tab_1">
                <Form>
                  <Row>
                    <Col span={24}>
                      <FormItem label={intl && intl.get('RoleName')} key="item_roleName">
                        {getFieldDecorator('roleName', {
                          initialValue: record.roleName,
                          rules: [{ required: true, message: intl && intl.get('Require') }],
                        })(<Input />)}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <FormItem label={intl && intl.get('RoleCode')} key="item_roleCode">
                        {getFieldDecorator('roleCode', {
                          initialValue: record.roleCode,
                          rules: [{ required: true, message: intl && intl.get('Require') }],
                        })(<Input />)}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <FormItem label={intl && intl.get('Remark')} key="item_remark">
                        {getFieldDecorator('remark', {
                          initialValue: record.remark,
                        })(<Input />)}
                      </FormItem>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
              <TabPane tab={(intl && intl.get('MeunPower')) || '菜单权限'} key="role_tab_2">
                <div key="main" className={styles.treeWrap}>
                  <RoleInfoTree {...treeListProps} />
                </div>
              </TabPane>
              <TabPane tab={(intl && intl.get('EmpowerUser')) || '授权用户'} key="role_tab_3">
                <UserInfoTab {...userTableProps} />
              </TabPane>
            </Tabs>
            <div className={styles.btnBar}>
              {tabActiveKey === 'role_tab_3' ? (
                ''
              ) : (
                <Btns.save
                  disabled={selectedRowKeys.length < 1}
                  text={(intl && intl.get('Save')) || '保存'}
                  key="save_btn"
                  onClick={this.handlerSave}
                />
              )}
            </div>
          </Col>
        </Row>
        <LookUp {...userLookupProps} />
      </div>
    );
  }
}

export default Form.create()(RoleList);
