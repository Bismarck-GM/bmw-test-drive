import { combineReducers } from 'redux';
import adminReducer from './admin';
import carFamilyReducer from './carFamily';
import uiSnackbarReducer from './uiSnackbar';
import userReducer from './user';
import uiModalReducer from './uiModal';

const rootStore = combineReducers({
  admin: adminReducer,
  carFamily: carFamilyReducer,
  uiSnackBar: uiSnackbarReducer,
  uiModal: uiModalReducer,
  user: userReducer,
});

export default rootStore;
