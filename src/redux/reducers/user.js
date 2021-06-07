import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...action.payload,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
