import React from 'react';
import PropTypes from 'prop-types';
import Tridi from 'react-tridi';
import Fade from '@material-ui/core/Fade';
import 'react-tridi/dist/index.css';
import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tridi: {
    objectFit: 'contain',
    maxHeight: '50vw',
    '& div > div > img': {
      minWidth: '300px',
      minHeight: '300px',
    },
  },
}));

const CarTridi = ({
  images,
  setPercentage,
  setTridiIsLoaded,
  tridiIsLoaded,
}) => {
  const classes = useStyles();
  const tridiNode = React.useRef(null);

  const manageState = (success, percentage) => {
    setPercentage(percentage);
    setTridiIsLoaded(success);
  };

  return (
    <Fade
      timeout={300}
      in={CarTridi.in}
    >
      <Tridi
        images={images}
        dragInterval={6}
        className={classes.tridi}
        ref={tridiNode}
        onLoadChange={(success, percentage) => manageState(success, percentage)}
        draggable={tridiIsLoaded}
        touch={tridiIsLoaded}
      />
    </Fade>
  );
};

CarTridi.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPercentage: PropTypes.func.isRequired,
  setTridiIsLoaded: PropTypes.func.isRequired,
  tridiIsLoaded: PropTypes.bool.isRequired,
};
export default CarTridi;
