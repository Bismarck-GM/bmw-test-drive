import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Main from './components/Main';
import Navbar from './container/Navbar';
import Models from './container/Models';
import CarFamily from './container/CarFamily';
import Car from './container/Car';
import SnackBar from './components/SnackBar';
import LifeStyle from './components/LifeStyle';
import Shop from './components/Shop';
import Modal from './container/Modal';
import TestDrive from './container/TestDrive';

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
  const [theme, setTheme] = useState(darkTheme);

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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Navbar handleThemeChange={handleThemeChange} />
          <Switch>
            <Main>
              <Route path="/" exact>
                <Redirect to="/models" />
              </Route>
              <Route path="/models" exact component={CarFamily} />
              <Route path="/models/:carFamilyId" exact component={Models} />
              <Route path="/models/:carFamilyId/:carId" exact component={Car} />
              <Route path="/lifestyle" exact component={LifeStyle} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/testdrive" exact component={TestDrive} />
            </Main>
          </Switch>
          <Modal />
          <SnackBar />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
