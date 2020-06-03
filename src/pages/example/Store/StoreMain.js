/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React, { Fragment, Children } from 'react';
import { Form, Card, Icon, Switch } from 'antd'; 
import lodash from 'lodash'
import * as Rxjs from 'rxjs'
import { Btns, AdRender ,Act,WConfirm} from '@/components'; 
import { getNow } from '@/utils/util.date' 
import ReactMain from './react'
import ReactMobxMain from './reactmobx'
import ReactReduxMain from './reactredux'
import ReactJsMain from './reactrxjs'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const FFieldSet = ({children}) => Children.map(children,(c)=><Card style={{marginBottom:'5px'}} title={c.type&&c.type.desc} size="small">{c}</Card>)

export default () => <PageHeaderWrapper title="数据store处理方式"><FFieldSet><ReactMain /><ReactMobxMain /><ReactReduxMain /> <ReactJsMain /> </FFieldSet></PageHeaderWrapper>