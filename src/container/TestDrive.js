import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TestDriveBNG from '../images/TestDriveBNG.png';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#0066B1',
    '&::after': {
      content: '""',
      position: 'fixed',
      width: '100%',
      height: '100%',
      opacity: '0.1',
      backgroundColor: '#96BF01',
      backgroundImage: `url(${TestDriveBNG})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
    },
  },
}));

const TestDrive = () => {
  const classes = useStyles();
  return (
    <Box
      p={8}
      position="relative"
      minWidth="0"
      maxWidth="100vw"
      height="100vh"
      maxHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex="9"
      >
        <Box
          fontSize={30}
          letterSpacing={5}
          mb={4}
          zIndex="10"
        >
          BOOK A BMW TEST-RIDE
        </Box>
        <Divider width="100%" />
        <Box
          mt={2}
          fontSize={15}
          maxWidth="50%"
          textAlign="center"
        >
          There are 34 different versions of the Vespa. Today five series are in production:
          the classic manual transmission PX and the modern
          CVT transmission S, LX, GT, and GTS. We have showrooms all over the globe
          which some include test-riding facilities.
          If you wish to find out if a test-ride is available in your area,
          please use the selector below.
        </Box>
      </Box>
    </Box>
  );
};

export default TestDrive;
