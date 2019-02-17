import {
  FETCH_POSTS,
  POSTS_RECEIVED,
  FETCH_POSTS_FAILED,
  CHANGE_DATE_TIME_FILTER,
} from '../constants';
import {
  fetchPosts,
  fetchPostsFailed,
  postsReceived,
  changeDateTimeFilter,
} from '../actions';

describe('StringPage actions', () => {
  describe('Fetch Posts action', () => {
    it('has a type of FETCH_POSTS', () => {
      const expected = {
        type: FETCH_POSTS,
      };
      expect(fetchPosts()).toEqual(expected);
    });
  });
  describe('Fetch Posts Failed action', () => {
    const err = new Error('fetch failed');
    const expected = {
      type: FETCH_POSTS_FAILED,
      error: err,
    };
    it('has a type of FETCH_POSTS_FAILED', () => {
      expect(fetchPostsFailed(err).type).toEqual(FETCH_POSTS_FAILED);
    });
    it('has and error key with passed in error', () => {
      expect(fetchPostsFailed(err).error).toEqual(err);
    });
    it('it has both type and error', () => {
      expect(fetchPostsFailed(err)).toEqual(expected);
    });
  });
  describe('Posts Received action', () => {
    const posts = [{ string: 'onepost', created_at: '2019-02-16 19:10:25-07' }];
    const expected = {
      type: POSTS_RECEIVED,
      posts,
    };
    it('has a type of POSTS_RECEIVED', () => {
      expect(postsReceived(posts).type).toEqual(POSTS_RECEIVED);
    });
    it('has a posts key and posts', () => {
      expect(postsReceived(posts).posts).toEqual(posts);
    });
    it('has both type and posts', () => {
      expect(postsReceived(posts)).toEqual(expected);
    });
  });
  describe('Change Date Time Action', () => {
    const filter = 'ALL_POSTS';
    const expected = {
      type: CHANGE_DATE_TIME_FILTER,
      filter,
    };
    it('has a type of CHANGE_DATE_TIME_FILTER', () => {
      expect(changeDateTimeFilter(filter).type).toEqual(
        CHANGE_DATE_TIME_FILTER,
      );
    });
    it('has a filter key and filter value', () => {
      expect(changeDateTimeFilter(filter).filter).toEqual(filter);
    });
    it('has both type and filter', () => {
      expect(changeDateTimeFilter(filter)).toEqual(expected);
    });
  });
});
