import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';

import CustomInput from '../components/CustomInput';
import PersonalisedNutrition from '../components/PersonalisedNutrition';

import Carousel from '../components/Carousel';
import Hypeton8amLogo from '../img/hero-slider/logo01.png';
import Hypeton8am from '../img/hero-slider/01.png';
import HeroSliderBg from '../img/hero-slider/main-bg.jpg';

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
        { products }

        <section className="hero-slider" style={ {backgroundImage: `url(${HeroSliderBg})`} }>
          <Carousel nav={true} dots={true} loop={true} navText={["", ""]} items={1} autoplay={true} autoplayTimeOut={7000}>
            <div key='1' className="item">
              <div className="container padding-top-3x">
                <div className="row align-items-center">
                  <div className="col-lg-5 offset-lg-1 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img className="d-inline-block w-200 mb-4" src={Hypeton8amLogo} alt="Hypeton 8AM" />
                      <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                      <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                    </div>
                    <a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img className="d-block mx-auto" src={Hypeton8am} alt="Chuck Taylor All Star II" />
                  </div>
                </div>
              </div>
            </div>

            <div key='2' className="item">
              <div className="container padding-top-3x">
                <div className="row align-items-center">
                  <div className="col-lg-5 offset-lg-1 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img className="d-inline-block w-200 mb-4" src={Hypeton8amLogo} alt="Hypeton 8AM" />
                      <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                      <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                    </div>
                    <a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img className="d-block mx-auto" src={Hypeton8am} alt="Chuck Taylor All Star II" />
                  </div>
                </div>
              </div>
            </div>

            <div key='3' className="item">
              <div className="container padding-top-3x">
                <div className="row align-items-center">
                  <div className="col-lg-5 offset-lg-1 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img className="d-inline-block w-200 mb-4" src={Hypeton8amLogo} alt="Hypeton 8AM" />
                      <div className="h2 text-body text-normal mb-2 pt-1">Chuck Taylor All Star II</div>
                      <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">$59.99</span></div>
                    </div>
                    <a className="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img className="d-block mx-auto" src={Hypeton8am} alt="Chuck Taylor All Star II" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>

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
