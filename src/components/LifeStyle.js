import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LifeStyleIMG from '../images/SecondLifeStyleIMG.png';
import CoupleIMG from '../images/BMWcouple.jpg';
import PrestigeIMG from '../images/BMWprestige.jpg';
import HeritageIMG from '../images/BMWheritage.jpg';
import DrivingIMG from '../images/BMWdriving.jpg';
import InteriorIMG from '../images/BMWinterior.jpg';

const useStyles = makeStyles(() => ({
  container: {
    '&::after': {
      content: '""',
      position: 'fixed',
      width: '100%',
      height: '100%',
      opacity: '0.1',
      // backgroundColor: 'grey',
      backgroundImage: `url(${LifeStyleIMG})`,
      backgroundSize: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
    },
  },
  gridItem: {
    height: '25vh',
    width: 'calc(25vh*1.2)',
    // border: '1px solid black',
    zIndex: '1',
  },
  gridImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  firstBox: {
    backgroundImage: `url(${CoupleIMG})`,
  },
  secondBox: {
    backgroundColor: '#99C210',
    position: 'relative',
    zIndex: '2',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-20px',
      right: '50%',
      borderTop: '15px solid #99C210',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translate(50%,-50%)',
    },
  },
  thirdBox: {
    backgroundImage: `url(${PrestigeIMG})`,
  },
  fourthBox: {
    backgroundColor: '#FFC600',
    position: 'relative',
    zIndex: '2',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      right: '50%',
      borderBottom: '15px solid #FFC600',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translate(50%,-50%)',
    },
  },
  fifthBox: {
    backgroundImage: `url(${HeritageIMG})`,
  },
  sixthBox: {
    backgroundColor: '#252525',
    position: 'relative',
    zIndex: '2',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      right: '50%',
      borderBottom: '15px solid #252525',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translate(50%,-50%)',
    },
  },
  seventhBox: {
    backgroundImage: `url(${DrivingIMG})`,
  },
  eighthBox: {
    backgroundColor: '#10BBB5',
    position: 'relative',
    zIndex: '2',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '-22px',
      borderRight: '15px solid #10BBB5',
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      transform: 'translate(50%,-50%)',
    },
  },
  ninethBox: {
    backgroundImage: `url(${InteriorIMG})`,
  },

}));

const LifeStyle = () => {
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
        boxShadow={10}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex">
          <Box
            className={`${classes.gridItem} ${classes.gridImage} ${classes.firstBox}`}
          />
          <Box
            className={`${classes.gridItem} ${classes.secondBox}`}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            letterSpacing={5}
            fontSize={16}
            py={5}
          >
            HERITAGE
            <PlayCircleOutlineIcon style={{ fontSize: '2.5rem' }} />
          </Box>
          <Box
            className={`${classes.gridItem} ${classes.gridImage} ${classes.thirdBox}`}
          />
        </Box>
        <Box display="flex">
          <Box
            className={`${classes.gridItem} ${classes.fourthBox}`}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            letterSpacing={3}
            fontSize={16}
            py={5}
          >
            THE LOVE
            <PlayCircleOutlineIcon style={{ fontSize: '2.5rem' }} />
          </Box>
          <Box
            className={`${classes.gridItem} ${classes.gridImage} ${classes.fifthBox}`}
          />
          <Box
            className={`${classes.gridItem} ${classes.sixthBox}`}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            letterSpacing={5}
            fontSize={16}
            py={5}
          >
            PRESTIGE
            <PlayCircleOutlineIcon style={{ fontSize: '2.5rem' }} />
          </Box>
        </Box>
        <Box display="flex">
          <Box
            className={`${classes.gridItem} ${classes.gridImage} ${classes.seventhBox}`}
          />
          <Box
            className={`${classes.gridItem} ${classes.eighthBox}`}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            letterSpacing={5}
            fontSize={16}
            py={5}
            textAlign="center"
          >
            GERMANY STREETS
            <PlayCircleOutlineIcon style={{ fontSize: '2.5rem' }} />
          </Box>
          <Box
            className={`${classes.gridItem} ${classes.gridImage} ${classes.ninethBox}`}
          />
        </Box>

      </Box>

    </Box>
  );
};

export default LifeStyle;
