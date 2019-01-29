import userAction from '../actions/userActions'
import appAction from '../actions/appActions'

const initAppState = () => ({
	init: false,
	initAppData: []
});

const ACTION_HANDLERS = {
	[appAction.setAppInitData.action]: (state, payload) => {
		console.log('REDUCER APPINIT', payload.initAppData.length)
		return {
			...state,
			init: true,
			initAppData: payload.initAppData
		}
	}
}

const appReducer = (state = initAppState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default appReducer;
