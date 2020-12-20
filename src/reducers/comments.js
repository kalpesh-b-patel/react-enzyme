import { ADD, FETCH } from '../actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case FETCH:
      const comments = action.payload.map((data) => data.name);
      return [...state, ...comments];
    default:
      return state;
  }
};

export default comments;
