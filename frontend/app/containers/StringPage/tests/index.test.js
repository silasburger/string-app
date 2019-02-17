import React from 'react';
import { mount, shallow } from 'enzyme';

import StringPageView from 'components/StringPageView/';
import { fetchPosts } from 'containers/App/actions';
import { changeDateTimeFilter } from '../actions';
import { StringPage, mapDispatchToProps } from '../index';

describe('<StringPage />', () => {
  it('should render the string page view', () => {
    const renderedComponent = shallow(
      <StringPage
        loading={false}
        error={false}
        posts={[]}
        filter="ALL_POSTS"
        changeDateTimeFilter={() => {}}
        fetchPosts={() => {}}
      />,
    );
    expect(
      renderedComponent.contains(
        <StringPageView
          loading={false}
          error={false}
          posts={[]}
          filter="ALL_POSTS"
          changeDateTimeFilter={() => {}}
        />,
      ),
    ).toEqual(true);
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
        result.changeDateTimeFilter('ALL_POSTS');
        expect(dispatch).toHaveBeenCalledWith(
          changeDateTimeFilter('ALL_POSTS'),
        );
      });
    });
  });
});
