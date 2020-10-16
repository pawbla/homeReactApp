import React, {useRef} from 'react';
import './styles.css';
import {IconButton} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '../../libs/modal'

function ConnectorDetailsPresentational(props) {
    const childRef = useRef();

    const click = () => {
        childRef.current.openPopup()
    }

    return (
        <div className = "incontext">
            <ul className="details">
                {props.datas.connectors.map((item, key) => 
                    <Item item={item} key={key}/> 
                )}
            </ul>
            <Modal component={Popup} ref={childRef} text={"ziemniaki:"}/>
        </div>
    );
}

function Item(props) {
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
                    onClick={props.showPopup}>
                    <InfoIcon color="primary" fontSize="large"/>
                </IconButton>
            </div>
        </li>
    );
}

function Popup(props) {
  return(
      <div className="popup_in">
          <button onClick={props.hidePopup}>{props.text}</button>
      </div>
  )  
}

export default ConnectorDetailsPresentational;