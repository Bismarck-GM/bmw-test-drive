import { TOGGLE_ADMIN } from '../actions/types';

const initialState = {
  admin: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADMIN:
      return {
        admin: !state.admin,
      };
    default:
      return state;
  }
};

export default adminReducer;
