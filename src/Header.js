import React from 'react';
import {Nav} from "./Nav";
import './header.css';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  space: {
    flexGrow: '1'
  },
  appBar: {
    display: 'flex',
    position: 'fixed',
    background: '#05A8F5',
    color: '#f8f8ff',
    width: '100%',
    height: '50px',
    justifyContent: 'center'
  },
  title: {
    display: 'flex',
  },
  desktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('600')]: {
      display: 'none',
    },
  }, 
  mobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f8f8ff',
    margin: '0px',
    [theme.breakpoints.up('600')]: {
      display: 'none',
    },
  },
  iconButton: {
    margin: '10px',
    height: '70%',
    color: '#f8f8ff'
  },
  avatar: {
    width: '30px',
    height: '30px', 
    margin: '3px',
    padding: '4px'
  }
}));

function Header() {
  const styles = useStyles();

    return(
      <div className={styles.space}>
        <AppBar className={styles.appBar} position="static">
          <Toolbar>
            <div className={styles.mobile}>
              <IconButton
                edge="start"
                color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
            <Typography variant="h5" noWrap className={styles.title}>
              Home System Service
            </Typography>
            <div className={styles.space} />
            <div className={styles.desktop}>
              <IconButton className={styles.iconButton}>
                  <Badge badgeContent={12} color="secondary">
                    <NotificationsIcon />
                  </Badge>
              </IconButton>
              <IconButton
                size="small"
                className={styles.iconButton}>
                  <Avatar className={styles.avatar}>PB</Avatar>
              </IconButton>
            </div>
            <div className={styles.mobile}>
              <IconButton
                edge="end"
                color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

 export default Header;