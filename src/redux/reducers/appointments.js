import { SET_APPOINTMENTS, DELETE_ALL_APPOINTMENTS } from '../actions/types';

const initialState = [];

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPOINTMENTS:
      return action.payload;
    case DELETE_ALL_APPOINTMENTS:
      return initialState;
    default:
      return state;
  }
};

export default appointmentsReducer;
