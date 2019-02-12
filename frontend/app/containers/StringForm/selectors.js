import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringForm state domain
 */

const selectStringFormDomain = state => state.get('stringForm', initialState);

/**
 * Other specific selectors
 */

const selectStringValue = state => state.get('stringValue', '');

/**
 * Default selector used by StringForm
 */

const makeSelectStringForm = () =>
  createSelector(selectStringFormDomain, substate => substate.toJS());

export default makeSelectStringForm;
export { selectStringFormDomain, selectStringValue };


