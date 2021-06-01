/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { ReactComponent as BmwLogo } from '../logo.svg';
import { openModal } from '../redux/actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    position: 'absolute',
    top: '30px',
    left: '50px',
  },
  menuButtonUser: {
    position: 'absolute',
    top: '30px',
    left: '120px',
  },
  menuButtonToggleTheme: {
    position: 'absolute',
    top: '30px',
    left: '190px',
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
  logo: {
    '& path:nth-child(1)': {
      fill: theme.palette.type === 'light' ? '#B2B2B2' : '#fff',
    },
  },
  drawerCloserContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navList: {
    padding: theme.spacing(1, 0, 1, 4),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const Navbar = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
  handleThemeChange,
}) => {
  const classes = useStyles();
  const { pathname: location } = useLocation();

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Tooltip title="Open Menu" arrow>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Open User" arrow>
        <IconButton
          color="inherit"
          className={clsx(classes.menuButtonUser, open && classes.hide)}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Open User" arrow>
        <IconButton
          color="inherit"
          onClick={handleThemeChange}
          className={clsx(classes.menuButtonToggleTheme, open && classes.hide)}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Tooltip>
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
            <BmwLogo width="100%" height="100%" className={classes.logo} />
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
          <Link to="/models" className={classes.link}>
            <ListItem button selected={location === '/models'}>
              <ListItemText primary="MODELS" />
            </ListItem>
          </Link>
          <Link to="/lifestyle" className={classes.link}>
            <ListItem button selected={location === '/lifestyle'}>
              <ListItemText primary="LIFESTYLE" />
            </ListItem>
          </Link>
          <Link to="/shop" className={classes.link}>
            <ListItem button selected={location === '/shop'}>
              <ListItemText primary="SHOP" />
            </ListItem>
          </Link>
          <Link to="/testdrive" className={classes.link}>
            <ListItem button selected={location === '/testdrive'}>
              <ListItemText primary="TEST DRIVE" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Button onClick={() => dispatch(openModal('login'))} color="secondary">
          Log In
        </Button>
        <Button onClick={() => dispatch(openModal('register'))} color="secondary">
          Register
        </Button>
      </Drawer>
    </div>
  );
};

export default Navbar;
