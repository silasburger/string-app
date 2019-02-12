/*
 *
 * StringForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STRING,
  CREATE_POST,
  CREATE_POST_FAILED,
  POST_CREATED,
} from './constants';

export const initialState = fromJS({
  formValue: '',
  loading: false,
  error: false,
});

function stringFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('changeString', action.value);
    case CREATE_POST:
      return state.set('loading', true).set('error', false);
    case CREATE_POST_FAILED:
      return state.set('loading', false).set('error', action.error);
    case POST_CREATED:
      return state.set('loading', false).set('error', false);
    default:
      return state;
  }
}

export default stringFormReducer;
