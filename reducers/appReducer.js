import userAction from '../actions/userActions'
import appAction from '../actions/appActions'
import f3Config from '../static/frame3Config.json'

const initAppState = () => ({
	frame3Cfg: f3Config,
	stickyCfg: null
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
	[appAction.setTickyBarCfg.action]: (state, payload) => ({
		...state,
		stickyCfg: payload.tickyCfg
	}),
}

const appReducer = (state = initAppState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default appReducer;
