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

	registerUser({fullname, email, phone}) {
		return this.httpService.post(
			API_URL.REGISTER,
			{fullname, email, phone},
			this._defaultRequestHeader
		)
	}

	getTotalUser() {
		const REQUEST_URL = process.env.NODE_ENV !== 'production' ? API_URL.GET_TOTAL_USERS : API_URL.GET_TOTAL_USERS_PRODUCTION
		return this.httpService.get(
			REQUEST_URL,
			this._defaultRequestHeader
		)
	}

	getFrame3Config () {
		const REQUEST_URL = process.env.NODE_ENV !== 'production' ? API_URL.FRAME_3_CFG : API_URL.FRAME_3_CFG_SSR
		return this.httpService.get(
			REQUEST_URL,
			this._defaultRequestHeader
		);
	}

	getTickyBarConfig () {
		const REQUEST_URL = process.env.NODE_ENV !== 'production' ? API_URL.STICKY_BAR_CFG : API_URL.STICKY_BAR_CFG_SSR
		return this.httpService.get(
			REQUEST_URL,
			this._defaultRequestHeader
		);
	}
}
