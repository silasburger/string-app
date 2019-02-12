/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import StringPage from 'containers/StringPage/Loadable';
import FormPage from 'components/FormPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from '../../components/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet>
        <title>DMI Tech Screen</title>
        <meta name="DMI Tech Screen" content="An initial tech screen" />
        <noscript>Javascrirpt must be enabled for this site to work</noscript>
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route exact path="/strings" component={StringPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
