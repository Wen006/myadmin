import { message,Modal } from 'antd';

export default {
  success: (content, duration, onClose) => {
    message.success(content, duration, onClose);
  },
  info: (content, duration, onClose) => {
    message.info(content, duration, onClose);
  },
  warning: (content, duration, onClose) => {
    message.warning(content, duration, onClose);
  },
  warn: (content, duration, onClose) => {
    message.warn(content, duration, onClose);
  },
  loading: (content, duration, onClose) => {
    message.loading(content, duration, onClose);
  },
  error: (content, duration, onClose) => {
    message.error(content, duration, onClose);
  },
  open:(cfg)=>{
    message.open(cfg);
  },
  notice: (moduleReturn, duration, onClose) => {
    const { code, returnMessage = '', localeCode } = moduleReturn;
    if (localeCode == null || localeCode == '') return;
    if (code == '200') {
      // 后台错误码主要是200 都是成功
      message.success(returnMessage, duration, onClose);
      return;
    }
    message.error(returnMessage, duration, onClose);
  },
  destroy: () => {
    message.destroy();
  },
  confirm: ({title,content,onOk,onCancel}) =>{
    Modal.confirm({
      title,
      content,
      onOk,
      onCancel,
    });
  }
};
