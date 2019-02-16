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
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { fetchPosts } from 'containers/App/actions';
import StringPageView from 'components/StringPageView';
import { changeDateTimeFilter } from './actions';
import saga from './saga';
import { makeDateTimeFilteredPostsSelector } from './selectors';
import reducer from './reducer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class StringPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    // const content = this.props.loading ? (
    //   'Page Loading ...'
    // ) : (
    //   <div>
    //     <FormattedMessage {...messages.header} />
    //     {posts}
    //   </div>
    // );

    console.log('posts', this.props.posts);

    return (
      <div id="string-page">
        <StringPageView
          changeDateTimeFilter={this.props.changeDateTimeFilter}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

StringPage.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchPosts: PropTypes.func,
  changeDateTimeFilter: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  posts: makeDateTimeFilteredPostsSelector,
  loading: makeSelectLoading,
  error: makeSelectError,
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    changeDateTimeFilter: evt => {
      dispatch(changeDateTimeFilter(evt.target.value));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postFilters', reducer });
const withSaga = injectSaga({ key: 'stringPage', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(StringPage);
