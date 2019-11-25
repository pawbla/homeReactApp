import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Weather from './Weather'

export default function Routes(props) {
    return(
        <Switch>
            <Route exact path="/index">
                <Home />
            </Route>
            <Route exact path="/weather">
                <Weather baseUrl={props.baseUrl} />
            </Route>
        </Switch>
    );
}