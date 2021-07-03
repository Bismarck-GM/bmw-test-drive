import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
  fetchDealerships,
  fetchAllCars,
  fetchAppointments,
} from '../redux/actions';
import TestDriveForm from '../components/TestDriveForm';
import AppointmentsTable from '../components/AppointmentsTable';
import TestDriveBNG from '../images/TestDriveBNG.png';

const useStyles = makeStyles(() => ({
  container: {
    // backgroundColor: '#0066B1',
    backgroundColor: '#373485',
    zIndex: '0',
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
      zIndex: '-1',
    },
  },
}));

const TestDrive = () => {
  const { loggedIn } = useSelector((state) => state.user);
  const dealerships = useSelector((state) => state.dealerships);
  const { appointments } = useSelector((state) => state.appointments);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showAppointments, setShowAppointments] = React.useState(false);

  React.useEffect(() => {
    if (dealerships.length <= 0) {
      dispatch(fetchDealerships());
    }
    if (cars.length <= 0) {
      dispatch(fetchAllCars());
    }
    if (loggedIn && appointments.length <= 0) {
      dispatch(fetchAppointments());
    }
  }, [loggedIn]);

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
      flexDirection="column"
      className={classes.container}
      color="white"
    >
      {appointments.length <= 5 ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          zIndex="9"
          width="80%"
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
            my={2}
            fontSize={15}
            maxWidth="100%"
            textAlign="center"
          >
            There are 19 different versions of BMW&apos;s currently in production.
            <br />
            We have showrooms all over the globe which some include test-riding facilities.
            <br />
            For Booking a Test-Drive please use the selector below.
          </Box>
          {showAppointments ? (
            <>
              <Box mb={2}>
                <Button onClick={() => setShowAppointments(false)} variant="contained" color="secondary">
                  Back to form
                </Button>
              </Box>
              <AppointmentsTable appointments={appointments} />
            </>
          ) : (
            <TestDriveForm loggedIn={loggedIn} dealerships={dealerships} cars={cars} />
          )}
        </Box>
      ) : (
        <Box maxWidth="80%">
          <Box mb={2} color="secondary" textAlign="center" fontSize={25}>
            You have exceeded the maximum appointments for this period of time.
          </Box>
          <Box mb={2} color="secondary" textAlign="center" fontSize={15}>
            Current appointments:
          </Box>
          <AppointmentsTable appointments={appointments} />
        </Box>
      )}
      {appointments.length > 0 && !showAppointments ? (
        <Box my={2}>
          <Button onClick={() => setShowAppointments(true)} variant="contained" color="secondary">
            Show Appointments
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default TestDrive;
