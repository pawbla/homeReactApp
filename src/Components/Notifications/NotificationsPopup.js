import React, {useEffect, useState, useRef} from 'react';
import NotificationPopupPresentational from './NotificationPopupPresentation';
import { connect } from "react-redux";
import {callGET, callPATCH, fetchNotificationSize} from '../../actions';

function NotificationPopup(props) {
    const notificatonsEndpoint = "notifications/list";
    const readNotifyErrMsg = "Nie można pobrać powiadomień."
    const notificationUpdateEndpoint = "notifications";
    const updateErrMsg = "Nie można zaktualizować zmian w powiadomieniach.";

    const [notifications, setNotifications] = useState([]);
    const [changedNotifications, setChanged] = useState(new Set());
    const notificationsRef = useRef(notifications);

    useEffect(() => {
        onEnter();
        return () => {
            let notificationsToSend = collectChangedNotifications();
            if (notificationsToSend.length > 0) {
                props.callPATCH(notificationUpdateEndpoint, "", notificationsToSend, updateErrMsg);
                props.fetchNotificationSize();
            }
        }
     }, [props.isPopup]);

    const onEnter = async() => {
        let notifi;
        if (props.user_id !== undefined) {
           notifi = await props.callGET(notificatonsEndpoint, `?user_id=${props.user_id}`, readNotifyErrMsg, true);
        }
        if (notifi !== undefined) {
            setNotifications(notifi.notifications);
        }
    }

    const onClick = (e) => {
        notifications[e].read = !notifications[e].read;
        setNotifications([...notifications]);
        notificationsRef.current = notifications;
        setChanged(changedNotifications.add(e));
    }

    const collectChangedNotifications = (z) => {
        let items = [];
        changedNotifications.forEach(item => {
            items.push(notificationsRef.current[item])
        })
        return items;
    }

    return (
        <NotificationPopupPresentational notifications={notifications} onClick={onClick}/>
    )
}

const mapDispatchToProps = {callGET, callPATCH, fetchNotificationSize};

export default connect(null, mapDispatchToProps)(NotificationPopup);