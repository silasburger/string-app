/*
 *
 * StringPage reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_POSTS, FETCH_POSTS_FAILED, POSTS_RECEIVED } from './constants';

export const initialState = fromJS({
  posts: [],
  loading: false,
  error: false,
});

function stringPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('in fetch posts reducer', action);
      return state.set('loading', true).set('error', false);
    case POSTS_RECEIVED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('posts', action.posts);
    case FETCH_POSTS_FAILED:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default stringPageReducer;
