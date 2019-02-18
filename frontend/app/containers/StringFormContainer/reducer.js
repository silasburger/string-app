/*
 *
 * StringFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { POST_CREATED } from 'containers/App/constants';
import { CHANGE_STRING } from './constants';

export const initialState = fromJS({
  stringInputValue: '',
});

/**
 * POST_CREATED is listened for here as well as in App reducer
 * Here, the form input value is cleared in the redux state when a post is created
 */
function stringFormContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('stringInputValue', action.value);
    case POST_CREATED:
      return state.set('stringInputValue', '');
    default:
      return state;
  }
}

export default stringFormContainerReducer;
