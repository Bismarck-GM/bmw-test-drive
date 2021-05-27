import { combineReducers } from 'redux';
import adminReducer from './admin';

const rootStore = combineReducers({
  admin: adminReducer,
});

export default rootStore;
