import userActions from '../actions/userActions'
import appActions from '../actions/appActions'

const initUserState = () => ({
	fullname: '',
	email: '',
	phone: '',
	isRegister: false,
	registerError: false,
	registerErrorMsg: '',
	totalUsers: 0
});

const ACTION_HANDLERS = {
	[userActions.setUserData.action]: (state, payload) => ({
		...state,
		fullname: payload.fullname,
		email: payload.email,
		phone: payload.phone,
		isRegister: true,
	}),
	[appActions.setTotalUsers.action]: (state, payload) => ({
		...state,
		totalUsers: payload.totalUsers
	}),
	[appActions.setUserAsRegisterd.action]: (state) => ({
		...state,
		isRegister: true
	}),
	[userActions.registerNew.action]: (state, payload) => ({
		...state,
		isRegister: false,
		registerError: false,
		registerErrorMsg: ''
	}),
	[appActions.setRegisterdError.action]: (state, payload) => ({
		...state,
		isRegister: true,
		registerError: true,
		registerErrorMsg: payload.msg || ''
	})
}

const userReducer = (state = initUserState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default userReducer;
