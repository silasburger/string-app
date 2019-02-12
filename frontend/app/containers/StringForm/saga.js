import { put, call, takeEvery } from 'redux-saga/effects';
import { createPostFailed, postCreated } from './actions';
import { CREATE_POST } from './constants';
import BackendAPI from '../../BackendAPI';

export function* createPost(data) {
  try {
    const res = yield call(BackendAPI.createPost(data));
    // if res is bad, throw error
    yield put(postCreated());
  } catch (e) {
    yield put(createPostFailed(e));
  }
}

export default function* stringFormSaga() {
  yield takeEvery(CREATE_POST, createPost);
}
