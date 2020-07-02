import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import {Nav} from './Nav';
import MoreIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import UserMenu from './Components/menu/UserMenu';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';

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
    [`${theme.breakpoints.down('400')} and (orientation: portrait)`]: {
      display: 'none',
    },
  }, 
  mobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f8f8ff',
    margin: '0px',
    [theme.breakpoints.up('400')]: {
      display: 'none',
    },
  },
  iconButton: {
    margin: '10px',
    height: '70%',
    color: '#f8f8ff'
  },
  monileMenu: {
    position: 'relative',
    top: '100px',
    left: '20px'
  },
  mobileRightMenu: {
    backgroundColor: '#05A8F5',
    color: '#f8f8ff', 
  },
  progressRoot: {
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '100%',
    height: '4px',
    zIndex: '10'
},
}));

function Header(props) {
  const styles = useStyles();

  return(
    <div>
      <div className={styles.space}>
        <AppBar className={styles.appBar} position="static">
          <Toolbar>
            <div className={styles.mobile}>
              <MobileMenu />
            </div>
            <Typography variant="h5" noWrap className={styles.title}>
              Home System Service
            </Typography>
            <div className={styles.space} />
            <div className={styles.desktop}>
              <Notifications />
              <UserMenu />
            </div>
            <div className={styles.mobile}>
              <MobileRightMenu />
            </div>
          </Toolbar>
          <div className={styles.progressRoot}>
            {props.isProgress ? <LinearProgress /> : <div></div>}
          </div>
        </AppBar>
      </div>

    </div>

  );
}

function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 
  return(
    <div>
       <IconButton
        edge="start"
        color="inherit"
        aria-expanded="true"
        aria-controls="mobileMenu" 
        aria-haspopup="true"
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Popover
        id="mobileMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>              
        <Nav onClick={handleClose}/>
      </Popover>
    </div>
  );
}

function MobileRightMenu() {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div>
      <IconButton
        edge="end"
        color="inherit"
        aria-expanded="true"
        aria-controls="notifications" 
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Popover
        id="notifications"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        color="inherit">
          <div className={styles.mobileRightMenu}>
            <Notifications />
            <UserMenu />
          </div>
      </Popover>
    </div>
  );
}

function Notifications() {
  const styles = useStyles();
  return(
    <div>
      {/*<IconButton className={styles.iconButton}>
          <Badge badgeContent={12} color="secondary">
            <NotificationsIcon />
          </Badge>
  </IconButton>*/}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      isProgress: state.isProgressBar
  }
};

export default connect(mapStateToProps)(Header);