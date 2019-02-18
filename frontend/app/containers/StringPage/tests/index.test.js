import React from 'react';
import { mount, shallow } from 'enzyme';

import { fetchPosts } from 'containers/App/actions';
import { changeDateTimeFilter } from '../actions';
import { StringPage, mapDispatchToProps } from '../index';

describe('<StringPage />', () => {
  it('string page snapshot', () => {
    const wrapper = shallow(
      <StringPage
        loading={false}
        error={false}
        posts={[]}
        filter="ALL_POSTS"
        changeDateTimeFilter={() => {}}
        fetchPosts={() => {}}
      />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch posts on mount', () => {
    const fetchSpy = jest.fn();
    mount(
      <StringPage
        loading={false}
        error={false}
        posts={[]}
        filter="ALL_POSTS"
        changeDateTimeFilter={() => {}}
        fetchPosts={fetchSpy}
      />,
    );
    expect(fetchSpy).toHaveBeenCalled();
  });
  describe('mapDispatchToProps', () => {
    describe('fetchPosts', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchPosts).toBeDefined();
      });

      it('should dispatch fetchPosts when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchPosts();
        expect(dispatch).toHaveBeenCalledWith(fetchPosts());
      });
    });

    describe('changeDateTimeFilter', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.changeDateTimeFilter).toBeDefined();
      });

      it('should dispatch change when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.changeDateTimeFilter({ target: { value: 'ALL_POSTS' } });
        expect(dispatch).toHaveBeenCalledWith(
          changeDateTimeFilter('ALL_POSTS'),
        );
      });
    });
  });
});
