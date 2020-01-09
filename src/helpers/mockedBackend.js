let mockNo = 1;

export function mockedBackend() {
    window.fetch = function (url, data) {
        return new Promise((resolve, reject) => {
            console.log("== MOCK == Mocked Api fetched url: " + url);
            setTimeout(() => {
                //Mock for fetching jwtToken
                if (url.endsWith('/oauth/token')) {
                    //return ok when pass equals pass, user not checked
                    if (data.body.endsWith("pass")) {
                        console.log("== MOCK == Mocked response for fetching jwtToken will provided, status: OK");
                        let responeBody = {
                            access_token: "mockedJwtToken" + mockNo
                        };
                            resolve({ ok: true, json: () => responeBody
                        });
                        mockNo++;
                    } else {
                        console.log("== MOCK == Mocked response for fetching jwtToken will provided, status: NOK");
                        reject('Incorrect datas');
                    }                   
                }
                //Mock for fetching user data and log as admin
                if (url.endsWith('login=admin')) {
                    console.log("== MOCK == Mocked response for fetching user data will provided. Loged as ADMIN. Status: OK");
                    let responeBody = {
                        login: "userLogin",
                        firstName: "mockedFirstName",
                        lastName: "mockedLastName",
                        role: "admin"
                    }
                    resolve({ ok: true, json: () => responeBody
                    });
                }
                //Mock for fetching user data and log as user
                if (url.endsWith('login=user')) {
                    console.log("== MOCK == Mocked response for fetching user data will provided. Loged as USER. Status: OK");
                    let responeBody = {
                        login: "userLogin",
                        firstName: "mockedFirstName",
                        lastName: "mockedLastName",
                        role: "user"
                    }
                    resolve({ ok: true, json: () => responeBody});     
                //Mock for revoking access token when logout              
                } if (url.endsWith('logout')) {
                    resolve({ ok: true, json: () => ""});  
                } else {
                    console.log("== MOCK == Uncovered request, status: NOK");
                    reject('Incorrect datas');
                }                
            }, 500);
        });
    }
}