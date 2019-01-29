import {all, call} from 'redux-saga/effects'
import loginSaga from './loginSaga'
import appSaga from './appSaga'

function * rootSaga () {
	yield all([
		call(appSaga),
		call(loginSaga)
	])
}

export default rootSaga;
