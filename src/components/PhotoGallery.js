import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import Carousel from './Carousel';

const PHOTO_SET = [
  {
    src: 'http://example.com/example/img1.jpg',
    width: 681,
    height: 1024,
    alt: 'img1',
    hash: 'img1'
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 600,
    height: 600,
    alt: 'img2',
    hash: 'img2'
  }
]

class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
  }

  closeLightbox(){
    this.setState({
      lightboxIsOpen: false,
      currentImage: 0
    })
  }

  openLightbox(e){
    e.preventDefault()

    this.setState({
      lightboxIsOpen: true
    })
  }

  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  openPhoto(e) {
    e.preventDefault()

    this.setState({ currentImage: 0 })
  }

  renderCarousel() {
    return (
      <Carousel productCarousel={ true } id="prd01" items={1} URLhashListener={ true } autoplayHoverPause={ true } startPosition="URLHash">
        <div data-hash="one">A</div>
        <div data-hash="two">B</div>
      </Carousel>
    )
  }

  render() {
    return (
      <div className="product-gallery">
        <Lightbox
          images={ PHOTO_SET }
          currentImage={ this.state.currentImage }
          onClose={ this.closeLightbox.bind(this) }
          isOpen={ this.state.lightboxIsOpen }
          onClickPrev={ this.gotoPrevious.bind(this) }
          onClickNext={ this.gotoNext.bind(this) }
        />
        <div className="gallery-wrapper">
          <div className="gallery-item active"><a onClick={ this.openLightbox.bind(this) }></a></div>
          <div className="gallery-item"><a onClick={ this.openLightbox.bind(this) }></a></div>
        </div>
        { this.renderCarousel() }
        <div className="product-thumbnails">
          <li className="active"><a href="#one" onClick={ this.openPhoto.bind(this) }><img src="img/shop/single/th01.jpg" alt="Product" /></a></li>
          <li><a href="#two" onClick={ this.openPhoto.bind(this) }><img src="img/shop/single/th02.jpg" alt="Product" /></a></li>
        </div>
      </div>
    )
  }
}

export default PhotoGallery
