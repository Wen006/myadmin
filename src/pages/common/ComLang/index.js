/* eslint-disable react/no-unused-state */

import React,{ Component } from 'react' 
import lodash from 'lodash'
import { Card } from 'antd';
import AgGrid from '@/components/AgGrid/AgGrid';
import Intler from '@/components/Intler'
import { languages } from '@/utils/app.conf'
import { Btns } from '@/components';
import styles from './index.less'

const Types = {
    VIEW:'view',
    EDIT:'edit',
    ADD:'add',
}

export default class ComLang extends Component{

    exports = ['addLang','editLang','doInitView','gridApi','agApi','validValues'];

    constructor(props){
        super(props)
        const { type = Types.VIEW } = props
        this.state ={ 
            type,
        }
    } 

    addLang = (initParams={}) =>{
        this.agApi.removeAll();
        lodash.keys(languages).forEach(k=>{
            this.agApi.addItem({
                name:Intler.getIntl(`app.lang.${k}`),
                languageCode:k,
                ...initParams,
            })
        })
        this.setState({type:Types.ADD});
    }


    editLang = ( ds ) =>{
        if(ds){ this.agApi.setDataSource(ds);}
        this.setState({type:Types.EDIT});
    }

    // 回调拿到aggrid的api
    onGridReady = (params) =>{	// 通过aggrid api 进行表格操作
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.agApi = params.agApi

        const { onReady } = this.props
        if(onReady){
          const api = lodash.pick(this,this.exports);
          onReady(api);
        } 
        this.gridApi.sizeColumnsToFit();

    }

    validValues = () => this.agApi.validValues();

    // addRow = () => {
    //     const s = this.agApi.getDataSource();
    //     console.log(s) 
    // }

    render(){
        const { type } = this.state
        const { disabled=false } = this.props
        const editProps = {
            editable:(type !== Types.VIEW),
            required:(type !== Types.VIEW),
        }
        const columnDefs = [
            {headerName:'id',field:'id',hide:true,width:30,checkboxSelection:true},
            {headerName:'keyId',field:'keyId',hide:true},
            {headerName:'名称',field:'name',...editProps},
            {headerName:'语言',field:'languageCode'},
        ]

        return <Card title="语言信息" hoverable={false} bordered={false} className={disabled?styles.hidden:null}>
          <AgGrid
             singleClickEdit        // 单击编辑
             columnDefs={columnDefs}
             onGridReady={this.onGridReady}
           />
        </Card>
    }
}

