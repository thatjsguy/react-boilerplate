import React, { Component, PropTypes } from 'react';

import styles from './app.sass'

//shared components
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Nav from '../shared/Nav'
import Body from '../shared/Body'

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
