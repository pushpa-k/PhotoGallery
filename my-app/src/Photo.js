import React, { Component } from 'react';
import './PhotoGallery.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageLoaded: false
    };
  }

  handleImageLoaded() {
    this.setState({
      isImageLoaded: true
    });
    this.props.onImageLoad();
  }

  renderImageCaption() {
    return (
      <span className='imageCaption'>{this.props.caption}</span>
    );
  }

  render() {
    return (
      <div className='imageContainer'>
        <img
          src={this.props.photo}
          alt={this.props.caption}
          onLoad={this.handleImageLoaded.bind(this)}
        />
        {this.state.isImageLoaded && this.renderImageCaption()}
      </div>
    );
  }
}

export default Photo;
