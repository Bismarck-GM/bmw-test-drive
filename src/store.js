import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootStore from './redux/reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootStore,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
