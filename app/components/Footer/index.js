import React, { Component, PropTypes } from 'react';
import styles from './footer.sass'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>React Boilerplate by @thatjsguy</p>
      </footer>
    )
  }
}
