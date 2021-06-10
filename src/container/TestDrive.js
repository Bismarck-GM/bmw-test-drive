import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from '@material-ui/pickers';
import Divider from '@material-ui/core/Divider';
import { add, set } from 'date-fns';
import {
  fetchDealerships,
  fetchAllCars,
  fetchAppointments,
  snackBar,
  openModal,
  createAppointment,
} from '../redux/actions';
import AppointmentsTable from '../components/AppointmentsTable';
import TestDriveBNG from '../images/TestDriveBNG.png';

const useStyles = makeStyles(() => ({
  container: {
    // backgroundColor: '#0066B1',
    backgroundColor: '#373485',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  select: {
    width: '100%',
  },
  datePicker: {
    width: '100%',
  },
}));

const TestDrive = () => {
  const [country, setCountry] = React.useState('');
  const [car, setCar] = React.useState('');
  const [openCar, setOpenCar] = React.useState(false);
  const [openCountry, setOpenCountry] = React.useState(false);
  const [errorCountry, setErrorCountry] = React.useState(false);
  const [errorCar, setErrorCar] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(
    set(
      add(new Date(), { days: 1 }), { hours: 9, minutes: 0 },
    ),
  );
  const { loggedIn } = useSelector((state) => state.user);
  const dealerships = useSelector((state) => state.dealerships);
  const appointments = useSelector((state) => state.appointments);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    setErrorCountry(false);
  };

  const handleCloseCountry = () => {
    setOpenCountry(false);
  };

  const handleChangeCar = (event) => {
    setCar(event.target.value);
    setErrorCar(false);
  };

  const handleCloseCar = () => {
    setOpenCar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minutes = selectedDate.getMinutes();
    if (!country) {
      setErrorCountry(true);
      return null;
    }
    if (!car) {
      setErrorCar(true);
      return null;
    }
    if (minutes === 0 || minutes === 30) {
      if (!loggedIn) {
        dispatch(openModal('login'));
        dispatch(snackBar('SNACKBAR_ERROR', 'You must be logged in before booking an appointment.'));
      } else {
        const formInputs = {
          start_time: selectedDate,
          dealership_id: country,
          car_id: car,
        };
        dispatch(createAppointment(formInputs));
      }
    } else {
      dispatch(snackBar('SNACKBAR_ERROR', 'The minutes in DATE should be 00 or 30.'));
      return null;
    }
    return null;
  };

  const maxDate = add(new Date(), { days: 60 });
  const minDate = add(new Date(), { days: 1 });

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
          <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
            <Box
              width="100%"
              mb={2}
            >
              <TextField
                select
                id="demo-controlled-open-select"
                label="Country"
                open={openCountry}
                onClose={handleCloseCountry}
                value={country}
                onChange={handleChangeCountry}
                variant="filled"
                className={classes.select}
                error={errorCountry}
              >
                {dealerships.length <= 0 ? (
                  <MenuItem value="">
                    <em>Loading...</em>
                  </MenuItem>
                ) : (
                  dealerships.map((dealership) => (
                    <MenuItem
                      key={dealership.id}
                      value={dealership.id}
                    >
                      {dealership.country}
                    </MenuItem>
                  ))
                )}
              </TextField>
            </Box>
            <Box
              width="100%"
              mb={2}
            >
              <TextField
                select
                id="demo-controlled-open-select"
                label="Car to Test"
                open={openCar}
                onClose={handleCloseCar}
                value={car}
                onChange={handleChangeCar}
                variant="filled"
                className={classes.select}
                error={errorCar}
              >
                {cars.length <= 0 ? (
                  <MenuItem value="">
                    <em>Loading...</em>
                  </MenuItem>
                ) : (
                  cars.map((car) => (
                    <MenuItem
                      key={car.id}
                      value={car.id}
                    >
                      {car.name}
                    </MenuItem>
                  ))
                )}
              </TextField>
            </Box>
            <Box
              width="100%"
              mb={2}
            >
              <DateTimePicker
                dateRangeIcon
                maxDate={maxDate}
                minDate={minDate}
                minDateMessage="Appointments can be booked starting from tomorrow."
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
                label="Pick a Date"
                className={classes.datePicker}
                inputVariant="filled"
                minutesStep={30}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Book Now
            </Button>
          </form>
        </Box>
      ) : (
        <Box maxWidth="80%">
          <AppointmentsTable appointments={appointments} />
        </Box>
      )}
    </Box>
  );
};

export default TestDrive;
