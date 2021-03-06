/* eslint-disable react/destructuring-assignment */
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
  Divider,
  Popover,
} from 'antd';
import lodash from 'lodash';
import { observer } from 'mobx-react';
import MenuInfoStore from '@/stores/sys/sm/menu/MenuInfoStore';
import { InputH, InputNumberH } from '@/components/FormMark';
import { Btns, Iconfont, AutoRow, Intler,WConfirm } from '@/components';
import { IconItems } from '@/utils/app.const';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {DefaultField} from '@/pages/common'
import styles from '@/pages/common.less';
import MenuInfoTree from './MenuInfoTree';
import ComLang from '@/pages/common/ComLang';

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
  formFields =["id","deleteFlag","modificationNum","createdBy","createdDate","lastUpdBy","lastUpdDate","originApp","originFlag","itemid","parentId","menuName","menuCode","parentName","taxisNo","icon","path","remark"];

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
        };
        const langs = this.langApi.validValues()
        if(!langs) return ;
        this.menuInfoStore.saveOrUpdateMenuInfo({...param,langs}).then(data => {
          const { langs:ls,...menuInfo } = data; 
          this.fillForm(menuInfo);
          this.langApi.editLang(langs);
        });
      }
    });
  };

  onSelectTreeNode = (__selectedKeys, info) => {
    const selectRow = this.menuInfoStore.onSelect(__selectedKeys, info);
    if (!selectRow) {
      this.props.form.resetFields();
      this.langApi.editLang([])
      return;
    }
    this.fillForm(selectRow);
    if(selectRow.langs&&selectRow.langs.length > 0){
      this.langApi.editLang(selectRow.langs||[]);
    }else{
      this.langApi.addLang();
    }
  };

  // form 向表单筛值
  fillForm = selectRow => {
    const item = lodash.pick(selectRow, this.formFields);
    const { menuMap } = this.menuInfoStore;
    item.parentName = item.parentId && menuMap[item.parentId] ? menuMap[item.parentId].menuName : '';
    const nExpandedKeys = [].concat(this.menuInfoStore.getExpandedKeys()); 
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
    this.langApi.addLang();
    // 新增的一条记录筛入编辑表单
    this.fillForm(data);
  };

  // 删除主表
  handleDel = () => {
    this.menuInfoStore.deleteMulti(this.menuInfoStore.checkedKeys).then(success => {
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

  langReady = (langApi) =>{
    this.langApi = langApi;
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { selectRow, fetchTreeJson,searchValue } = this.menuInfoStore;

    const btns = ( 
      <Btns.Group className={styles.treeBtn}>
        <Button type="primary" onClick={() => this.handleAddTreeNode()} icon="plus" />
        <WConfirm
          type="del"
          disabled={this.menuInfoStore.checkedKeys.length < 1}
          onConfirm={() => this.handleDel()}
        > 
          <Button disabled={this.menuInfoStore.checkedKeys.length < 1} type="primary" icon="delete" />
        </WConfirm>
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
                  title={Intler.getIntl('sm.menu.title.basicinfo')}
                  disabled
                  bordered={false}
                >
                  {/* 设置的隐藏域 */}
                  <DefaultField form={form} />
                  <InputH id="itemid" hidden form={form} />
                  <InputH id="parentId" hidden form={form} />
                  {/* 显示区域 */}
                  <AutoRow {...autRowProps}>
                    <InputH label={Intler.getIntl('sm.menu.menuName')} id="menuName" {...comFormProps} />
                    <InputH label={Intler.getIntl('sm.menu.menuCode')} id="menuCode" {...comFormProps} />
                  </AutoRow>
                  <AutoRow {...autRowProps}>
                    <InputH
                      label={Intler.getIntl('sm.menu.parentName')}
                      id="parentName"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                      options={{ disabled: true }}
                    />
                    <InputNumberH
                      label={Intler.getIntl('sm.menu.taxisNo')}
                      id="taxisNo"
                      style={{width:'100px'}}
                      options={{style:{width:'100%'}}}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <AutoRow>
                    <FormItem label={Intler.getIntl('sm.menu.icon')}>
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
                                title={Intler.getIntl('sm.menu.icon')}
                              >
                                <Icon type="picture" />
                              </Popover>
                            )
                          }
                          prefix={<Iconfont type={(selectRow&&selectRow.icon) || 'xitongguanli'} />}
                          onChange={this.handlerIconInput}
                        />
                      )}
                    </FormItem>
                  </AutoRow>
                  <AutoRow colProps={{ span: 24 }}>
                    <InputH
                      label={Intler.getIntl('sm.menu.path')}
                      id="path"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <AutoRow colProps={{ span: 24 }}>
                    <InputH
                      label={Intler.getIntl('sm.menu.remark')}
                      id="remark"
                      fieldOptions={{ rules: [] }}
                      {...comFormProps}
                    />
                  </AutoRow>
                  <Row>
                    <ComLang disabled={!selectRow} onReady={this.langReady} />
                  </Row>
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
