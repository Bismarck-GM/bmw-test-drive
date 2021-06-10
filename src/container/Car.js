import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import { GrCaretPrevious } from 'react-icons/gr';
import { fetchAllCars } from '../redux/actions';
import CarTridi from '../components/CarTridi';

const useStyles = makeStyles(() => ({
  colorPicker: {
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
  tridi: {
    objectFit: 'contain',
    maxHeight: '50vw',
    '& div': {
      minWidth: '100%',
    },
  },
  hideLoading: {
    display: 'none',
  },
  showLoading: {
    width: '60%',
    height: '16px',
    position: 'absolute',
    bottom: '-80px',
  },
  colorPickerColor: {
    cursor: 'pointer',
  },
  showLoadingText: {
    width: '60%',
    position: 'absolute',
    bottom: '-80px',
  },
  title: {
    top: '-8rem',
  },

}));

const Models = () => {
  const { carId } = useParams();
  const carIdParam = parseInt(carId, 10);
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);
  const classes = useStyles();
  const currentCar = cars.filter((car) => car.id === carIdParam)[0];
  const [currentPaint, setCurrentPaint] = React.useState('P0300');
  const [percentage, setPercentage] = React.useState(0);
  const [tridiIsLoaded, setTridiIsLoaded] = React.useState(false);
  const [imagesArray, setImagesArray] = React.useState([]);

  const setAngles = () => {
    const array = [];
    for (let i = 0; i <= 360; i += 15) {
      array.push(i);
    }
    return array;
  };
  const angles = setAngles();

  const createImgArray = (imgUrl) => {
    const array = angles.map((angle) => imgUrl.replace('270', angle));
    return array;
  };

  React.useEffect(() => {
    if (cars.length <= 0) {
      dispatch(fetchAllCars());
    } else {
      setImagesArray(createImgArray(currentCar.img_thumb));
    }
  }, [loading]);

  React.useEffect(() => {
    if (!loading) {
      setImagesArray(createImgArray(currentCar.img_thumb.replace('P0300', currentPaint)));
    }
  }, [currentPaint]);

  if (!loading) {
    return (
      <Box
        pt={8}
        position="relative"
        minWidth="0"
        maxWidth="100vw"
        maxHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="90%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          flexDirection="column"
          position="relative"
        >
          <Box
            position="absolute"
            textAlign="center"
            justifySelf="flex-start"
            className={classes.title}
          >
            <Box fontWeight={500} fontSize="h3.fontSize">
              {currentCar.name}
            </Box>
            <Box fontWeight={500} fontSize="h6.fontsize" textAlign="center">
              Spin me!
            </Box>
          </Box>
          <CarTridi
            images={imagesArray}
            setPercentage={setPercentage}
            setTridiIsLoaded={setTridiIsLoaded}
            tridiIsLoaded={tridiIsLoaded}
            key={currentPaint}
          />
          <LinearProgress
            className={tridiIsLoaded ? classes.hideLoading : classes.showLoading}
            variant="determinate"
            value={percentage}
          />
          <Box
            p={1}
            mb={2}
            fontWeight={500}
            fontSize="h6.fontSize"
            textAlign="center"
            className={tridiIsLoaded ? classes.hideLoading : classes.showLoadingText}
          >
            {percentage === 100 ? '' : `${percentage}%`}
          </Box>

        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="10vw"
          minWidth="10rem"
          maxHeight="90vh"
          overflow="auto"
          mt={-4}
          p={1}
          className={classes.colorPicker}
        >
          <Paper>
            <Box p={1} mb={2} fontWeight={500} fontSize="h6.fontSize" textAlign="center">
              Color Picker
            </Box>
            {currentCar.paints.map((paint) => (
              <Box key={paint.name} display="flex" justifyContent="center">
                <Tooltip title={paint.name} arrow>
                  <Box
                    className={classes.colorPickerColor}
                    bgcolor={paint.rgb}
                    width={currentPaint === paint.code ? '100%' : '4rem'}
                    height="4rem"
                    boxShadow={10}
                    borderRadius={currentPaint === paint.code ? '0%' : '50%'}
                    mb={3}
                    onClick={() => setCurrentPaint(paint.code)}
                  />
                </Tooltip>
              </Box>
            ))}
          </Paper>
        </Box>
        <Link to={`/models/${currentCar.family[0].id}`}>
          <div className="swiperPrevious backToModels">
            <GrCaretPrevious />
          </div>
        </Link>
      </Box>
    );
  }

  return '';
};

export default Models;
