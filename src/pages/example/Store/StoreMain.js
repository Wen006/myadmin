/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React, { Fragment, Children } from 'react';
import { Form, Card, Icon, Switch } from 'antd'; 
import { Btns, AdRender ,Act,MPCConfirm} from '@/components'; 
import { getNowTime } from '@/utils/util.date' 
import * as Rxjs from 'rxjs'
import lodash from 'lodash'
import ReactMain from './react'
import ReactMobxMain from './reactmobx'
import ReactReduxMain from './reactredux'
import ReactJsMain from './reactrxjs'

const FFieldSet = ({children}) => Children.map(children,(c)=><Card style={{marginBottom:'5px'}} title={c.type&&c.type.desc} size="small">{c}</Card>)

export default () => <FFieldSet><ReactMain /><ReactMobxMain /><ReactReduxMain /> <ReactJsMain /> </FFieldSet>