import React from 'react';
import './hsCheckbox.css'

function hsCheckbox(props) {
    return (
        <div className="checkboxF" onClick={props.toggleCheck}>
            <input type="checkbox" 
                checked={props.checked}
                name={props.name}>
            </input>
            <span></span>
        </div>

    )
}

export {hsCheckbox}