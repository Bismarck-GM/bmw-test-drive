import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import LifeStyleIMG from '../images/ShopIMG.png';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'rgba(200,45,43, 0.5)',
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
}));

const Shop = () => {
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
      fontSize={30}
    >
      Work in progress...
    </Box>
  );
};

export default Shop;
