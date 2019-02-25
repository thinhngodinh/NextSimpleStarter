const appActions = {
	initApp: {
		action: '_APP_INIT_',
		invoke: () => ({ type: appActions.initApp.action })
	},
	setAppInitData: {
		action: '_SET_INITDATA',
		invoke: initAppData => ({ type: appActions.setAppInitData.action, initAppData })
	},
	setUserData: {
		action: '_STORE_USER_TOKEN_',
		invoke: userData => ({ type: appActions.storeUserData.action, userData })
	},
	removeUserData: {
		action: '_USER_DATA_REMOVE_',
		invoke: () => ({ type: appActions.removeUserData.action })
	},
	setGiftList: {
		action: '_SET_GIFT_LIST_',
		invoke: giftList => ({ type: appActions.setGiftList.action, giftList })
	},
	setRegisterdError: {
		action: '_REGISTER_ERROR',
		invoke: (msg) => ({ type: appActions.setRegisterdError.action, msg })
	},
	setUserAsRegisterd: {
		action: '_SET_USER_AS_REGISTER_',
		invoke: () => ({ type: appActions.setUserAsRegisterd.action })
	},
	setTotalUsers: {
		action: '_SET_TOTAL_USER_',
		invoke: (totalUsers) => ({ type: appActions.setTotalUsers.action, totalUsers })
	},
	setFrame3Cfg: {
		action: '_SET_FRAME_3_CONFIG_',
		invoke: (f3Cfg) => ({ type: appActions.setFrame3Cfg.action, f3Cfg })
	},
	setTickyBarCfg: {
		action: '_SET_TICKY_BAR_CFG_',
		invoke: (tickyCfg) => ({ type: appActions.setTickyBarCfg.action, tickyCfg })
	},
}

export default appActions;
