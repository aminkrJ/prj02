import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import NProgress from 'nprogress'
import iziToast from 'izitoast'

import PaymentMethods from '../img/card-brands.svg'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      hasError: false
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleSubscription(e) {
    e.preventDefault()

    NProgress.start()

    axios.post("/subscribers", {
      email: this.state.email
    })
    .then((response) => {
      NProgress.done()

      iziToast.success({
        position: 'topRight',
        message: "You are subscribed successfully!"
      })

      this.setState({email: ""})
    })
    .catch((error) => {
      NProgress.done()

      iziToast.error({
        position: 'topRight',
        message: "Email " + error.response.data.email[0]
      })
    })
  }

  render() {
    var products = this.props.products.entities.map((product, index) => {
      return(
        <li key={index}>
          <Link to={ "/market/" + product.slug }>{product.name}</Link>
        </li>
      )
    })
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-light-skin">
                <h3 className="widget-title">Get In Touch With Us</h3>
                <p><a className="navi-link-light" href="#">support@cococaca.com</a></p>

                <a className="social-button shape-circle sb-facebook sb-light-skin" href="#">
                  <i className="socicon-facebook"></i>
                </a>
                <a className="social-button shape-circle sb-instagram sb-light-skin" href="#">
                  <i className="socicon-instagram"></i>
                </a>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Products</h3>
                <ul>
                  {products}
                </ul>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Sitemap</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Market</a></li>
                  <li><a href="#">How it works?</a></li>
                  <li><a href="#">Find us</a></li>
                  <li><a href="#">Our Blog</a></li>
                </ul>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Policies</h3>
                <ul>
                  <li><a href="#">Shipping Policies</a></li>
                  <li><a href="#">Delivery Info</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                </ul>
              </section>
            </div>
          </div>
          <hr className="hr-light mt-2 margin-bottom-2x" />
          <div className="row">
            <div className="col-md-7 padding-bottom-1x">
              <div className="margin-bottom-1x" style={ {maxWidth: "615px"} }>
                <img src={PaymentMethods} alt="Payment Methods" />
              </div>
            </div>
            <div className="col-md-5 padding-bottom-1x">
              <div className="margin-top-1x hidden-md-up"></div>
              <form className="subscribe-form" action="" method="post" target="_blank" noValidate>
                <div className="clearfix">
                  <div className="input-group input-light">
                    <input className="form-control" onChange={ this.handleEmailChange.bind(this) } value={this.state.email} type="email" placeholder="Your e-mail" />
                    <span className="input-group-addon"><i className="icon-mail"></i></span>
                  </div>
                  <button className="btn btn-primary" type="submit" onClick={ this.handleSubscription.bind(this) }><i className="icon-check"></i></button>
                </div><span className="form-text text-sm text-white opacity-50">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</span>
              </form>
            </div>
          </div>
          <p className="footer-copyright">© All rights reserved by Personalised Nutrition.</p>
        </div>
      </footer>

    )
  }
}

export default Footer
