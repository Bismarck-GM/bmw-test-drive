import {
  DRAWER_TOGGLE,
} from '../actions/types';

const initialState = {
  drawerOpen: true,
};

const uiDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_TOGGLE:
      return {
        drawerOpen: !state.drawerOpen,
      };
    default:
      return state;
  }
};

export default uiDrawerReducer;
