import React from 'react'

// scss
import './../styles/Homepage.scss'

// components
import NavBar from '../components/NavBar'
import Footer from '../../components/Footer'
import NewsCrawl from '../components/NewsCrawl'
import TopCarousel from '../components/TopCarousel'
import ForumPost from '../components/ForumPost'

//img srcs
import YellowWave from '../components/YellowWave'

function Homepage() {
  return (
    <>
      <div className="y-index-container">
        <div className="y-index-top">
          <section className="y-section y-section-nav-bg">
            <NavBar />
          </section>
          <section className="y-section y-section-news">
            <div className="y-section-news-first">
              <NewsCrawl />
            </div>
          </section>
          <section className="y-section y-section-carousel">
            carousel
            <div className="y-carousel-wrap">
              <TopCarousel />
            </div>
          </section>
        </div>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-search">search</section>
        <section className="y-section y-section-merch">merch</section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-about">about</section>
        <section className="y-section y-section-event">event</section>
        <section className="y-section y-section-forum">
          forum
          <div className="y-section-forum-title">
            <p>最新論壇消息</p>
          </div>
          <div className="y-section-forum-wrap">
            <div className="y-forum-cate y-forum-recipe-wrap">
              <div className="y-forum-card-wrap y-recipe-card-wrap">
                <ForumPost />
              </div>
            </div>
            <div className="y-forum-cate y-forum-exchange-wrap">
              <div className="y-forum-card-wrap y-exchange-card-wrap">
                <ForumPost />
              </div>
            </div>
            <div className="y-forum-cate y-forum-shop-wrap">
              <div className="y-forum-card-wrap y-recipe-card-wrap">
                <ForumPost />
              </div>
            </div>
          </div>
        </section>
        <section className="y-section y-section-dotown">dotown</section>
        <section className="y-section y-section-footer">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Homepage
