import React, { Component, PropTypes } from 'react';

//shared components
import Header from './shared/Header'
import Footer from './shared/Footer'
import Nav from './shared/Nav'

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header/>
        <Nav/>
        { children }
        <Footer/>
      </div>
    )
  }
}
