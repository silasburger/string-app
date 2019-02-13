/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const selectGlobal = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('loading').toJS(),
  );

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error').toJS());

export { makeSelectLocation, makeSelectError, makeSelectLoading };
