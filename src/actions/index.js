import { ADD, FETCH } from './types';
import axios from 'axios';

export const add = (payload) => ({
  type: ADD,
  payload,
});

export const fetch = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );

  return {
    type: FETCH,
    payload: response.data,
  };
};
