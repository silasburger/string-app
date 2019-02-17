import { fromJS } from 'immutable';
import {
  selectStringPageDomain,
  makeDateTimeFilterSelector,
  makeDateTimeFilteredPostsSelector,
} from '../selectors';

describe('selectStringPageDomain', () => {
  it('should select the stringPageDomain state', () => {
    const dateTimeFilterState = fromJS({
      dateTimeFilter: 'ALL_POSTS',
    });
    const mockedState = fromJS({
      postFilters: dateTimeFilterState,
    });
    console.log(selectStringPageDomain(mockedState));
    expect(selectStringPageDomain(mockedState)).toEqual(dateTimeFilterState);
  });
});

describe('makeDateTimeFilterSelector', () => {
  const dateTimeFilterSelector = makeDateTimeFilterSelector();
  it('should select the username', () => {
    const filter = 'ALL_POSTS';
    const mockedState = fromJS({
      dateTimeFilter: filter,
    });
    expect(dateTimeFilterSelector(mockedState)).toEqual(filter);
  });
});

describe('makeDateTimeFilteredPostsSelector', () => {
  const dateTimeFilterPostsSelector = makeDateTimeFilteredPostsSelector();
  const posts = [
    {
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '1992-06-22 19:10:25-07',
    },
    { string: 'Strings and strands', created_at: '2018-06-22 19:10:25-07' },
    {
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '2019-02-16 19:10:25-07',
    },
    {
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '2050-06-30 19:10:25-07',
    },
  ];
  it('should return all posts', () => {
    const filter = 'ALL_POSTS';
    expect(dateTimeFilterPostsSelector(filter, posts)).toEqual(posts);
  });
  it('should return new posts', () => {
    const filter = 'LAST_FIVE_MINUTES';
    expect(dateTimeFilterPostsSelector(filter, posts)).toEqual([
      {
        string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
        created_at: '2050-06-30 19:10:25-07',
      },
    ]);
  });
  it('should return one year old posts', () => {
    const filter = 'ONE_YEAR_OR_EARLIER';
    expect(dateTimeFilterPostsSelector(filter, posts)).toEqual([
      { string: 'Strings and strands', created_at: '2018-06-22 19:10:25-07' },
      {
        string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
        created_at: '2019-02-16 19:10:25-07',
      },
      {
        string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
        created_at: '1992-06-22 19:10:25-07',
      },
    ]);
  });
  it('should return five year old posts', () => {
    const filter = 'FIVE_YEARS_OR_EARLIER';
    expect(dateTimeFilterPostsSelector(filter, posts)).toEqual([
      {
        string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
        created_at: '1992-06-22 19:10:25-07',
      },
    ]);
  });
});
