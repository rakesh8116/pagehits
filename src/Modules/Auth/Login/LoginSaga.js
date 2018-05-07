import { takeEvery, takeLatest } from 'redux-saga'
import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { LoginActions } from './LoginActions'
import  LoginService  from './LoginService'

import axios from "axios";
var _ = require('lodash');

export function* loginUser(action) {
  try {
    console.log('Try User Login', action, LoginService)
    const data = yield call(LoginService.loginUser, action.username, action.password)
    yield put({type: "SET_LOGIN_USER", data})
  } catch (error) {
     yield put({type: "FETCH_FAILED", error})
  }
}
