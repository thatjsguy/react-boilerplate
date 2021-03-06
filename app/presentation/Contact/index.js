import React, { Component, PropTypes } from 'react';

import InputForm from '../../components/shared/InputForm';

import styles from './contact.sass';

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
      <div>
        <h2>Contact Us</h2>
        <div className={ styles.contact }>
          <p>Meatloaf ball tip pork loin sausage drumstick. Prosciutto picanha swine pork chop, biltong tenderloin drumstick brisket spare ribs cupim leberkas. Pancetta fatback filet mignon, tri-tip rump porchetta alcatra prosciutto corned beef ham. Capicola brisket short loin porchetta tenderloin.</p>
          <div className={ styles.inputForm }>
            <InputForm
              fields={ fields }
              submitLabel='Contact Me'
              onSubmit={ this.onSubmit } />
          </div>
        </div>
      </div>
    )
  }
}
