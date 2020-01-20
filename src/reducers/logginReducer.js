export const loggedUser = (state = '', action) => {
    switch (action.type) {
      case 'FETCHED_JWT_TOKEN_SUCCESS':
        return {
          ...state,
          jwtToken: action.authResp.access_token,
          isAuthenticated: false,
          isBeingAuthenticated: true
        }
      case 'FETCHED_USER_DATA_SUCCESS':
        return {
          ...state, 
            isAuthenticated: true,
            user: action.user.login,
            role: action.user.role,
            isBeingAuthenticated: false
        }
      case 'LOG_OUT_USER_OR_ERROR':
          return {
            ...state,
            jwtToken: "",
            isAuthenticated: false,
            isBeingAuthenticated: false,
            user: "",
            role: ""
          }
      default:
        return state
    }
  }