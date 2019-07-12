/* eslint-disable no-restricted-globals */
import { Input,InputNumber,DatePicker } from "antd";

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

function getNumValue (value) { 
    return isNumeric(value) ? value : `${value}`.replace(/[^0-9]/gi, '');
};


export default {
    'NumberCell':{
        defaultProps:{
            formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: value => `${value}`.replace(/\$\s?|(,*)/g, ''),
        },
        ele:InputNumber,
        initState:(props)=>{

        },
        getValue: value => {
          return getNumValue(value);
        },
        setValue:(value)=> {
          return (value&&value.target)?value.target.value:value;
        }
    },
    'InputCell':{
        defaultProps:{ },
        ele:Input,
        initState:(props)=>{

        },
        getValue: value => {
          return value;
        },
        setValue:value=> {
          return (value&&value.target)?value.target.value:value;
        }
    },
    'SelectCell':{
      defaultProps:{ },
      ele:Input,
      initState:(props)=>{

      },
      getValue: value => {
        return value;
      },
      setValue:value=> {
        return (value&&value.target)?value.target.value:value;
      }
    },
    'LookupCell':{
      defaultProps:{ },
      ele:Input,
      initState:(props)=>{

      },
      getValue: value => {
        return value;
      },
      setValue:value=> {
        return (value&&value.target)?value.target.value:value;
      }
    },
    'MonthCell':{
      defaultProps:{ },
      ele:Input,
      initState:(props)=>{

      },
      getValue: value => {
        return value;
      },
      setValue:value=> {
        return (value&&value.target)?value.target.value:value;
      }
    },
    'DateCell':{
      ele:DatePicker,
      defaultProps:{ },
      initState:(props)=>{

      },
      getValue: value => {
        return value;
      },
      setValue:value=> {
        return (value&&value.target)?value.target.value:value;
      }
    },
    'SwitchCell':{
      defaultProps:{ },
      ele:Input,
      initState:(props)=>{

      },
      getValue: value => {
        return value;
      },
      setValue:value=> {
        return (value&&value.target)?value.target.value:value;
      }
    }, 
}
