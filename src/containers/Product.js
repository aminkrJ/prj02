import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productsActions';

import PhotoGallery from '../components/PhotoGallery';
import PageTitle from '../components/PageTitle'

import _ from 'lodash'

class Product extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render(){
    var product = _.find(this.props.products.entities, (product) => { return product.slug === this.props.match.params.slug }) || {}

    return(
      <div>
        <PageTitle title={ product.name } location={ {title: "Products", path:"#"} } />
        <div className="container padding-bottom-3x mb-1">
          <div className="row">
            <div className="col-md-6">
              <PhotoGallery photos={ product.photos } />
            </div>
            <div className="col-md-6">
              <h2 className="padding-top-1x text-normal">{product.name}</h2>
              <span className="h2 d-block">${product.price}</span>
              <p>{product.description}</p>
              <div className="row margin-top-1x">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label for="size">Serving</label>
                    <select className="form-control" id="size">
                      <option>Chooze serving</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-5">
                </div>
                <div className="col-sm-3">
                </div>
              </div>
              <hr className="mb-3" />
              <div className="d-flex flex-wrap justify-content-between">
                <div className="sp-buttons mt-2 mb-2">
                  <button className="btn btn-primary" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!"><i className="icon-bag"></i> Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
