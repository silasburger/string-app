import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringPage state domain
 */

const selectStringPageDomain = state => state.get('stringPage', initialState);

/**
 * Other specific selectors
 */

const makePostsSelector = () =>
  createSelector(selectStringPageDomain, substate => substate.get('posts'));
/**
 * Default selector used by StringPage
 */

const makeSelectStringPage = () =>
  createSelector(selectStringPageDomain, substate => substate.toJS());

export default makeSelectStringPage;
export { selectStringPageDomain, makePostsSelector };
