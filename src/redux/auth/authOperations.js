import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};
const register = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        credentials,
      );
      token.set(data.token);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
const login = createAsyncThunk(
  'auth/login',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/users/login',
        credentials,
      );
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);
const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');

    Notify.success('Goodbye');
    token.unset();
  } catch (error) {
    Notify.failure('Unable to logout');
  }
});
export const authOperations = {
  register,
  login,
  logout,
};
