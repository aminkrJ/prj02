import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/cartActions';
import { fetchProducts } from '../actions/productsActions';

import PhotoGallery from '../components/PhotoGallery';
import PageTitle from '../components/PageTitle'

import _ from 'lodash'
import classnames from 'classnames'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1
    }
  }

  addToCart(product) {
    this.props.addToCart(product)
  }

  isActiveTab(index) {
    return this.state.activeTab === index
  }

  setActiveTab(index, e) {
    e.preventDefault()
    this.setState({activeTab: index})
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render(){
    var product = _.find(this.props.products.entities, (product) => { return product.slug === this.props.match.params.slug }) || {}
    
    if(product.recipes) {
      var recipes = product.recipes.map((r) => {
        return(
          <li> {r.title} </li>
        )
      })
    }

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
                  <button className="btn btn-primary" onClick={this.addToCart.bind(this, product)}><i className="icon-bag"></i> Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-top-3x mb-3">
            <div className="col-lg-10 offset-lg-1">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className={classnames("nav-link", {active: this.isActiveTab(1)})} href="#description" role="tab" onClick={this.setActiveTab.bind(this, 1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classnames("nav-link", {active: this.isActiveTab(2)})} href="#recipes" role="tab" onClick={this.setActiveTab.bind(this, 2)}>Recipes</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className={classnames("tab-pane fade show", {active: this.isActiveTab(1)})} role="tabpanel">
                  {product.description}
                </div>
                <div className={classnames("tab-pane fade show", {active: this.isActiveTab(2)})} id="recipes" role="tabpanel">
                  <ol>
                    {recipes}
                  </ol>
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
