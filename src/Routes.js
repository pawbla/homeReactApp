import React from "react";
import { Switch } from "react-router-dom";
import Home from './Home';
import Weather from './Components/Weather';
import ExtendedRouter from './Components/ExtendedRouter';
import ManageUsers from './Components/ManageUsers/ManageUsers';
import {roles} from './constants/constants';
import NotFound from "./Components/NotFound";

export default function Routes() {
    return(
        <div>
            <Switch>
                <ExtendedRouter exact path="/index" roles={roles.USER} component={Home}/>
                <ExtendedRouter exact path="/weather" roles={roles.USER} component={Weather} />
                <ExtendedRouter exact path="/manage_users" roles={roles.ADMIN} component={ManageUsers} />
                <ExtendedRouter path="/" roles={roles.USER} component={NotFound}/>
            </Switch>
        </div>
    );
}