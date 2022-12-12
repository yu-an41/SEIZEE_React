import React, { Component } from 'react'
import { imgReactUrl, imgNodeUrl } from './../../my-config'
import Slider from 'react-slick'

import './../styles/TopCarousel.scss'

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
      }}
      onClick={onClick}
    />
  )
}

export default class TopCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 800,
      pauseOnHover: true,
      nextArrow: <PrevArrow />,
      prevArrow: <NextArrow />,
    }

    return (
      <div className="y-top-carousel-container">
        <Slider {...settings}>
          <div className="y-top-carousel-banner">
            <img src={`/00-homepage/Zero_waste01.jpg`} alt="banner carousel" />
          </div>
          <div className="y-top-carousel-banner y-carousel-cover">
            <img src={`/00-homepage/no_waste02.jpg`} alt="banner carousel" />
          </div>
          <div className="y-top-carousel-banner y-carousel-cover">
            <img
              src={`${imgNodeUrl}/images/03-shop/33cover.jpg`}
              alt="banner carousel"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
