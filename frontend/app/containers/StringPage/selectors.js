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
const makeLoadingSelector = () =>
  createSelector(selectStringPageDomain, substate => substate.get('loading'));
const makeErrorSelector = () =>
  createSelector(selectStringPageDomain, substate => substate.get('error'));
/**
 * Default selector used by StringPage
 */

const makeSelectStringPage = () =>
  createSelector(selectStringPageDomain, substate => substate.toJS());

export default makeSelectStringPage;
export {
  selectStringPageDomain,
  makePostsSelector,
  makeErrorSelector,
  makeLoadingSelector,
};
