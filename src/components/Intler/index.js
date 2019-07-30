import { formatMessage,FormatMessage } from 'umi/locale';

const getIntl = (id)=>{
    if(!id) return id;
    return formatMessage({id});
}

export default {
    formatMessage,FormatMessage,
    getIntl,
}