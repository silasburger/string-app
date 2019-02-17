/**
 *
 * ErrorAlert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Alert = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  color: blue;
  text-align: center;
`;

function ErrorAlert(props) {
  return (
    <Alert>
      <h2>{props.error.message}</h2>
    </Alert>
  );
}

ErrorAlert.propTypes = {
  error: PropTypes.object,
};

export default ErrorAlert;
