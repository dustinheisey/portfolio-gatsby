/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true
    }
    return (
      <Slider {...settings}>
        <div>
          <h3>This is Slide 1</h3>
        </div>
        <div>
          <h3>This is Slide 2</h3>
        </div>
        <div>
          <h3>This is Slide 3</h3>
        </div>
        <div>
          <h3>This is Slide 4</h3>
        </div>
        <div>
          <h3>This is Slide 5</h3>
        </div>
        <div>
          <h3>This is Slide 6</h3>
        </div>
      </Slider>
    )
  }
}
