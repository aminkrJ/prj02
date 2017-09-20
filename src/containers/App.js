import React, { Component } from 'react';

import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import Checkout from './Checkout';

import Header from '../components/Header'
import Footer from '../components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header alerts={this.props.alerts} products={this.props.products} />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path='/market/:slug' component={Product} />
          <Route exact path="/checkout" component={Checkout} />
        </main>

        <Footer products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts,
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

