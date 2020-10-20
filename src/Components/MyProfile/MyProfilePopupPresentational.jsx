import React  from 'react';
import './popup.css'
import {hsInput as HsInput} from '../../libs/hsInput'
import {hsSubmit as HsSubmit, hsButton as HsButton} from '../../libs/hsButton'

export default function MyProfilePopupPresentational(props) {
    return (
        <div className="myprofile_popup">
            <h2 className="popup_title">Zmiana hasła</h2>
            <form className="popup_form">
                <div>
                    <HsInput placeholder="Stare hasło"
                        width="65%"
                        name="oldPass"
                        type="password"
                        onChange={props.onChange}
                        value={props.values.oldPass}
                        isError={props.errors.oldPass}></HsInput>
                </div>
                <div>
                    <HsInput placeholder="Nowe hasło"
                        width="65%"
                        name="newPass"
                        type="password"
                        onChange={props.onChange}
                        value={props.values.newPass}
                        isError={props.errors.newPass}></HsInput>
                </div>
                <div>
                    <HsInput placeholder="Powtórz nowe hasło"
                        width="65%"
                        name="newPassRepeate"
                        type="password"
                        onChange={props.onChange}
                        value={props.values.newPassRepeate}
                        isError={props.errors.newPassRepeate}></HsInput>
                </div>
                <div>
                    <HsButton text="Anuluj"
                        width="32%"
                        onClick={props.hidePopup}></HsButton>
                    <HsButton text="Prześlij"
                        width="32%"
                        onClick={props.changePassowrd}></HsButton>
                </div>
            </form>
        </div>
    )
}