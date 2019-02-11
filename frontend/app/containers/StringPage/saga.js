import {
  put,
  call,
  takeLatest,
  takeEvery,
  select,
  take,
  all,
} from 'redux-saga/effects';
import { fetchPostsFailed, postsReceived } from './actions';
import BackendAPI from '../../BackendAPI';
import { FETCH_POSTS } from './constants';

function* fetchPosts() {
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

export function* watchFetchPosts() {
  console.log('watch triggered');
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default function* stringPageSaga() {
  yield all([watchFetchPosts()]);
}
