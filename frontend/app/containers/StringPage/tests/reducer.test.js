import stringPageReducer, { initialState } from '../reducer';
import { changeDateTimeFilter } from '../actions';
import { LAST_FIVE_MINUTES } from '../constants';

describe('stringPageReducer', () => {
  it('returns the initial state', () => {
    expect(stringPageReducer(undefined, {})).toEqual(initialState);
  });
  it('Changes date time filter', () => {
    const state = stringPageReducer(
      undefined,
      changeDateTimeFilter(LAST_FIVE_MINUTES),
    );
    expect(state.get('dateTimeFilter')).toEqual(LAST_FIVE_MINUTES);
  });
});
