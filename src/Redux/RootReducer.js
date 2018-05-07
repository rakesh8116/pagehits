import { combineReducers } from 'redux';
import loginReducer from '../Modules/Auth/Login/LoginReducer.js';

const rootReducer = combineReducers({
  loginReducer
});

export default rootReducer;
