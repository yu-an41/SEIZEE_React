import React from 'react'
import './../styles/Homepage.scss'
import Menu from '../../components/Menu'
import YellowWave from '../components/YellowWave'
import LogoBluePink from './../../logo-and-fonts/LOGO-blue-pink.svg'
import CartIcon from './../../dotown/cart.png'
import MemberIcon from './../../dotown/toast.png'

function Homepage() {
  return (
    <>
      <div className="y-index-container">
        <div className="y-index-top">
          <section className="y-section y-section-nav">
            <div className="y-logo-wrap">
              <div className="y-svg-wrap">
                <img src={LogoBluePink} alt="SEIZEE_logo" />
              </div>
            </div>
            <div className="y-nav-right">
              <div className="y-icon-round y-cart-icon">
                <img src={CartIcon} alt="cart icon" />
              </div>
              <div className="y-icon-round y-member-icon">
                <img src={MemberIcon} alt="cart icon" />
              </div>
              <Menu />
            </div>
          </section>
          <section className="y-section y-section-news">
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type
            </p>
          </section>
          <section className="y-section y-section-carousel">
            carousel
            <div className="y-carousel-wrap">carousel-wrap</div>
          </section>
          <div className="y-wave-wrap">
            <YellowWave />
          </div>
        </div>
        <section className="y-section y-section-search">search</section>
        <section className="y-section y-section-merch">merch</section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-about">about</section>
        <section className="y-section y-section-event">event</section>
        <section className="y-section y-section-forum">forum</section>
        <section className="y-section y-section-dotown">dotown</section>
        <section className="y-section y-section-footer">footer</section>
      </div>
    </>
  )
}

export default Homepage
