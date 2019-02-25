const HOST = 'http://210.211.122.57:8080/api'
const HOST_PRODUCTION = 'http://api:1337'


const apiConst = {
	REGISTER: `${HOST}/userregisters`,
	GET_TOTAL_USERS: `${HOST}/usernumbers/count`,
	GET_TOTAL_USERS_PRODUCTION: `${HOST_PRODUCTION}/usernumbers/count`,
	FRAME_3_CFG_SSR: `${HOST_PRODUCTION}/frame3Configs`,
	FRAME_3_CFG: `${HOST}/frame3Configs`,
	STICKY_BAR_CFG_SSR: `${HOST_PRODUCTION}/downloadconfigs`,
	STICKY_BAR_CFG: `${HOST}/downloadconfigs`
}

export default apiConst
