import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        <MenuElement pic="fa fa-home" title="Home" path="/index"/>
        <MenuElement pic="fa fa-cloud" title="Pogoda" path="/weather"/>
        <MenuElement pic="fa fa-users" title="Użytkownicy" path="/users"/>
        <MenuElement pic="fa fa-cogs" title="Czujniki" path="/sensor"/>
        <MenuElement pic="fa fa-warning" title="Sys info" path="/sysinfo"/>
      </ul>
    </div>
  );
}

function UserMenuBox() {
  const styles = useStyles();
  return(
    <div>
      <ul className={styles.list}>
        <MenuElement pic="fa fa-cog" title="Ustawienia" path="/settings"/>
        <MenuElement pic="fa fa-window-close" title="Wyloguj" path="/logout"/>
      </ul>
    </div>
  );

}

function MenuElement(props) {
  const styles = useStyles();

    return(
      <NavLink exact to={props.path} className={styles.inactiveButton} activeClassName={styles.activeButton}>
        <li className={styles.menuItem}>
          <i className={props.pic}></i><span className={styles.button}>{props.title}</span>
        </li>
      </NavLink>
    );
}
 
export {Nav, UserMenuBox};