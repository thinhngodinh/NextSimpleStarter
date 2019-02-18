import {all, call} from 'redux-saga/effects'

import userSaga from './userSaga'

function * rootSaga (apiService) {
	yield all([
		call(userSaga, apiService)
	])
}

export default rootSaga;
