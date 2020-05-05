import {callGetApi, callPostApi, callPutApi, 
  callDeleteApi, callGetJwtTokenApi, callPostApiNoAuth} from '../libs/callRestApi';

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

export const enableProgressBar = () => ({
  type: 'ENABLE_PROGRESS_BAR'
});

export const disableProgressBar = () => ({
  type: 'DISABLE_PROGRESS_BAR'
});

export const setFetchedData = (payload, id) => ({
  type: 'UPDATE_FETCHED_DATA',
  payload,
  id
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

export const registerUser = (body) => {
  
  return async (dispatch, getState) => {
    const endpoint = 'register';
    dispatch(enableProgressBar());
    await callPostApiNoAuth(endpoint, body)
      .then()
      .catch(error => {
        dispatch(logOutUserOrError());
        alert("Nie można zapisać danych użytkownika. \n" + error);
      });
    dispatch(disableProgressBar());
  }
}

export const callGET = (endpoint, query, errorMessage) => {

  return async (dispatch, getState) => {
    dispatch(enableProgressBar());
    await callGetApi(endpoint, query, getState().loggedUser.jwtToken)
      .then(json =>
        dispatch(setFetchedData(json, endpoint)))
      .catch(error => 
        alert(`${errorMessage} \n ${error}`));
    dispatch(disableProgressBar());
  } 
}

export const callPOST = (endpoint, body, errorMessage) => {

  return async (dispatch, getState) => {
    dispatch(enableProgressBar());
    await callPostApi(endpoint, body, getState().loggedUser.jwtToken)
      .then()
      .catch(error => {
        alert(`${errorMessage} \n ${error}`);
      });
    dispatch(disableProgressBar());
  } 
}

export const callPUT = (endpoint, param, body, errorMessage) => {

  return async (dispatch, getState) => {
    dispatch(enableProgressBar());
    await callPutApi(endpoint, param, body, getState().loggedUser.jwtToken)
      .then()
      .catch(error => {
        alert(`${errorMessage} \n ${error}`);
      });
    dispatch(disableProgressBar());
  }   
}

export const callDELETE = (endpoint, deleteParam, errorMessage) => {
  return async (dispatch, getState) => {
    dispatch(enableProgressBar());
    await callDeleteApi(endpoint, deleteParam, getState().loggedUser.jwtToken)
      .then()
      .catch(error => 
        alert(`${errorMessage} \n ${error}`));
    dispatch(disableProgressBar());
  }  
}