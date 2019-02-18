import { makeSelectPosts } from 'containers/App/selectors';
import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {
  LAST_FIVE_MINUTES,
  LAST_TWO_WEEKS,
  ONE_YEAR_OR_EARLIER,
  FIVE_YEARS_OR_EARLIER,
} from './constants';

/**
 * Direct selector to the stringPage state domain
 */

const selectStringPageDomain = state => state.get('postFilters', initialState);

/**
 * Other specific selectors
 */

const makeDateTimeFilterSelector = createSelector(
  selectStringPageDomain,
  substate => substate.get('dateTimeFilter'),
);

/**
 * This is a COOL selector!
 * This selector finds the time between the current date/time and the date/time of each post.
 * Depending on the date/time filter different posts are selected.
 * When two Dates are substracted the difference is returned in miliseconds,
 * so there are calculations for different in miliseconds.
 */
const makeDateTimeFilteredPostsSelector = createSelector(
  [makeDateTimeFilterSelector, makeSelectPosts],
  (dateTimeFilter, posts) => {
    const currentTime = new Date();
    switch (dateTimeFilter) {
      case LAST_FIVE_MINUTES:
        return posts.filter(post => {
          const creationDate = new Date(post.created_at);
          return currentTime - creationDate < 1000 * 60 * 5;
        });
      case LAST_TWO_WEEKS:
        return posts.filter(post => {
          const creationDate = new Date(post.created_at);
          return currentTime - creationDate < 1000 * 60 * 60 * 24 * 14;
        });
      case ONE_YEAR_OR_EARLIER:
        return posts.filter(post => {
          const creationDate = new Date(post.created_at);
          return currentTime - creationDate > 1000 * 60 * 60 * 24 * 365;
        });
      case FIVE_YEARS_OR_EARLIER:
        return posts.filter(post => {
          const creationDate = new Date(post.created_at);
          return currentTime - creationDate > 1000 * 60 * 60 * 24 * 365 * 5;
        });
      default:
        return posts;
    }
  },
);
/**
 * Default selector used by StringPage
 */

const makeSelectStringPage = () =>
  createSelector(selectStringPageDomain, substate => substate.toJS());

export default makeSelectStringPage;
export {
  selectStringPageDomain,
  makeDateTimeFilterSelector,
  makeDateTimeFilteredPostsSelector,
};
