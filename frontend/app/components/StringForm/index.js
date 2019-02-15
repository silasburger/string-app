/**
 *
 * StringForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Form from './Form';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class StringForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Input
          value={this.props.stringInputValue}
          id="stringInput"
          name="stringInput"
          onChange={this.props.changeString}
          placeholder="Enter a string and Go!"
        />
        <Button type="submit">Go!</Button>
      </Form>
    );
  }
}

StringForm.propTypes = {
  changeString: PropTypes.func,
  onSubmit: PropTypes.func,
  stringInputValue: PropTypes.string,
};

export default StringForm;
