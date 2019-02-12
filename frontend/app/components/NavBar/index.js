/**
 *
 * NavBar
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  render() {
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/strings">Strings </NavLink>
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
