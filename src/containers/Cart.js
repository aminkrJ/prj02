import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, removeFromCart, dropFromCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productsActions';

import PageTitle from '../components/PageTitle'

import _ from 'lodash'

class Cart extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  calcSubTotal() {
    return _.sumBy(this.props.cart, (c) => { return c.quantity * c.price })
  }

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
        <tr key={product.id}>
          <td>
            <div className="product-item"><a className="product-thumb" href="shop-single.html"><img src={product.photo.thumb} alt={product.name}/></a>
              <div className="product-info">
                <h4 className="product-title"><a href="shop-single.html">{product.name}</a></h4>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="count-input">
              <select className="form-control" onSelect={this.removeFromCart.bind(this, product)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </td>
          <td className="text-center text-lg text-medium">${product.quantity * product.price}</td>
          <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item" onClick={this.dropFromCart.bind(this, product)}><i className="icon-cross"></i></a></td>
        </tr>
      )
    })
    return (
      <div>
        <PageTitle title="Cart" location={ {title: "Cart", path:"#"} } />
        <div className="container padding-bottom-3x mb-1 cart">
          <div className="table-responsive shopping-cart">
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th className="text-center">Serving</th>
                  <th className="text-center">Subtotal</th>
                  <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                </tr>
              </thead>
              <tbody>
                {cartItems}
              </tbody>
            </table>
          </div>
          <div className="shopping-cart-footer">
            <div className="column">
            </div>
            <div className="column text-lg">Subtotal: <span className="text-medium">${this.calcSubTotal()}</span></div>
          </div>
          <div className="shopping-cart-footer">
            <div className="column"><a className="btn btn-outline-secondary" href="#"><i className="icon-arrow-left"></i>&nbsp;Back to Shopping</a></div>
            <div className="column">
              <a className="btn btn-primary" href="#">Update Cart</a>
              <a className="btn btn-success" href="#">Checkout</a>
            </div>
          </div>
        </div>
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
  dropFromCart,
  fetchProducts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
