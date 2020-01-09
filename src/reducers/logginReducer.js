export const loggedUser = (state = '', action) => {
    switch (action.type) {
      case 'FETCHED_JWT_TOKEN_SUCCESS':
        return {
          ...state,
          jwtToken: action.jwtToken,
          isBeingAuthenticated: true,
          isAuthenticated: false
        }
      case 'FETCHED_USER_DATA_SUCCESS':
        return {
          ...state, 
            isAuthenticated: true,
            isBeingAuthenticated: false,
            user: action.user.login,
            role: action.user.role
        }
      case 'LOG_OUT_USER':
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