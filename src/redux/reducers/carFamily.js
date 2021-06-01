import { SET_CAR_FAMILIES } from '../actions/types';

const initialState = {
  loading: true,
  cars: [],
};

const carFamilyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_FAMILIES:
      return {
        loading: false,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carFamilyReducer;
