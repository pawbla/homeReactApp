import React from 'react';
import './styles.css'

import InternalWeather from '../InternalWeather/InternalWeather';

function InternalPresentational(props) {
    
    return (
        <div className="view_area">
            <InternalWeather  />
        </div>
    )
}

export default InternalPresentational;