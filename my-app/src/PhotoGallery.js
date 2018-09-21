import React, { Component } from 'react';
import './PhotoGallery.css';
import Photo from './Photo';

/* TODO: Add swipe functionality
   load control background styles after img load
*/

class PhotoGallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      translate: 0,
      imageLoaded: false
    };
    this.getNextSlide = this.updateCounter.bind(this, 1);
    this.getPrevSlide = this.updateCounter.bind(this, -1);
  }

  updateCounter(count) {
    let currentIndex = this.state.count + count;
    const imageCount = this.props.images.length;
    const imageContainerWidth = this.getImageContainerWidth();
    const stateTranslate = this.state.translate;

    // On reaching the end of gallery and clicking right, reset gallery to first image
    if(imageCount === currentIndex) {
      return this.setState({
        count: 0,
        translate: 0
      });
    }

    // On clicking right at the start of gallery, move to last image
    if(currentIndex < 0) {
      currentIndex = imageCount - 1;
      return this.setState({
        count: currentIndex,
        translate: stateTranslate + -(imageContainerWidth*currentIndex)
      });
    }

    this.setState({
      count: currentIndex,
      translate: (count === 1) ? stateTranslate + (-imageContainerWidth) : stateTranslate + imageContainerWidth
    });
  }

  getImageContainerWidth() {
     return document.querySelector('.imageContainer').clientWidth;
  }

  renderHeader() {
    return (
      <h1 className="photoGalleryHeader">Photo Gallery</h1>
    );
  }

  renderRightArrow() {
    return (
      <span className="rightArrow" onClick={this.getNextSlide}>&gt;</span>
    );
  }

  renderLeftArrow() {
    return (
      <span className="leftArrow" onClick={this.getPrevSlide}>&lt;</span>
    );
  }

  onImageLoad() {
    this.setState({
      isImageLoaded: true
    });
  }

  render() {
    const translateValue = {
              transform: `translateX(${this.state.translate}px)`,
              transition: 'transform 0.4s ease-out'
            };
    const items = this.props.images.map((image, index) => {
      const imageSource = image[0];
      const imageCaption = image[1];
      return (
        <Photo
          key={index}
          photo={imageSource}
          caption={imageCaption}
          onImageLoad={this.onImageLoad.bind(this)}
        />
      );
    });
    // Prevents pseudo-elements from being loaded before the image load
    const imageLoaded = (items.length > 1 && this.state.isImageLoaded);

    return (
      <div className="photoGallery">
        {this.renderHeader()}
        <div
          className="photoGalleryContainer"
          style={translateValue}>
          {items}
        </div>
        {imageLoaded && this.renderRightArrow()}
        {imageLoaded && this.renderLeftArrow()}
      </div>
    );
  }
}

export default PhotoGallery;
