import React from 'react'

// scss
import './../styles/Homepage.scss'

// components
import NavBar from '../components/NavBar'
import Footer from '../../components/Footer'

//img srcs
import YellowWave from '../components/YellowWave'

function Homepage() {
  return (
    <>
      <div className="y-index-container">
        <div className="y-index-top">
          <section className="y-section">
            <NavBar />
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
        <section className="y-section y-section-footer">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Homepage
