export const loggedUser = (state = '', action) => {
    switch (action.type) {
      case 'FETCHED_JWT_TOKEN_SUCCESS':
        console.log("===> " + JSON.stringify(action));
        return {
          ...state,
          jwtToken: action.authResp.access_token,
          isAuthenticated: false
        }
      case 'FETCHED_USER_DATA_SUCCESS':
        return {
          ...state, 
            isAuthenticated: true,
            user: action.user.login,
            role: action.user.role
        }
      case 'LOG_OUT_USER':
          return {
            ...state,
            jwtToken: "",
            isAuthenticated: false,
            user: "",
            role: ""
          }
      default:
        return state
    }
  }