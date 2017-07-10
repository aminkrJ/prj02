import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';

import './App.css';

import { fetchProducts } from '../actions/productsActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
