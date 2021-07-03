import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(22,88,142)',
      dark: '#C82D2B',
    },
    secondary: {
      main: '#81C4FF',
    },
    action: {
      selected: '#C82D2B',
    },
  },
  typography: {
    fontFamily: '"Cabin", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 600,
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#81C4FF',
      dark: 'rgb(22,88,142)',
    },
    secondary: {
      main: 'rgb(22,88,142)',
    },
    action: {
      selected: '#81C4FF',
    },
  },
  typography: {
    fontFamily: '"Cabin", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
