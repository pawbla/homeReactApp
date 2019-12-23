import React, { useState, useEffect } from 'react';
import WeatherRender from './WeatherRender';
import { connect } from "react-redux";
import { constants } from '../constants/constants';

const endpoint = 'weather';

function Weather(props) {
 
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch(`${constants.baseUrl}${endpoint}`, {
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
  console.log("weather" + JSON.stringify(state));
  return {
    jwtToken: state.loggedUser.jwtToken,
  }
};

export default connect(mapStateToProps)(Weather);