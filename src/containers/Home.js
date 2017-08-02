import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';

import CustomInput from '../components/CustomInput';
import PersonalisedNutrition from '../components/PersonalisedNutrition';
import Stripe from '../components/Stripe';

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  addToCart(product) {
    this.props.addToCart(product)
  }

  render() {
    var products = this.props.products.entities.map((product) => {
      return (
        <div key={product.id}>
          {product.name}
          <span className='fa fa-plus-square-o' onClick={this.addToCart.bind(this, product)}></span>
        </div>
      )
    })
    return (
      <div className="home">
        <CustomInput type='text' label='Credit card' mask="1111 1111 1111 1111" name='creditcard' value='4111 1111 1111 1111' />
        <CustomInput type='email' label='Email' placeholder='foo@bar.com' name='email' required />
        <PersonalisedNutrition product={ {name: 'product1',
          weight: 400,
          ingredients: [{id: 1, name: 'Organic chia seeds', price: 0.01, percentage: 10}, {id: 2, name: 'Activcated Almond', price: 0.03, percentage: 90}] } } />
        <Stripe />
        { products }
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
)(Home)
