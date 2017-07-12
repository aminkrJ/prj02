import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, removeFromCart, dropFromCart } from '../actions/cartActions';

class Cart extends Component {
  addToCart(product) {
    this.props.addToCart(product)
  }

  removeFromCart(product) {
    this.props.removeFromCart(product)
  }

  dropFromCart(product) {
   this.props.dropFromCart(product)
  }

  render() {
    var cartItems = this.props.cart.map(product => {
      return (
        <div key={product.id}>
          <b>{product.name}</b>
          <span className="fa fa-minus-square-o" onClick={this.removeFromCart.bind(this, product)}></span>
          <span>{product.quantity}</span>
          <span className="fa fa-plus-square-o" onClick={this.addToCart.bind(this, product)}></span>
          <a className="btn btn-danger" onClick={this.dropFromCart.bind(this, product)}>Delete item</a>
        </div>
      )
    })
    return (
      <div className="cart">
        {cartItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart,
  removeFromCart,
  dropFromCart
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
