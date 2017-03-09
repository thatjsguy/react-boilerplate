import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Demo from '../presentation/Demo'

function mapStateToProps(state, ownProps) {
  return {
    ...state
  }
}

function mergeProps(stateProps, { dispatch }, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
  };
}

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Demo);
