import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Demo from '../presentation/Demo'

function filterTodos(todos, filter = '') {
  return todos.filter(todo => {
    if (filter != '') {
      return (filter === 'COMPLETE') ? todo.complete : !todo.complete;
    } else {
      return todos;
    }
  })
}

function mapStateToProps(state) {
  const { list, filterBy } = state.default.todos;
  state.default.todos.filteredList = filterTodos(list, filterBy);
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
