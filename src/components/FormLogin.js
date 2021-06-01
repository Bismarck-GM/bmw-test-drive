import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { logIn, openModal } from '../redux/actions';
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

const FormLogin = React.forwardRef((_props, ref) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const { formLoading, formError } = useSelector((state) => state.uiModal);

  const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/gm);

  const onSubmit = (data) => {
    const formData = data;
    if (/@/.test(formData.username)) {
      formData.email = formData.username;
      delete formData.username;
    }
    dispatch(logIn(formData));
  };

  const validateUsername = (username) => {
    if (/@/.test(username)) {
      if (!validEmailRegex.test(username)) {
        return false;
      }
    }
    return true;
  };

  return (
    <Container tabIndex={-1} ref={ref} maxWidth="xs" className={classes.formContainer}>
      <MLogo className={classes.mLogo} />
      <Typography variant="h5" align="center" gutterBottom>
        LOG IN
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Welcome back to BMW.com
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: 'Username or E-mail required.',
            minLength: { value: 6, message: 'Username or E-mail too short.' },
            validate: {
              emailPattern: (username) => validateUsername(username) || 'Invalid E-mail.',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              value={value}
              id="username"
              name="username"
              onChange={onChange}
              label="Username or E-Mail"
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={formLoading}
        >
          {formLoading ? (<CircularProgress color="secondary" />) : 'Sign in'}
        </Button>
      </form>
      <Typography variant="subtitle1" align="center" onClick={() => dispatch(openModal('register'))}>
        Not registered? Click here to register.
      </Typography>
    </Container>
  );
});

FormLogin.displayName = 'FormLogin';

export default FormLogin;
