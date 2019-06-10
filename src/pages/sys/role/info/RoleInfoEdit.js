/**
 * @description 菜单编辑
 * @author wennn
 * @time 2018.1.9
 */
import React from 'react';
import { Row, Col, message, Spin, Card, Form, Input, Icon, Tag, Popconfirm } from 'antd';
import { Btns } from 'components';
// import MenuInfoTree from './MenuInfoTree'
import * as menuInfoService from 'services/system/menu/info/menuService';

const FormItem = Form.Item;

const iconItems = [
  { name: 'area-chart', value: 'area-chart' },
  { name: 'dot-chart', value: 'dot-chart' },
  { name: 'setting', value: 'setting' },
  { name: 'desktop', value: 'desktop' },
  { name: 'code', value: 'code' },
  { name: 'book', value: 'book' },
  { name: 'credit-card', value: 'credit-card' },
];

// 选择图标
const ChoseIcon = ({ item, handleChoseIcon }) => {
  const itemTag = [];
  item.forEach((it, index) => {
    itemTag.push(
      <Tag.CheckableTag
        onChange={() => {
          handleChoseIcon(it);
        }}
      >
        <Icon type={it.name} />
      </Tag.CheckableTag>
    );
    if ((index + 1) % 4 === 0) {
      itemTag.push(<br />);
    }
  });
  return <div style={{ height: 120 }}>{itemTag}</div>;
};

const gData = [];

