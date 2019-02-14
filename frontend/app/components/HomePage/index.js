/**
 *
 * FormPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import StringForm from 'containers/StringForm/Loadable';
import { Helmet } from 'react-helmet';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Strings R Us</title>
          <meta
            name="Strings R Us Homepage"
            content="This page shows a form that can render a string!"
          />
          <noscript>Javascrirpt must be enabled for this site to work</noscript>
        </Helmet>
        <FormattedMessage {...messages.header} />
        <StringForm />
      </div>
    );
  }
}

export default HomePage;
