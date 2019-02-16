/*
 *
 * StringPage actions
 *
 */

import {
  FETCH_POSTS,
  POSTS_RECEIVED,
  FETCH_POSTS_FAILED,
  CHANGE_DATE_TIME_FILTER,
} from './constants';

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
  };
}
export function fetchPostsFailed(error) {
  return {
    type: FETCH_POSTS_FAILED,
    error,
  };
}
export function postsReceived(posts) {
  return {
    type: POSTS_RECEIVED,
    posts,
  };
}
export function changeDateTimeFilter(filter) {
  return {
    type: CHANGE_DATE_TIME_FILTER,
    filter,
  };
}
