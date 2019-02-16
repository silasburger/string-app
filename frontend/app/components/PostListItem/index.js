/**
 *
 * PostListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.div`
  line-height: 38px;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  border-top: solid 2px #003366;
  position: relative;
  box-sizing: border-box;

  .time-stamp {
    color: #999;
    font-size: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 20px;
  }

  &:nth-child(1) {
    border: none;
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
