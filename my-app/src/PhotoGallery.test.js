import React from 'react';
import { shallow, mount } from 'enzyme';
import PhotoGallery from './PhotoGallery';

test('renders without crashing', () => {
  const images = [
      ['https://placeimg.com/500/500/nature', 'Nature'],
      ['http://placekitten.com/500/500', 'Kitten'],
      ['http://www.placecage.com/c/500/500', 'Nicolas Cage']
    ];

  shallow(<PhotoGallery images={images} />);
});

test('it should render the expected HTML', () => {
  const images = [
      ['https://placeimg.com/500/500/nature', 'Nature'],
      ['http://placekitten.com/500/500', 'Kitten'],
      ['http://www.placecage.com/c/500/500', 'Nicolas Cage']
    ];

  expect(
    mount(<PhotoGallery images={images} />).html()
  ).toMatchSnapshot();
});

test('it should increment count on clicking right arrow and return to first image if last image is clicked', () => {
  const images = [
    ['https://placeimg.com/500/500/nature', 'Nature'],
    ['http://placekitten.com/500/500', 'Kitten']
  ];

  document.body.innerHTML = '<div class="imageContainer"></div>';
  const options = {
      attachTo: document.querySelector('.imageContainer')
  }
  const wrapper = shallow(<PhotoGallery images={images} />, options);
  wrapper.setState({ isImageLoaded: true });

  wrapper.find('.rightArrow').simulate('click');
  expect(wrapper.state('count')).toBe(1);
  wrapper.find('.rightArrow').simulate('click');
  expect(wrapper.state('count')).toBe(0);
});

test('it should decrement count on clicking left arrow and return to last image if first image is clicked', () => {
  const images = [
    ['https://placeimg.com/500/500/nature', 'Nature'],
    ['http://placekitten.com/500/500', 'Kitten']
  ];

  document.body.innerHTML = '<div class="imageContainer"></div>';
  const options = {
      attachTo: document.querySelector('.imageContainer')
  }
  const wrapper = shallow(<PhotoGallery images={images} />, options);
  wrapper.setState({ isImageLoaded: true });

  wrapper.find('.rightArrow').simulate('click');
  wrapper.find('.leftArrow').simulate('click');
  expect(wrapper.state('count')).toBe(0);
  wrapper.find('.leftArrow').simulate('click');
  expect(wrapper.state('count')).toBe(1);
});
