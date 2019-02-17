/**
 *
 * StringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { fetchPosts } from 'containers/App/actions';
import StringPageView from 'components/StringPageView';
import { changeDateTimeFilter } from './actions';
import saga from './saga';
import {
  makeDateTimeFilteredPostsSelector,
  makeDateTimeFilterSelector,
} from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class StringPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div id="string-page">
        <StringPageView
          error={this.props.error}
          loading={this.props.loading}
          changeDateTimeFilter={this.props.changeDateTimeFilter}
          posts={this.props.posts}
          filter={this.props.filter}
        />
      </div>
    );
  }
}

StringPage.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
  fetchPosts: PropTypes.func,
  changeDateTimeFilter: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  posts: makeDateTimeFilteredPostsSelector,
  filter: makeDateTimeFilterSelector,
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
