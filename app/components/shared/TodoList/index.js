import React, { Component, PropTypes } from 'react';
import styles from './todoList.sass';

import Todo from '../Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      complete: PropTypes.bool
    }))
  }

  render() {
    const { todos } = this.props;
    const todoList = todos.map(todo => {
      return (
        <li key={ todo.id }>
          <Todo {...todo} />
        </li>
      )
    })
    todoList.sort((a, b) => {
      return a.complete != b.complete;
    })
    return (
      <ul className={ styles.todoList }>
        { todoList }
      </ul>
    )
  }
}
