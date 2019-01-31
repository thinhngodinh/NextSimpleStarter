import {all, call, takeLatest} from 'redux-saga/effects'

import appActions from '../actions/appActions'

import loginSaga from './loginSaga'
import { initSaga } from './appSaga'

function * rootSaga () {
	yield all([
		yield takeLatest(appActions.initApp.action, initSaga),
		call(loginSaga)
	])
}

export default rootSaga;
