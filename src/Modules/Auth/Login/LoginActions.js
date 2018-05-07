'use strict';

export const LOGIN_USER = 'LOGIN_USER';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const loginUser = (username, password) => {
  return {
      type: LOGIN_USER,
      username: username,
      password: password
  };
};

export const logout = () => {
  return {
      type: LOGOUT
  };
};

