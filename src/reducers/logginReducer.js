export const loggedUser = (state = '', action) => {
    switch (action.type) {
      case 'FETCHED_JWT_TOKEN_SUCCESS':
        return {
          ...state,
          jwtToken: action.jwtToken,
          isAuthenticated: false,
        }
      case 'FETCHED_USER_DATA_SUCCESS':
        return {
          ...state, 
            isAuthenticated: true,
            user: action.user.login,
            role: action.user.role
        }
      default:
        return state
    }
  }