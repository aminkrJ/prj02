import React, { Component } from 'react';

const stripe = window.Stripe("`${process.env.STRIPE_PUBLISHABLE_KEY}`")
const elements = stripe.elements()

class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='stripe'>
        <div id='card-element'></div>
        <div id='card-errors'></div>
      </div>
    )
  }
}

Stripe.propTypes = {
}

export default Stripe
