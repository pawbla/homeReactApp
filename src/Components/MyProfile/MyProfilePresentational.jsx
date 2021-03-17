import React, {useRef} from 'react';
import './styles.css'


import {hsInput as HsInput} from '../../libs/hsInput'
import {hsSubmit as HsSubmit, hsButton as HsButton} from '../../libs/hsButton'

function MyProfilePresentational(props) {

    return (
        <div className = "incontext myprofile">
            <form onSubmit={props.onSubmit}>
                <div>
                    <HsInput placeholder="Imię"
                              width="28%"
                              name="firstName"
                              onChange={props.onChange}
                              value={props.values.firstName}></HsInput>
                </div>
                <div>
                    <HsInput placeholder="Nazwisko"
                              width="28%"
                              name="lastName"
                              onChange={props.onChange}
                              value={props.values.lastName}></HsInput>
                </div>
                <div>
                    <HsInput placeholder="e-mail"
                              width="28%"
                              name="email"
                              onChange={props.onChange}
                              value={props.values.email}></HsInput>
                </div>
                <div className="submit">
                    <HsSubmit width="30%"></HsSubmit>
                </div>
            </form>
            <div>
                <HsButton text="Zmień hasło"
                            width="29%"
                            onClick={props.showPassPopup}></HsButton>
            </div>
            <div>
                <HsButton text="Ustawienia powiadomień"
                            width="29%"
                            onClick={props.showNotificationsPopup}></HsButton>
            </div>
        </div>
    );
}

export default MyProfilePresentational;