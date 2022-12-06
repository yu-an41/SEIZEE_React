import React, { Component } from 'react'
import Slider from 'react-slick'

import './../styles/TopCarousel.scss'

export default class TopCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // autoplaySpeed: 3500,
      speed: 800,
      pauseOnHover: true,
    }

    return (
      <div className="y-top-carousel-container">
        <Slider {...settings}>
          <div className="y-top-carousel-banner">
            <img
              src={`/00-homepage/banner1-ice-cream.png`}
              alt="banner carousel"
            />
          </div>
          {/* <div className="y-top-carousel-banner">
            <h1>Hello Carousel</h1>
          </div> */}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    )
  }
}
