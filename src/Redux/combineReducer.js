import { userRegisterReducer } from './auth/authSlice';
import { contactReducer } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  contacts: contactReducer,
  user: userRegisterReducer,
});
