import React, { useState, useEffect } from 'react';
import WeatherRender from './WeatherRender';
import { connect } from "react-redux";
import {callGetApi} from '../libs/callRestApi';

function Weather(props) {
 
  const [datas, setDatas] = useState(null);
  const endpoint = 'weather';

  useEffect(() => {
    
    callGetApi(endpoint, "", props.jwtToken)
      .then(json => setDatas(json))
      .catch(error => alert("Nie można pobrać danych ze strony. \n" + error));
  }, []);

  return (
    <div>
      {datas ? (<WeatherRender datas={datas} />) : (<div></div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwtToken: state.loggedUser.jwtToken,
  }
};

export default connect(mapStateToProps)(Weather);