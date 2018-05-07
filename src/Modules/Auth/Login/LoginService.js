'use strict';
import { AuthApi } from '../AuthApi'; 

export default {
  loginUser(userName, password) {
    var endpoint = 'user/login';
    return ({'isLoggedIn': true})
  }
}