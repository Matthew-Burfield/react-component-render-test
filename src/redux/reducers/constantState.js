import { fromJS } from 'immutable';

const DEFAULT_STATE = fromJS({
  constantState: {
    id: 1,
    name: 'Matthew',
    arr: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }],
  },
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
