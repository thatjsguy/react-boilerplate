import React, { Component, PropTypes } from 'react';

import InputForm from '../components/shared/InputForm';

export default class Home extends Component {
  onSubmit = (form) => {
    console.dir(form.fields);
  }
  getFields = () => {
    return [
      {
        type: 'text',
        name: 'firstName',
        label: 'your first name'
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'your last name'
      },
      {
        type: 'email',
        name: 'email',
        label: 'your email'
      },
      {
        type: 'radio',
        name: 'donate',
        defaultValue: 1,
        options: [{
          value: 1,
          label: 'yes'
        }, {
          value: 0,
          label: 'no'
        }],
        label: 'Donate $1M today?'
      },
      {
        type: 'textarea',
        name: 'feedback'
      }
    ]
  }
  render() {
    const fields = this.getFields();
    return (
      <InputForm fields={ fields } submitLabel='Contact Me' onSubmit={ this.onSubmit } />
    )
  }
}
