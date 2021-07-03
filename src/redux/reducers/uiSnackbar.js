import {
  SNACKBAR_ERROR,
  SNACKBAR_CLEAR,
  SNACKBAR_SUCCESS,
  SNACKBAR_INFO,
} from '../actions/types';

const initialState = {
  snackBarOpen: false,
  snackBarMessage: '',
  snackBarType: '',
};

const uiSnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        snackBarOpen: true,
        snackBarMessage: action.payload,
        snackBarType: 'success',
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        snackBarOpen: true,
        snackBarMessage: action.payload,
        snackBarType: 'error',
      };
    case SNACKBAR_INFO:
      return {
        ...state,
        snackBarOpen: true,
        snackBarMessage: action.payload,
        snackBarType: 'info',
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        snackBarOpen: false,
      };
    default:
      return state;
  }
};

export default uiSnackbarReducer;
