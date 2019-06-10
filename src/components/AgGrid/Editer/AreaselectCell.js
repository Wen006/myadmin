// /*
//  * @Author: wyh 
//  * @Date: 2019-05-22 14:03:13 
//  * @Last Modified by: wyh 
//  * @Last Modified time: 2019-05-22 14:03:13 
//  * @Description: 
//  */
// import React, { Fragment } from 'react';
// import { Areaselect } from 'routes/common';
// import lodash from 'lodash';

// export default class AreaselectCell extends React.Component {
//     fieldNames = {
//         label: 'name',
//         value: 'id',
//     }

//     constructor(props) {
//         super(props);
//         const { value, node, config } = props;
//         this.rowNode = node;
//         const { fieldNames } = config;
//         if (fieldNames) this.fieldNames = fieldNames;
//         this.state = {
//             value,
//         };
//     }

//     componentDidMount() {
//         this.api = {
//             data: this.rowNode.data,
//             value: this.state.value,
//             updateRowData: this.updateRowData,
//         };
//     }

//     getValue = () => {
//         return this.state.value;
//     };

//     setValue = value => {
//         this.setState({ value });
//     };

//     updateRowData = data => {
//         lodash.assign(this.rowNode.data, data);
//         this.rowNode.setData(this.rowNode.data);
//     };

//     onChange = (valArr, objArr) => {
//         if (!Array.isArray(valArr) && !Array.isArray(objArr)) {
//             return;
//         }
//         const { config } = this.props;
//         const { onChange } = config;
//         // const sRow = objArr[objArr.length - 1] || {};
//         // const dictName = objArr.map(it => it[this.fieldNames.label]).join('/');
//         const id = Array.isArray(valArr) ? valArr.pop() : undefined;
//         this.setValue(id);
//         if (onChange) onChange(valArr, objArr, this.api);
//     }


//     render() {
//         const { value } = this.state;
//         const { config } = this.props;
//         const areaselectProps = {
//             ...config,
//             initvalue: [value],
//             onChange: this.onChange,
//         };

//         return (
//             <Fragment>
//                 <Areaselect {...areaselectProps} />
//             </Fragment>
//         );
//     }
// }
