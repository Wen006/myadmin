import React, { Fragment } from 'react'
import { Intler,MPCConfirm, Btns } from '@/components'
import AgGridPro from '@/components/AgGrid/AgGridPro'
import { Icon } from 'antd'

export default class AuthUser extends React.Component{

    columnDefs = [
        {
          headerName: Intler.getIntl('sm.user.userCode'),
          field: 'userCode',
          align: 'left',
          cellRenderer: 'infoCellRenderer',
        },
        {
          headerName: Intler.getIntl('sm.user.userName'),
          field: 'userName',
          align: 'left',
        },
        {
          headerName: Intler.getIntl('sm.user.unitName'),
          field: 'unitName',
          align: 'left',
        },
        {
          headerName: Intler.getIntl('sm.user.entityName'),
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
            // toolPanel:()=>(<div>
            //     <Btns.add />
            // </div>),
            fetch: {
                queryKey: 'SYS_USER_LIST_BY_ROLE', // 后台api配置
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