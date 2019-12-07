export const jwtToken = (state = [], action) => {
  console.log("action" + JSON.stringify(action));
    switch (action.type) {
      case 'JWT_TOKEN_SUCCESS':
        return [
          action.jwtToken
        ]
      default:
        return state
    }
  }