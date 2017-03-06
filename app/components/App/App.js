import React, { Component, PropTypes } from 'react';

import styles from './app.sass'

//shared components
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'
import Body from '../Body'

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={ styles.app }>
        <Header/>
        <Nav/>
        <Body>
          { children }
        </Body>
        <Footer/>
      </div>
    )
  }
}
