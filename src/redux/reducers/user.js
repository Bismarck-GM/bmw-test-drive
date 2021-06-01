import { LOGIN_USER } from '../actions/types';

const initialState = {
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
