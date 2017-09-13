import React, { Component } from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';

class PhotoGallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      lightboxOpen: false
    }
  }

  render() {
    return (
      <div className="photogallery">
      </div>
    )
  }
}

export default PhotoGallery
