import { SET_APPOINTMENTS, DELETE_ALL_APPOINTMENTS, LOADING_APPOINTMENTS } from '../actions/types';

const initialState = {
  loading: true,
  appointments: [],
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPOINTMENTS:
      return {
        loading: false,
        appointments: action.payload,
      };
    case LOADING_APPOINTMENTS:
      return {
        loading: true,
        ...state,
      };
    case DELETE_ALL_APPOINTMENTS:
      return initialState;
    default:
      return state;
  }
};

export default appointmentsReducer;
