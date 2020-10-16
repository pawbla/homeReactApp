import React, { useEffect, useState } from 'react';
import ConnectorDetailsPresentational from './ConnectorDetailsPresentational';
import MainSection from '../MainSection/MainSection';
import DetailsModal from './DetailsModal';

//ONLY FOR TEST PURPOSE !!!!!!!!!!!!!!!!
import {connectorDetailsResp} from '../../Mocks/connectorDetailsMock';

const pageTitle = "Czujniki";

function ConnectorDetails() {

    return (
        <div>
            <ConnectorDetailsPresentational datas={connectorDetailsResp} />
        </div>
    );
}

export default MainSection((ConnectorDetails), pageTitle);