import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-sticky">
        <div className="site-branding">
          <div className="inner">
            <a className="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas"></a>
            <a className="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas"></a>
            <a className="site-logo" href="index.html"><img src="img/logo/logo.png" alt="Unishop" /></a>
          </div>
        </div>
        <nav className="site-menu">
          <ul>
            <li className="active">
              <a href="index.html"><span>Home</span></a>
            </li>
            <li>
              <a href="shop-grid-ls.html"><span>MyBrands</span></a>
              <ul className="sub-menu">
                <li><a href="shop-categories.html">MyBrand 08AM</a></li>
                <li><a href="shop-categories.html">MyBrand 10AM</a></li>
                <li><a href="shop-categories.html">MyBrand 03PM</a></li>
                <li><a href="shop-categories.html">MyBrand 05PM</a></li>
              </ul>
            </li>
            <li className="">
              <a href="index.html"><span>How it works?</span></a>
            </li>
            <li className="">
              <a href="index.html"><span>Contacts</span></a>
            </li>
          </ul>
        </nav>
        <div className="toolbar">
          <div className="inner">
            <div className="tools">
              <div className="search"><i className="icon-search"></i></div>
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
    </div>
    )
  }
}

export default Header
