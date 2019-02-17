/**
 *
 * StringFormContainer
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
import { makeStringValueSelector } from 'containers/StringFormContainer/selectors';
import { makeSelectLocation } from 'containers/App/selectors';
import { changeString } from 'containers/StringFormContainer/actions';
import { createPost } from 'containers/App/actions';
import reducer from 'containers/StringFormContainer/reducer';
import saga from 'containers/StringFormContainer/saga';
import messages from 'containers/StringFormContainer/messages';
import StringForm from 'components/StringForm';

/* eslint-disable react/prefer-stateless-function */
export class StringFormContainer extends React.Component {
  render() {
    return (
      <StringForm
        locationPathname={this.props.location.pathname}
        changeString={this.props.changeString}
        onSubmit={this.props.onSubmit}
        stringInputValue={this.props.stringInputValue}
      />
    );
  }
}

StringFormContainer.propTypes = {
  changeString: PropTypes.func,
  onSubmit: PropTypes.func,
  stringInputValue: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  stringInputValue: makeStringValueSelector,
  location: makeSelectLocation,
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
