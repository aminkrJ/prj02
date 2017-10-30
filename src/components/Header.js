import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import CartWidget from './cart/Widget'

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
              <Link to="/contact-us"><span>Contact us</span></Link>
            </li>
          </ul>
        </nav>
        <div className="toolbar">
          <div className="inner">
            <div className="tools">
              <CartWidget cart={this.props.cart} dropFromCart={this.props.dropFromCart} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
