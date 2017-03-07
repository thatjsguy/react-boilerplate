import React, { Component, PropTypes } from 'react';
import styles from './header.sass'

// import GoRocket from 'react-icons/go/rocket'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>React Boilerplate</h1>
      </header>
    )
  }
}
