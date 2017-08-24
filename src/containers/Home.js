import { Route, Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';

import Carousel from '../components/Carousel';
import HeroSliderBg from '../img/hero-slider/main-bg.jpg';

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  addToCart(product) {
    this.props.addToCart(product)
  }

  renderProductsSlider() {
    return(
      this.props.products.entities.map((product, index) => {
        return(
          <div key={index} className="item">
            <div className="container padding-top-3x">
              <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div className="from-bottom">
                    <img className="d-inline-block w-200 mb-4" src={ product.photo.original } alt={ product.name } />
                    <div className="h2 text-body text-normal mb-2 pt-1">{ product.short_description }</div>
                    <div className="h2 text-body text-normal mb-4 pb-1">for only <span className="text-bold">{ "$" + product.price }</span></div>
                  </div>
                  <Link className="btn btn-primary scale-up delay-1" to={ "/market/" + product.slug }>Customise Now</Link>
                </div>
                <div className="col-md-6 padding-bottom-2x mb-3">
                  <img className="d-block mx-auto" src={ product.photo.original } alt={ product.short_description } />
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="home">
        <section className="hero-slider" style={ {backgroundImage: `url(${HeroSliderBg})`} }>
          <Carousel nav={true} dots={true} loop={true} navText={["", ""]} items={this.props.products.entities.length} autoplay={true} autoplayTimeOut={7000}>
            { this.renderProductsSlider() }
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
