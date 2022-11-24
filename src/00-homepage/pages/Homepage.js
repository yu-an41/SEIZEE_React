import React from 'react'

// scss
import './../styles/Homepage.scss'

// components
import NavBar from '../components/NavBar'
import Footer from '../../components/Footer'

//img srcs
import YellowWave from '../components/YellowWave'
import NewsCrawlIcon from './../../dotown/pudding.png'

function Homepage() {
  return (
    <>
      <div className="y-index-container">
        <div className="y-index-top">
          <section className="y-section">
            <NavBar />
          </section>
          <ul className="y-section y-section-news y-section-news-first">
            <li className="y-news-list-wrap">
              <div className="y-new-icon-wrap">
                <img src={NewsCrawlIcon} alt="icon for news crawl" />
              </div>
              <div className="y-news-category">
                <p>「戰士版」</p>
              </div>
              <div className="y-news-content">
                <a href="/#" alt="news">
                  simply dummy text of the printing and typesetting industry.
                </a>
              </div>
            </li>
          </ul>
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
