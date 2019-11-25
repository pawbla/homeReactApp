import React, { useState, useEffect } from 'react';
import WeatherRender from './WeatherRender'

const endpoint = 'weather';

function Weather(props) {
 
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch(`${props.baseUrl}${endpoint}`)
      .then(res => res.json())
      .then(json => setDatas(json));
  }, []);

  return (
    <div>
      {datas ? (<WeatherRender datas={datas} />) : (<div></div>)}
    </div>
  );
}

export default Weather;