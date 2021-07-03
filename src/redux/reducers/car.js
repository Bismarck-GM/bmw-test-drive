import { SET_CARS } from '../actions/types';

const initialState = {
  loading: true,
  cars: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {
        loading: false,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
