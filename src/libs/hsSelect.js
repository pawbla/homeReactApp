import React from 'react';
import './hsSelect.css'

function hsSelect(props) {
    return (
        <select className="select"
            style={{width: props.width}}
            name={props.name}
            value={props.value}
            onChange={props.onChange}>
            {
                props.items.map((item, index) => 
                    (<option className="option" key={index}>{item}</option>))
            }
        </select>
    )
}

export {hsSelect};