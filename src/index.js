import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/bmw-test-drive">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
