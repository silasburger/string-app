import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringFormContainer state domain
 */

const selectStringFormContainerDomain = state =>
  state.get('formData', initialState);

/**
 * Other specific selectors
 */

const makeStringValueSelector = createSelector(
  selectStringFormContainerDomain,
  stringFormContainerState => stringFormContainerState.get('stringInputValue'),
);

/**
 * Default selector used by StringFormContainer
 */

const makeSelectStringFormContainer = createSelector(
  selectStringFormContainerDomain,
  substate => substate.toJS(),
);

export default makeSelectStringFormContainer;
export { selectStringFormContainerDomain, makeStringValueSelector };
