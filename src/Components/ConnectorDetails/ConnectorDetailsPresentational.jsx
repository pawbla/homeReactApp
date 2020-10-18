import React, {useRef} from 'react';
import './styles.css';
import {IconButton} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '../../libs/modal';
import ConnectorDetailPopup from './ConnectorDetailPopup';

function ConnectorDetailsPresentational(props) {
    return (
        <div className = "incontext">
            <ul className="details">
                {props.datas.connectors.map((item, key) => 
                    <Item item={item} key={key} /> 
                )}
            </ul> 
        </div>
    );
}

function Item(props) {
    const childRef = useRef();

    const showPopup = () => {
        childRef.current.openPopup()
    }

    return (
        <li className="item">
            <h2>{props.item.name}</h2>
            <div className="provider">
                <span> Powered by:</span>
                <span>{props.item.provider}</span>
            </div>
            <div className="icons">
                {props.item.isError ? 
                    <WarningIcon style={{ color: '#ffcc00' }} fontSize="large" className="warning"/>
                    : ""}
                <IconButton
                    edge="start"
                    color="inherit"
                    size="small"
                    aria-expanded="true"
                    aria-controls="mobileMenu" 
                    aria-haspopup="true"
                    onClick={showPopup}>
                    <InfoIcon color="primary" fontSize="large"/>
                </IconButton>
            </div>
            <Modal component={ConnectorDetailPopup} ref={childRef} data={props.item}/>
        </li>
    );
}

export default ConnectorDetailsPresentational;