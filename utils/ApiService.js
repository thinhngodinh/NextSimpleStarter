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

	getFrame6Sliders (isServer = false) {
		return this.httpService.get(
			API_URL.FRAME_6_SIDER(isServer),
			this._defaultRequestHeader
		)
	}

	getPostList (isServer = false, config) {
		let requestUrl = API_URL.POST_LIST(isServer)
		requestUrl = this.paraGen(config, requestUrl)
		return this.httpService.get(
			requestUrl,
			this._defaultRequestHeader
		)
	}

	getPostDetail (isServer = false, postUrl) {
		return this.httpService.get(
			API_URL.POST_DETAIL(isServer) + postUrl,
			this._defaultRequestHeader
		)
	}

	getTotalPostByCategory (isServer=false, categoryId) {
		return this.httpService.get(
			`${API_URL.POST_LIST_TOTAL(isServer)}${categoryId}`,
			this._defaultRequestHeader
		)
	}

	getGuideBox (isServer=false) {
		return this.httpService.get(
			`${API_URL.GUIDE_BOX(isServer)}`,
			this._defaultRequestHeader
		)
	}
}
