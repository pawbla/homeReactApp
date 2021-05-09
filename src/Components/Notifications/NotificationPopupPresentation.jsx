import React from 'react';
import './styles.css'
import {IconButton} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import MarkunreadIcon from '@material-ui/icons/Markunread';


export default function NotificationPopupPresentational(props) {
    return (
        <div className="notifications_popup">
            <NotificationHeader size={props.notifications.length}/>
            <NotificationList notifications={props.notifications} onClick={props.onClick}/>
        </div>
    )
}

function NotificationHeader(props) {
    return (
        <div>
            <span>Ilość powiadomień: {props.size}</span>
        </div>
    )
}

function NotificationList(props) {
    return (
        <div>
            {
                props.notifications.sort((a, b)=> {
                    return new Date(b.entity.create) - new Date(a.entity.create);
                }).map((item, index) => 
                    <NotificationItem item={item} key={index} pos={index} onClick={props.onClick}/>
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
                <EntityReadUnread isRead={props.item.read} onClick={() => props.onClick(props.pos)}/>
            </div>
        </div>
    )
}

function EntityTypeIcon(props) {
    switch(props.entityTypeId) {
        case 1:
          return <i className="fa fa-user-plus fa-2x"></i>;
        case 2:
            return <i className="fa fa-user-times fa-2x"></i>;
        case 3:
            return <i className="fa fa-exclamation-triangle fa-2x"></i>;  
        case 4:
            return <i className="fa fa-eye-slash fa-2x"></i>;
        default:
            return <i className="fa fa-exclamation fa-2x"></i>;
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