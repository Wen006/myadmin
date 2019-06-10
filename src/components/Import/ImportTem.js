// import React from 'react'
// import axios from 'axios'
// import * as ReactDom from 'react-dom';
// import { Modal, Upload, message, Icon, Spin } from "antd";
// import { Btns } from 'components'
// import Intler from 'components/Intler/Intler'
// import config from 'utils/config'

// const { APIURL } = config;

// export default class ImportTerm extends React.Component {
//     _container;
//     _dom;
//     _resolve;
//     _reject;
//     _file = '';
//     _fileList = '';
//     _tempUrlSer;
//     _promise = new Promise((resolve, reject) => {
//         this._resolve = resolve;
//         this._reject = reject;
//     })

//     constructor(props) {
//         super(props);
//         const { serviceUrl } = this.props;
//         this._tempUrlSer = serviceUrl;
//     }

//     componentDidMount() {
//         if (!this._tempUrlSer || this._tempUrlSer == '') {
//             message.error("传入参数不全！请仔细阅读ImportTem.md文件");
//             this.closeModel();
//         }
//     }

//     state = ({
//         visible: true,
//         uploadedFileList: [],
//         loading: false
//     });

//     handleOk = () => {
//         const { params = {} } = this.props;
//         if (this._file && this._file != '') {
//             this.changeLoading(true);
//             this.uploadFiles(this._file, params).then(res => {
//                 console.log(res);
//                 this.changeLoading(false);
//                 const { code, returnMessage } = res;
//                 if (code && code == "200") {
//                     this.state.visible && message.success(Intler.getIntl("UploadSuccess"));
//                     this.closeModel(res);
//                 } else {
//                     message.error(returnMessage);
//                 }
//             }, () => this.changeLoading(false));
//         } else {
//             message.error(Intler.getIntl("ChooseImportFile"));
//         }
//     }

//     beforeUpload = (file, fileList) => {
//         console.log(file, fileList);
//         this._file = file;
//         this._fileList = fileList;
//         this.setState({
//             uploadedFileList: fileList
//         })
//         return false;
//     }

//     uploadFiles = (option, params) => new Promise((resolve, reject) => {
//         // const params = {
//         //     "ecClaimId": xxxxx,
//         //     "id": xxxx,
//         //     "ecKindId": xxx,
//         // }
//         const formData = new FormData();
//         // const fileUrl = `${APIURL}/fsc/claim/ecpublic/voucher/importVoucherRecord`;
//         const fileUrl = this.getTemService();
//         Object.entries(params).forEach((item) => {
//             formData.append(item[0], item[1] || '');
//         });
//         formData.append('file', option);
//         axios.post(fileUrl, formData, { withCredentials: true }).then(res => {
//             console.log(res);
//             const { status, statusText, data } = res;
//             if (status == 200) return resolve(data);
//             message.error(statusText);
//             return reject(false);
//         }, err => {
//             console.log(err);
//             message.error(Intler.getIntl("ImportsFail"));
//             return reject(false);
//         })
//     })

//     handleRemove = (file) => {
//         const { uploadedFileList } = this.state;
//         console.log(file, uploadedFileList)
//         const res = uploadedFileList.filter(Fi => Fi.uid != file.uid);
//         this.setState({ uploadedFileList: res });
//         return res;
//     }

//     static show = (arg) => {
//         let div = document.createElement("div");
//         let _model = ReactDom.render(<ImportTerm {...arg} />, div);
//         let dom = document.querySelector('body').appendChild(div);
//         _model._container = div;
//         _model._dom = dom;
//         return _model._promise;
//     }

//     closeModel = (result = false) => {
//         this.setState({ visible: false }, () => {
//             this._resolve(result);
//             ReactDom.unmountComponentAtNode(this._container);
//             this._dom.remove();
//         })
//     }

//     getTemService = function () {
//         return `${APIURL}${this._tempUrlSer}`;
//     }

//     changeLoading = loading => this.setState({ loading: loading });

//     render() {
//         const { visible } = this.state;
//         let { title = "", options } = this.props;
//         const { uploadedFileList, loading } = this.state
//         title = title + Intler.getIntl("IMPORTTEMPLATE");
//         // action = `${APIURL}/fsc/claim/ecpublic/voucher/importVoucherRecord`;
//         // 导入
//         const insProps = {
//             name: 'file',
//             // action: action,
//             withCredentials: true,
//             multiple: false,
//             data: {},
//             accept: ".xls,.xlsx",
//             showUploadList: true,
//             beforeUpload: this.beforeUpload,
//             fileList: uploadedFileList,
//             // onChange: (info) => { console.log(info) },
//             onRemove: this.handleRemove,
//         }

//         return (
//             <Modal
//                 key="importTemplateModal"
//                 title={title}
//                 visible={visible}
//                 onCancel={() => this.closeModel()}
//                 {...options}
//                 footer={[
//                     // <Btns.downTemp style={{ float: "left" }} loading={loading} onClick={this.openLayer} />,
//                     <Btns.ins loading={loading} disabled={!uploadedFileList || (uploadedFileList.length <= 0)} onClick={this.handleOk} />,
//                     <Btns.cancel onClick={() => this.closeModel()} />
//                 ]}
//             >
//                 <Spin spinning={loading}>
//                     <Upload.Dragger {...insProps} >
//                         <p className="ant-upload-drag-icon">
//                             <Icon type="inbox" />
//                         </p>
//                         <p>{Intler.getIntl("importRemindMesage")}</p>
//                     </Upload.Dragger>
//                 </Spin>
//             </Modal >
//         )

//     }

// }
