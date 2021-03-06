import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
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
import { darkTheme, lightTheme } from './Theme';
import { getUserFromLocal } from './api';
import { loginUser } from './redux/actions';

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (theme.palette.type === 'dark') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  useEffect(() => {
    const user = getUserFromLocal();
    if (user) {
      dispatch(loginUser(user));
    }
  }, []);

  return (
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
  );
};

export default App;
