export default {
    SHEET_GETONE: {
        url: "/wp/work/dispatchSheet/getOne",
        method: "GET",
        desc: "getOneSheet 派工单",
        auth: "huangh",
    },
    NODE_GETONE: {
        url: "/wp/basic/dispatchNode/getOne",
        method: "GET",
        desc: "getOne 点击单据获取派工节点地",
        auth: "huangh",
    },
    CHECK_EXIST: {
        url: "/fsc/fi/dispatch/fiDispatchRel/checkDispatchExist",
        method: "GET",
        desc: "checkDispatchExist 是否有单据号",
        auth: "huangh",
    },

    FLOW_HISTORY: {
        "url": "/system/rc/workflow/queryFlowHistory",
        "method": "GET",
        "auth": "huangh",
        "desc": "当前审批历史",
    },
    PROCESS_USER: {
        "url": "/system/rc/workflow/queryCurrentProcessUsers",
        "method": "GET",
        "auth": "huangh",
        "desc": "当前审批人",
    },
    WP_DISPATCHPARAM_GETONE: {
        "url": "/wp/basic/dispatchParam/getOne",
        "method": "GET",
        "auth": "huangh",
        "desc": "派工参数",
    },


    WP_FSS_ATTR_GETONE: {
        "url": "/wp/basic/fssCenterUser/getOne",
        "method": "GET",
        "auth": "huangh",
        "desc": "共享中心用户配置 用户属性 查询",
    },

    WP_FSS_ATTR_SAVE: {
        "url": "/wp/basic/fssCenterUser/saveOrUpdate",
        "method": "POST",
        "auth": "huangh",
        "desc": "共享中心用户配置 用户属性 保存",
    },

    WP_FSS_UNIT_LIST: {
        "url": "/wp/basic/fssCenterUserUnit/selectByUserId",
        "method": "GET",
        "auth": "huangh",
        "desc": "共享中心用户配置 分配结算单位 查询",
    },
    WP_FSS_UNIT_SAVE: {
        "url": "/wp/basic/fssCenterUserUnit/saveOrUpdateExt",
        "method": "POST",
        "auth": "huangh",
        "desc": "共享中心用户配置 分配结算单位 保存",
    },

    WP_FSS_DOC_SAVE: {
        "url": "/wp/basic/fssCenterUserBusiness/saveOrUpdateExt",
        "method": "POST",
        "auth": "huangh",
        "desc": "共享中心用户配置 单据 保存",
    },
    WP_FSS_DOC_SEARCH: {
        "url": "/wp/basic/fssCenterUserBusiness/listByDto",
        "method": "GET",
        "auth": "huangh",
        "desc": "共享中心用户配置 单据 查询",
    },
    WP_FSS_DOC_DEL: {
        "url": "/wp/basic/fssCenterUserBusiness/deleteLogical",
        "method": "GET",
        "auth": "huangh",
        "desc": "共享中心用户配置 单据 删除",
    },
    WP_FSS_DOC_LIST: {
        "url": "/wp/basic/docType/list",
        "method": "GET",
        "auth": "huangh",
        "desc": "共享中心用户配置 单据 查询单据类型",
    },

}