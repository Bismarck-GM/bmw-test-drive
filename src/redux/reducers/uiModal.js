import {
  MODAL_OPEN,
  MODAL_CLOSE,
  FORM_LOADING,
  FORM_ERROR,
} from '../actions/types';

const initialState = {
  modalOpen: false,
  modalFor: '',
  formLoading: false,
  formType: '',
  formError: false,
};

const uiModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
        modalFor: action.payload,
      };
    case MODAL_CLOSE:
      return initialState;
    case FORM_LOADING:
      return {
        ...state,
        formLoading: !state.formLoading,
      };
    case FORM_ERROR:
      return {
        ...state,
        formError: true,
      };
    default:
      return state;
  }
};

export default uiModalReducer;
