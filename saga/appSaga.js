import { select, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
// import 'isomorphic-unfetch'

import appActions from '../actions/appActions'

// es6promise.polyfill()

function * initSaga() {
	console.log('>>>>> application saga init');
	try {
		const res = yield fetch('https://jsonplaceholder.typicode.com/users')
		const data = yield res.json()
		console.log('>>>>> application FETCHED API');
		yield put(appActions.setAppInitData.invoke([...data]))
	} catch (err) {
		console.log(err)
	}

}

function* appSaga() {
	yield takeLatest(appActions.initApp.action, initSaga)
}

export default appSaga;
