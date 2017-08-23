import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Stripe from '../components/Stripe';
import CustomInput from '../components/CustomInput';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled: false
    }
  }

  handleSubmit(event) {
    var self = this
    event.preventDefault()

    this.setState({
      submitDisabled: false
    })

    this.refs['stripe'].generateToken()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <CustomInput type='text' label='Credit card' mask="1111 1111 1111 1111" name='creditcard' value='4111 1111 1111 1111' />
        <CustomInput type='email' label='Email' placeholder='foo@bar.com' name='email' required />
        <Stripe ref="stripe" />
        <button className='btn btn-primary' disabled={this.state.submitDisabled}>Submit Order</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
