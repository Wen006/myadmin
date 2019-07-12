/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React from 'react'
import lodash from 'lodash'

export default (CellName,CellCofig)=>{
  
    console.log("Create cell >> ",CellName);

    return class EditCell extends React.Component{
        
        eleDefaultProps = {}
        
        constructor(props) {
            super(props);
            const { value, node, column, config = {} } = props;
            const { modalKey,observable,observer, onChange, fieldOptions = {} } = config;

            const { defaultProps={}, initState=_=>_, setValue=_=>_, getValue=_=>_, ele,afterGuiAttached } = CellCofig;

            this._setValue = setValue;
            this._getValue = getValue;
            this._ele = ele
            this._afterGuiAttached = afterGuiAttached;
            lodash.assign(this.eleDefaultProps,defaultProps);
            this.node = node;
            this.column = column;
            this.modalKey = modalKey || this.column.colId;
            
            this.observable = observable;
            this.observer  = observer;
            this.fieldOptions = fieldOptions;
            this.onChange = onChange||fieldOptions.onChange
        
            this.state = {
              value,
            };
          }
        
          componentDidMount(){
            if(this.observable){ 
              const that = this 
              this.observable.subscribe(obj=>{
                  if(lodash.isObject(obj)){
                    if(`${that.modalKey}` in obj){
                        that.setValue(obj[that.modalKey]);
                    }
                  } else {
                    that.setValue(obj);
                  }
              })
            }
          }
        
          // 创建后 聚焦
          afterGuiAttached = () => {
            if(this._afterGuiAttached) this._afterGuiAttached();
            this.inputRef.focus();
          };
        
          getValue = () => { 
            return this._getValue(this.state.value);
          };
        
          setValue = proxy => { 
            const value = this._setValue(proxy);
            if(this.onChange){
               this.onChange(value);
            }
            this.setState({ value });
          };
        
        
          render() {
            const { value } = this.state; 

            const nProps = {
              ...this.eleDefaultProps,
              ...this.fieldOptions,
              onChange: proxy => { 
                this.setValue(proxy);
              },
            };  
            return React.createElement(
                this._ele,
                {
                    ref:ref => {
                        this.inputRef = ref;
                    },
                    style:{ width: '100%' },
                    value,
                    ...nProps,
                }
            )
        }
    }
}