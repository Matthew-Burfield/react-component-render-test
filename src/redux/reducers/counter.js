import { fromJS } from 'immutable';
import {
  INCREASE_COUNTER,
} from '../actions';

const DEFAULT_STATE = fromJS({
  counterObj: {
    count: 0,
    unchangingText: 'value unchanged',
    array: [0, 1, 2, 3],
  },
});

// const increaseCounter = (state) => {
//   const newArray = [...state.counterObj.array];
//   const newCounterObj = Object.assign({}, state.counterObj, {
//     count: state.counterObj.count + 1,
//     array: newArray,
//   });
//   return Object.assign({}, state, { counterObj: newCounterObj });
// };

const increaseCounter = state => state.update(['count'], value => value + 1);

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return increaseCounter(state);
    default:
      return state;
  }
};

export default rootReducer;
