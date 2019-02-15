/**
 *
 * PostListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.div`
  line-height: 75px;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  border-top: solid 2px grey;

  &.time-stamp {
    color: #ddd;
    font-size: 10px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class PostListItem extends React.Component {
  render() {
    return (
      <ListItem>
        {this.props.postString}
        <i className="time-stamp">{this.props.postTime}</i>
      </ListItem>
    );
  }
}

PostListItem.propTypes = {
  postString: PropTypes.string,
  postTime: PropTypes.string,
};

export default PostListItem;
