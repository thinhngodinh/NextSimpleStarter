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
	}
}

export default appActions;
