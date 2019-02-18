/**
 *
 * StringFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeStringValueSelector } from 'containers/StringFormContainer/selectors';
import { makeSelectLocation, makeSelectError } from 'containers/App/selectors';
import { changeString } from 'containers/StringFormContainer/actions';
import { createPost } from 'containers/App/actions';
import reducer from 'containers/StringFormContainer/reducer';
import saga from 'containers/StringFormContainer/saga';
import ErrorAlert from 'components/ErrorAlert';
import StringForm from 'components/StringForm';

/**
 * This container renders a controlled string input.
 * Errors are rendered here as well.
 * Disconnect the backend and give it a try!
 */

/* eslint-disable react/prefer-stateless-function */
export class StringFormContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.error !== false && this.props.location.pathname === '/' ? (
          <ErrorAlert error={this.props.error} />
        ) : null}
        <StringForm
          locationPathname={this.props.location.pathname}
          changeString={this.props.changeString}
          onSubmit={this.props.onSubmit}
          stringInputValue={this.props.stringInputValue}
        />
      </>
    );
  }
}

StringFormContainer.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  changeString: PropTypes.func,
  onSubmit: PropTypes.func,
  stringInputValue: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  stringInputValue: makeStringValueSelector,
  location: makeSelectLocation,
  error: makeSelectError,
});

function mapDispatchToProps(dispatch) {
  return {
    changeString: evt => dispatch(changeString(evt.target.value)),
    onSubmit: evt => {
      evt.preventDefault();
      if (evt.target[0].value !== '') {
        dispatch(createPost());
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'formData', reducer });
const withSaga = injectSaga({ key: 'stringFormContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StringFormContainer);
