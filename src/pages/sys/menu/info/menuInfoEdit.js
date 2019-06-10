/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
/**
 * @description 菜单管理
 * @author zhaor
 * @time 2018.8.15
 *
 * @update 菜单管理重构
 * @time 20190528
 * @author wennn
 */

import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Icon,
  Tag,
  Popconfirm,
  Divider,
  Popover,
} from 'antd';
import lodash from 'lodash';
import MenuInfoStore from 'stores/sys/menu/MenuInfoStore';
import { InputH, InputNumberH } from 'components/FormMark/FormMark';
import { Btns, Iconfont, AutoRow, Intler } from 'components';
import PageHeaderLayout from 'layouts/PageHeaderLayout';
import { iconItems } from 'utils/constParam';
import styles from 'routes/common.less';
import { observer } from 'mobx-react';
import MenuInfoTree from './menuInfoTree';

const FormItem = Form.Item; 

// 选择图标
const ChoseIcon = ({ item, handleChoseIcon }) => {
  const itemTag = [];
  item.forEach((it, index) => {
     
    itemTag.push(
      <Tag.CheckableTag
        key={`tag_${it.name}`}
        onChange={() => {
          handleChoseIcon(it);
        }}
      >
        <Iconfont type={it.name} />
      </Tag.CheckableTag>
    );
    if ((index + 1) % 10 == 0) {
      itemTag.push(<br key={`tag_${it.name}_${index}`} />);
    }
  });
  return <div>{itemTag}</div>;
};

 
@observer
class MenuInfoEdit extends React.Component {
  formFields = [
    'id',
    'itemid',
    'mpid',
    'bpid',
    'bpName',
    'menuName',
    'menuCode',
    'mpName',
    'icon',
    'taxisNo',
    'url',
    'remark',
  ];

  treeProps = [
    'autoExpandParent',
    'onCheck',
    'expandedKeys',
    'selectedKeys',
    'checkedKeys',
    'onExpand',
    'treeJson',
    'searchValue',
  ];

  constructor(props) {
    super(props);

    this.menuInfoStore = new MenuInfoStore();
 
  }

  componentDidMount() {
    this.menuInfoStore.fetchTreeJson({});
  }

  onChange = e => {
    const { value } = e.target;
    this.menuInfoStore.searchValue = value;
    this.menuInfoStore.handleSearch(value)
  }; 

  // 提交保存
  handleSave = () => {
    const { form } = this.props;
    form.validateFields((errors, values) => {
      if (!errors) {
        const param = {
          ...values,
          langDto:[],
        };
        this.menuInfoStore.saveOrUpdateMenuInfo(param).then(data => {
          const { langDto = [], ...menuInfo } = data; 
          this.fillForm(menuInfo);
        });
      }
    });
  };

  onSelectTreeNode = (__selectedKeys, info) => {
    const selectRow = this.menuInfoStore.onSelect(__selectedKeys, info);
    if (!selectRow) {
      this.props.form.resetFields();
      return;
    }
    this.fillForm(selectRow);
  };

  // form 向表单筛值
  fillForm = selectRow => {
    const item = lodash.pick(selectRow, this.formFields);
    const { menuMap, expandedKeys } = this.menuInfoStore;
    item.mpName = item.mpid && menuMap[item.mpid] ? menuMap[item.mpid].menuName : item.mpid;
    item.bpName = item.bpid && menuMap[item.bpid] ? menuMap[item.bpid].menuName : item.mpid;

    const nExpandedKeys = [].concat(expandedKeys);
    const { form } = this.props;
    if (!nExpandedKeys.some(it => it.itemid == item.itemid)) {
      this.menuInfoStore.getParentIds(item, nExpandedKeys);
    }
    item.mpName = item.mpName === -1 ? '' : item.mpName;
    form.setFieldsValue(item);
    this.menuInfoStore.expandedKeys = nExpandedKeys;
  };

  handleAddTreeNode = () => {
    // 向数据集增加一条
    const data = this.menuInfoStore.addTreeNode();
    // 新增的一条记录筛入编辑表单
    this.fillForm(data);
  };

  // 删除主表
  handleDel = () => {
    this.menuInfoStore.deleteMulti(this.menuInfoStore.checkedKeys.join(',')).then(success => {
      if (success) {
        this.props.form.resetFields();
      }
    });
  };

