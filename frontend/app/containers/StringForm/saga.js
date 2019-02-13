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
import { makeStringValueSelector } from 'containers/StringForm/selectors';
import { createPostFailed, postCreated } from 'containers/App/actions';
import { CREATE_POST, POST_CREATED } from 'containers/App/constants';

/**
 * TODO come up with better name i.e. createPostLoader or createPostCall so that function isn't confused with action
 */
export function* loadCreatePost() {
  console.log('qwertypp');
  const string = yield select(makeStringValueSelector()); //fix this line!@#!@##@!
  console.log(string);
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
export function* pushToPosts() {
  yield call(history.push, '/strings');
}

export function* watchCreatePost() {
  console.log('watchcreatepost');
  yield takeEvery(CREATE_POST, loadCreatePost);
}

export function* watchPostCreated() {
  yield takeLatest(POST_CREATED, pushToPosts);
}

export default function* stringFormSaga() {
  yield all([watchCreatePost(), watchPostCreated()]);
}
