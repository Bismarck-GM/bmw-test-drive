import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AppointmentsTable from './AppointmentsTable';
import { fetchAppointments, logOut } from '../redux/actions';
import { ReactComponent as MLogo } from '../mlogo.svg';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: theme.spacing(2, 0, 2, 0),
    '& button': {
      margin: theme.spacing(4, 0, 2, 0),
    },
  },
  formContainer: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: '15px',
    outline: 'none',
  },
  mLogo: {
    position: 'absolute',
    top: '20px',
    right: '-50px',
  },
}));

const User = React.forwardRef((_props, ref) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.appointments);

  React.useEffect(() => {
    if (appointments.length === 0 && appointments.constructor === Array) {
      dispatch(fetchAppointments());
    }
  }, []);

  return (
    <Container tabIndex={-1} ref={ref} maxWidth="sm" className={classes.formContainer}>
      <MLogo className={classes.mLogo} />
      <Typography variant="h5" align="center" gutterBottom>
        Account Settings
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="space-between" pr={10} mt={6}>
        <Box mb={1} fontSize={20} fontWeight={500} display="inline">
          Username:
        </Box>
        <Box mb={1} fontSize="subtitle2" fontWeight={100} display="flex" alignSelf="center">
          {username}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" pr={10} mt={2}>
        <Box mb={1} fontSize={20} fontWeight={500} display="inline">
          E-Mail:
        </Box>
        <Box mb={1} fontSize="subtitle2" fontWeight={100} display="flex" alignSelf="center">
          {email}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" mt={2}>
        <Box mb={1} fontSize={20} fontWeight={500} display="inline" textAlign="center">
          Curent scheduled Test-Drive appointments
        </Box>
        <Box
          mb={1}
          fontSize="subtitle2"
          fontWeight={100}
          display="flex"
          alignSelf="center"
          flexDirection="column"
          maxHeight="250px"
          overflow="auto"
          maxWidth="100%"
        >
          {appointments.length > 0 ? (
            <AppointmentsTable appointments={appointments} />
          ) : 'Theres no appointment set up yet.' }
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" mt={3} width="100%">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: '10px' }}
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={username === 'demo_user'}
        >
          Delete Account
        </Button>
      </Box>
    </Container>
  );
});

User.displayName = 'User';

export default User;
