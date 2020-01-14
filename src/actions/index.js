import {callGetLoggedUserApi, callGetJwtTokenApi} from '../libs/callRestApi';

const setJwtTokenFetched = (authResp) => ({
  type: 'FETCHED_JWT_TOKEN_SUCCESS',
  authResp
});

const setLoggedUserFetched = (user) => ({
  type: 'FETCHED_USER_DATA_SUCCESS',
  user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER'
});

const fetchJwtToken = (user, password) => {
  return async (dispatch) => {
    console.log("==== Jlog in");
    await callGetJwtTokenApi(user, password)
      .then(json => dispatch(setJwtTokenFetched(json)));
  }
}

const fetchUserData = (user) => {
  return async (dispatch, getState) => {
    console.log("==== JWT TOKEN: " + getState().loggedUser.jwtToken);
    const queryParams = `?login=${user}`;
    const endpoint = 'user';
    await callGetLoggedUserApi(endpoint, queryParams, getState().loggedUser.jwtToken)
      .then(json => dispatch(setLoggedUserFetched(json)));
  }
}

export const loginToApplication = (user, password) => {
  return async (dispatch) => {
    await dispatch(fetchJwtToken(user, password));
    await dispatch(fetchUserData(user));
  } 
} 