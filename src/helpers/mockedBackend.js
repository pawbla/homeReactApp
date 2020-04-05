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
                        login: "adminLogin",
                        firstName: "AdminName",
                        lastName: "LastName",
                        role: "ROLE_ADMIN"
                    }
                    resolve({ ok: true, json: () => responeBody});
                }
                //Mock for fetching user data and log as user
                if (url.endsWith('login=user')) {
                    console.log("== MOCK == Mocked response for fetching user data will provided. Loged as USER. Status: OK");
                    let responeBody = {
                        login: "userLogin",
                        firstName: "UserName",
                        lastName: "LastName",
                        role: "ROLE_USER"
                    }
                    resolve({ ok: true, json: () => responeBody});     
                //Mock for revoking access token when logout              
                } if (url.endsWith('logout')) {
                    resolve({ ok: true, json: () => ""});  
                //Mock for user list for ManaheUsers
                } if (url.endsWith('users')) {
                    console.log("== MOCK == Mocked response for users list request ==")
                    const responeBody =  {users: [
                        {
                            username: "UserName1",
                            enabled: true,
                            firstName: "AFirst",
                            lastName: "ALast",
                            role: "ROLE_ADMIN"
                        },
                        {
                            username: "UserName2",
                            enabled: false,
                            firstName: "BFirst",
                            lastName: "BLast",
                            role: "ROLE_USER"
                        },
                        {
                            username: "UserName3",
                            enabled: false,
                            firstName: "CFirst",
                            lastName: "CLast",
                            role: "ROLE_USER"
                        },
                        {
                            username: "UserName4",
                            enabled: true,
                            firstName: "DFirst",
                            lastName: "DLast",
                            role: "ROLE_USER"
                        }
                    ]}
                    resolve({ ok: true, json: () => responeBody});
                } else {
                    console.log("== MOCK == Uncovered request, status: NOK. URL: " + url);
                    reject('Incorrect datas');
                }                
            }, 500);
        });
    }
}