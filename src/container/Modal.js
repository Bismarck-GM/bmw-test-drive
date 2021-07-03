import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MuiModal from '@material-ui/core/Modal';
import FormLogin from '../components/FormLogin';
import FormRegister from '../components/FormRegister';
import User from '../components/User';
import { closeModal } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(3px)',
  },
  formContainer: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: '15px',
  },
  mLogo: {
    position: 'absolute',
    top: '20px',
    right: '-50px',
  },
}));

const Modal = () => {
  const classes = useStyles();
  const { modalOpen, modalFor } = useSelector((state) => state.uiModal);
  const dispatch = useDispatch();

  if (modalFor === 'login') {
    return (
      <MuiModal
        open={modalOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <FormLogin />
      </MuiModal>
    );
  }
  if (modalFor === 'register') {
    return (
      <MuiModal
        open={modalOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <FormRegister />
      </MuiModal>
    );
  }
  if (modalFor === 'user') {
    return (
      <MuiModal
        open={modalOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <User />
      </MuiModal>
    );
  }
  return null;
};

export default Modal;
