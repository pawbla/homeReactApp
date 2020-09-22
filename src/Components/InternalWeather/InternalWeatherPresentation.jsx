import React from 'react';
import './styles.css'

export default function InternalWeatherPresentational(props) {
    return (
        <div className="internalWeather">
            <h3>
                Na zewnątrz
            </h3>
            <div className="values">
                <div>
                    <span className="value">{props.datas.out.temperature}</span><span>&deg;C</span>
                </div>
                <div>
                    <span className="value">{props.datas.out.humidity}</span><span>%</span>
                </div>
                <div>
                    <span className="value">{props.datas.out.pressure}</span><span>hPa</span>
                </div>
            </div>

        </div>
    )
}