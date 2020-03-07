import {callGetApi, callPostApi, callGetJwtTokenApi} from '../libs/callRestApi';

const setJwtTokenFetched = (authResp) => ({
  type: 'FETCHED_JWT_TOKEN_SUCCESS',
  authResp
});

const setLoggedUserFetched = (user) => ({
  type: 'FETCHED_USER_DATA_SUCCESS',
  user
});

export const logOutUserOrError = () => ({
  type: 'LOG_OUT_USER_OR_ERROR'
});

const fetchJwtToken = (user, password) => {
  return async (dispatch) => {
    await callGetJwtTokenApi(user, password)
      .then(json => dispatch(setJwtTokenFetched(json)))
      .catch(error => {
        alert("Niepoprawne dane użytkownika. \n" + error);
        dispatch(logOutUserOrError());
      });
  }
}

const fetchUserData = (user) => {
  return async (dispatch, getState) => {
    const queryParams = `?login=${user}`;
    const endpoint = 'user';
    await callGetApi(endpoint, queryParams, getState().loggedUser.jwtToken)
      .then(json => dispatch(setLoggedUserFetched(json)))
      .catch(error => {
        dispatch(logOutUserOrError());
        alert("Nie można pobrać danych użytkownika. \n" + error);
      });
  }
}

export const loginToApplication = (user, password) => {
  return async (dispatch, getState) => {
    await dispatch(fetchJwtToken(user, password));
    if (getState().loggedUser.isBeingAuthenticated) {
      await dispatch(fetchUserData(user));
    }
  } 
} 

export const registerUser = (aUserName, aPassword, aFirstName, aLastName, aEmail) => {
  
  const body = {
    userName: aUserName,
    password: aPassword,
    firstName: aFirstName, 
    lastName: aLastName, 
    email: aEmail
  }

  return async (dispatch, getState) => {
    const endpoint = 'setuser';

    await callPostApi(endpoint, body, getState().loggedUser.jwtToken)
      .then(() => alert("Nie można pobrać danych użytkownika."))
      .catch(error => {
        dispatch(logOutUserOrError());
        alert("Nie można pobrać danych użytkownika. \n" + error);
      });
  }
}