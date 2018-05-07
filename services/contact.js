'use strict';

import { api } from './api'; 

export default {
  
  getFriendoContactsByStatus(status) {
    var endpoint = 'user/contacts?' + (status ? 'status=' + status : '');
    return api('GET', endpoint);
  },
  
  uploadContacts(contacts) {
    var endpoint = 'user/contacts';
    return api('POST', endpoint, contacts);
  },
  
  getUserFriends(userId) {
    var endpoint = `users/${userId}/publicFriends`;
    return api('GET', endpoint);
  },
  
  getFriends(userId, filter) {
    //var endpoint = 'users/' + userId + '/friends' + (filter ? '?filter=true' : '');
    var endpoint = `users/${userId}/friends`;
    return api('GET', endpoint);
  }
  
};