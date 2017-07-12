import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productsActions';

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    var products = this.props.products.entities.map((product) => {
      return (
        <div>{product.name}</div>
      )
    })
    return (
      <div className="home">
        { products }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
