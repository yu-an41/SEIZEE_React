import React from 'react'

// scss
import './../styles/Homepage.scss'
import './../../03-shop/styles/03-shop-home.scss'

// components
import NavBar from '../components/NavBar'
import Footer from '../../components/Footer'
import NewsCrawl from '../components/NewsCrawl'
import TopCarousel from '../components/TopCarousel'
import RecipeCardRow from '../components/RecipeCardRow'
import ShopCardRow from '../components/ShopCardRow'
import OfficialCardRow from '../components/OfficialCardRow'
import Runman from '../../components/Runman'

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
            <div className="y-carousel-wrap">
              <TopCarousel />
            </div>
          </section>
        </div>
        <section className="y-section y-section-search">
          <div className="r-shop-home-container">
            <YellowWave />
            <div className="r-shop-home-main">
              <div className="r-shop-home-main-inner">
                <div className="r-shop-home-main-text">
                  <p>Creating a better future through food.</p>
                  <span>開啟屬於你的惜食地圖</span>
                  <div className="r-shop-home-main-btn">
                    <input placeholder="請輸入地址" />
                    <a href="/#">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="r-shop-home-main-visual"></div>
            </div>
          </div>
        </section>
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
            <div className="y-forum-row-wrap y-recipe-row-wrap">
              <RecipeCardRow />
            </div>
            <div className="y-forum-row-wrap y-shop-row-wrap">
              <ShopCardRow />
            </div>
            <div className="y-forum-row-wrap y-official-row-wrap">
              <OfficialCardRow />
            </div>
          </div>
        </section>
        <section className="y-section y-section-dotown">
          <Runman />
        </section>
        <section className="y-section y-section-footer">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Homepage
