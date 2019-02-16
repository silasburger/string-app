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
import TimeFilterForm from 'components/TimeFilterForm';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const View = styled.div`
  display: flex;
  justify-content: center;
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
        <FormattedMessage {...messages.header} />
        <TimeFilterForm
          changeDateTimeFilter={this.props.changeDateTimeFilter}
        />
        <PostList posts={this.props.posts} />
        <StringFormContainer />
      </View>
    );
  }
}

StringPageView.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default StringPageView;
