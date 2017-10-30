import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import _ from 'lodash'

class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  calcSubTotal() {
    return _.sumBy(this.props.cart, (c) => { return c.quantity * c.price })
  }

  handleDropFromCart(product) {
    this.props.dropFromCart(product)
  }

  renderCartItems() {
    var cartItems = this.props.cart.map((product) => {
      return (
        <div key={product.id} className="dropdown-product-item">
          <span className="dropdown-product-remove" onClick={this.handleDropFromCart.bind(this, product)}>
            <i className="icon-cross"></i>
          </span>
          <Link className="dropdown-product-thumb" to=""><img src={product.photo.thumb} alt={product.name} /></Link>
          <div className="dropdown-product-info">
            <Link className="dropdown-product-title" to="">{product.name}</Link>
            <span className="dropdown-product-details">{product.quantity} x ${product.price}</span>
          </div>
        </div>
      )
    })

    return (
      <div>
        {cartItems}
        <div className="toolbar-dropdown-group">
          <div className="column">
            <Link className="btn btn-sm btn-block btn-secondary" to="/cart">View Cart</Link>
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
        <span className="count">{this.props.cart.length}</span>
        <span className="subtotal">${this.calcSubTotal()}</span>
        <div className="toolbar-dropdown">
          {this.props.cart.length <= 0 ? <div>Card is empty!</div> : this.renderCartItems()}
        </div>
      </div>
    )
  }
}

Widget.propTypes = {
  cart: PropTypes.array
}

export default Widget