  handlerIcon = ({ name, value }) => {
    const { selectRow } = this.menuInfoStore;
    if (!selectRow) return;
    this.menuInfoStore.selectRow.icon = value;
    this.props.form.setFieldsValue({ icon: value });
  };

  handlerIconInput = e => {
    this.menuInfoStore.selectRow.icon = e.target.value;
  };
 

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { checkedKeys, selectRow: item = {}, fetchTreeJson,searchValue } = this.menuInfoStore;

    const btns = (
      <div>
        <Button.Group className={styles.treeBtn}>
          <Button type="primary" onClick={() => this.handleAddTreeNode()} icon="plus" />
          <Popconfirm
            title={Intler.getIntl('deleteConfirm')}
            okText={Intler.getIntl('Yes')}
            cancelText={Intler.getIntl('No')}
            onConfirm={() => this.handleDel()}
            disabled={checkedKeys.length < 1}
          >
            <Button type="primary" icon="delete" disabled={checkedKeys.length == 0} />
          </Popconfirm>
          <Button type="primary" onClick={() => fetchTreeJson()} icon="retweet" />
        </Button.Group>
      </div>
    );

    //  通用输入标签属性
    const comFormProps = {
      form,
      options:{
        disabled:!this.menuInfoStore.selectRow,
      }
    };

    // 通用布局属性
    const autRowProps = {
      rowProps: { gutter: 8 },
      colProps: { span: 12 },
    };

    return (
      <PageHeaderLayout>
        <div className={styles.contentLayout}>
          <div className={styles.treeWrap}>
            <Row>
              <Col span={6}>
                <Card
                  loading={this.menuInfoStore.loading}
                  title={
                    <Input disabled={this.menuInfoStore.loading} value={searchValue} placeholder={Intler.getIntl('keyCode')} onChange={this.onChange} />
                  }
                  bordered={false}
                  extra={btns}
                >
                  <MenuInfoTree
                    onSelect={this.onSelectTreeNode}
                    {...lodash.pick(this.menuInfoStore, this.treeProps)}
                  />
                </Card>
              </Col>
              <Col span={1}>
                <Divider type="vertical" className={styles.fullDri} />
              </Col>
              <Col span={17}>
                <Card
                  loading={this.menuInfoStore.loading}
                  title={Intler.getIntl('WpEditTitle')}
                  disabled
                  bordered={false}
                >
                  {/* 设置的隐藏域 */}
                  <InputH id="id" hidden form={form} />
                  <InputH id="itemid" hidden form={form} />
                  <InputH id="mpid" hidden form={form} />
                  <InputH id="bpid" hidden form={form} />
                  <InputH id="bpName" hidden form={form} />
                  {/* 显示区域 */}
                  <AutoRow {...autRowProps}>
                    <InputH label={Intler.getIntl('MenuName')} id="menuName" {...comFormProps} />
                    <InputH label={Intler.getIntl('MenuCode')} id="menuCode" {...comFormProps} />
                    <InputH
                      label={Intler.getIntl('MpName')}
                      id="mpName"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                      options={{ disabled: true }}
                    />
                    <FormItem label={Intler.getIntl('Icon')}>
                      {getFieldDecorator('icon', {
                        initialValue: item.icon,
                      })(
                        <Input
                          disabled={!this.menuInfoStore.selectRow}
                          suffix={
                            this.menuInfoStore.selectRow && (
                              <Popover
                                content={
                                  <ChoseIcon key="ChoseIcon" item={iconItems} handleChoseIcon={this.handlerIcon} />
                                }
                                title={Intler.getIntl('Icon')}
                              >
                                <Icon type="picture" />
                              </Popover>
                            )
                          }
                          prefix={<Iconfont type={item.icon || 'setting'} />}
                          onChange={this.handlerIconInput}
                        />
                      )}
                    </FormItem>
                    <InputNumberH
                      label={Intler.getIntl('TaxisNo')}
                      id="taxisNo"
                      {...comFormProps}
                    />
                  </AutoRow>
                  <AutoRow colProps={{ span: 24 }}>
                    <InputH
                      label={Intler.getIntl('Url')}
                      id="url"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                    <InputH
                      label={Intler.getIntl('Describe')}
                      id="remark"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <div className={styles.btnBar}>
                    <Btns.save onClick={this.handleSave} disabled={!item} />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default Form.create()(MenuInfoEdit);
