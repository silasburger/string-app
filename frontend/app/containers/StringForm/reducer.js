/*
 *
 * StringForm reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_STRING, CREATE_POST, CREATE_POST_FAILED, POST_CREATED } from './constants';

export const initialState = fromJS({
  formValue: '',
  loading: ,
  error: 

});

function stringFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state;
    default:
      return state;
  }
}

export default stringFormReducer;
