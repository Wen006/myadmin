// import React from 'react';
// import PageHeaderLayout from 'layouts/PageHeaderLayout';
// import CachePager from '@/components/CachePage/CachePager';
 
// import UserInfoList from './UserInfoList';
// // import UserInfoEdit from './UserInfoEdit';
// // import UserInfoRead from './UserInfoRead';

// export default class UserInfoIndex extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       opeFlag: 'list',
//     };
//   }

//   onChangePage = (opeFlag) => {
//     this.setState({opeFlag})
//   };
 
//   render() { 

//     const { opeFlag } = this.state;

//     const listTableProps = { 
      
//     };
//     const editProps = {
    
//     };
//     return (
//       <PageHeaderLayout>
//         <CachePager
//           ref={ref => {
//             this.cacheRef = ref;
//           }}
//           defaultKey="list"
//         >
//           <UserInfoList key="list" {...listTableProps} />
//           {/* <UserInfoEdit key="edit" {...editProps} />
//           <UserInfoRead key="view" {...editProps} /> */}
//         </CachePager>
//       </PageHeaderLayout>
//     );
//   }
// }
