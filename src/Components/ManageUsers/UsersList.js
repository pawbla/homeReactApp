import React, {useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {makeStyles} from '@material-ui/core/styles';

import Item from './Item'
import Description from './Description';

const useStyles = makeStyles(theme => ({
    p_ul: {
        listStyleType: 'none',
        marginLeft: '0px',
        paddingInlineStart: '20px',
        paddingInlineEnd: '20px',
        '& li': {
            marginBottom: '15px',
        },
    },
    'enter': {
        transformOrigin: 'top',
        transform: 'scaleY(.1)',
    },
    'enterActive': {
        transformOrigin: 'top',
        transform: 'scaleY(1)',
        transition: 'all .5s ease'
    },
    'leave': {
        transformOrigin: 'top',
        transform: 'scaleY(1)',
    },
    'leaveActive': {
        transformOrigin: 'top',
        transform: 'scaleY(0)',
        transition: 'all .3s ease'
    }
}));

export default function UsersList(props) {

    const styles = useStyles();

    const [isOpened, setOpenClose] = useState({});

    const openClose = (item) => {
        if (isOpened === item) {
            setOpenClose({});
        } else {
            setOpenClose(item);
        }

    }
    return (
        <ul className={styles.p_ul}>
            {props.users.users.map((item, index) => (
            <li key={index}>
               <Item item={item} 
                        onClick={openClose}
                        onDelete={props.onDelete}/>
                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        leave: styles.leave,
                        leaveActive: styles.leaveActive
                    }}
                    transitionAppear={true} 
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {isOpened === item.username && <Description item={item} 
                                                                onSubmit={props.onSubmit}
                                                                onChange={props.onChange}/>}
                </ReactCSSTransitionGroup>
            </li>))}
        </ul>  
    )
}