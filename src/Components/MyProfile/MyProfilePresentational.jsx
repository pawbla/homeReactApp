import React, {useEffect} from 'react';
import './styles.css'

import HS_Input from '../../libs/hsInput'
import {hsSubmit as HS_Submit, hsButton as HS_Button} from '../../libs/hsButton'

function MyProfilePresentational(props) {

    return (
        <div className = "incontext myprofile">
            <form>
                <div>
                    <HS_Input placeholder="Imię"
                              width="28%"
                              name="firstName"
                              onChange={props.onChange}
                              value={props.values.firstName}></HS_Input>
                </div>
                <div>
                    <HS_Input placeholder="Nazwisko"
                              width="28%"
                              name="lastName"
                              onChange={props.onChange}
                              value={props.values.lastName}></HS_Input>
                </div>
                <div>
                    <HS_Input placeholder="e-mail"
                              width="28%"
                              name="email"
                              onChange={props.onChange}
                              value={props.values.email}></HS_Input>
                </div>
                <div className="submit">
                    <HS_Submit width="30%"></HS_Submit>
                </div>
            </form>
            <div>
                <HS_Button text="Zmień hasło"
                            width="30%"></HS_Button>
            </div>
        </div>
    );
}

export default MyProfilePresentational;