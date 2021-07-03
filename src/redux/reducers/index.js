import { combineReducers } from 'redux';
import adminReducer from './admin';
import carFamilyReducer from './carFamily';
import uiSnackbarReducer from './uiSnackbar';
import userReducer from './user';
import uiModalReducer from './uiModal';
import carReducer from './car';
import uiDrawerReducer from './uiDrawer';
import appointmentsReducer from './appointments';
import dealershipsReducer from './dealerships';

const rootStore = combineReducers({
  admin: adminReducer,
  carFamily: carFamilyReducer,
  cars: carReducer,
  uiSnackBar: uiSnackbarReducer,
  uiModal: uiModalReducer,
  uiDrawer: uiDrawerReducer,
  user: userReducer,
  appointments: appointmentsReducer,
  dealerships: dealershipsReducer,
});

export default rootStore;
