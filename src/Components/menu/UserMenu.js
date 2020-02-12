import React from 'react';
import { connect } from "react-redux";
import {IconButton, Avatar} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import {makeStyles } from '@material-ui/core/styles';
import {UserMenuBox} from '../../Nav';

const useStyles = makeStyles(theme => ({
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

function UserMenu(props) {
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
        size="small"
        className={styles.iconButton}
        aria-expanded="true"
        aria-controls="userMenu" 
        aria-haspopup="true"
        onClick={handleClick}>
        <Avatar className={styles.avatar}>{props.letter}</Avatar>
      </IconButton>
      <Popover
          id="userMenu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <UserMenuBox />
      </Popover>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    letter: state.loggedUser.firstName.substring(0, 1)
     + state.loggedUser.lastName.substring(0, 1),
  }
};

export default connect(mapStateToProps)(UserMenu);