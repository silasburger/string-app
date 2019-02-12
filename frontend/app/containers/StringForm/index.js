/**
 *
 * StringForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectStringForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class StringForm extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.onSubmit}>
          <label htmlFor="stringInput">String: </label>
          <input
            type="text"
            value={this.props.stringInput}
            id="stringInput"
            name="stringInput"
            onChange={this.handleStringChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

StringForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stringForm: makeSelectStringForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stringForm', reducer });
const withSaga = injectSaga({ key: 'stringForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StringForm);
