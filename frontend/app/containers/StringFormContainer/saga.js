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
 *
 */
export function* loadCreatePost() {
  const string = yield select(makeStringValueSelector);
  console.log('load create post saga', string);
  try {
    yield call(BackendAPI.createPost, string);
    yield put(postCreated());
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

/**
 * Push to /strings when post is created
 * Calling push on main history instance to navigate to strings page
 */
export function* postCreatedSideEffects() {
  const location = yield select(makeSelectLocation);
  console.log('post created side effect', location);
  if (location.pathname === '/strings') {
    yield put(fetchPosts());
  } else {
    yield call(history.push, '/strings');
  }
}

export function* watchCreatePost() {
  yield takeEvery(CREATE_POST, loadCreatePost);
}

export function* watchPostCreated() {
  yield takeLatest(POST_CREATED, postCreatedSideEffects);
}

export default function* stringFormContainerSaga() {
  yield all([watchCreatePost(), watchPostCreated()]);
}
