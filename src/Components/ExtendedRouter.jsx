import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const ExtendedRouter = ({component: Component, roles, ...params}) => (
    <Route {...params} render={params, props => {
        //user is NOT authenticated
        if (!params.isAuthenticated) { 
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        //user is authenticated but no role to access the resources
        if ((roles && roles.indexOf(params.role) === -1) || !roles) {
            return <Redirect to={{ pathname: '/index'}} />
        }
        return <Component {...props} />
    }} />
)

const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.loggedUser.isAuthenticated,
      role: state.loggedUser.role
    }
};

export default connect(mapStateToProps)(ExtendedRouter)