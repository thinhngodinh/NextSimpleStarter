const userActions = {
	login: {
		action: '_LOGIN_',
		invoke: ({email, phone}) => ({ type: userActions.login.action, email, phone })
	},
	logout: {
		action: '_LOGOUT_',
		invoke: () => ({ type: userActions.logout.action })
	},
	register: {
		action: '_REGISTER_',
		invoke: ({email, phone}) => ({ type: userActions.register.action, email, phone })
	}
};

export default userActions
