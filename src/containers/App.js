import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NProgress } from 'redux-nprogress';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import Alerts from '../components/Alerts';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NProgress />
        <Alerts alerts={this.props.alerts} />
        <header>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </main>

        <footer></footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

