import React, { Component, PropTypes } from 'react';

//shared components
import Header from './shared/Header'
import Footer from './shared/Footer'

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header/>
        { children }
        <Footer/>
      </div>
    )
  }
}
