import Api, {
  LOGIN,
  REGISTER,
  GET_CARS,
  GET_CAR_FAMILIES,
  GET_APPOINTMENTS,
  GET_DEALERSHIPS,
  POST_APPOINTMENT,
  saveUserToLocal,
  setBearerToken,
  DELETE_APPOINTMENT,
} from '../../api';
import * as types from './types';

export const createCars = (cars) => ({
  type: types.SET_CARS,
  payload: cars,
});

export const createAppointments = (appointments) => ({
  type: types.SET_APPOINTMENTS,
  payload: appointments,
});

export const deleteAllAppointments = () => ({ type: types.DELETE_ALL_APPOINTMENTS });

export const loadingAppointments = () => ({ type: types.LOADING_APPOINTMENTS });

export const createCarFamilies = (carFamily) => ({
  type: types.SET_CAR_FAMILIES,
  payload: carFamily,
});

export const createDealerships = (dealerships) => ({
  type: types.SET_DEALERSHIPS,
  payload: dealerships,
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

export const logOutUser = () => ({
  type: types.LOGOUT_USER,
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

export const fetchAppointments = () => async (dispatch) => {
  dispatch(loadingAppointments());
  try {
    const { data } = await Api({ ...GET_APPOINTMENTS() });
    data.sort((a, b) => {
      if (a.start_time < b.start_time) { return -1; }
      if (a.start_time > b.start_time) { return 1; }
      return 0;
    });
    dispatch(createAppointments(data));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error || 'Something went wrong.'));
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    const { data } = await Api({ ...DELETE_APPOINTMENT(), data: { id } });
    dispatch(snackBar(types.SNACKBAR_INFO, data.info));
    dispatch(fetchAppointments());
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error));
  }
};

export const fetchDealerships = () => async (dispatch) => {
  try {
    const { data } = await Api({ ...GET_DEALERSHIPS() });
    data.sort((a, b) => {
      if (a.country < b.country) { return -1; }
      if (a.country > b.country) { return 1; }
      return 0;
    });
    dispatch(createDealerships(data));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error || 'Couldn\'t connect to Back-end'));
  }
};

export const fetchAllCars = () => async (dispatch) => {
  try {
    const { data } = await Api({ ...GET_CARS() });
    dispatch(createCars(data));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, 'Could not connect to back-end.'));
  }
};

export const logIn = (formInputs) => async (dispatch) => {
  dispatch(toggleFormLoading());
  try {
    const { data } = await Api({ ...LOGIN(), data: { ...formInputs } });
    saveUserToLocal(data);
    setBearerToken();
    dispatch(loginUser(data));
    dispatch(snackBar(types.SNACKBAR_SUCCESS, `Welcome back ${data.username}.`));
    dispatch(closeModal());
  } catch (err) {
    dispatch(toggleFormLoading());
    dispatch(formError(err.response.data.error));
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error || 'Couldn\'t connect to Back-end'));
  }
};

export const register = (formInputs) => async (dispatch) => {
  dispatch(toggleFormLoading());
  try {
    const { data } = await Api({ ...REGISTER(), data: { ...formInputs } });
    saveUserToLocal(data);
    setBearerToken();
    dispatch(loginUser(data));
    dispatch(snackBar(types.SNACKBAR_SUCCESS, `Welcome ${data.username}.`));
    dispatch(closeModal());
  } catch (err) {
    dispatch(toggleFormLoading());
    dispatch(formError(err.response.data.error));
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error || 'Couldn\'t connect to Back-end'));
  }
};

export const logOut = () => (dispatch, getState) => {
  const state = getState();
  dispatch(closeModal());
  dispatch(snackBar(types.SNACKBAR_INFO, `Logged out ${state.user.username} succesfuly.`));
  dispatch(logOutUser());
  dispatch(deleteAllAppointments());
  window.localStorage.clear();
  setBearerToken();
};

export const createAppointment = (formInputs) => async (dispatch) => {
  try {
    await Api({ ...POST_APPOINTMENT(), data: { ...formInputs } });
    dispatch(fetchAppointments());
    dispatch(snackBar(types.SNACKBAR_SUCCESS, 'Appointment created.'));
  } catch (err) {
    dispatch(snackBar(types.SNACKBAR_ERROR, err.response.data.error || 'Couldn\'t connect to Back-end'));
  }
};
