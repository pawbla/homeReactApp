import React, { useState, useEffect } from 'react';
import WeatherRender from './WeatherRender'

function Weather() {
 
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/weather`)
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