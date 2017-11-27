import { combineReducers } from 'redux-immutable';
import constantState from './constantState';
import counter from './counter';

export default combineReducers({
  constantState,
  counter,
});
