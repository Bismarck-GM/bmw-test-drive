/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ReactComponent as BmwLogo } from '../logo.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    position: 'absolute',
    top: '0',
    left: '50',
    padding: '30px',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: 'grey',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2, 1),
  },
  logoContainer: {
    width: '100%',
    height: '150px',
  },
  drawerCloserContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navList: {
    padding: theme.spacing(1, 0, 1, 4),
  },
}));

const Navbar = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        // edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div
            className={classes.logoContainer}
          >
            <BmwLogo width="100%" height="100%" />
          </div>
          <div
            className={classes.drawerCloserContainer}
          >
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>
        <Divider />
        <List className={classes.navList}>
          <ListItem button selected>
            <ListItemText primary="MODELS" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="LIFESTYLE" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="SHOP" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="TEST DRIVE" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Navbar;
