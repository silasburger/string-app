/**
 *
 * TimeFilterForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Fieldset from './Fieldset';
import FormGroup from './FormGroup';
import Label from './Label';

/* eslint-disable react/prefer-stateless-function */
class TimeFilterForm extends React.Component {
  render() {
    return (
      <Form>
        <Fieldset id="timeFilter" onChange={this.props.changeDateTimeFilter}>
          <FormGroup>
            <input
              defaultChecked
              id="All_POSTS"
              type="radio"
              value="All_POSTS"
              name="timeFilter"
            />
            <Label htmlFor="All_POSTS">All Posts</Label>
          </FormGroup>

          <FormGroup>
            <input
              id="LAST_FIVE_MINUTES"
              type="radio"
              value="LAST_FIVE_MINUTES"
              name="timeFilter"
            />
            <Label htmlFor="LAST_FIVE_MINUTES">Last 5 Minutes</Label>
          </FormGroup>

          <FormGroup>
            <input
              id="LAST_TWO_WEEKS"
              type="radio"
              value="LAST_TWO_WEEKS"
              name="timeFilter"
            />
            <Label htmlFor="LAST_TWO_WEEKS">Last 2 Weeks</Label>
          </FormGroup>
          <FormGroup>
            <input
              id="ONE_YEAR_OR_EARLIER"
              type="radio"
              value="ONE_YEAR_OR_EARLIER"
              name="timeFilter"
            />
            <Label htmlFor="ONE_YEAR_OR_EARLIER">1 Year or Earlier</Label>
          </FormGroup>

          <FormGroup>
            <input
              id="FIVE_YEARS_OR_EARLIER"
              type="radio"
              value="FIVE_YEARS_OR_EARLIER"
              name="timeFilter"
            />
            <Label htmlFor="FIVE_YEARS_OR_EARLIER">5 Years or Earlier</Label>
          </FormGroup>
        </Fieldset>
      </Form>
    );
  }
}

TimeFilterForm.propTypes = {
  changeDateTimeFilter: PropTypes.func,
};

export default TimeFilterForm;