class MenuInfoEdit extends React.Component {
  constructor(props) {
    super(props);
    const { selectRows = [] } = this.props;
    const selectRow = (selectRows && selectRows[0]) || {};
    selectRow.itemid = selectRow.id || '';
    this.state = {
      treeJson: {}, // 编辑页面左侧树
      gData,
      selectRow,
      checkedKeys: [],
      expandedKeys: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchTreeJson();
  }

  onDragEnter = info => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = info => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        // drag node and drop node in the same level
        // and drop to the last node
        if (dragKey.length === dropKey.length && ar.length - 1 === i) {
          i += 2;
        }
        ar.splice(i - 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    });
  };

  onRightClick = (event, node) => {
    console.log(event, node);
  };

  // 查询树结构数据
  fetchTreeJson = () => {
    const { selectRow } = this.state;
    this.setState({ loading: true });
    menuInfoService.queryMenuData({}).then(
      data => {
        const { code, datas } = data;
        const treeJson = {};
        datas.forEach(it => {
          it.itemid = it.id;
          treeJson[it.itemid] = it;
        });
        if (code === '200') {
          this.setState({ treeJson, loading: false, checkedKeys: [] }); // && this.props.form.resetFields()
          if (selectRow) this.fillForm(selectRow);
        }
      },
      error => {
        this.setState({ loading: false });
        message.error('数据查询失败');
      }
    );
  };

  // 提交保存
  handleSave = () => {
    const { form } = this.props;
    const { validateFields } = form;
    validateFields((errors, values) => {
      if (!errors) {
        const { treeJson } = this.state;
        values.id = values.id || new Date().getTime(); // 这里模拟后台保存成功
        treeJson[values.itemid] = values;
        this.setState({ treeJson, selectRow: values });
        message.success('保存成功！');
      }
    });
  };

  // form 筛值
  fillForm = selectRow => {
    const { form } = this.props;
    const { menuName, menuCode, icon, remark, id, itemid, taxisNo, bpid, mpid } = selectRow;
    let item = { menuName, menuCode, icon, remark, id, itemid, taxisNo, bpid, mpid };
    const { treeJson, expandedKeys } = this.state;
    item = item || {};
    item.mpName = item.mpid && treeJson[item.mpid] ? treeJson[item.mpid].menuName : '';
    item.bpName = item.bpid && treeJson[item.bpid] ? treeJson[item.bpid].menuName : '';
    const { setFieldsValue } = form;
    if (!expandedKeys.some(it => it.itemid === item.itemid))
      expandedKeys.push(`${item.itemid}`) && this.setState({ expandedKeys });
    setFieldsValue && setFieldsValue(item);
  };

  handleAddTreeNode = () => {
    const { selectRow, treeJson, expandedKeys } = this.state;
    const editNode = {
      bpid: 0,
      mpid: -1,
      icon: 'setting',
      menuCode: '',
      menuName: '',
      remark: null,
      taxisNo: 0,
      url: '#',
    };
    editNode.itemid = new Date().getTime();
    editNode.id = editNode.id || '';
    editNode.menuCode = editNode.itemid;
    editNode.menuName = editNode.menuCode;
    if (selectRow === '') {
      editNode.bpid = 0;
      editNode.mpid = -1;
    } else {
      editNode.bpid = selectRow.itemid;
      editNode.mpid = selectRow.itemid;
    }

    // 新增保存一条随机值
    // menuInfoService.saveOrUpdate(editNode).then((data)=>{
    //   const {code,datas} = data
    //   if(code == '200'){

    //   }
    // })
    treeJson[editNode.itemid] = editNode;
    if (expandedKeys.join(',').indexOf(selectRow.itemid) === -1)
      expandedKeys.push(`${selectRow.itemid}`); // 指定展开项
    this.fillForm(editNode);
    this.setState({ treeJson, selectRow: editNode, checkedKeys: [], expandedKeys });
  };

  handleDel = () => {
    const { checkedKeys } = this.state;
    const { showLoading } = this.props;
    showLoading && showLoading(true);
    checkedKeys.push(1);
    checkedKeys.push(3);
    checkedKeys.push(2);
    menuInfoService.remove(checkedKeys.join(',')).then(
      data => {
        showLoading && showLoading(false);
        const { code, datas } = data;
        if (code === '200') {
          message.success('删除成功！');
          this.setState({ checkedKeys: [] }) && this.fetchTreeJson();
        }
      },
      error => {
        showLoading && showLoading(false);
        message.error('Error');
      }
    );
  };

  render() {
    const { intl, handleChangePage, form } = this.props;
    const { getFieldDecorator } = form;
    const { treeJson, selectRow, checkedKeys, expandedKeys, loading } = this.state;
    const selectedKeys = (selectRow !== '' && [`${selectRow.itemid}`]) || [];

    const tree = Object.values(treeJson || {});
    const item = selectRow;

    const treeListProps = {
      treeJson: tree,
      onDrop: this.onDrop,
      onDragEnter: this.onDragEnter,
      onRightClick: this.onRightClick,
      onCheck: (checkedKeys_, e) => {
        this.setState({ checkedKeys: checkedKeys_ });
      },
      expandedKeys,
      selectedKeys,
      checkedKeys,
      onExpand: (expandedKeys_, a) => {
        this.setState({ expandedKeys: expandedKeys_ });
      },
      onSelectTreeNode: selectRow_ => {
        this.fillForm(selectRow_);
        this.setState({ selectRow: selectRow_ });
      },
    };

    const btns = (
      <div>
        <a href="javascript:;" onClick={() => this.handleAddTreeNode()}>
          <Icon type="plus" />
        </a>
        &nbsp;&nbsp;
        <Popconfirm
          title="Are you sure？"
          okText="Yes"
          cancelText="No"
          onConfirm={() => this.handleDel()}
          disabled={checkedKeys.length < 1}
        >
          <a href="javascript:;">
            <Icon type="delete" />
          </a>
        </Popconfirm>
        &nbsp;&nbsp;
        <a href="javascript:;" onClick={() => this.fetchTreeJson()}>
          <Icon type="retweet" />
        </a>
      </div>
    );

    return (
      <div>
        <Form>
          <Row>
            {/* 设置的隐藏域 */}
            {getFieldDecorator('id', {})(<Input className='hidden' />)}
            {getFieldDecorator('itemid', {})(<Input className='hidden' />)}
            <Col span={6}>
              <Card title='菜单列表' extra={btns} style={{ width: '100%' }}>
                <Spin spinning={loading}>
                  {/* <MenuInfoTree {...treeListProps} /> */}
                </Spin>
              </Card>
            </Col>
            <Col span={18}>
              <Card title='菜单列表' style={{ width: '100%' }} />
              <Row gutter={8}>
                <Col span={8}>
                  <FormItem label={intl && intl.get('MenuName')}>
                    {getFieldDecorator('menuName', {
                      initialValue: item.menuName,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label={intl && intl.get('MenuCode')}>
                    {getFieldDecorator('menuCode', {
                      initialValue: item.menuCode,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label={intl && intl.get('Icon')}>
                    {getFieldDecorator('icon', {
                      initialValue: item.icon,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input />)}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <FormItem label={intl && intl.get('MpName')}>
                    {getFieldDecorator('mpName', {
                      initialValue: item.mpName,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input disabled />)}
                  </FormItem>
                  {getFieldDecorator('mpid', {})(<Input className='hidden' />)}
                  {getFieldDecorator('bpid', {})(<Input className='hidden' />)}
                  {getFieldDecorator('bpName', {})(<Input className='hidden' />)}
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <FormItem label={intl && intl.get('Url')}>
                    {getFieldDecorator('url', {
                      initialValue: item.url,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label={intl && intl.get('TaxisNo')}>
                    {getFieldDecorator('taxisNo', {
                      initialValue: item.taxisNo,
                      rules: [{ required: true, message: intl && intl.get('Require') }],
                    })(<Input />)}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem label={intl && intl.get('Remark')}>
                  {getFieldDecorator('remark', {
                    initialValue: item.remark,
                    rules: [{ required: true, message: intl && intl.get('Require') }],
                  })(<Input />)}
                </FormItem>
              </Row>
              <div className={styles.btnBar}>
                <Btns.back
                  onClick={() => {
                    handleChangePage('list');
                  }}
                />
                <Btns.save onClick={this.handleSave} />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(MenuInfoEdit);
