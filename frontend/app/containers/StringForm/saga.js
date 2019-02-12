import history from 'utils/history';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import BackendAPI from 'utils/BackendAPI';
import { makeStringValueSelector } from 'containers/StringForm/selectors';
import { createPostFailed, postCreated } from './actions';
import { CREATE_POST } from './constants';

export function* createPost() {
  const string = yield select(makeStringValueSelector());
  try {
    yield call(BackendAPI.createPost, string);
    yield put(postCreated());

    // calling push on main history entrance to navigate to strings page
    yield call(history.push, '/strings');
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

export default function* stringFormSaga() {
  yield takeEvery(CREATE_POST, createPost);
}
