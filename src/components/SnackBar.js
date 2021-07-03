import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { snackBarClear } from '../redux/actions';

const SnackBar = () => {
  const dispatch = useDispatch();

  const { snackBarOpen, snackBarMessage, snackBarType } = useSelector((state) => state.uiSnackBar);

  function handleClose() {
    dispatch(snackBarClear());
  }

  return (
    <Snackbar
      open={snackBarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={snackBarType}
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
