import React, { useState, useEffect } from 'react';
import WeatherRender from './WeatherRender';
import { connect } from "react-redux";

const endpoint = 'weather';

function Weather(props) {
 
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    console.log("llll" + localStorage.getItem('jwtToken'));
    console.log("==== jwt Toke: " + props.jwtToken);
    fetch(`${props.baseUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + props.jwtToken,
      }
    })
      .then(res => res.json())
      .then(json => setDatas(json));
  }, []);

  return (
    <div>
      {datas ? (<WeatherRender datas={datas} />) : (<div></div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("State: " + JSON.stringify(state));
  return {
    jwtToken: state.jwtToken
  }
};

export default connect(mapStateToProps)(Weather);