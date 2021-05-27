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

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(22,88,142)',
    },
    action: {
      selected: '#97BF0F',
    },
  },
  typography: {
    fontFamily: '"Cabin", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  const [drawer, setDrawer] = useState(true);
  // const [response, setResponse] = useState(null);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  // useEffect(async () => {
  //   const response = await fetch('http://127.0.0.1:3000/api/v1/dealerships').then((res) => res.json());
  //   setResponse(response);
  // }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar
          open={drawer}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Switch>
          <Main open={drawer}>
            <Route path="/" exact>
              <Redirect to="/models" />
            </Route>
            <Route path="/models" exact component={Models} />
          </Main>
        </Switch>

      </ThemeProvider>
    </Router>
  );
};

export default App;
