import React from 'react';
import './styles.css'
import {IconButton} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import MarkunreadIcon from '@material-ui/icons/Markunread';

import {notificationsListResp} from '../../Mocks/notificationsMock'; //for test during presentational development

export default function NotificationPopupPresentational() {
    return (
        <div className="notifications_popup">
            <NotificationHeader />
            <NotificationList notifications={notificationsListResp.notifications}/>
        </div>
    )
}

function NotificationHeader(props) {
    return (
        <div>
            <span>Oznacz wszystkie</span>
            <EntityReadUnread isRead={true}/>
        </div>
    )
}

function NotificationList(props) {
    return (
        <div>
            {
                props.notifications.map((item, index) => 
                    <NotificationItem item={item} key={index}/>
                )
            }
        </div>
    )
}

function NotificationItem(props) {
    return (
        <div className="item">
            <div>
                <EntityTypeIcon entityTypeId = {props.item.entity.entity_type_id} />
            </div>
            <div className={props.item.read ? null : "unread"}>
                {props.item.entity.message}
            </div>
            <div>
                <EntityReadUnread isRead={props.item.read}/>
            </div>
        </div>
    )
}

function EntityTypeIcon(props) {
    switch(props.entityTypeId) {
        case 1:
          return <i class="fa fa-user-plus fa-2x"></i>;
        case 2:
            return <i class="fa fa-user-times fa-2x"></i>;
        case 3:
            return <i class="fa fa-exclamation-triangle fa-2x"></i>;  
        case 4:
            return <i class="fa fa-eye-slash fa-2x"></i>;
        default:
            return <i class="fa fa-exclamation fa-2x"></i>;
    }
}

function EntityReadUnread(props) {
    return (
        <IconButton
            edge="start"
            color="inherit"
            size="small"
            aria-expanded="true"
            aria-controls="mobileMenu" 
            aria-haspopup="true"
            onClick={props.onClick}
            className={"readunread"}>
                {props.isRead ? <DraftsIcon color="primary"/> : <MarkunreadIcon color="primary"/>}
        </IconButton>
    )
}