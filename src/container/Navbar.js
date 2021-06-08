/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { ReactComponent as BmwLogo } from '../logo.svg';
import { openModal, toggleDrawer } from '../redux/actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    position: 'fixed',
    top: '30px',
    left: '20px',
    zIndex: '100',
  },
  menuButtonUser: {
    position: 'fixed',
    top: '100px',
    left: '20px',
    zIndex: '100',
  },
  menuButtonToggleTheme: {
    position: 'fixed',
    top: '170px',
    left: '20px',
    zIndex: '100',
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

const Navbar = ({ handleThemeChange }) => {
  const { drawerOpen } = useSelector((state) => state.uiDrawer);
  const { username, loggedIn } = useSelector((state) => state.user);
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:767)');
  const { pathname: location } = useLocation();

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Tooltip title="Open Menu" arrow>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(toggleDrawer())}
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      { loggedIn ? (
        <Tooltip title={username} arrow>
          <IconButton
            color="inherit"
            className={clsx(classes.menuButtonUser, drawerOpen && classes.hide)}
            onClick={() => dispatch(openModal('user'))}
          >
            <PersonIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="LogIn" arrow>
          <IconButton
            color="inherit"
            className={clsx(classes.menuButtonUser, drawerOpen && classes.hide)}
            onClick={() => dispatch(openModal('login'))}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Change Theme" arrow>
        <IconButton
          color="inherit"
          onClick={handleThemeChange}
          className={clsx(classes.menuButtonToggleTheme, drawerOpen && classes.hide)}
        >
          <Brightness4OutlinedIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Drawer
        className={classes.drawer}
        variant={mobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={drawerOpen}
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
            <IconButton onClick={() => dispatch(toggleDrawer())}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>
        <Divider />
        <List className={classes.navList}>
          <Link to="/models" className={classes.link}>
            <ListItem button selected={location.includes('models')}>
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
        { loggedIn ? (
          <>
            <Divider />
            <List dense>
              <ListItem button onClick={() => dispatch(openModal('user'))}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={username} />
              </ListItem>
            </List>
          </>
        ) : (
          <>
            <Button onClick={() => dispatch(openModal('login'))} color="secondary">
              Log In
            </Button>
            <Button onClick={() => dispatch(openModal('register'))} color="secondary">
              Register
            </Button>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Navbar;
