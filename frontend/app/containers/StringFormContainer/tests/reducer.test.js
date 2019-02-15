import { fromJS } from 'immutable';
import stringFormReducer from '../reducer';

describe('stringFormReducer', () => {
  it('returns the initial state', () => {
    expect(stringFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
