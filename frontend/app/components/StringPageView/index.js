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
import StringFormContainer from 'containers/StringFormContainer/Loadable';
import ErrorAlert from 'components/ErrorAlert';

const View = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
class StringPageView extends React.Component {
  render() {
    return (
      <View>
        <Helmet>
          <title>String Page</title>
          <meta name="String Page" content="This page shows all the strings!" />
        </Helmet>
        {this.props.error !== false ? (
          <ErrorAlert error={this.props.error} />
        ) : null}
        <StringFormContainer />
        <PostList
          loading={this.props.loading}
          changeDateTimeFilter={this.props.changeDateTimeFilter}
          posts={this.props.posts}
          filter={this.props.filter}
        />
      </View>
    );
  }
}

StringPageView.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  changeDateTimeFilter: PropTypes.func,
  loading: PropTypes.bool,
  filter: PropTypes.string,
};

export default StringPageView;
