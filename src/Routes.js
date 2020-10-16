import React from "react";
import { Switch } from "react-router-dom";
import {roles} from './constants/constants';
import NotFound from "./Components/NotFound";

import Home from './Home';
import Weather from './Components/Weather';
import ExtendedRouter from './Components/ExtendedRouter';
import ManageUsers from './Components/ManageUsers/ManageUsers';
import MyProfile from './Components/MyProfile/MyProfile';
import ConnectorDetails from './Components/ConnectorDetails/ConnectorDetails';

export default function Routes() {
    return(
        <div>
            <Switch>
                <ExtendedRouter exact path="/index" roles={roles.USER} component={Home}/>
                <ExtendedRouter exact path="/weather" roles={roles.USER} component={Weather} />
                <ExtendedRouter exact path="/manage_users" roles={roles.ADMIN} component={ManageUsers} />
                <ExtendedRouter exact path="/my_profile" roles={roles.USER} component={MyProfile} />
                <ExtendedRouter exact path="/connectors" roles={roles.USER} component={ConnectorDetails} />
                <ExtendedRouter path="/" roles={roles.USER} component={NotFound}/>
            </Switch>
        </div>
    );
}