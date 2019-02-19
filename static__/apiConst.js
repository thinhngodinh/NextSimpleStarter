const HOST = 'http://210.211.122.57:8080/api'
const HOST_PRODUCTION = 'http://api:1337'

const apiConst = {
	REGISTER: `${HOST}/userregisters`,
	GET_TOTAL_USERS: `${HOST}/usernumbers/count`,
	GET_TOTAL_USERS_PRODUCTION: `${HOST_PRODUCTION}/usernumbers/count`
}

export default apiConst
