import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'rgba(0,149,211, 1)',
    flexGrow: 1,
    transition: theme.transitions.create('', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '100vh',
    padding: theme.spacing(0, 0),
  },
  contentShift: {
    transition: theme.transitions.create('', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
    padding: theme.spacing(0, 0),
  },
}));

const Main = ({ open, children }) => {
  const classes = useStyles();
  return (
    <>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </>
  );
};

Main.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
