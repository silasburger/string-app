import { fromJS } from 'immutable';
import stringPageReducer from '../reducer';

describe('stringPageReducer', () => {
  it('returns the initial state', () => {
    expect(stringPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
