/*
 *
 * StringPage actions
 *
 */

import { CHANGE_DATE_TIME_FILTER } from './constants';

export function changeDateTimeFilter(filter) {
  return {
    type: CHANGE_DATE_TIME_FILTER,
    filter,
  };
}
