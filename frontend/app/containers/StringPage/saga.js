import { put, call, takeLatest } from 'redux-saga/effects';
import BackendAPI from 'utils/BackendAPI';
import { fetchPostsFailed, postsReceived } from 'containers/App/actions';
import { FETCH_POSTS } from 'containers/App/constants';

export function* fetchPosts() {
  try {
    const res = yield call(BackendAPI.getAllPosts);

    // set result in action
    yield put(postsReceived(res.posts));
  } catch (e) {
    yield put(fetchPostsFailed(e));
  }
}

export default function* stringPageSaga() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}
