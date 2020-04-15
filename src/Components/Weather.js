import React, {useEffect} from 'react';
import WeatherRender from './WeatherRender';
import { connect } from "react-redux";
import {callGET} from '../actions/';

function Weather(props) {
 
  const endpoint = 'weather';
  const errorMsg = "Nie można pobrać danych ze strony.";

  let isFetched = false;

  useEffect(() => {
     props.callGET(endpoint, "", errorMsg);
  }, []);

  return (
    <div>
      {props.reqId === endpoint ? (<WeatherRender datas={props.datas} />) : (<div></div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    datas: state.fetchedData.payload,
    reqId: state.fetchedData.id
  }
};

const mapDispatchToProps = {callGET};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);