import userAction from '../actions/userActions'
import appAction from '../actions/appActions'

const initUserState = () => ({
	email: '',
	phone: ''
});

const ACTION_HANDLERS = {
	[appAction.setUserData.action]: (state, payload) => ({
		...state,
		payload
	})
}

const userReducer = (state = initUserState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default userReducer;
