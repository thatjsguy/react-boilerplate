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
    })),
    onChange: PropTypes.func
  }

  render() {
    const { todos, onChange } = this.props;
    todos.sort((a, b) => a.id - b.id);
    const todoList = todos.map(todo => {
      return (
        <li key={ todo.id }>
          <Todo {...todo} onChange={ onChange } />
        </li>
      )
    });
    return (
      <ul className={ styles.todoList }>
        { todoList }
      </ul>
    )
  }
}
