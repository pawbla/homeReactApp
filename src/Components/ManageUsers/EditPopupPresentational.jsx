import React from 'react';
import './edit.css';
import {roles} from '../../constants/constants';

import {hsInput as HsInput} from '../../libs/hsInput';
import {hsButton as HsButton} from '../../libs/hsButton';
import {hsSelect as HsSelect} from '../../libs/hsSelect';
import {hsCheckbox as HsCheckbox} from '../../libs/hsCheckbox';

export default function EditPopupPresentational(props) {

    return (
        <div className="editUserPopup">
            <h2 className="edit_title">Edycja: {props.value.username}</h2>
            <form>
                <HsInput placeholder="Imię"
                    width="90%"
                    name="firstName"
                    onChange={props.onChange}
                    value={props.value["firstName"]}/>
                <HsInput placeholder="Nazwisko"
                    width="90%"
                    name="lastName"
                    onChange={props.onChange}
                    value={props.value["lastName"]}/>
                <HsInput placeholder="e-mail"
                    width="90%"
                    placeholder="e-mail"
                    onChange={props.onChange}
                    value={props.value["email"]}/>
                <div className="boxes">
                    <HsSelect name="role"
                        width="84%"
                        items={Object.keys(roles)}
                        onChange={props.onChange} 
                        value={props.value["role"]["role"].replace("ROLE_", "")}/> 
                    <HsCheckbox toggleCheck={props.toggleCheck}
                        checked={props.value["enabled"]}
                        name="enabled"/>
                </div>
                <div>
                    <HsButton text="Anuluj"
                        width="45%"
                        onClick={props.hidePopup}></HsButton>
                    <HsButton text="Prześlij"
                        width="45%"
                        onClick={props.onSubmit}></HsButton>
                </div>
            </form>
        </div>
    )
}