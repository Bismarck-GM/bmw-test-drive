import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns';

const AppointmentsTable = ({ appointments }) => {
  const normalizeDate = (apiDate) => {
    const date = format(new Date(apiDate), 'dd/MM');
    return date;
  };
  const normalizeHour = (apiDate) => {
    const date = format(new Date(apiDate), 'k:mm');
    return date;
  };
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
            <TableCell align="left">Book id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell align="left">{normalizeDate(appointment.start_time)}</TableCell>
              <TableCell align="left">{normalizeHour(appointment.start_time)}</TableCell>
              <TableCell align="left">{appointment.dealership.name}</TableCell>
              <TableCell align="left">{appointment.dealership.address}</TableCell>
              <TableCell align="left">{appointment.car.name}</TableCell>
              <TableCell component="th" scope="row">{appointment.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
