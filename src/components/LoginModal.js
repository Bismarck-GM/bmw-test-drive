import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as MLogo } from '../mlogo.svg';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: theme.palette.grey[500],
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: '15px',
  },
  mLogo: {
    position: 'absolute',
    top: '20px',
    right: '-50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const LoginModal = ({ openModal, handleCloseModal }) => {
  const classes = useStyles();
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.modal}
    >
      <Container maxWidth="xs" className={classes.formContainer}>
        <MLogo className={classes.mLogo} />
        <Typography variant="h5" align="center" gutterBottom>
          LOG IN
        </Typography>
        <Typography variant="subtitle1" align="center">
          Not registered?
        </Typography>
        <form action="" className={classes.form}>
          <TextField label="Username or E-Mail" variant="outlined" margin="normal" required />
          <TextField label="Password" variant="outlined" margin="normal" type="password" required />
          <FormControl />
          <Button variant="contained" color="primary" type="submit">Log In</Button>
        </form>
      </Container>
    </Modal>
  );
};

LoginModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default LoginModal;
