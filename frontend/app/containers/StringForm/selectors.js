import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringForm state domain
 */

const selectStringFormDomain = state => state.get('stringForm', initialState);

/**
 * Other specific selectors
 */

const makeStringValueSelector = () =>
  createSelector(selectStringFormDomain, stringFormState =>
    stringFormState.get('stringInputValue'),
  );

/**
 * Default selector used by StringForm
 */

const makeSelectStringForm = () =>
  createSelector(selectStringFormDomain, substate => substate.toJS());

export default makeSelectStringForm;
export { selectStringFormDomain, makeStringValueSelector };
