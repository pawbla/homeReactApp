import React, { useEffect} from 'react';
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
        <div><MainSection
                reqId = {props.reqId}
                endpoint = {endpoint}
                component={ConnectorDetailsPresentational}
                title={pageTitle} 
                datas={props.datas} />
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
  

export default connect(mapStateToProps, mapDispatchToProps)(ConnectorDetails);