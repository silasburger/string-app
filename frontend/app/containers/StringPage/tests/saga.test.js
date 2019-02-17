/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { FETCH_POSTS } from 'containers/App/constants';
import stringPageSaga, { fetchPosts } from '../saga';
import { fetchPostsFailed, postsReceived } from 'containers/App/actions';


// const generator = stringPageSaga();

describe('stringPageSaga Saga', () => {
  const stringPageGenerator = stringPageSaga();

  it('should start task to watch for FETCH_POSTS action', () => {
    const takeLatestDescriptor = stringPageGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(FETCH_POSTS, fetchPosts);
  });
});

describe('fetchPosts Saga', () => {
  let fetchPostsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    fetchPostsGenerator = fetchPosts();

    const callDescriptor = fetchPostsGenerator.next().value;
  });

  it('should call the api', () => {
    expect(callDescriptor).toEqual(call(BackendAPI.getAllPosts));
  });

  it('should dispatch the postsReceived action if it requests the data successfully', () => {
    const posts = [{ string: 'onepost', created_at: '2019-02-16 19:10:25-07' }];
    const putDescriptor = fetchPostsGenerator.next(posts).value;
    expect(putDescriptor).toEqual(put(postsReceived(res.posts)));
  });

  it('should call the fetchPostsFailed action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = fetchPostsGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(fetchPostsFailed(error)));
  });
});
