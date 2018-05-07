'use strict';

import { readPhoneContacts } from './api';
import contact from './contact';

export const service = {
  readPhoneContacts: readPhoneContacts,
  getFriendoContactsByStatus: contact.getFriendoContactsByStatus,
  uploadContacts: contact.uploadContacts,
  getUserFriends: contact.getUserFriends,
  getFriends: contact.getFriends
};