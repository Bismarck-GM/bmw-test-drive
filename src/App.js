import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Main from './container/Main';
import Navbar from './container/Navbar';
import Home from './components/Home';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
            <Route path="/" exact component={Home} />
          </Main>
        </Switch>

      </ThemeProvider>
    </Router>
  );
};

export default App;
