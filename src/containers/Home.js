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

  renderHeroProducts () {
    if (this.props.products.entities.length) {
      var heroProducts = this.props.products.entities.map((product, index) => {
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

      return (
        <Carousel id="hero-carousel" nav={true} dots={true} loop={true} navText={["", ""]} items={1} dotsInside={true} largeControls={true} autoplay={true} autoplayTimeOut={7000}>
          { heroProducts }
        </Carousel>
      )
    }
  }

  renderFeaturedProducts() {
    if (this.props.products.entities.length) {
      var featuredProducts = this.props.products.entities.map((product, index) => {
        return(
          <div key={index} className="grid-item">
            <div className="product-card">
              <div className="product-badge text-danger"></div><a className="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product" /></a>
              <h3 className="product-title"><a href="shop-single.html">{ product.name }</a></h3>
              <h4 className="product-price">
                <del></del>
              </h4>
              <div className="product-buttons">
                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i className="icon-heart"></i></button>
                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
              </div>
            </div>
          </div>
        )
      })

      return (
        <Carousel id="featured-carousel" dots={true} largeControls={false} dotsInside={false} margin={30} items={1} responsive={ {"0": {"items": 1}, "576": {"items": 2}, "768": {"items": 3}, "991": {"items": 4}, "1200": {"items": 4}} }>
          { featuredProducts }
        </Carousel>
      )
    }
  }

  render() {
    return (
      <div className="home">
        <section className="hero-slider" style={ {backgroundImage: `url(${HeroSliderBg})`} }>
          { this.renderHeroProducts() }
        </section>

        <section className="container padding-top-3x padding-bottom-3x">
          <h3 className="text-center mb-30">Featured Products</h3>
          { this.renderFeaturedProducts() }
        </section>

        <section className="container padding-top-3x padding-bottom-2x">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/01.png" alt="Shipping" />
              <h6>Premium Quality</h6>
              <p className="text-muted margin-bottom-none">Seasonal & certified organic ingredients</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/02.png" alt="Money Back" />
              <h6>Nutrition Dense</h6>
              <p className="text-muted margin-bottom-none">un-commonly high nutrient density</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/03.png" alt="Support" />
              <h6>Customisable</h6>
              <p className="text-muted margin-bottom-none">Personalise your own packages</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center mb-30"><img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/04.png" alt="Payment" />
              <h6>Secure Online Payment</h6>
              <p className="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
            </div>
          </div>
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
