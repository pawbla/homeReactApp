import React  from 'react';
import './modal.css'
import {hsInput as HS_Input} from '../../libs/hsInput'
import {hsSubmit as HS_Submit, hsButton as HS_Button} from '../../libs/hsButton'

export default function ModalPresentational(props) {
    return (
        <div className="popup">
            <div className="popup_in">
                <h2 className="popup_title">Zmiana hasła</h2>
                <form className="popup_form" onSubmit={props.changePassowrd}>
                    <div>
                        <HS_Input placeholder="Stare hasło"
                            width="65%"
                            name="oldPass"
                            type="password"
                            onChange={props.onChange}
                            value={props.values.oldPass}
                            isError={props.errors.oldPass}></HS_Input>
                    </div>
                    <div>
                        <HS_Input placeholder="Nowe hasło"
                            width="65%"
                            name="newPass"
                            type="password"
                            onChange={props.onChange}
                            value={props.values.newPass}
                            isError={props.errors.newPass}></HS_Input>
                    </div>
                    <div>
                        <HS_Input placeholder="Powtórz nowe hasło"
                            width="65%"
                            name="newPassRepeate"
                            type="password"
                            onChange={props.onChange}
                            value={props.values.newPassRepeate}
                            isError={props.errors.newPassRepeate}></HS_Input>
                    </div>
                    <div>
                        <HS_Button text="Anuluj"
                            width="32%"
                            onClick={props.closePopup}></HS_Button>
                        <HS_Submit width="32%"></HS_Submit>
                    </div>
                </form>
            </div>
        </div>
    )
}