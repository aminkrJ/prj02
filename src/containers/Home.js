import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';

import CustomInput from '../components/CustomInput';
import PersonalisedNutrition from '../components/PersonalisedNutrition';

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
          weight: 450,
          ingredients: [{name: 'i1', price: 10, percentage: 10}, {name: 'i2', price: 20, percentage: 90}] } } />
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
