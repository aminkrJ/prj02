import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Stripe from '../components/Stripe';

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
