import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   name: null,
  //   email: null,
  //   isLoggedIn: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      //   state.name = action.payload.user.name;
      //   state.email = action.payload.user.email;
      state.token = action.payload;
      //   state.isLoggedIn = true;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserIsLoggedIn = state =>
  state.user.isLoggedIn;
export const selectUserToken = state => state.user.token;
