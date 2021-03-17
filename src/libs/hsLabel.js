import React from 'react';
import './hsLabel.css'

function hsLabel(props) {
    return(
        <label className="label_field">
            {props.text}
        </label>
    )
}

export {hsLabel};