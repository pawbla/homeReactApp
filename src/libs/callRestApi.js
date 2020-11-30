import getConfigData from './configData';
const apiUrl = `/api/v1/`;

export const callGetJwtTokenApi = (user, password) => {
  const clientId = getConfigData("clientId");
  const clientSecret = getConfigData("clientSecret");
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
          throw ({msg: `Received response code: ${response.status} ${response.statusText}`, st: "qe"});
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
          throw (errorObj(response.status, response.statusText));
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
        throw ({status: response.status, text: response.statusText});
      }
      return response.json()          
  })
}

export const callPostApi = (endpoint, body, token) => {
  const url = `${apiUrl}${endpoint}`;

  let header =  {
    "Content-Type": "application/json"
  }
  if (token) {
    header['Authorization'] = 'Bearer ' + token;
  }
 

  return fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw (errorObj(response.status, response.statusText));
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
        throw (errorObj(response.status, response.statusText));
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
        throw (errorObj(response.status, response.statusText));
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
        throw (errorObj(response.status, response.statusText));
      }
      return response.json()          
  })
}

const errorObj = (status, text) => {
  console.log("sdad = " + status + " adasd " + text)
  return {
    message: `Received response code: ${status} ${text}`,
    respCode: status,
    respMsg: text
  };
}