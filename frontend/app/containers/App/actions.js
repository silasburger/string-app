/*
 *
 * StringPage actions
 *
 */

import {
  FETCH_POSTS,
  POSTS_RECEIVED,
  FETCH_POSTS_FAILED,
  POST_CREATED,
  CREATE_POST_FAILED,
  CREATE_POST,
} from './constants';

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
  };
}
export function fetchPostsFailed(error) {
  return {
    type: FETCH_POSTS_FAILED,
    payload: error,
  };
}
export function postsReceived(posts) {
  return {
    type: POSTS_RECEIVED,
    payload: { posts },
  };
}
export function createPost() {
  return {
    type: CREATE_POST,
  };
}
export function createPostFailed(error) {
  return {
    type: CREATE_POST_FAILED,
    payload: error,
  };
}
export function postCreated(post) {
  return {
    type: POST_CREATED,
    payload: post,
  };
}
