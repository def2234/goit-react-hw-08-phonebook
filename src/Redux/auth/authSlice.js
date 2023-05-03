const { createSlice } = require('@reduxjs/toolkit');
const { register } = require('./authOperations');
const { handleFulfilledRegister } = require('./handleStatusAuth');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, handleFulfilledRegister);
  },
});

export const userRegisterReducer = authSlice.reducer;
