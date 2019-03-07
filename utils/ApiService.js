import API_URL from '../static/apiConst';

export default class ApiService {
	constructor(httpService) {
		this.httpService = httpService
		this._defaultRequestHeader = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
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

	registerUser({fullname, email, phone}, isServer = false, ) {
		return this.httpService.post(
			API_URL.REGISTER(isServer),
			{fullname, email, phone},
			this._defaultRequestHeader
		)
	}

	getTotalUser(isServer = false) {
		return this.httpService.get(
			API_URL.GET_TOTAL_USERS(isServer),
			this._defaultRequestHeader
		)
	}

	getFrame3Config (isServer = false) {
		return this.httpService.get(
			API_URL.FRAME_3_CFG(isServer),
			this._defaultRequestHeader
		);
	}

	getTickyBarConfig (isServer = false) {
		return this.httpService.get(
			API_URL.STICKY_BAR_CFG(isServer),
			this._defaultRequestHeader
		)
	}

	getFrame5Config (isServer = false) {
		return this.httpService.get(
			API_URL.FRAME_5_CFG(isServer),
			this._defaultRequestHeader
		)
	}
}
