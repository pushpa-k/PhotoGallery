import React, { Component } from 'react';
import './PhotoGallery.css';

class Photo extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageClass = 'imageContainer';
    if (!this.props.isHidden) {
     imageClass += ' imageContainer--active';
    }

    return (
      <div className={imageClass}>
        <img src={this.props.photo} alt={this.props.caption}/>
        <span className='imageCaption'>{this.props.caption}</span>
      </div>
    );
  }
}

export default Photo;
