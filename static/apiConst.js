const HOST = (isInternal = false) => isInternal ? 'http://210.211.122.57:8080/api' : 'http://210.211.122.57:8080/api'

const apiConst = {
	REGISTER: (isInternal) => (HOST(isInternal) + '/userregisters'),
	GET_TOTAL_USERS: (isInternal) => (HOST(isInternal) + '/usernumbers/count'),
	FRAME_3_CFG: (isInternal) => (HOST(isInternal) + '/frame3Configs'),
	STICKY_BAR_CFG: (isInternal) => (HOST(isInternal) + '/stickyconfigs')
}

export default apiConst
