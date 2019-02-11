/*
 *
 * StringPage actions
 *
 */

import { FETCH_POSTS, POSTS_RECEIVED, FETCH_POSTS_FAILED } from './constants';

export function fetchPosts() {
  console.log('in fetch posts action');
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
