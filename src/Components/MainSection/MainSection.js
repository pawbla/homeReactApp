import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import {IconButton} from '@material-ui/core';
import './styles.css'

function MainSection({component: Component, ...props}) {

    return (
        <div>
            <div className="main_header">
                <h2>{props.title}</h2>
                <div className="refresh">
                    {props.refresh ?
                    <IconButton
                        edge="start"
                        color="inherit"
                        size="medium"
                        aria-expanded="true"
                        aria-controls="mobileMenu" 
                        aria-haspopup="true"
                        onClick={props.refresh}>
                        <RefreshIcon color="primary" fontSize="large" />
                    </IconButton> : ""}
                </div>
            </div> 
            <div className="main_content">
                {props.reqId === props.endpoint ? <Component {...props} /> : <div></div>}
            </div> 
        </div>       
    )
}

export default MainSection;