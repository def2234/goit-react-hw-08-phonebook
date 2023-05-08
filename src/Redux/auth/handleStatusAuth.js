export const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
};
