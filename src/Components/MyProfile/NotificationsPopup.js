import React, {useState, useEffect} from 'react';
import NotificationsPopupPresentational from './NotificationsPopupPresentational';
import { connect } from "react-redux";
import {callGET, callPATCH, fetchNotificationSize} from '../../actions';


function NotificationsPopup(props) {

    const notificatonsEndpoint = "followednotifications";
    const readNotifyErrMsg = "Nie można pobrać informacji o powiadomieniach."
    const cannotUpdateErrMsg = "Nie można zakutalizować powiadomień."

    const [values, setValues] = useState([]);

    useEffect(() => {
        onEnter();
     }, [props.togglePopup]);

    const toggleCheck = (itemId) => {
        let pos = 0;
        let items = values;
        values.forEach(value => {
            if (value.id === itemId) {
                value = {...value, followed: !value.followed};
                items[pos] = value;
            }
            pos++;
        })
        setValues([...items]);
    }

     const onEnter = async() => {
         let notifications;
         if (props.user_id != undefined) {
            notifications = await props.callGET(notificatonsEndpoint, `?user_id=${props.user_id}`, readNotifyErrMsg, true);
         }
        if (notifications != undefined) {
            setValues(notifications.followed_notifications);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const resp = await props.callPATCH(notificatonsEndpoint, props.user_id,  prepareToSend(), cannotUpdateErrMsg);
        if (!resp.hasError) {
            props.fetchNotificationSize();
            props.hidePopup();
            props.reload();
        }
    }

    const prepareToSend = () => {
        let item = {};
        values.forEach(value => {
            item[value.id] = value.followed
        });
        return item;
    }

    return (
        <div>
            {values != undefined ? <NotificationsPopupPresentational hidePopup={props.hidePopup} 
                values={values} toggleCheck={toggleCheck} onSubmit={onSubmit}/> : <div></div>}
        </div>
    )
};

const mapDispatchToProps = {callGET, callPATCH, fetchNotificationSize};

export default connect(null, mapDispatchToProps)(NotificationsPopup);