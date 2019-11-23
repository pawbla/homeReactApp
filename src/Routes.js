import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Weather from './Weather'

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/index" component={Home} />
            <Route exact path="/weather" component={Weather} />
        </Switch>
    );
}