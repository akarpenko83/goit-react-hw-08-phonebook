import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';
import { authSlice } from './auth/authSlice';

import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsSlice } from './contacts/contactSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];
export const store = configureStore({
  reducer: {
    auth: persistReducer(
      authPersistConfig,
      authSlice.reducer,
    ),
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
