import commentReducer from './comments';
import { ADD } from '../actions/types';

it('adds a comment', () => {
  const action = { type: ADD, payload: 'new comment' };
  const newState = commentReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('action with unknown type', () => {
  const action = { type: 'Not Exists' };
  const newState = commentReducer([], action);
  expect(newState).toEqual([]);
});
