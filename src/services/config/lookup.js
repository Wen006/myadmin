
/**
 * @description 弹框选择 lookup
 * @author wennn
 * @time 20190624
 */

 export default {
    SM_ROLE_SELECT_FOR_USER: {
        url: '/sm/role/listForUser',
        method: 'get',
        mockhandler: 'list',
        mocktable: 'SM_ROLE',
        desc: '#用户管理 选择未选择的角色',
        auth: 'wennn', 
    },
}