import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmpty: this.props.cart ? true : false
    }
  }

  renderCartItems() {
    var cartItems = this.props.cart.map((cartItem) => {
      return (
        <div key={cartItem.id} className="dropdown-product-item">
          <span className="dropdown-product-remove">
            <i className="icon-cross"></i>
          </span>
          <Link className="dropdown-product-thumb" to=""><img src={cartItem.photo.thumb} alt={cartItem.name} /></Link>
          <div className="dropdown-product-info">
            <Link className="dropdown-product-title" to="">{cartItem.name}</Link>
            <span className="dropdown-product-details">{cartItem.quantity} x ${cartItem.price}</span>
          </div>
        </div>
      )
    })

    return (
      <div>
        {cartItems}
        <div className="toolbar-dropdown-group">
          <div className="column">
            <Link className="btn btn-sm btn-block btn-secondary" to="">View Cart</Link>
          </div>
          <div className="column">
            <Link className="btn btn-sm btn-block btn-success" to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    )
  }

  render() {
     return (
      <div className="cart">
        <Link to="/checkout"></Link>
        <i className="icon-bag"></i>
        <span className="count">3</span>
        <span className="subtotal">$289.68</span>
        <div className="toolbar-dropdown">
          {this.state.isEmpty ? <div>Card is empty!</div> : this.renderCartItems}
        </div>
      </div>
    )
  }
}

Widget.propTypes = {
  cart: PropTypes.array
}

export default Widget
