/**
 *
 * FormPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StringForm from '../../containers/StringForm/Loadable';

/* eslint-disable react/prefer-stateless-function */
class FormPage extends React.Component {
  render() {
    return (
      // use helmet on this page, probably
      <div>
        <FormattedMessage {...messages.header} />
        <StringForm />
      </div>
    );
  }
}

FormPage.propTypes = {};

export default FormPage;
