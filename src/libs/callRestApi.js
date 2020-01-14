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
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return ""          
    })
}

export const callGetLoggedUserApi = (endpoint, queryParams, token) => {
    const url = `${apiUrl}${endpoint}${queryParams}`;
    console.log("==> get logged user url: " + url);
    return fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token,
        }
      })
      .then(res => res.json())
}