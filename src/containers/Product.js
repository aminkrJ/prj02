import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productsActions';

import PersonalisedNutrition from '../components/PersonalisedNutrition';

import _ from 'lodash';

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    this.props.fetchProducts()
  }

  renderPersonalisedNutrition() {
    if(this.props.products.entities.length > 0){
        return <PersonalisedNutrition product={ _.find(this.props.products.entities, (product) => { return product.slug === this.props.match.params.slug }) } />
    }
  }

  render(){
    return(
      <div>
        { this.renderPersonalisedNutrition() }
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
