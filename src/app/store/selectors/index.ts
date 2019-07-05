import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';

export const getRouterReducerState = createSelector(
  fromReducers.getRouterState,
  (state) => state.state
);

export const getQueryParams = createSelector(
  getRouterReducerState,
  (state) => state.queryParams
);
