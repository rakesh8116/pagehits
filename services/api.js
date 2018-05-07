'use strict';

import GLOBALS from '../components/globals';
var Contacts = require('react-native-contacts');

export function api(type = 'GET', endpoint, body = null) {
  
  var url = GLOBALS.API_BASE + endpoint;
  var header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-access-token': GLOBALS.token
  };
  
  var req = {
    method: type,
    headers: header
  };
  
  if(body) {
    req.body = JSON.stringify(body);
  };
  
  return new Promise( (resolve, reject) => {
    fetch(url, req).then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      return resolve({ json: json, response: response });
    });
  });
  
};

export function readPhoneContacts() {
  return new Promise( (resolve, reject) => {
    Contacts.getAll((err, contacts) => {		
			if(err && err.type === 'permissionDenied') {
        resolve([]);
				return err; 
			} 
      else {
        resolve(contacts);
			}
		});
  });
};