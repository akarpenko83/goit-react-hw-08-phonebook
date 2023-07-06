import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// const initialState = {
//   user: null,
//   email: null,
//   isLoggedIn: false,
// };

export const authApi = createApi({
  reducerPath: 'auth',
  // initialState: initialState,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: user => `/users/current`,
      providesTags: ['user'],
    }),
    signupUser: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['credentials'],
    }),
    loginUser: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      // transformResponse: (response, meta, arg) =>
      //   response.data,
      invalidatesTags: ['credentials'],
    }),
  }),
  reducerErrorKey: 'error',
});
export const {
  useGetUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
} = authApi;
