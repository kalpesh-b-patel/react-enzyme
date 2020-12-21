import { TOGGLE_AUTH } from '../actions/types';

export const auth = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
