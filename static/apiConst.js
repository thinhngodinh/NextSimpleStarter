// const HOST = (isInternal = false) => isInternal ? 'http://ttlm.zing.vn/api' : 'http://ttlm.zing.vn/api'

const HOST = (isInternal = false) => isInternal ? 'http://api' : 'http://ttlm.zing.vn/api'


const apiConst = {
	REGISTER: (isInternal) => (HOST(isInternal) + '/userregisters'),
	GET_TOTAL_USERS: (isInternal) => (HOST(isInternal) + '/usernumbers/count'),
	FRAME_3_CFG: (isInternal) => (HOST(isInternal) + '/frame3Configs'),
	STICKY_BAR_CFG: (isInternal) => (HOST(isInternal) + '/stickyconfigs'),
	FRAME_5_CFG: (isInternal) => (HOST(isInternal) + '/frame5configs'),
	FRAME_6_SIDER: (isInternal) => (HOST(isInternal) + '/slidernews'),
	POST_LIST: (isInternal) => (HOST(isInternal) + '/categories/homepage'),
	POST_LIST_TOTAL: (isInternal) => (HOST(isInternal) + '/articles/count?category='),
	POST_DETAIL: (isInternal) => (HOST(isInternal) + '/articles/url/'),
	GUIDE_BOX: (isInternal) => (HOST(isInternal) + '/guideboxconfigs')
}

export default apiConst
