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
import MenuInfoStore from '@/stores/sys/sm/menu/MenuInfoStore';
import { InputH, InputNumberH } from '@/components/FormMark';
import { Btns, Iconfont, AutoRow, Intler,MPCConfirm } from '@/components';
import { IconItems } from '@/utils/app.const';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from '@/pages/common.less';
import { observer } from 'mobx-react';
import MenuInfoTree from './MenuInfoTree';

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
  formFields =["id","itemid","parentId","menuName","menuCode","parentName","taxisNo","icon","url","remark"];

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
    item.parentName = item.parentId && menuMap[item.parentId] ? menuMap[item.parentId].menuName : '';
    console.log(item)
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
    const { checkedKeys, selectRow, fetchTreeJson,searchValue } = this.menuInfoStore;

    const btns = ( 
      <Btns.Group className={styles.treeBtn}>
        <Button type="primary" onClick={() => this.handleAddTreeNode()} icon="plus" />
        <MPCConfirm
          type="del"
          disabled={this.menuInfoStore.checkedKeys.length < 1}
          onConfirm={() => this.handleDel()}
        > 
          <Button disabled={this.menuInfoStore.checkedKeys.length < 1} type="primary" icon="delete" />
        </MPCConfirm>
        <Button type="primary" onClick={() => fetchTreeJson()} icon="retweet" />
      </Btns.Group> 
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
      <PageHeaderWrapper>
        <div className={styles.contentLayout}>
          <div className={styles.treeWrap}>
            <Row>
              <Col span={6}>
                <Card
                  loading={this.menuInfoStore.loading}
                  title={
                    <Input disabled={this.menuInfoStore.loading} value={searchValue} placeholder={Intler.getIntl('common.search.keyword')} onChange={this.onChange} />
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
                  title={Intler.getIntl('menu.info.title.basicinfo')}
                  disabled
                  bordered={false}
                >
                  {/* 设置的隐藏域 */}
                  <InputH id="id" hidden form={form} />
                  <InputH id="itemid" hidden form={form} />
                  <InputH id="parentId" hidden form={form} />
                  {/* 显示区域 */}
                  <AutoRow {...autRowProps}>
                    <InputH label={Intler.getIntl('menu.info.menuName')} id="menuName" {...comFormProps} />
                    <InputH label={Intler.getIntl('menu.info.menuCode')} id="menuCode" {...comFormProps} />
                  </AutoRow>
                  <AutoRow {...autRowProps}>
                    <InputH
                      label={Intler.getIntl('menu.info.parentName')}
                      id="parentName"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                      options={{ disabled: true }}
                    />
                    <InputNumberH
                      label={Intler.getIntl('menu.info.taxisNo')}
                      id="taxisNo"
                      style={{width:'100px'}}
                      options={{style:{width:'100%'}}}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <AutoRow>
                    <FormItem label={Intler.getIntl('menu.info.icon')}>
                      {getFieldDecorator('icon', {
                      })(
                        <Input
                          disabled={!this.menuInfoStore.selectRow}
                          suffix={
                            this.menuInfoStore.selectRow && (
                              <Popover
                                content={
                                  <ChoseIcon key="ChoseIcon" item={IconItems} handleChoseIcon={this.handlerIcon} />
                                }
                                title={Intler.getIntl('menu.info.icon')}
                              >
                                <Icon type="picture" />
                              </Popover>
                            )
                          }
                          prefix={<Iconfont type={(selectRow&&selectRow.icon) || 'setting'} />}
                          onChange={this.handlerIconInput}
                        />
                      )}
                    </FormItem>
                  </AutoRow>
                  <AutoRow colProps={{ span: 24 }}>
                    <InputH
                      label={Intler.getIntl('menu.info.path')}
                      id="url"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <AutoRow colProps={{ span: 24 }}>
                    <InputH
                      label={Intler.getIntl('menu.info.remark')}
                      id="remark"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <div className={styles.btnBar}>
                    <Btns.save onClick={this.handleSave} disabled={!selectRow} />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(MenuInfoEdit);
