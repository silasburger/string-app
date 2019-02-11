/**
 *
 * StringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

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
    fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    const posts = [...this.props.posts];
    console.log('posts', posts);
    return (
      <div>
        <Helmet>
          <title>StringPage</title>
          <meta name="description" content="Description of StringPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

StringPage.propTypes = {
  posts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  posts: makePostsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts),
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
