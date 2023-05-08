import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, logIn, logOut, register } from './authOperations';
import {
  handleFulfilled,
  handleFulfilledLogOut,
  handleFulfilledUser,
  handlePending,
  handleRejected,
} from './handleStatusAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(getCurrentUser.fulfilled, handleFulfilledUser);
  },
});

export const userRegisterReducer = authSlice.reducer;
