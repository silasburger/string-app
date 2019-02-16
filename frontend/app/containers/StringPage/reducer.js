import { fromJS } from 'immutable';

import { CHANGE_DATE_TIME_FILTER, ALL_POSTS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  dateTimeFilter: ALL_POSTS,
});

function stringPageReducer(state = initialState, action) {
  console.log('in reducer', state);
  switch (action.type) {
    case CHANGE_DATE_TIME_FILTER:
      return state.set('dateTimeFilter', action.filter);
    default:
      return state;
  }
}

export default stringPageReducer;
