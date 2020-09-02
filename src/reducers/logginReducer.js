import { setRegisteredFail } from "../actions"

export const loggedUser = (state = '', action) => {
  switch (action.type) {
    case 'FETCHED_JWT_TOKEN_SUCCESS':
      return {
        ...state,
        user: "",
        role: "",
        firstName: "",
        lastName: "",
        jwtToken: action.authResp.access_token,
        isAuthenticated: false,
        isBeingAuthenticated: true
      }
    case 'FETCHED_USER_DATA_SUCCESS':
      return {
        ...state, 
          isAuthenticated: true,
          user: action.user.username,
          role: action.user.role,
          firstName: action.user.firstName,
          lastName: action.user.lastName,
          isBeingAuthenticated: false
      }
    case 'LOG_OUT_USER_OR_ERROR':
        return {
          ...state,
          jwtToken: "",
          isAuthenticated: false,
          isBeingAuthenticated: false,
          user: "",
          role: "",
          firstName: "",
          lastName: ""
        }
    default:
      return state
  }
}

export const isProgressBar = (state = false, action) => {
  switch (action.type) {
    case 'ENABLE_PROGRESS_BAR':
      return true
    case 'DISABLE_PROGRESS_BAR':
      return false
    default:
      return state
  }
}

export const fetchedData = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_FETCHED_DATA':
      return {
        ...state, 
        payload: action.payload,
        id: action.id
      }
    default:
      return state
  } 
}

export const isUserRegistered = (state = '', action) => {
  switch (action.type) {
    case 'REGISTERED_INIT':
      return {
        ...state, 
        isRegistered: false,
        error: false
      }
    case 'REGISTERED_SUCCESS':
      return {
        ...state, 
        isRegistered: true,
        error: false
      }
      case 'REGISTERED_FAIL':
        return {
          ...state, 
          isRegistered: false,
          error: true
        }
    default:
      return state
  }   
}