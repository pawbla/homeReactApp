import React from 'react';
import './hsInput.css'

function hsInput(props) {
    return(
        <input className="input_field"
               type="text"
               placeholder={props.placeholder}
               name={props.name}
               value={props.value}
               onChange={props.onChange}
               style={{width: props.width}}>
         </input>
    )
}

export default hsInput;