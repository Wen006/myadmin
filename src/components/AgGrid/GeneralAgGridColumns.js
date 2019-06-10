import { Fragment } from "react";

// import React, { Fragment } from 'react';
// import lodash from 'lodash';
// import { Intler } from 'components';

// export default AgGrid => {
//     return class GeneralAgGridColumns extends React.Component {

//         generalColumns = (columnDefs, isView) => {
//             const columns = columnDefs.map(col => {
//                 const { headerName, field, hidden = false, fields = {}, align, cellStyle } = col;
//                 // if (!cellStyle) {
//                 //     col.cellStyle = align ? { textAlign: align } : { textAlign: 'left' };
//                 // } else {
//                 //     col.cellStyle = align ? { textAlign: align } : { textAlign: 'left' };
//                 //     lodash.assign(col.cellStyle, cellStyle);
//                 // };
//                 //编辑表格用 是否可编辑
//                 if (isView == true) {//设置为查看则不可编辑
//                     col.editable = false;
//                 } else if (fields[field]) { col.editable = !fields[field].isReadFlag; };
//                 //headerName 国际化
//                 col.headerName = Intler.getIntl(headerName) || headerName;
//                 col.hide = hidden;
//                 //没有动态字段直接返回
//                 if (!fields[field]) return col;
//                 if (fields[field].labelKey) {
//                     col.headerName = Intler.getIntl(fields[field].labelKey);
//                 };
//                 //设置隐藏
//                 col.hide = fields[field].hidden == true;//默认显示， true 1 隐藏
//                 return col;
//             });
//             return columns;
//         }

//         render() {
//             const { columnDefs = [], isView } = this.props;
//             const newColumnDefs = this.generalColumns(columnDefs, isView);
//             const props = {
//                 ...this.props,
//                 columnDefs: newColumnDefs
//             };
//             return (
//                 <Fragment>
//                     <AgGrid {...props} />
//                 </Fragment>
//             );
//         }

//     }

// }

export default ()=>{
    return <Fragment>hello world</Fragment>
}