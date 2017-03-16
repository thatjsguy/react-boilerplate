import React, { Component, PropTypes } from 'react';

import { fetchAllTodos, markTodo, showCompleted, showIncomplete, showAll } from '../../actions/todos';

import Tabs from '../../components/shared/Tabs';
import TodoList from '../../components/shared/TodoList';

import styles from './demo.sass'

export default class Demo extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }
  componentWillMount() {
    this.context.store.dispatch(fetchAllTodos())
  }
  showAllTodos = () => {
    this.context.store.dispatch(showAll())
  }
  showCompletedTodos = () => {
    this.context.store.dispatch(showCompleted())
  }
  showIncompleteTodos = () => {
    this.context.store.dispatch(showIncomplete())
  }
  handleTodoChanged = (id, complete) => {
    this.context.store.dispatch(markTodo(id, complete));
  }
  renderTabs() {
    const { filterBy } = this.props.default.todos;
    return [
      {
        text: 'All',
        onClick: this.showAllTodos,
        active: filterBy === ''
      },
      {
        text: 'Completed',
        onClick: this.showCompletedTodos,
        active: filterBy === 'COMPLETE'
      },
      {
        text: 'Incomplete',
        onClick: this.showIncompleteTodos,
        active: filterBy === 'INCOMPLETE'
      }
    ]
  }
  renderTodoList() {
    const { list, filterBy, filteredList } = this.props.default.todos;
    return filterBy != '' ? filteredList : list;
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <div className={ styles.demo }>
          <Tabs tabs={ this.renderTabs() } />
          <div className={ styles.todoList }>
            <TodoList todos={ this.renderTodoList() } onChange={ this.handleTodoChanged }/>
          </div>
        </div>
      </div>
    )
  }
}
