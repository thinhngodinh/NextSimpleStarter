import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import userActions from '../actions/userActions'

function * processLogin() {
	console.log('Login Saga run');
}

function * loginSaga() {
	yield takeLatest(userActions.login.action, processLogin)
}

export default loginSaga;
