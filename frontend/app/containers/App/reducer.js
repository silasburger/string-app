/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  FETCH_POSTS,
  POSTS_RECEIVED,
  FETCH_POSTS_FAILED,
  POST_CREATED,
  CREATE_POST_FAILED,
  CREATE_POST,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  posts: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fetching posts');
      return state.set('loading', true).set('error', false);
    case POSTS_RECEIVED:
      console.log('posts received');
      return state
        .set('loading', false)
        .set('error', false)
        .set('posts', action.payload.posts);
    case FETCH_POSTS_FAILED:
      return state.set('loading', false).set('error', action.payload.error);
    case CREATE_POST:
      return state.set('loading', true).set('error', false);
    case CREATE_POST_FAILED:
      return state.set('loading', false).set('error', action.payload.error);
    case POST_CREATED:
      return state.set('loading', false).set('error', false);
    default:
      return state;
  }
}

export default appReducer;
