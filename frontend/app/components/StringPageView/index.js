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
// import TimeFilterForm from 'components/TimeFilterForm';

const View = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
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
        <StringFormContainer />
        {/* <TimeFilterForm
          changeDateTimeFilter={this.props.changeDateTimeFilter}
        /> */}
        <PostList
          changeDateTimeFilter={this.props.changeDateTimeFilter}
          posts={this.props.posts}
        />
      </View>
    );
  }
}

StringPageView.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  changeDateTimeFilter: PropTypes.func,
};

export default StringPageView;
