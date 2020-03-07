const baseUrl = "localhost:8080"
const apiUrl = `http://${baseUrl}/api/v1/`;

export const callGetJwtTokenApi = (user, password) => {
  const clientId = "clientid";
  const clientSecret = "clientsectet";
  const loginUrl = `http://${baseUrl}/oauth/token`;
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

export const callPostApi = (endpoint, body, token) => {
  const url = `${apiUrl}${endpoint}`;
  return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response code: ${response.status} ${response.statusText}`);
      }
      return response.json()          
  })
}