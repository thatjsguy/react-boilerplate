import React, { Component, PropTypes } from 'react';

import { fetchAllTodos } from '../../actions/todos';

import Tabs from '../../components/shared/Tabs';
import TodoList from '../../components/shared/TodoList';

import styles from './demo.sass'

export default class Demo extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }
  componentWillMount() {
    const { store } = this.context;
    store.dispatch(fetchAllTodos())
  }
  showAllTodos = () => {

  }
  showCompletedTodos = () => {

  }
  showIncompleteTodos = () => {

  }
  renderTabs() {
    return [
      {
        text: 'All',
        onClick: this.showAllTodos
      },
      {
        text: 'Completed',
        onClick: this.showCompletedTodos
      },
      {
        text: 'Incomplete',
        onClick: this.showIncompleteTodos
      }
    ]
  }
  render() {
    const { todos } = this.props.default;
    return (
      <div>
        <h2>Todo List</h2>
        <div className={ styles.demo }>
          <Tabs tabs={ this.renderTabs() } />
          <div className={ styles.todoList }>
            <TodoList todos={ todos.list } />
          </div>
        </div>
      </div>
    )
  }
}
