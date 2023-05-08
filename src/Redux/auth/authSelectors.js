export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user.name;

export const getEmail = state => state.auth.user.email;

export const getError = state => state.auth.error;

export const getIsRefreshing = state => state.auth.isRefreshing;
