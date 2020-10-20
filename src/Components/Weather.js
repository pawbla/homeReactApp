import React, {useEffect} from 'react';
import WeatherRender from './WeatherRender';
import { connect } from "react-redux";
import {callGET} from '../actions/';
import MainSection from './MainSection/MainSection';

const pageTitle = "Pogoda";

function Weather(props) {
 
  const endpoint = 'weather';
  const errorMsg = "Nie można pobrać danych ze strony.";

  useEffect(() => {
     props.callGET(endpoint, "", errorMsg);
  }, [props]);

  const refresh = () => {
    props.callGET(endpoint, "", errorMsg);
  }

  return (
    <div>
      <MainSection component={WeatherRender} 
        reqId = {props.reqId}
        endpoint = {endpoint}
        refresh = {refresh}
        datas={props.datas} 
        title={pageTitle} />
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