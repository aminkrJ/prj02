import React, { Component } from 'react';
import Lightbox from 'react-images';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import Carousel from './Carousel';

const PHOTO_SET = [
  {
    src: 'http://example.com/example/img1.jpg',
    srcset: [
      'http://example.com/example/img1_1024.jpg 1024w',
      'http://example.com/example/img1_800.jpg 800w',
      'http://example.com/example/img1_500.jpg 500w',
      'http://example.com/example/img1_320.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
    hash: 'img1'
  },
  {
    src: 'http://example.com/example/img2.jpg',
    srcset: [
      'http://example.com/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
    hash: 'img2'
  }
]

class PhotoGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxOpen: false,
      currentImage: 0
    }
  }

  closeLightbox(){
    this.setState({
      lightboxOpen: false,
      currentImage: 0
    })
  }

  openLightbox(e){
    e.preventDefault()

    this.setState({
      lightboxOpen: true
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

  galleryClickHandler(index, e) {
    e.preventDefault()

    window.location.hash = "hash"

    this.setState({
      currentImage: index
    })
  }

  renderCarousel() {
    return (
      <Carousel id="prd01" URLhashListener={ true } autoplayHoverPause={ true } startPosition="URLHash">
        <div data-hash="img1" className='item'>A</div>
        <div data-hash="img2" className='item'>B</div>
      </Carousel>
    )
  }

  render() {
    return (
      <div className="photo-gallery">
        <Lightbox images={ PHOTO_SET } onClose={ this.closeLightbox() } isOpen={ this.state.lightboxOpen } onClickPrev={ this.gotoPrevious() } onClickNext={ this.gotoNext() } />
        { this.renderCarousel() }
        <Gallery photos={ PHOTO_SET } onClick={ this.galleryClickHandler() } />
      </div>
    )
  }
}

export default PhotoGallery
