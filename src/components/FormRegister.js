import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { register, openModal } from '../redux/actions';
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
  },
  mLogo: {
    position: 'absolute',
    top: '20px',
    right: '-50px',
  },
}));

const FormRegister = React.forwardRef((_props, ref) => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const { formLoading, formError } = useSelector((state) => state.uiModal);

  const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/gm);

  const onSubmit = (data) => {
    dispatch(register(data));
  };

  const validateEmail = (email) => {
    if (!validEmailRegex.test(email)) {
      return false;
    }
    return true;
  };
  return (
    <Container tabIndex={-1} ref={ref} maxWidth="xs" className={classes.formContainer}>
      <MLogo className={classes.mLogo} />
      <Typography variant="h5" align="center" gutterBottom>
        REGISTRATION
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Welcome to BMW.com
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: 'Username required.',
            minLength: { value: 6, message: 'Username too short.' },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              value={value}
              id="username"
              name="username"
              onChange={onChange}
              label="Username"
              variant="outlined"
              margin="normal"
              color="secondary"
              autoComplete="on"
              error={!!error || formError}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'E-mail required.',
            validate: {
              emailPattern: (email) => validateEmail(email) || 'Invalid E-mail.',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              value={value}
              id="email"
              name="email"
              onChange={onChange}
              label="E-Mail"
              variant="outlined"
              margin="normal"
              color="secondary"
              autoComplete="on"
              error={!!error || formError}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password required.',
            minLength: { value: 6, message: 'Password too short.' },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              value={value}
              id="password"
              name="password"
              onChange={onChange}
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              color="secondary"
              autoComplete="on"
              error={!!error || formError}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="password_confirmation"
          control={control}
          defaultValue=""
          rules={{
            validate: {
              emailEqual: (value) => (value === getValues().password) || 'Password doesn\'t match.',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              value={value}
              id="password_confirmation"
              name="password_confirmation"
              onChange={onChange}
              label="Password Confirmation"
              type="password"
              variant="outlined"
              margin="normal"
              color="secondary"
              autoComplete="on"
              error={!!error || formError}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={formLoading}
        >
          {formLoading ? (<CircularProgress color="secondary" />) : 'Register'}
        </Button>
      </form>
      <Typography variant="subtitle1" align="center" onClick={() => dispatch(openModal('login'))}>
        You already have an account? Click here to Log-In.
      </Typography>
    </Container>
  );
});

FormRegister.displayName = 'FormRegister';

export default FormRegister;
