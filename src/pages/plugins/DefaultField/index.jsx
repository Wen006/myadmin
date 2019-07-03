import React, { Fragment } from "react";
import { InputH } from "@/components/FormMark";
import lodash from 'lodash'

const defaultHiddenFields = {
    id: {},
    deleteFlag: {
        defaultValue: '0',
    },
    modificationNum: {
        defaultValue: 0,
    },
    createdBy: {},
    createdDate: {},
    lastUpdBy: {},
    lastUpdDate: {},
    originApp: {},
    originFlag: {},
}

export default ({ form, fields = defaultHiddenFields }) => (<Fragment>{lodash.keys(fields).map(field => <InputH id={field} key={field} hidden form={form} />)}</Fragment>)