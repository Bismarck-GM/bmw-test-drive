import * as actions from '../../redux/actions';
import * as types from '../../redux/actions/types';

describe('Cars actions', () => {
  it('should create an action to create Cars', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.SET_CARS,
      payload: obj,
    };
    expect(actions.createCars(obj)).toEqual(expectedAction);
  });
  it('should create an action to create Appointments', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.SET_APPOINTMENTS,
      payload: obj,
    };
    expect(actions.createAppointments(obj)).toEqual(expectedAction);
  });
  it('should create an action to delete all Appointments', () => {
    const expectedAction = {
      type: types.DELETE_ALL_APPOINTMENTS,
    };
    expect(actions.deleteAllAppointments()).toEqual(expectedAction);
  });
  it('should create an action to delete all Appointments', () => {
    const expectedAction = {
      type: types.LOADING_APPOINTMENTS,
    };
    expect(actions.loadingAppointments()).toEqual(expectedAction);
  });
  it('should create an action to toggle uiDrawer', () => {
    const expectedAction = {
      type: types.DRAWER_TOGGLE,
    };
    expect(actions.toggleDrawer()).toEqual(expectedAction);
  });
  it('should create an action to create Car Families', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.SET_CAR_FAMILIES,
      payload: obj,
    };
    expect(actions.createCarFamilies(obj)).toEqual(expectedAction);
  });
  it('should create an action to create Dealerships', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.SET_DEALERSHIPS,
      payload: obj,
    };
    expect(actions.createDealerships(obj)).toEqual(expectedAction);
  });
  it('should create an action to create LoginUser', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.LOGIN_USER,
      payload: obj,
    };
    expect(actions.loginUser(obj)).toEqual(expectedAction);
  });
  it('should create an action to create LogOut User', () => {
    const expectedAction = {
      type: types.LOGOUT_USER,
    };
    expect(actions.logOutUser()).toEqual(expectedAction);
  });
  it('should create an action to create uiCloseModal', () => {
    const expectedAction = {
      type: types.MODAL_CLOSE,
    };
    expect(actions.closeModal()).toEqual(expectedAction);
  });
  it('should create an action to create uiOpenModal', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.MODAL_OPEN,
      payload: obj,
    };
    expect(actions.openModal(obj)).toEqual(expectedAction);
  });
  it('should create an action to create FormError', () => {
    const obj = { sarasa: 'sarasa' };
    const expectedAction = {
      type: types.FORM_ERROR,
      payload: obj,
    };
    expect(actions.formError(obj)).toEqual(expectedAction);
  });
  it('should create an action with different type to create SnackBar with Message', () => {
    const message = 'Hola viteh';
    const expectedAction = {
      type: types.SNACKBAR_ERROR,
      payload: message,
    };
    expect(actions.snackBar(types.SNACKBAR_ERROR, message)).toEqual(expectedAction);
  });
});
