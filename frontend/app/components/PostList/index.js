/**
 *
 * PostList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import PostListItem from 'components/PostListItem';
import TimeFilterForm from 'components/TimeFilterForm';
import ListWrapper from './ListWrapper';

/* eslint-disable react/prefer-stateless-function */
class PostList extends React.Component {
  render() {
    let stringItems = null;
    if (this.props.posts !== false) {
      stringItems = this.props.posts.map(post => (
        <PostListItem
          key={post.id}
          postString={post.string}
          postTime={new Date(post.created_at)}
        />
      ));
    }

    if (this.props.loading === true) {
      return (
        <ListWrapper>
          <h1>Loading ...</h1>
        </ListWrapper>
      );
    }

    return (
      <ListWrapper posts={this.props.posts}>
        <TimeFilterForm
          changeDateTimeFilter={this.props.changeDateTimeFilter}
          filter={this.props.filter}
        />
        <div>{stringItems}</div>
      </ListWrapper>
    );
  }
}

PostList.propTypes = {
  changeDateTimeFilter: PropTypes.func,
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  filter: PropTypes.string,
  loading: PropTypes.bool,
};

export default PostList;
