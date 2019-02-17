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
import RadioInput from './RadioInput';

/* eslint-disable react/prefer-stateless-function */
class TimeFilterForm extends React.Component {
  render() {
    return (
      <Form>
        <Fieldset id="timeFilter">
          <FormGroup selected={this.props.filter === 'ALL_POSTS'}>
            <RadioInput
              onChange={this.props.changeDateTimeFilter}
              checked={this.props.filter === 'ALL_POSTS'}
              id="ALL_POSTS"
              type="radio"
              value="ALL_POSTS"
              name="timeFilter"
            />
            <Label htmlFor="ALL_POSTS">All Posts</Label>
          </FormGroup>

          <FormGroup selected={this.props.filter === 'LAST_FIVE_MINUTES'}>
            <RadioInput
              onChange={this.props.changeDateTimeFilter}
              checked={this.props.filter === 'LAST_FIVE_MINUTES'}
              id="LAST_FIVE_MINUTES"
              type="radio"
              value="LAST_FIVE_MINUTES"
              name="timeFilter"
            />
            <Label htmlFor="LAST_FIVE_MINUTES">Last 5 Minutes</Label>
          </FormGroup>

          <FormGroup selected={this.props.filter === 'LAST_TWO_WEEKS'}>
            <RadioInput
              onChange={this.props.changeDateTimeFilter}
              checked={this.props.filter === 'LAST_TWO_WEEKS'}
              id="LAST_TWO_WEEKS"
              type="radio"
              value="LAST_TWO_WEEKS"
              name="timeFilter"
            />
            <Label htmlFor="LAST_TWO_WEEKS">Last 2 Weeks</Label>
          </FormGroup>
          <FormGroup selected={this.props.filter === 'ONE_YEAR_OR_EARLIER'}>
            <RadioInput
              onChange={this.props.changeDateTimeFilter}
              checked={this.props.filter === 'ONE_YEAR_OR_EARLIER'}
              id="ONE_YEAR_OR_EARLIER"
              type="radio"
              value="ONE_YEAR_OR_EARLIER"
              name="timeFilter"
            />
            <Label htmlFor="ONE_YEAR_OR_EARLIER">1 Year or Earlier</Label>
          </FormGroup>
          <FormGroup selected={this.props.filter === 'FIVE_YEARS_OR_EARLIER'}>
            <RadioInput
              onChange={this.props.changeDateTimeFilter}
              checked={this.props.filter === 'FIVE_YEARS_OR_EARLIER'}
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
  filter: PropTypes.string,
};

export default TimeFilterForm;
