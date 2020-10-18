import React, { useEffect, useState } from 'react';
import ConnectorDetailsPresentational from './ConnectorDetailsPresentational';
import MainSection from '../MainSection/MainSection';
import { connect } from "react-redux";
import {callGET} from '../../actions/';

const pageTitle = "Czujniki";

function ConnectorDetails(props) {

    const endpoint = 'connectors';
    const errorMsg = "Nie można pobrać danych ze strony.";
  
    useEffect(() => {
       props.callGET(endpoint, "", errorMsg);
    }, [props]);
    return (
        <div>
            {props.reqId === endpoint ? (<ConnectorDetailsPresentational datas={props.datas} />) : (<div></div>)}
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
  

export default MainSection(connect(mapStateToProps, mapDispatchToProps)(ConnectorDetails), pageTitle);