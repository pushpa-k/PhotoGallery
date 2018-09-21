import React, { Component } from 'react';
import './PhotoGallery.css';
import Photo from './Photo';

/* TODO:
   Gradient behind arrows
   Font awesome
  transition */

class PhotoGallery extends Component {
  constructor (props) {
    super(props);
    this.state = { count: 0 };
    this.getNextSlide = this.updateCounter.bind(this, 1);
    this.getPrevSlide = this.updateCounter.bind(this, -1);
  }

  updateCounter(count) {
    let newCount = this.state.count + count;
    if(this.props.images.length === newCount) {
      newCount = 0;
    } else if(newCount < 0) {
      newCount = this.props.images.length - 1;
    }
    this.setState({count: newCount});
  }

  renderHeader() {
    return (
      <h1 className="photoGallery--header">Image Gallery</h1>
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

  render() {
    const items = this.props.images.map((image, index) => {
      const imageSource = image[0];
      const imageCaption = image[1];
      const isPhotoHidden = this.state.count !== index;
      return (
        <Photo
          key={index}
          photo={imageSource}
          caption={imageCaption}
          isHidden={isPhotoHidden}
        />
      );
    });
    
    return (
      <div className="photoGallery">
        {this.renderHeader()}
        {items}
        {this.renderRightArrow()}
        {this.renderLeftArrow()}
      </div>
    );
  }
}

export default PhotoGallery;
