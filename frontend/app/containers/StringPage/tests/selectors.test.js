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
    const initialState = fromJS({
      postFilters: dateTimeFilterState,
    });
    expect(selectStringPageDomain(initialState)).toEqual(dateTimeFilterState);
  });
});

describe('makeDateTimeFilterSelector', () => {
  it('should select the filter', () => {
    const filter = 'ALL_POSTS';
    const mockedState = fromJS({
      dateTimeFilter: filter,
    });
    const dateTimeFilterSelector = makeDateTimeFilterSelector.resultFunc(
      mockedState,
    );
    expect(dateTimeFilterSelector).toEqual(filter);
  });
});

describe('makeDateTimeFilteredPostsSelector', () => {
  const posts = [
    {
      id: 1,
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '1992-06-22 19:10:25-07',
    },
    {
      id: 2,
      string: 'Strings and strands',
      created_at: '2017-06-22 19:10:25-07',
    },
    {
      id: 3,
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '2019-02-16 19:10:25-07',
    },
    {
      id: 4,
      string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
      created_at: '2050-06-30 19:10:25-07',
    },
  ];
  it('should return all posts', () => {
    const filter = 'ALL_POSTS';
    expect(makeDateTimeFilteredPostsSelector.resultFunc(filter, posts)).toEqual(
      posts,
    );
  });
  it('should return newish posts', () => {
    const filter = 'LAST_TWO_WEEKS';
    expect(makeDateTimeFilteredPostsSelector.resultFunc(filter, posts)).toEqual(
      [
        {
          id: 3,
          string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
          created_at: '2019-02-16 19:10:25-07',
        },
        {
          id: 4,
          string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
          created_at: '2050-06-30 19:10:25-07',
        },
      ],
    );
  });
  it('should return new posts', () => {
    const filter = 'LAST_FIVE_MINUTES';
    expect(makeDateTimeFilteredPostsSelector.resultFunc(filter, posts)).toEqual(
      [
        {
          id: 4,
          string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
          created_at: '2050-06-30 19:10:25-07',
        },
      ],
    );
  });
  it('should return one year old posts', () => {
    const filter = 'ONE_YEAR_OR_EARLIER';
    expect(makeDateTimeFilteredPostsSelector.resultFunc(filter, posts)).toEqual(
      [
        {
          id: 1,
          string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
          created_at: '1992-06-22 19:10:25-07',
        },
        {
          id: 2,
          string: 'Strings and strands',
          created_at: '2017-06-22 19:10:25-07',
        },
      ],
    );
  });
  it('should return five year old posts', () => {
    const filter = 'FIVE_YEARS_OR_EARLIER';
    expect(makeDateTimeFilteredPostsSelector.resultFunc(filter, posts)).toEqual(
      [
        {
          id: 1,
          string: '😺 😸 😹 😻 😼 😽 🙀 😿 😾',
          created_at: '1992-06-22 19:10:25-07',
        },
      ],
    );
  });
});
