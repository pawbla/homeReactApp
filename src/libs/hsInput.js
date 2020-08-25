import React from 'react';
import './hsInput.css'

function hsInput(props) {
    return(
        <input className={props.isError ? "input_field input_field_error" : "input_field"}
               type={props.type === "" ? "text" : props.type}
               placeholder={props.placeholder}
               name={props.name}
               value={props.value}
               onChange={props.onChange}
               style={{width: props.width}}>
        </input>
    )
}

export {hsInput};