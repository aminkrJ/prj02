import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productsActions';

import PersonalisedNutrition from '../components/PersonalisedNutrition';
import PhotoGallery from '../components/PhotoGallery';

import _ from 'lodash'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: _.find(this.props.products.entities, (product) => { return product.slug === this.props.match.params.slug })
    }
  }

  componentWillMount() {
    this.props.fetchProducts()
  }

  render(){
    return(
      <div>
          <PersonalisedNutrition product={ this.state.product } />
          <PhotoGallery photos={ this.state.product.photos } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
  addToCart
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
