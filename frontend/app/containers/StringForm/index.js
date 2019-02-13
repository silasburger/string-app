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
import { makeStringValueSelector } from 'containers/StringForm/selectors';
import { changeString, createPost } from 'containers/StringForm/actions';
import reducer from 'containers/StringForm/reducer';
import saga from 'containers/StringForm/saga';
import messages from 'containers/StringForm/messages';

/* eslint-disable react/prefer-stateless-function */
export class StringForm extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="stringInput">String: </label>
          <input
            type="text"
            value={this.props.stringValue}
            id="stringInput"
            name="stringInput"
            onChange={this.props.changeString}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

StringForm.propTypes = {
  changeString: PropTypes.func,
  onSubmit: PropTypes.func,
  stringInputValue: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  stringInputValue: makeStringValueSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeString: evt => dispatch(changeString(evt.target.value)),
    onSubmit: evt => {
      evt.preventDefault();
      dispatch(createPost());
    },
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
