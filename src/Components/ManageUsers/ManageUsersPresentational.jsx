import React, {useState, useRef} from 'react';
import './styles.css';
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {hsInput as HsInput} from '../../libs/hsInput';
import Modal from '../../libs/modal';
import DeletePopup from './DeletePopup';

function ManageUsersPresentational(props) {
    const [searchStr, setText] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    function filter(element, index, array) {
        var value = searchStr.toLowerCase();
        if (element.username.toLowerCase().includes(value) || element.firstName.toLowerCase().includes(value) 
            || element.lastName.toLowerCase().includes(value) || element.role.toLowerCase().includes(value) || value == "") {
            return true;
        }
        return false;
    }

    return(
        <div className = "incontext">
            <div className="usersSearch">
                <HsInput type="text" 
                        placeholder="Szukaj"
                        onChange={handleChange}
                        value={searchStr}
                        width="250px"></HsInput>
            </div>
            <ul className="users">
                {props.users.users.filter(filter).sort(compareUsernames).map((item, index) => 
                    <Item item={item} key={index} />
                )}
            </ul>
        </div> 
    );
}

function Item(props) {
    const childRef = useRef();

    const showDeletePopup = () => {
        childRef.current.openPopup()
    }

    return (
        <li className={props.item.enabled ? "item" : "item disabled"}>
            <h2>{props.item.username}</h2>
            <div className="username">
                <span>{props.item.firstName} {props.item.lastName}</span>
                <span>{props.item.role.replace("ROLE_", "")}</span>
            </div>
            <div className="icons">
                <IconButton
                    edge="start"
                    color="inherit"
                    size="small"
                    aria-expanded="true"
                    aria-controls="mobileMenu" 
                    aria-haspopup="true"
                    style={{marginRight: '20px'}}>
                    <EditIcon color="primary" fontSize="large"/>
                </IconButton>
                <IconButton
                    edge="start"
                    color="inherit"
                    size="small"
                    aria-expanded="true"
                    aria-controls="mobileMenu" 
                    aria-haspopup="true"
                    onClick={showDeletePopup}>
                    <DeleteIcon color="primary" fontSize="large"/>
                </IconButton>
            </div>
            <Modal component={DeletePopup} ref={childRef} user_id={props.item.user_id}/>

        </li>
    )
}

function compareUsernames(a, b) {
    if (a.username > b.username) {
        return 1;
    }
    if (a.username < b.username) {
        return -1;
    }
    return 0;
}

export default ManageUsersPresentational;