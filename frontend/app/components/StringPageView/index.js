/**
 *
 * StringPageView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PostList from 'components/PostList';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
/* eslint-disable react/prefer-stateless-function */
class StringPageView extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>String Page</title>
          <meta name="String Page" content="This page shows all the strings!" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

StringPageView.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default StringPageView;
