import React from 'react';
import './popup.css';
import {hsButton as HsButton} from '../../libs/hsButton';
import {Link} from 'react-router-dom';

export default function ConnectorDetailPopup(props) {

    return(
        <div className="popup_in">
            <div className="name">
                <span>{props.data.name}</span>
            </div>
            <div>
                <span>Powered by: </span>
                <Link to={{ pathname: props.data.link }} target="_blank">{props.data.provider}</Link>
            </div>
            <div>
                <span>Ostatni odczyt:</span><span>{props.data.date}</span>
            </div>
            <div>
                <span>Kod ostatniej odpowiedzi: </span>
                <span className={props.data.responseCode === 200 ? "response_ok" : "response_nok"}>{props.data.responseCode}</span>
            </div>
            <div>
                <span>{props.data.isError ? "Błąd: " : ""}</span><span>{props.data.isError ? props.data.errorMessage : ""}</span>
            </div>
            <div>
                <HsButton text="Zamknij"
                        width="50%"
                        onClick={props.hidePopup}></HsButton>
            </div>

        </div>
    )  
  }