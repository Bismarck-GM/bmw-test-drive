import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Paper,
} from '@material-ui/core';
import { GrCaretPrevious } from 'react-icons/gr';
import { fetchAllCars, fetchCarFamilies } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  carHolder: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(12),
    },
  },
  imgLink: {
    display: 'flex',
    justifyContent: 'center',
  },

}));

const Models = () => {
  const { carFamilyId } = useParams();
  const carFamilyIdParam = parseInt(carFamilyId, 10);
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);
  const { carFamilies } = useSelector((state) => state.carFamily);
  // const { drawerOpen } = useSelector((state) => state.uiDrawer);
  const classes = useStyles();
  const currentCars = cars.filter((car) => car.family[0].id === carFamilyIdParam);
  const currentFamily = carFamilies.filter((family) => family.id === carFamilyIdParam);
  console.log(Array.isArray(currentFamily), currentFamily);
  React.useEffect(() => {
    if (loading) {
      console.log('Component did mount');
      dispatch(fetchCarFamilies());
      dispatch(fetchAllCars());
    }
  }, []);
  return (
    <Box
      // pl={drawerOpen ? 6 : 20}
      pt={30}
      pb={8}
      position="relative"
      minWidth="0"
      maxWidth="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="absolute" top="0" pt={6} textAlign="center" justifySelf="flex-start">
        <Box mb={2} mx={4} fontWeight={500} fontSize="h3.fontSize">
          {currentFamily[0] ? currentFamily[0].name : '' }
        </Box>
        <Box fontWeight={500} fontSize="subtitle1" textAlign="center">
          {currentFamily[0] ? currentFamily[0].description : '' }
        </Box>
      </Box>
      <Box
        width="100%"
      >

        {currentCars.map((car) => (
          <Paper
            key={car.id}
            className={classes.carHolder}
            // variant="outlined"
            elevation={3}
          >
            <Box
              display="flex"
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              width="100%"
              ml="auto"
              p={2}
            >
              <Box display="flex" justifyContent="center" width="40%">
                <Link to={`/models/${carFamilyId}/${car.id}`} className={classes.imgLink}>
                  <img src={car.img_thumb} alt={car.name} style={{ objectFit: 'contain', width: '100%' }} />
                </Link>
              </Box>
              <Box width="30%">
                <Box mb={1} fontSize="subtitle2" letterSpacing={6} fontWeight={100}>
                  {car.model_year}
                </Box>
                <Box mb={2} fontWeight={500} fontSize="h6.fontSize">
                  {car.name}
                </Box>
                <Box fontWeight={100} fontSize="subtitle1">
                  {car.propulsor.name}
                </Box>
                <Box mb={2} fontWeight={100} fontSize="subtitle1">
                  {car.drive.name}
                </Box>
                <Box fontWeight={100}>
                  <Box mr={2} display="inline">
                    <Typography variant="subtitle1" display="inline">
                      {car.hp}
                    </Typography>
                    {' HP'}
                  </Box>
                  <Box mr={2} display="inline">
                    <Typography variant="subtitle1" display="inline">
                      {car.mpg}
                    </Typography>
                    {' MPG'}
                  </Box>
                  <Box mr={2} display="inline">
                    <Typography variant="subtitle1" display="inline">
                      {`${car.accel} sec`}
                    </Typography>
                    {' 0-60 MPH'}
                  </Box>
                </Box>
              </Box>
              <Box justifySelf="flex-end" width="20%">
                <Button variant="contained" color="secondary" component={Link} to={`/models/${carFamilyId}/${car.id}`}>
                  Configurate
                </Button>
                <Box mt={2} fontWeight={100} fontSize={16}>
                  {`MSRP: $${car.msrp}`}
                </Box>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
      <Link to="/models">
        <div className="swiperPrevious backToModels">
          <GrCaretPrevious />
        </div>
      </Link>

    </Box>
  );
};

export default Models;
