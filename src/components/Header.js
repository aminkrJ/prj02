import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import $ from 'jquery'

class Header extends Component {
  renderProductsMenu() {
    return(
      this.props.products.entities.map((product, index) => {
        return(
          <li key={index}>
            <Link to={ "/market/" + product.slug }>{product.name}</Link>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <header className="navbar navbar-sticky">
        <div className="site-branding">
          <div className="inner">
            <a className="offcanvas-toggle menu-toggle" href="#mobile-menu" onClick={this.props.onOffcanvasOpen.bind(this)} data-toggle="offcanvas"></a>
            <Link className="site-logo" to="/"><img src="img/logo/logo.png" alt="CocoCaca" /></Link>
          </div>
        </div>
        <nav className="site-menu">
          <ul>
            <li className="active">
              <Link to="/"><span>Home</span></Link>
            </li>
            <li>
              <a href="#"><span>Market</span></a>
              <ul className="sub-menu">
                { this.renderProductsMenu() }
              </ul>
            </li>
            <li className="">
              <Link to="/how-it-works"><span>How it works?</span></Link>
            </li>
            <li className="">
              <Link to="/blog"><span>Our blog</span></Link>
            </li>
            <li className="">
              <Link to="/find-us"><span>Find us</span></Link>
            </li>
          </ul>
        </nav>
        <div className="toolbar">
          <div className="inner">
            <div className="tools">
              <div className="account"><a href="account-orders.html"></a><i className="icon-head"></i>
                <ul className="toolbar-dropdown">
                  <li className="sub-menu-title"><span>Hello,</span> Daniel Adams</li>
                    <li><a href="account-profile.html">My Profile</a></li>
                    <li><a href="account-orders.html">Orders List</a></li>
                    <li><a href="account-wishlist.html">Wishlist</a></li>
                  <li className="sub-menu-separator"></li>
                  <li><a href="#"> <i className="icon-unlock"></i>Logout</a></li>
                </ul>
              </div>
              <div className="cart"><Link to="/checkout"></Link><i className="icon-bag"></i><span className="count">3</span><span className="subtotal">$289.68</span>
                <div className="toolbar-dropdown">
                  <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross"></i></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/01.jpg" alt="Product" /></a>
                    <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Unionbay Park</a><span className="dropdown-product-details">1 x $43.90</span></div>
                  </div>
                  <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross"></i></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/02.jpg" alt="Product" /></a>
                    <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Daily Fabric Cap</a><span className="dropdown-product-details">2 x $24.89</span></div>
                  </div>
                  <div className="dropdown-product-item"><span className="dropdown-product-remove"><i className="icon-cross"></i></span><a className="dropdown-product-thumb" href="shop-single.html"><img src="img/cart-dropdown/03.jpg" alt="Product" /></a>
                    <div className="dropdown-product-info"><a className="dropdown-product-title" href="shop-single.html">Haan Crossbody</a><span className="dropdown-product-details">1 x $200.00</span></div>
                  </div>
                  <div className="toolbar-dropdown-group">
                    <div className="column"><span className="text-lg">Total:</span></div>
                    <div className="column text-right"><span className="text-lg text-medium">$289.68&nbsp;</span></div>
                  </div>
                  <div className="toolbar-dropdown-group">
                    <div className="column"><a className="btn btn-sm btn-block btn-secondary" href="cart.html">View Cart</a></div>
                    <div className="column">
                      <Link className="btn btn-sm btn-block btn-success" to="/checkout">Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
