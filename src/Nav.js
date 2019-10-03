import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    boxShadow: '0 0 5px gray',
    [`${theme.breakpoints.down('400')} and (orientation: portrait)`]: {
      boxShadow: 'none'
    }
  },
  menuItem: {
    textDecoration: 'none',
    display: 'block',
    padding: '8px 16px',
    color: 'gray',
    "&:hover": {
      backgroundColor: 'gray',
      color: 'white'
    }
  },
  inactiveButton: {
    textDecoration: 'none',
  },
  activeButton: {
    "& li": {
      textDecoration: 'none',
      color: 'white',
      backgroundColor: '#05A8F5',
    }
  },
  button: {
    marginLeft: '12px',
    [theme.breakpoints.down('800')]: {
      display: 'none',
    }
  }
}));

function Nav(props) {
  const styles = useStyles();

  return (
    <div>
      <ul className={styles.list}>
        <MenuItem pic="fa fa-home" title="Home" path="/"/>
        <MenuItem pic="fa fa-cloud" title="Pogoda" path="/weather"/>
        <MenuItem pic="fa fa-users" title="Użytkownicy" path="/users"/>
        <MenuItem pic="fa fa-cogs" title="Czujniki" path="/sensor"/>
        <MenuItem pic="fa fa-warning" title="Sys info" path="/sysinfo"/>
      </ul>
    </div>
  );
}

function MenuItem(props) {
  const styles = useStyles();

    return(
      <NavLink exact to={props.path} className={styles.inactiveButton} activeClassName={styles.activeButton}>
        <li className={styles.menuItem}>
          <i className={props.pic}></i><span className={styles.button}>{props.title}</span>
        </li>
      </NavLink>
    );
}
 
export {Nav};