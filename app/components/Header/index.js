import React, { Component, PropTypes } from 'react';
import styles from './header.sass'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Header Area</h1>
      </header>
    )
  }
}
