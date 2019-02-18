const userActions = {
	login: {
		action: '_LOGIN_',
		invoke: ({email, phone}) => ({ type: userActions.login.action, email, phone })
	},
	logout: {
		action: '_LOGOUT_',
		invoke: () => ({ type: userActions.logout.action })
	},
	setUserData: {
		action: '_SET_USER_DATA_',
		invoke: (userData) => ({ type: userActions.setUserData.action, ...userData })
	},
	registerNew: {
		action: '_REGISTER_NEW_',
		invoke: () => ({ type: userActions.registerNew.action })
	},
	getTotalUser: {
		action: '_GET_TOTAL_USER_',
		invoke: () => ({ type: userActions.setTotalUser.action })
	},
	register: {
		action: '_REGISTER_',
		invoke: () => ({ type: userActions.register.action })
	}
};

export default userActions
