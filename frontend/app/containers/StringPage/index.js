/**
 *
 * StringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Helmet } from 'react-helmet';
import {
  makePostsSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from './selectors';
import { fetchPosts } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class StringPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => (
      <div key={post.id}>{post.string}</div>
    ));
    
    const content = this.props.loading ? "Page Loading ..." : <div>
    <FormattedMessage {...messages.header} />
    {posts}
  </div>;

    return (
      <Helmet>
          <title>DMI Tech Screen</title>
          <meta
            name="Form Page"
            content="This page shows a form that can render a string!"
          />

        {content}
    );
}

StringPage.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]), //TBD: maybe use one of and not use fromJS in reducer
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchPosts: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  posts: makePostsSelector(),
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stringPage', reducer });
const withSaga = injectSaga({ key: 'stringPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StringPage);
