// import React from 'react'
// import { Upload } from 'antd'

// export default ({headers,children,name,...props}) =>{
//     const cprops = {
//         withCredentials:true,
//         headers:{
//             ...headers,
//             name: name || 'file',
//             SessionLocale:getLocalInfo(),
//             'Accept-Language':getLocalInfo(),
//             withCredentials: true,
//         },
//         ...props,
//     }
//     return <Upload {...cprops}>{children}</Upload>
// }