import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StringPageView from '../index';

describe('<StringPageView />', () => {
  it('renders without crashing', () => {
    shallow(
      <StringPageView
        loading={false}
        error={false}
        posts={[]}
        filter="ALL_POSTS"
        changeDateTimeFilter={() => {}}
      />,
    );
  });
  it('matches snapshot', () => {
    const wrapper = shallow(
      <StringPageView
        loading={false}
        error={false}
        posts={[]}
        filter="ALL_POSTS"
        changeDateTimeFilter={() => {}}
      />,
    );
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
