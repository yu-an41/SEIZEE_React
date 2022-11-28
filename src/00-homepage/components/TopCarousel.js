import React, { Component } from 'react'
import Slider from 'react-slick'

import './../styles/TopCarousel.scss'

export default class TopCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 800,
      pauseOnHover: true,
    }
    return (
      <div className="y-top-carousel-container">
        <Slider {...settings}>
          <div className="y-top-carousel-banner">
            <img
              src="/00-homepage/banner1-ice-cream.png"
              alt="banner carousel"
            />
          </div>
          <div className="y-top-carousel-banner">
            <img
              src="/00-homepage/banner1-ice-cream.png"
              alt="banner carousel"
            />
          </div>
          <div className="y-top-carousel-banner">
            <img
              src="/00-homepage/banner1-ice-cream.png"
              alt="banner carousel"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
