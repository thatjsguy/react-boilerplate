import React, { Component, PropTypes } from 'react';
import styles from './body.sass'

export default class Body extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className={styles.body}>
        { children }
      </section>
    )
  }
}
