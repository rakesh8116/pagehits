import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'
import {loginUser} from '../Modules/Auth/Login/LoginSaga'


function* watchLoginUser() {
  yield takeLatest('LOGIN_USER', loginUser)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchLoginUser()
  ])
}