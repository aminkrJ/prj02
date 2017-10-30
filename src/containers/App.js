import React, { Component } from 'react';

import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NProgress } from 'redux-nprogress';
import $ from 'jquery'

import { dropFromCart } from '../actions/cartActions';

import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import Checkout from './Checkout';

import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu.js'
import Alerts from '../components/Alerts';

import './App.css';

class App extends Component {

  offcanvasOpen(e) {
		var $body = $('body');
		var targetEl = $(e.target).attr('href');
		$(targetEl).addClass('active');
		$body.css('overflow', 'hidden');
		$body.addClass('offcanvas-open');
		e.preventDefault();
  }

  offcanvasClose(e) {
		var $body = $('body');
		$body.removeClass('offcanvas-open');
		setTimeout(function() {
			$body.css('overflow', 'visible');
			$('.offcanvas-container').removeClass('active');
		}, 450);
  }

  render() {
    return (
      <div>
        <NProgress />
        <Alerts alerts={this.props.alerts} />
        <Header cart={this.props.cart} onOffcanvasOpen={this.offcanvasOpen} alerts={this.props.alerts} products={this.props.products} dropFromCart={this.props.dropFromCart}/>

        <div className="App offcanvas-wrapper">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path='/market/:slug' component={Product} />
            <Route exact path="/checkout" component={Checkout} />
          </main>

          <Footer products={this.props.products} />
        </div>

        <MobileMenu products={this.props.products} />

        <div className="site-backdrop" onClick={this.offcanvasClose.bind(this)}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts,
  cart: state.cart,
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dropFromCart
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

