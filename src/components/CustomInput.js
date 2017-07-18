import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import classNames from 'classnames';
import validate from 'validate.js';

import './CustomInput.css';

class CustomInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
      isValid: true
    }
  }

  handleChange(e){
    this.setState({ value: e.target.value })
  }

  handleBlur(e){
    this.setState({ isValid: validate.single(this.state.value, Object.assign({presence: this.props.required}, this.props.constraints)) === undefined })
  }

  render() {
    return (
      <div className={classNames('custom-input', 'form-group', { required: this.props.required, error: !this.state.isValid })}>
        <label for={ this.props.name }>{ this.props.label }</label>
        { this.props.mask ?
        <MaskedInput { ...this.props } className='form-control' value={ this.state.value } onBlur={ this.handleBlur.bind(this) } onChange={ this.handleChange.bind(this) } /> :
        <input value={ this.state.value } { ...this.props } className='form-control' onBlur={ this.handleBlur.bind(this) } onChange={ this.handleChange.bind(this) } />
        }
      </div>
    )
  }
}

export default CustomInput
