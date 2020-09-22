import React, {useEffect, useState} from 'react';
import InternalWeatherPresentational from './InternalWeatherPresentation';
import {callInternalApi} from '../../libs/callRestApi';

export default function InternalWeather(props) {

    const endpoint = 'weather';

    const init = {
        out: {
            temperature: "",
            humidity: "",
            pressure: ""
        }
    }

    const [values, setText] = useState(init);

    useEffect(() => {
        const id = setInterval(() => {
            fetchWeatherData();
        }, 10000);
        return () => clearInterval(id);
     }, []);

     const fetchWeatherData = async () => {
        await callInternalApi(endpoint, "")
        .then(json => {  
            console.log("Resp: " + JSON.stringify(json));
            setText({...values, ["out"]: {
                temperature: json.out.temperature.value,
                humidity: json.out.humidity.value,
                pressure: json.weather.pressure.value
            }});
        })
        .catch(error => {
            console.log("error" + error);
        });
     }
    
    return (
        <InternalWeatherPresentational datas={values} />
    )
}