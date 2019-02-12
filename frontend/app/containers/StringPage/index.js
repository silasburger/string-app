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
import Immutable from 'immutable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makePostsSelector } from './selectors';
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
    console.log(this.props.posts);
    const posts = this.props.posts
      .toJS()
      .map(post => <div key={post.id}>{post.string}</div>);
    console.log('posts', posts);
    return (
      <div>
        {posts.length ? posts : null}

        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

StringPage.propTypes = {
  posts: PropTypes.instanceOf(Immutable.List), //TBD: maybe use one of and not use fromJS in reducer
  fetchPosts: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  posts: makePostsSelector(),
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
