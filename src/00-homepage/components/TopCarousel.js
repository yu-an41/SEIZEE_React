import React, { Component } from 'react'
import Slider from 'react-slick'

import './../styles/TopCarousel.scss'

import BannerImage1 from './../../dotown/sushi-with-egg.png'
import BannerImage2 from './../../dotown/pizza.png'
import BannerImage3 from './../../dotown/toast.png'

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
            <p className="y-h3">1</p>
            <img src={BannerImage1} alt="banner carousel" />
          </div>
          <div className="y-top-carousel-banner">
            <p className="y-h3">1</p>
            <img src={BannerImage2} alt="banner carousel" />
          </div>
          <div className="y-top-carousel-banner">
            <p className="y-h3">1</p>
            <img src={BannerImage3} alt="banner carousel" />
          </div>
        </Slider>
      </div>
    )
  }
}
