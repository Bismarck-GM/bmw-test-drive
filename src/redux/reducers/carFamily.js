import { SET_CAR_FAMILIES } from '../actions/types';

const initialState = {
  loading: true,
  carFamilies: [],
};

const carFamilyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_FAMILIES:
      return {
        loading: false,
        carFamilies: action.payload,
      };
    default:
      return state;
  }
};

export default carFamilyReducer;
