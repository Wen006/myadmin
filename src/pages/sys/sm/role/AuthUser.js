import React, { Fragment } from 'react'
import { Intler,MPCConfirm } from '@/components'
import AgGridPro from '@/components/AgGrid/AgGridPro'
import { Icon } from 'antd'

export default class AuthUser extends React.Component{

    columnDefs = [
        {
          headerName: Intler.getIntl('user.info.userCode'),
          field: 'userCode',
          align: 'left',
          cellRenderer: 'infoCellRenderer',
        },
        {
          headerName: Intler.getIntl('user.info.userName'),
          field: 'userName',
          align: 'left',
        },
        {
          headerName: Intler.getIntl('user.info.unitName'),
          field: 'unitName',
          align: 'left',
        },
        {
          headerName: Intler.getIntl('user.info.entityName'),
          field: 'entityName',
          align: 'left',
        }
    ];

    constructor(props){
        super(props);
        this.roleStore = props.roleStore
    }
    
    componentDidMount(){
        console.log("AuthUser")
       
    }

    onGridReady = (params,agStore) =>{
        this.roleStore.initAuthUser({agStore}) 
    }

    render(){

        const agProps = {
            fetch: {
                queryKey: 'SYS_USER_LIST_BY_DTO', // 后台api配置
                // queryMethod: Promise,                // 也可以自己定义请求方法 Promise对象
            },
            gridOptions: {
                frameworkComponents: {
                    actionCellRenderer: params  => (
                      <MPCConfirm
                        key="del"
                        type="del"
                        onConfirm={() => {
                        this.handleOpe('delete', params.data);
                        }}
                      >
                        <Icon style={{ fontSize: '20px' }} type="delete" />
                      </MPCConfirm> 
                    )
                }
            }
        }

        return(
          <Fragment>
            <AgGridPro 
              columnDefs={this.columnDefs}
              {...agProps}
              onGridReady={this.onGridReady}
              activePanel={false}
            />
          </Fragment>
        )
    }
}