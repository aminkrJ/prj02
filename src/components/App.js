import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../containers/Home';
import Cart from '../containers/Cart';

import './App.css';


class App extends Component {
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

export default App

