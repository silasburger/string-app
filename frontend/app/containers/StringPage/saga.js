import {
  put,
  call,
  takeLatest,
  takeEvery,
  select,
  take,
} from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_POSTS_FAILED, POSTS_RECEIVED } from './constants';
import BackendAPI from './BackendAPI';

function* fetchPosts() {
  try {
    // TODO: Call the API - this will get all posts
    const res = yield call(BackendAPI.getAllPosts);
    const posts = res.data.posts;
    // set result in action
    yield put({ type: POSTS_RECEIVED, posts });
  } catch (e) {
    yield put({ type: FETCH_POSTS_FAILED, e });
  }
}

function* createPost(action) {
  try {
    const createdPost = yield call(BackendAPI.createPost, action.data);
    yield put({ type: POST_CREATED, createdPost });
  } catch (e) {
    yield put({ type: CREATE_POST_FAILED, e });
  }
}

export default function* stringPageSaga() {
  yield takeEvery(CREATE_POST, createPost);
  yield takeLatest(FETCH_POSTS, fetchPosts);
}
