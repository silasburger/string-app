/*
 *
 * StringForm actions
 *
 */

import {
  CHANGE_STRING,
  CREATE_POST,
  CREATE_POST_FAILED,
  POST_CREATED,
} from './constants';

export function changeString(value) {
  return {
    type: CHANGE_STRING,
    value,
  };
}
export function createPost(data) {
  return {
    type: CREATE_POST,
    data,
  };
}
export function createPostFailed(error) {
  return {
    type: CREATE_POST_FAILED,
    error,
  };
}
export function postCreated(post) {
  return {
    type: POST_CREATED,
    post,
  };
}
