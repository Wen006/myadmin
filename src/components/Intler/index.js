import { formatMessage,FormatMessage } from 'umi/locale';

const isNull = k => k == undefined || k ==null || k == "";
 
const getIntl = (id) => {
    if (isNull(id)) { return id}
    return formatMessage({id}) || id;
}

const Intler = ({ label, args }) => {
    return getIntl(label, args);
}

Intler.getIntl = getIntl

export {
    formatMessage,FormatMessage
}
export default Intler;
