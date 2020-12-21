import comments from './comments';
import { auth } from './auth';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  comments,
  auth,
});

export default reducers;
