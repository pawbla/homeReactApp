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
            user: action.user.login,
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