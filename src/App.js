import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Main from './components/Main';
import Navbar from './container/Navbar';
import Models from './container/Models';
import SnackBar from './components/SnackBar';
import Modal from './container/Modal';

const darkTheme = createMuiTheme({
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

const lightTheme = createMuiTheme({
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

const App = () => {
  const [drawer, setDrawer] = useState(true);
  const [theme, setTheme] = useState(darkTheme);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const handleThemeChange = () => {
    if (theme.palette.type === 'dark') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar
          open={drawer}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          handleThemeChange={handleThemeChange}
        />
        <Switch>
          <Main open={drawer}>
            <Route path="/" exact>
              <Redirect to="/models" />
            </Route>
            <Route path="/models" exact component={Models} />
          </Main>
        </Switch>
        <Modal />
        <SnackBar />
      </ThemeProvider>
    </Router>
  );
};

export default App;
