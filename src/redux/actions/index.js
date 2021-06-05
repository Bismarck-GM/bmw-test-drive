import Api, {
  LOGIN,
  REGISTER,
  GET_CARS,
  GET_CAR_FAMILIES,
} from '../../api';
import * as types from './types';

export const createCars = (cars) => ({
  type: types.SET_CARS,
  payload: cars,
});

export const createCarFamilies = (carFamily) => ({
  type: types.SET_CAR_FAMILIES,
  payload: carFamily,
});

export const snackBar = (type, message) => ({
  type,
  payload: message,
});

export const toggleDrawer = () => ({ type: types.DRAWER_TOGGLE });

export const loginUser = (data) => ({
  type: types.LOGIN_USER,
  payload: data,
});

export const openModal = (type) => ({
  type: types.MODAL_OPEN,
  payload: type,
});

export const closeModal = () => ({ type: types.MODAL_CLOSE });

export const formError = (message) => ({
  type: types.FORM_ERROR,
  payload: message,
});

export const toggleFormLoading = () => ({ type: types.FORM_LOADING });

export const snackBarClear = () => ({ type: types.SNACKBAR_CLEAR });

export const fetchCarFamilies = () => async (dispatch) => {
  try {
    const { data } = await Api({ ...GET_CAR_FAMILIES() });
    dispatch(createCarFamilies(data));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, 'Could not connect to back-end.'));
  }
};

export const fetchAllCars = () => async (dispatch) => {
  try {
    const { data } = await Api({ ...GET_CARS() });
    console.log(data);
    dispatch(createCars(data));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, 'Could not connect to back-end.'));
  }
};

export const logIn = (formInputs) => async (dispatch) => {
  dispatch(toggleFormLoading());
  try {
    const { data } = await Api({ ...LOGIN(), data: { ...formInputs } });
    dispatch(loginUser(data));
    dispatch(snackBar(types.SNACKBAR_SUCCESS, `Welcome back ${data.username}.`));
    dispatch(closeModal());
  } catch (err) {
    console.log(err.response);
    dispatch(toggleFormLoading());
    dispatch(formError(err.response.data.error));
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error));
  }
};

export const register = (formInputs) => async (dispatch) => {
  dispatch(toggleFormLoading());
  try {
    const { data } = await Api({ ...REGISTER(), data: { ...formInputs } });
    dispatch(loginUser(data));
    dispatch(snackBar(types.SNACKBAR_SUCCESS, `Welcome ${data.username}.`));
    dispatch(closeModal());
  } catch (err) {
    console.log(err.response);
    dispatch(toggleFormLoading());
    dispatch(formError(err.response.data.error));
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error));
  }
};
