import React from 'react';
import './styles.css'

export default (Component, title) => {

    return (props) => (
        <div>
            <div className="main_header">
                <h2>{title}</h2>
            </div> 
            <div className="main_content">
                <Component {...props} />
            </div> 
        </div>
    );
};