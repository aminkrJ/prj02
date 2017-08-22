import React, { Component } from 'react';
import $ from 'jquery/src/jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    $('.owl-carousel').owlCarousel(this.props)
  }

  render() {
    return (
      <div className="owl-carousel large-controls dots-inside">
        {this.props.children}
      </div>
    )
  }
}

export default Carousel
