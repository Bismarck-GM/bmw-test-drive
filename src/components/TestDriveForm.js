import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add, set } from 'date-fns';
import {
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from '@material-ui/pickers';
import {
  snackBar,
  openModal,
  createAppointment,
} from '../redux/actions';

const useStyles = makeStyles(() => ({
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

const TestDriveForm = ({
  loggedIn,
  cars,
  dealerships,
}) => {
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
        setCountry('');
        setCar('');
      }
    } else {
      dispatch(snackBar('SNACKBAR_ERROR', 'The minutes in DATE should be 00 or 30.'));
      return null;
    }
    return null;
  };

  const maxDate = add(new Date(), { days: 60 });
  const minDate = add(new Date(), { days: 1 });

  return (
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
  );
};

TestDriveForm.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
      model_year: PropTypes.number,
      hp: PropTypes.number,
      mpg: PropTypes.number,
      accel: PropTypes.number,
      msrp: PropTypes.number,
      img_thumb: PropTypes.string,

      car: PropTypes.shape({
        name: PropTypes.string,
      }),
      dealership: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
      }),
    }),
  ).isRequired,
  dealerships: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      country: PropTypes.string,
      city: PropTypes.string,
      address: PropTypes.string,
    }),
  ).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default TestDriveForm;
