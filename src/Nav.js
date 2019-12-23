import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {roles} from './constants/constants';

const useStyles = makeStyles(theme => ({
  list: {
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    boxShadow: '0 0 5px gray',
    "& Button": {
        [theme.breakpoints.up('400')]: {
          display: 'none',
        }     
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
      [theme.breakpoints.up('400')]: {
        display: 'none',
      },
    }
  }
}));

function Nav(props) {
  const styles = useStyles();

  return (
    <div>
      <ul className={styles.list}>
        <Button onClick={props.onClick} className={styles.menuItem}>
          <i className="fa fa-close"></i>
          <span className={styles.button}>Zamknij</span>
        </Button>
        <MenuElement pic="fa fa-home" title="Home" path="/index" roles={roles.USER} />
        <MenuElement pic="fa fa-cloud" title="Pogoda" path="/weather" roles={roles.USER}/>
        <MenuElement pic="fa fa-users" title="Użytkownicy" path="/users" roles={roles.ADMIN}/>
        <MenuElement pic="fa fa-cogs" title="Czujniki" path="/sensor" roles={roles.ADMIN}/>
        <MenuElement pic="fa fa-warning" title="Sys info" path="/sysinfo" roles={roles.ADMIN}/>
      </ul>
    </div>
  );
}

function UserMenuBox() {
  const styles = useStyles();
  return(
    <div>
      <ul className={styles.list}>
        <MenuElement pic="fa fa-cog" title="Ustawienia" path="/settings" roles={roles.USER}/>
        <MenuElement pic="fa fa-window-close" title="Wyloguj" path="/logout" roles={roles.USER}/>
      </ul>
    </div>
  );

}

function MenuElement(props) {
  const styles = useStyles();
  console.log("==> role index " + props.roles.indexOf(props.userRole) + " userRole: " + props.userRole);
  const isRendered = (props.roles && props.roles.indexOf(props.userRole) > -1) ? true : false;
    return(
      <NavLink exact to={props.path} className={styles.inactiveButton} activeClassName={styles.activeButton}>
        {isRendered ? (  
        <li className={styles.menuItem} >
          <i className={props.pic}></i><span className={styles.button}>{props.title}</span>
        </li>
        ) : (<div></div>)}
      </NavLink>
    );
}

const mapStateToProps = (state) => {
  return {
    userRole: state.loggedUser.role
  }
};

MenuElement = connect(mapStateToProps)(MenuElement);
 
export {Nav, UserMenuBox};