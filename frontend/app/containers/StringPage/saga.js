import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchPostsFailed, postsReceived } from './actions';
import BackendAPI from '../../BackendAPI';
import { FETCH_POSTS } from './constants';

export function* fetchPosts() {
  try {
    const res = yield call(BackendAPI.getAllPosts);
    const posts = [...res.data.posts];
    console.log('fetchPosts', posts);

    // set result in action
    yield put(postsReceived(posts));
  } catch (e) {
    yield put(fetchPostsFailed(e));
  }
}

export default function* stringPageSaga() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}
