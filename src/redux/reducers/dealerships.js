import { SET_DEALERSHIPS } from '../actions/types';

const initialState = [];

const dealershipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEALERSHIPS:
      return action.payload;
    default:
      return state;
  }
};

export default dealershipsReducer;
