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
import { Helmet } from 'react-helmet';
import {
  makeSelectPosts,
  makeSelectError,
  makeSelectLoading,
} from 'containers/App/selectors';
import { fetchPosts } from 'containers/App/actions';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class StringPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('stringPage render', this.props.posts);
    const posts =
      this.props.posts !== false
        ? this.props.posts.map(post => <div key={post.id}>{post.string}</div>)
        : null;

    const content = this.props.loading ? (
      'Page Loading ...'
    ) : (
      <div>
        <FormattedMessage {...messages.header} />
        {posts}
      </div>
    );

    return (
      <div>
        <Helmet>
          <title>DMI Tech Screen</title>
          <meta
            name="Form Page"
            content="This page shows a form that can render a string!"
          />
        </Helmet>

        {content}
      </div>
    );
  }
}

StringPage.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchPosts: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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

const withSaga = injectSaga({ key: 'stringPage', saga });

export default compose(
  withSaga,
  withConnect,
)(StringPage);
