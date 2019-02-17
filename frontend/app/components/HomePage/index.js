/**
 *
 * FormPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import StringFormContainer from 'containers/StringFormContainer/Loadable';
import { Helmet } from 'react-helmet';
import messages from './messages';
import Headline from './Headline';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Helmet>
          <title>String Land</title>
          <meta
            name="String Land Homepage"
            content="This page shows a form that can render a string!"
          />
          <noscript>Javascrirpt must be enabled for this site to work</noscript>
        </Helmet>
        <Headline>
          <FormattedMessage {...messages.header} />
        </Headline>
        <StringFormContainer />
      </div>
    );
  }
}

export default HomePage;
