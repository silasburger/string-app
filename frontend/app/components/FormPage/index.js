/**
 *
 * FormPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StringForm from '../../containers/StringForm/Loadable';

/* eslint-disable react/prefer-stateless-function */
class FormPage extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <StringForm history={this.props.history} />
      </div>
    );
  }
}

export default FormPage;
