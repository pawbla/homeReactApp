import React from 'react';
import './hsButton.css'

function hsSubmit(props) {
    return(
        <input className="btn"
               type="submit"
               style={{width: props.width}}>
         </input>
    )
}

function hsButton(props) {
    return(
        <button className="btn"
                style={{width: props.width}}>
                    {props.text}
        </button>
    )
}

export {hsSubmit, hsButton};