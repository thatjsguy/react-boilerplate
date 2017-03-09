import React, { Component, PropTypes } from 'react';
import styles from './todo.sass';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    complete: PropTypes.bool
  }

  componentWillMount() {
    const { complete } = this.props;
    this.setState({ complete });
  }

  state = {
    complete: false
  }

  render() {
    const { id, title, description, complete } = this.props;
    return (
      <div className={ styles.todo }>
      <header>
        <input type='checkbox' checked={ this.state.complete } />
        <h3>{ title }</h3>
      </header>
        <div className={ styles.description }>{ description }</div>
      </div>
    )
  }
}
