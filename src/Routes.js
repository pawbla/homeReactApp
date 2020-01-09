import React from "react";
import { Switch } from "react-router-dom";
import Home from './Home';
import Weather from './Components/Weather';
import ExtendedRouter from './Components/ExtendedRouter';
import {roles} from './constants/constants';

export default function Routes() {
    return(
        <div>
            <Switch>
                <ExtendedRouter exact path="/index" roles={roles.USER} component={Home}/>
                <ExtendedRouter exact path="/weather" roles={roles.USER} component={Weather} />
                <ExtendedRouter path="/" roles={roles.USER} />
            </Switch>
        </div>
    );
}