import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './PhotoGallery';
import './index.css';

const images = [
  ['https://placeimg.com/500/500/nature', 'Nature'],
  ['http://placekitten.com/500/500', 'Kitten'],
  ['http://www.placecage.com/c/500/500', 'Nicolas Cage']
];

ReactDOM.render(
  <PhotoGallery images={images}/>,
  document.getElementById('root')
);
