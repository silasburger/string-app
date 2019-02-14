/**
 *
 * NavBar
 *
 */

import React from 'react';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        {/* <FormattedMessage {...messages.header} /> */}
        <HeaderLink to="/" exact>Home</HeaderLink>
        <HeaderLink to="/strings">Strings</HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
