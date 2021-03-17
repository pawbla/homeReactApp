import React from 'react';
import './notificationpopup.css'

import {hsButton as HsButton} from '../../libs/hsButton';
import {hsCheckbox as HsCheckbox} from '../../libs/hsCheckbox';
import {hsLabel as HsLabel} from '../../libs/hsLabel';

export default function NotificationsPopupPresenational(props) {
    return ( 
        <div className="notification_popup">
            <h2>Ustawienia powiadomień</h2>
            <form>
                {
                    props.values.map((item, index) => 
                        <div key={index}>
                            <HsLabel text={item.type}></HsLabel>
                            <HsCheckbox toggleCheck={() => props.toggleCheck(item.id)}
                                name={item.id}
                                checked={item.followed}/>
                        </div>
                    )
                }
            </form>
            <div>
                <HsButton text="Anuluj"
                    width="35%"
                    onClick={props.hidePopup}></HsButton>
                <HsButton text="Prześlij"
                    width="35%"
                    onClick={props.onSubmit}></HsButton>
            </div>
        </div>
    )
}