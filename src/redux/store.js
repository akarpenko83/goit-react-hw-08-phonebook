import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactSlice';
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
import { authApi } from './authSlice';
import { userSlice } from './userSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['mutations'],
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
  authApi.middleware,
  contactsApi.middleware,
];
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: persistReducer(
      authPersistConfig,
      authApi.reducer,
    ),
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
