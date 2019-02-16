/**
 *
 * TimeFilterForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class TimeFilterForm extends React.Component {
  render() {
    return (
      <form>
        <FormattedMessage {...messages.header} />
        <fieldset id="timeFilter" onChange={this.props.changeDateTimeFilter}>
          <label htmlFor="All_POSTS">All Posts</label>
          <input
            defaultChecked
            id="All_POSTS"
            type="radio"
            value="All_POSTS"
            name="timeFilter"
          />

          <label htmlFor="LAST_FIVE_MINUTES">Last 5 Minutes</label>
          <input
            id="LAST_FIVE_MINUTES"
            type="radio"
            value="LAST_FIVE_MINUTES"
            name="timeFilter"
          />

          <label htmlFor="LAST_TWO_WEEKS">Last 2 Weeks</label>
          <input
            id="LAST_TWO_WEEKS"
            type="radio"
            value="LAST_TWO_WEEKS"
            name="timeFilter"
          />

          <label htmlFor="ONE_YEAR_OR_EARLIER">1 Year or Earlier</label>
          <input
            id="ONE_YEAR_OR_EARLIER"
            type="radio"
            value="ONE_YEAR_OR_EARLIER"
            name="timeFilter"
          />

          <label htmlFor="FIVE_YEARS_OR_EARLIER">5 Years or Earlier</label>
          <input
            id="FIVE_YEARS_OR_EARLIER"
            type="radio"
            value="FIVE_YEARS_OR_EARLIER"
            name="timeFilter"
          />
        </fieldset>
      </form>
    );
  }
}

TimeFilterForm.propTypes = {};

export default TimeFilterForm;
