import React from 'react';
import './hsButton.css'

function hsSubmit(props) {
    return(
        <input className={props.alt ? "btn btnAlt" : "btn"}
               type="submit"
               value={props.value === "" ? "Prześlij" : props.value}
               style={{width: props.width}}>
         </input>
    )
}

function hsButton(props) {
    return(
        <button className={props.alt ? "btn btnAlt" : "btn"}
                style={{width: props.width}}>
                    {props.text}
        </button>
    )
}

export {hsSubmit, hsButton};