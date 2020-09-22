const apiUrl = `/api/v1/`;

export const callGetJwtTokenApi = (user, password) => {
  const clientId = "clientid";
  const clientSecret = "clientsectet";
  const loginUrl = `/oauth/token`;
  return fetch(loginUrl, {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      },
      body: `grant_type=password&username=${user}&password=${password}`
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`Received response code: ${response.status} ${response.statusText}`);
        }
        return response.json()          
    })
}

export const callGetApi = (endpoint, queryParams, token) => {
    const url = `${apiUrl}${endpoint}${queryParams}`;
    return fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token,
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Received response code: ${response.status} ${response.statusText}`);
        }
        return response.json()          
    })
}

//Only GET for internal
export const callInternalApi = (endpoint, queryParams) => {
  const internalUrl = `/internal/api/v1/`;
  const url = `${internalUrl}${endpoint}${queryParams}`;
  return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error({status: response.status, text: response.statusText});
      }
      return response.json()          
  })
}

export const callPostApi = (endpoint, body, token) => {
  const url = `${apiUrl}${endpoint}`;
  return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response code: ${response.status} ${response.statusText}`);
      }
      return response.json()          
  })
}

export const callPostApiNoAuth = (endpoint, body) => {
  const url = `${apiUrl}${endpoint}`;
  return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response code: ${response.status} ${response.statusText}`);
      }
      return response.json()          
  })
}

export const callPutApi = (endpoint, param, body, token) => {
  const url = `${apiUrl}${endpoint}/${param}`;
  return fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response code: ${response.status} ${response.statusText}`);
      }                
  })
}

export const callDeleteApi = (endpoint, deleteParam, token) => {
  const url = `${apiUrl}${endpoint}/${deleteParam}`;
  return fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response code: ${response.status} ${response.statusText}`);
      }
      return response.json()          
  })
}