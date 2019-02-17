/**
 *
 * StringForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import LargeInput from './LargeInput';
import SmallInput from './SmallInput';
import LargeButton from './LargeButton';
import SmallButton from './SmallButton';
import Form from './Form';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class StringForm extends React.Component {
  render() {
    if (this.props.locationPathname === '/strings') {
      return (
        <Form onSubmit={this.props.onSubmit}>
          <SmallInput
            value={this.props.stringInputValue}
            id="stringInput"
            name="stringInput"
            onChange={this.props.changeString}
            placeholder="Enter a string and Go!"
          />
          <SmallButton type="submit">Go!</SmallButton>
        </Form>
      );
    }
    return (
      <Form onSubmit={this.props.onSubmit}>
        <LargeInput
          value={this.props.stringInputValue}
          id="stringInput"
          name="stringInput"
          onChange={this.props.changeString}
          placeholder="Enter a string and Go!"
        />
        <LargeButton type="submit">Go!</LargeButton>
      </Form>
    );
  }
}

StringForm.propTypes = {
  changeString: PropTypes.func,
  onSubmit: PropTypes.func,
  stringInputValue: PropTypes.string,
  locationPathname: PropTypes.string,
};

export default StringForm;
