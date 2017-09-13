import React, { Component } from 'react';
import classNames from 'classnames';
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
    $("#" + this.props.id).owlCarousel(this.props)
  }

  render() {
    return (
      <div id={this.props.id} className={ classNames("owl-carousel", {"large-controls": this.props.largeControls, "dots-inside": this.props.dotsInside}) }>
        {this.props.children}
      </div>
    )
  }
}

export default Carousel
