import { ADD, FETCH, TOGGLE_AUTH } from './types';
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

export const toggleAuth = async (payload) => {
  return {
    type: TOGGLE_AUTH,
    payload,
  };
};
