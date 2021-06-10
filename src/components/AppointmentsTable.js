import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import { deleteAppointment } from '../redux/actions';

const AppointmentsTable = ({ appointments }) => {
  const dispatch = useDispatch();
  const normalizeDate = (apiDate) => {
    const date = format(new Date(apiDate), 'dd/MM');
    return date;
  };
  const normalizeHour = (apiDate) => {
    const date = format(new Date(apiDate), 'k:mm');
    return date;
  };
  const [open, setOpen] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = React.useState(appointments[0]);

  const handleOpen = (appointment) => {
    setSelectedAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (appointment) => {
    dispatch(deleteAppointment(appointment.id));
    setOpen(false);
  };
  if (appointments.length === 0) {
    return (
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
        Theres no appointment set up yet.
      </Box>
    );
  }
  return (
    <TableContainer>
      <Table
        size="small"
        aria-label="a dense table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Date (DD/MM)</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Where</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Car</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id} hover>
              <TableCell align="left">{normalizeDate(appointment.start_time)}</TableCell>
              <TableCell align="left">{normalizeHour(appointment.start_time)}</TableCell>
              <TableCell align="left">{appointment.dealership.name}</TableCell>
              <TableCell align="left">{appointment.dealership.address}</TableCell>
              <TableCell align="left">{appointment.car.name}</TableCell>
              <TableCell align="left"><DeleteIcon onClick={() => handleOpen(appointment)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirmation required:
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              `The appointment set for ${normalizeDate(selectedAppointment.start_time)} at 
              ${normalizeHour(selectedAppointment.start_time)} hours to test ${selectedAppointment.car.name}
              will be deleted.`
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={() => handleDelete(selectedAppointment)} color="primary" autoFocus variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

AppointmentsTable.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      start_time: PropTypes.string,
      car: PropTypes.shape({
        name: PropTypes.string,
      }),
      dealership: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default AppointmentsTable;
