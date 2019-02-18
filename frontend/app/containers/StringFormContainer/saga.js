import history from 'utils/history';
import {
  put,
  call,
  takeEvery,
  takeLatest,
  select,
  all,
} from 'redux-saga/effects';
import BackendAPI from 'utils/BackendAPI';
import { makeStringValueSelector } from 'containers/StringFormContainer/selectors';
import {
  createPostFailed,
  postCreated,
  fetchPosts,
} from 'containers/App/actions';
import { CREATE_POST, POST_CREATED } from 'containers/App/constants';
import { makeSelectLocation } from '../App/selectors';

/**
 * CREATE_POST request and response handler
 */
export function* loadCreatePost() {
  const string = yield select(makeStringValueSelector);
  try {
    yield call(BackendAPI.createPost, string);
    yield put(postCreated());
  } catch (e) {
    const error = new Error('Failed to create post');
    yield put(createPostFailed(error));
  }
}

/**
 * Pushes to /strings when post is created if user isn't already on /strings.
 * If user is on /strings, then a new request is triggered.
 */
export function* postCreatedSideEffects() {
  const location = yield select(makeSelectLocation);
  if (location.pathname === '/strings') {
    yield put(fetchPosts());
  } else {
    yield call(history.push, '/strings');
  }
}

/**
 * Watches for a CREATE_POST action to be dispatched, then calls loadCreatePost handler
 */
export function* watchCreatePost() {
  yield takeEvery(CREATE_POST, loadCreatePost);
}

/**
 * Watches for a POST_CREATED action to be dispatched, then calls loadCreatePost handler
 */
export function* watchPostCreated() {
  yield takeLatest(POST_CREATED, postCreatedSideEffects);
}

export default function* stringFormContainerSaga() {
  yield all([watchCreatePost(), watchPostCreated()]);
}
