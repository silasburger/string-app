import { put, call, takeEvery, select } from 'redux-saga/effects';
import { makeStringValueSelector } from 'containers/StringForm/selectors';
import { createPostFailed, postCreated } from './actions';
import { CREATE_POST } from './constants';
import BackendAPI from '../../BackendAPI';

export function* createPost() {
  const string = yield select(makeStringValueSelector);
  try {
    const res = yield call(BackendAPI.createPost({ string }));
    // if res is bad, throw error
    yield put(postCreated());
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

export default function* stringFormSaga() {
  yield takeEvery(CREATE_POST, createPost);
}
