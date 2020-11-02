import React from 'react';
import './delete.css';
import {hsButton as HsButton} from '../../libs/hsButton';

export default function DeletePopupPresentational(props) {
    return (
        <div className="deleteUserPopup">
            <div>
                <h2 className="popup_title">Czy jesteś pewny?</h2>
                <span>Czy na pewno chcesz usunąć użytkownika __tutaj ma być nazwa__?</span>
            </div>
            <div>
                <HsButton text="Anuluj"
                    width="40%"
                    onClick={props.hidePopup}></HsButton>
                <HsButton text="Usuń"
                     width="40%"
                     onClick={props.deleteUser}></HsButton>
            </div>
        </div>
    )
}