import React, { Component, PropTypes } from 'react';
import styles from './inputform.sass'

export default class InputForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    fields: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    fields: {}
  }

  componentWillMount() {
    const fields = {};
    const fieldProps = this.props.fields;
    for(let f in fieldProps) {
      const field = fieldProps[f];
      fields[field.name] = field.defaultValue || '';
    }
    this.setState({ fields });
  }

  onFieldChanged = (e) => {
    let updatedFields = this.state.fields;
    updatedFields[e.target.name] = e.target.value;
    this.setState({fields: updatedFields});
  }

  onSubmitForm = (e) => {
    this.props.onSubmit(this.state);
    e.preventDefault();
  }

  render() {
    const { fields, submitLabel } = this.props;
    const formFields = fields.map(field => {
      switch(field.type) {
        case 'text':
        case 'email':
          return (
            <input
              value={ this.state.fields[field.name] }
              key={ field.name }
              type={ field.type }
              name={ field.name }
              placeholder={ field.label }
              onChange={ this.onFieldChanged }/>
          )
        break;
        case 'radio':
          const radios = field.options.map(option => {
            return (
              <fieldset key={`radioOption_${option.label}`} className='radioOption'>
                <input
                  value={ option.value }
                  key={ `radio_${field.name}_${field.value}` }
                  type={ field.type }
                  name={ field.name }
                  onChange={ this.onFieldChanged }/>
                <label>{option.label}</label>
              </fieldset>
            )
          });
          return (
            <div key='radioGroup'>
              <span className={ styles.radioLabel }>{ field.label }</span>
              { radios }
            </div>
          )
        break;
        case 'textarea':
          return (
            <textarea
              value={ this.state.fields[field.name] }
              key={field.name}
              name={ field.name }
              onChange={ this.onFieldChanged }>
            </textarea>
          )
        break;
      }
    });

    return (
      <form className={ styles.inputForm } onSubmit={ this.onSubmitForm }>
        { formFields }
        <input type='submit' value={ submitLabel } />
      </form>
    )
  }
}
