import API_URL from '../static/apiConst';

export default class ApiService {
	constructor(httpService) {
		this.httpService = httpService
		this._defaultRequestHeader = null
	}

	setHeader(requestHeader) {
		this._defaultRequestHeader = requestHeader;
	}

	paraGen(options, url) {
		let result = ''

		for (let key in options) {
			if (options[key]) {
				result += '&' + key + '=' + options[key]
			}
		}
		result = '?' + result.substring(result.indexOf('&') + 1)
		result = result.replace(' ', '%20')
		return url + result
	}

	login(authData) {
		const { authInfor, appConfig } = authData;
		const requestHeaders = {
			'Content-Type': 'application/json'
		};
		const requestBody = {
			username: authInfor.username,
			password: authInfor.password,
			client_id: appConfig.client_id,
			client_secret: appConfig.client_secret,
			grant_type: appConfig.grant_type,
			database: appConfig.database
		};
		return this.httpService.post(API_URL.LOGIN, requestBody, requestHeaders)
	}

	logout() {
		return this.httpService.get(API_URL.LOGOUT, this._defaultRequestHeader)
	}

	getUser() {
		return this.httpService.get(API_URL.GET_USER_INFO, undefined, this._defaultRequestHeader)
	}
}
