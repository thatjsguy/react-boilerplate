import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import styles from './nav.sass'

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    )
  }
}
