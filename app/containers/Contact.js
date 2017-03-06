import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  render() {
    return (
      <form>
        <p>Contact me...</p>
        <textarea placeholder='Tell me what you think...'/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}
