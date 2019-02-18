import { call, put, takeLatest, select } from 'redux-saga/effects'
import userActions from '../actions/userActions'
import apiService from '../utils/ApiService'
import appActions from '../actions/appActions';

function * processRegister(apiService) {
	const formData = yield select(state => state.form.register.values)
	try {
		const apiCall = yield call([apiService, apiService.registerUser], {...formData})
		yield put(userActions.setUserData.invoke(formData))
	} catch (e) {
		yield put(appActions.setRegisterdError.invoke(e.message || ''))
	}

}

function * userSaga(apiService) {
	yield takeLatest(userActions.register.action, processRegister, apiService)
}

export default userSaga;
