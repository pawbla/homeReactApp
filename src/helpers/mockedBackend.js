import {userAdmin, userUser} from '../Mocks/loginMocks'; 
import { usersList} from '../Mocks/manageUsersMock';
import {weatherResp} from '../Mocks/weatherMocks';
import {connectorDetailsResp} from '../Mocks/connectorDetailsMock';

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

                    resolve({ ok: true, json: () => userAdmin});
                }
                //Mock for wearher context
                if (url.endsWith('weather')) {
                    console.log("== MOCK == Mocked response for weather. Loged as USER. Status: OK");
                    resolve({ ok: true, json: () => weatherResp});
                }
                //Mock for fetching user data and log as user
                if (url.endsWith('login=user')) {
                    console.log("== MOCK == Mocked response for fetching user data will provided. Loged as USER. Status: OK");
                    resolve({ ok: true, json: () => userUser});     
                //Mock for revoking access token when logout              
                } else if (url.endsWith('logout')) {
                    resolve({ ok: true, json: () => ""});
                //Mock for register user              
                } else if (url.endsWith('register')) {
                    resolve({ ok: true, json: () => ""});   
                //Mock for user list for ManaheUsers
                } else if (url.endsWith('users')) {
                    console.log("== MOCK == Mocked response for users list request ==")
                    resolve({ ok: true, json: () => usersList});
                //Mock for connector details
                } else if (url.endsWith('connectors')) {
                    console.log("== MOCK == Mocked response for weather. Loged as USER. Status: OK");
                    resolve({ ok: true, json: () => connectorDetailsResp});
                } else {
                    console.log("== MOCK == Uncovered request, status: NOK. URL: " + url);
                    reject('Response from mock - Incorrect datas');
                }                
            }, 500);
        });
    }
}