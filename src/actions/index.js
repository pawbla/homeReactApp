export const setJwtTokenFetched = (jwtToken) => ({
  type: 'FETCHED_JWT_TOKEN_SUCCESS',
  jwtToken
});

export const setLoggedUserFetched = (user) => ({
  type: 'FETCHED_USER_DATA_SUCCESS',
  user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER'
});