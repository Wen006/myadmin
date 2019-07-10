/* eslint-disable no-unused-expressions */
import React from 'react';
import { Form, Card, Icon, Switch } from 'antd';
import { InputH } from '@/components/FormMark';
import { Btns, Intler, AdRender, AutoRow ,Act,MPCConfirm} from '@/components'; 
import AgGrid,{ NumberCell } from '@/components/AgGrid/AgGrid'
import styles from '@/pages/common.less';    
import { DefaultField } from '@/pages/plugins';
import { getNowTime } from '@/utils/util.date'
import { toPromise } from '@/utils/utils'
import lodash from 'lodash' 
import Navigator from '@/stores/common/Navigator';
import AdLovlistStore from '@/stores/sys/ad/lovlist/AdLovlistStore';
import { observer } from 'mobx-react';


const getIntl = _ => Intler.getIntl(`ad.${_}`)

@observer
class EditForm extends React.Component {

  formField = ["id","deletedFlag","modificationNum","createdBy","createdDate","lastUpdBy","lastUpdDate","originApp","originFlag","listCode","listName"];
 
  constructor(props) {
    super(props);  
    const { view,form } = props
    this.form = form; 
    this.view = view;
    this.adLovlistStore = new AdLovlistStore();

    const editable = !this.view;

    this.columnDefs = [
      {
        headerName: getIntl('lovcode.lovCode'),
        field: 'lovCode',
        align: 'left',
        editable,
        // required: true,
        cellRenderer: 'infoCellRenderer',
      },
      {
        headerName: getIntl('lovcode.lovName'),
        field: 'lovName',
        editable,
        required: true,
        valid:(value,data,field)=>{ // 自定义属性
          console.log(value,data,field)
          return (value+"").includes("2222");
          // return false;
        },
        align: 'left',
      },
      {
        headerName: getIntl('lovcode.seqNum'),
        field: 'seqNum',
        editable,
        cellEditorFramework: NumberCell,
        cellEditorParams:{
          config:{min:0}
        },
        align: 'left',
      },
      {
        headerName: getIntl('lovcode.activeFlag'),
        field: 'activeFlag',
        align: 'left',
        editable,
        cellRenderer: 'usingRenderer',
      },
      {
        headerName: Intler.getIntl('remark'),
        field: 'remark',
        align: 'left',
        editable,
      },
    ];
  
    if(!this.view) this.columnDefs.push({
      headerName: Intler.getIntl('action'),
      field: 'action',
      width: 180,
      cellRenderer: 'actionCellRenderer',
    })
  }

  componentDidMount() { 
    const { record } = this.props
    toPromise(record).then(data=>{
      // this.setFormValues(data);
        this.adLovlistStore.getAdLovInfo(data.id).then(ds=>{
          this.setFormValues(ds);
        })
    })
  } 

  setFormValues = ({detail=[],...values}) =>{
    this.form.setFieldsValue(lodash.pick(values,this.formField));
    setTimeout(()=>this.gridProApi.setDataSource(detail))
  }

  handleAdd = () =>{
    const time = getNowTime();
    this.gridProApi.addItem({
      lovCode:time,
      lovName:time,
      seqNum:0,
      activeFlag:'1',
    }); 
  }

  handleDel = (params) =>{
    this.gridProApi.removeItem(params.data);
  }

  handleSave = () =>{
    // console.log(this.gridProApi.validValues())
   
    this.form.validateFieldsAndScroll((errors,value)=>{
      if (!errors) {
          const ds =  this.gridProApi.validValues();
          if(!ds) return;
          const del = this.gridProApi.getDelItems();

          const params = {
            ...value,
            detail:[...ds,...del],
          }
          this.adLovlistStore.saveAdInfo(params).then(ds=>{
            if(!ds) return;
            this.setFormValues(ds);
          })
      }
    })
       
  }

  render() { 
    const { form } = this.props
    const comFormItemProps = {
      view:this.view,
      form,
    }; 
 
    const agPropPros = {
        onGridReady: (params, {gridProApi}) => {
          this.gridApi = params.api;
          this.gridProApi = gridProApi;
        },
        rowData:[],
        gridOptions: {
          frameworkComponents: {
            adRender: AdRender, 
            usingRenderer:params=><Switch 
              disabled={this.view}
              checkedChildren={Intler.getIntl("switch.open")} 
              unCheckedChildren={Intler.getIntl("switch.close")} 
              defaultChecked={params.data.activeFlag=="1"}
              onChange={(checked)=>{
                params.node.setDataValue("activeFlag",checked?"1":"0");
              }}
            />,
            actionCellRenderer: params =>(<Act><MPCConfirm type="del" onConfirm={this.handleDel.bind(this,params)}><Icon type="delete" /></MPCConfirm></Act>),
          },
        },
      };
    return ( 
      <Form layout="inline" labelAlign="left">
        <Card loading={this.adLovlistStore.loading} bordered={false} hoverable={false}>
          <div className={styles.mainBox}>
            <DefaultField form={form} />
            <AutoRow>
              <InputH label={getIntl("lovlist.listCode")} id="listCode" {...comFormItemProps} />
              <InputH label={getIntl("lovlist.listName")} id="listName" {...comFormItemProps} />
            </AutoRow>
            <Card title={getIntl('lovcode.title')} bordered={false} extra={this.view?null:<Btns.add onClick={this.handleAdd.bind(this) }/>} size="small">
              <AgGrid key="dataGrid" columnDefs={this.columnDefs} {...agPropPros} />
            </Card>
            {
              this.view?null:( 
                <div className={styles.btnBar}> 
                  <Btns.back onClick={()=>{Navigator.goBack();}} />
                  <Btns.save type="primary" onClick={this.handleSave.bind(this)}/>
                </div>
              )
            } 
          </div>
        </Card>
      </Form>
      
    );
  }
}


export default Form.create()(EditForm)