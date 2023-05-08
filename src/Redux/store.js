import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterSlice } from './contacts/filterSlice';
import { contactReducer } from './contacts/contactsSlice';
import { userRegisterReducer } from './auth/authSlice';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactReducer,
    auth: persistReducer(persistConfig, userRegisterReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
