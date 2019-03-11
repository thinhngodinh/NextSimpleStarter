import userAction from '../actions/userActions'
import appAction from '../actions/appActions'
import f3Config from '../static/frame3Config.json'
import f5Config from '../static/frame5Config.json'

const initAppState = () => ({
	frame3Cfg: f3Config,
	frame5Cfg: f5Config,
	stickyCfg: [],
	posts: [],
	slides: []
});

const ACTION_HANDLERS = {
	[appAction.setAppInitData.action]: (state, payload) => {
		return {
			...state,
			init: true,
			initAppData: payload.initAppData
		}
	},
	[appAction.setFrame3Cfg.action]: (state, payload) => {
		return {
			...state,
		frame3Cfg: payload.f3Cfg
		}
	},
	[appAction.setFrame5Cfg.action]: (state, payload) => {
		return {
			...state,
		frame5Cfg: payload.f5Cfg
		}
	},
	[appAction.setTickyBarCfg.action]: (state, payload) => ({
		...state,
		stickyCfg: payload.tickyCfg
	}),
	[appAction.setFrame6Sliders.action]: (state, payload) => {
		console.log('#############  Server Payload', payload.slides)
		return {
			...state,
			slides: payload.slides
		}
	},
	[appAction.setPostList.action]: (state, payload) => ({
		...state,
		posts: payload.posts
	})
}

const appReducer = (state = initAppState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default appReducer;
