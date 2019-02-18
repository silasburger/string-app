/**
 * The global state selectors
 */

/**
 * Loading and Error are stored in global state,
 * allowing for a single source of truth for each item across the app.
 */

import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const selectGlobal = state => state.get('global');

const makeSelectLocation = createSelector(selectRouter, routerState =>
  routerState.get('location').toJS(),
);

const makeSelectLoading = createSelector(selectGlobal, globalState =>
  globalState.get('loading'),
);

const makeSelectPosts = createSelector(selectGlobal, globalState =>
  globalState.get('posts'),
);

const makeSelectError = createSelector(selectGlobal, globalState =>
  globalState.get('error'),
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectError,
  makeSelectLoading,
  makeSelectPosts,
};
