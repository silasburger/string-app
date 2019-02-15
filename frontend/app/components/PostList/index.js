/**
 *
 * PostList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import PostListItem from 'components/PostListItem';
import messages from './messages';
import ListWrapper from './ListWrapper';

/* eslint-disable react/prefer-stateless-function */
class PostList extends React.Component {
  render() {
    const stringItems =
      this.props.posts !== false
        ? this.props.posts.map(post => (
            <PostListItem
              key={post.id}
              postString={post.string}
              postTime={post.created_at}
            />
          ))
        : null;

    return (
      <ListWrapper>
        {/* <FormattedMessage {...messages.header} /> */}
        {stringItems}
      </ListWrapper>
    );
  }
}

PostList.propTypes = {
  timeStampFilter: PropTypes.object,
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default PostList;
