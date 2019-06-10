import { formatMessage,FormatMessage } from 'umi/locale';

const getIntl = (id)=>{
    return formatMessage({id});
}

export default {
    formatMessage,FormatMessage,
    getIntl,
}