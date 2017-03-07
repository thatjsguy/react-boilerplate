import React, { Component, PropTypes } from 'react';
import styles from './inputform.sass'

import { uniqKey } from '../../../utils/keys'

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
      fields[field.name] = null;
    }
    this.setState({ fields });
  }
  // https://github.com/facebook/react/issues/7778
  // https://github.com/facebook/react/issues/6190
  onFieldChanged = (e) => {
    let updatedFields = this.state.fields;
    updatedFields[e.target.name] = e.target.value;
    this.setState({fields: updatedFields});
  }
  render() {
    const { onSubmit, fields } = this.props;
    const formFields = fields.map(field => {
      switch(field.type) {
        case 'text':
          return (
            <input
              value={ this.state[field.name] }
              key={ uniqKey(field.name) }
              type={ field.type }
              name={ field.name }
              placeholder={ field.label }
              onChange={ this.onFieldChanged }/>
          )
        break;
        case 'radio':
          const radios = field.options.map(option => {
            return (
              <fieldset className='radioOption'>
                <input
                  value={ this.state[field.name] }
                  key={ uniqKey(field.name) }
                  type={ field.type }
                  name={ field.name }
                  value={ option.value }
                  onChange={ this.onFieldChanged }/>
                <label>{option.label}</label>
              </fieldset>
            )
          });
          return (
            <div>
              <span className={ styles.radioLabel }>{ field.label }</span>
              { radios }
            </div>
          )
        break;
        case 'textarea':
          return (
            <textarea
              value={ this.state[field.name] }
              key={ uniqKey(field.name) }
              name={ field.name }
              placeholder={ field.label }
              onChange={ this.onFieldChanged }>
            </textarea>
          )
        break;
      }
    });

    return (
      <form className={ styles.inputForm }>
        { formFields }
      </form>
    )
  }
}
