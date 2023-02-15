import { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toppings } from './../../03-shop/toppings'
import CartInfoContext from '../../01-cart/contexts/CartInfoContext'

// scss
import './../styles/Homepage.scss'
// import './../styles/AboutUs.scss'

// components
// import NavBar from '../components/NavBar'
import NavBar from './../../components/NavBar'
import Footer from '../../components/Footer'
import NewsCrawl from '../components/NewsCrawl'
import TopCarousel from '../components/TopCarousel'
import YellowWave from '../components/YellowWave'
import WhiteWave from '../components/WhiteWave'
// import ShopHcard from '../../03-shop/components/03-shop-h-card'
import RecipeCardRow from '../components/RecipeCardRow'
import ShopCardRow from '../components/ShopCardRow'
import OfficialCardRow from '../components/OfficialCardRow'
import Runman from '../../components/Runman'
import ShopHome from '../components/ShopHome'
import NewEvent from '../components/NewEvent'
import AboutUs from '../components/AboutUs'

//img srcs
import TopIcon from './../../logo-and-fonts/pixel-topNormal.svg'
import TopIconHover from './../../logo-and-fonts/pixel-topClick.svg'
// import MoreBtnIcon from './../../logo-and-fonts/pixel-arrowB.svg'
import img from '../images/01cover.jpg'
// import calendar from '../../../public/04-product/svg/calendar.svg'

function Homepage() {
  // forum post
  const [postNums, setPostNums] = useState(3)
  const [offPostNums, setOffPostNums] = useState(3)

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
            <div className="r-section-carousel-article">
              <p className="r-section-carousel-article-p1">WASTE LESS</p>
              <p className="r-section-carousel-article-p2">SAVE MORE</p>
            </div>
            <div className="y-carousel-wrap">
              <TopCarousel />
            </div>
            <div className="y-carousel-block-blue">
              <div className="y-block-bg">
                <p className="y-block-text1">開啟一段，</p>
                <p className="y-block-text2">惜食的旅程。</p>
              </div>
            </div>
          </section>
        </div>
        <section className="y-section y-section-search"></section>
        <section className="y-section y-section-merch"></section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="r-section r-section-shop">
          <ShopHome />
        </section>
        <section className="y-section y-section-about">
          <AboutUs />
        </section>

        <section className="y-section y-section-event">
          <WhiteWave />
          <div className="r-home-event-container">
            <div className="r-home-event-main-visual">
              <div className="r-home-event-article-wrap">
                <p className="r-home-event-article">2022 SEIZEE Festival</p>
              </div>
              <div className="r-home-event-gobtn-wrap">
                <Link to="/event">
                  <p className="r-home-event-gobtn">Go</p>
                </Link>
              </div>
              <div className="r-home-event-eventlist">
                <div className="r-home-event-calendar">
                  <div className="r-home-event-calendar-img-wrap">
                    <img src="/04-product/svg/calendar.svg" />
                  </div>
                  <div className="r-home-event-calendar-date">
                    <p className="r-home-event-calendar-date-month">Have</p>
                    <p className="r-home-event-calendar-date-day">Fun</p>
                  </div>
                </div>
                <ul className="r-home-event-eventlist-ul">
                  <NewEvent />
                </ul>
              </div>
            </div>
            <div className="r-home-event-titlebox">
              <p className="r-home-event-titlebox-p">最新活動 New</p>
            </div>
          </div>
        </section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-forum">
          <div
            className="y-go-to-top"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          ></div>
          <div className="y-section-forum-title">
            <p>最新論壇消息</p>
          </div>
          <div className="y-section-forum-wrap">
            <div className="y-forum-row-wrap y-recipe-row-wrap">
              <RecipeCardRow postNums={postNums} />
            </div>
            <div className="y-forum-row-wrap y-shop-row-wrap">
              <ShopCardRow postNums={postNums} />
            </div>
            <div className="y-forum-row-wrap y-official-row-wrap">
              <OfficialCardRow postNums={offPostNums} />
            </div>
          </div>
          <div className="y-forum-more-wrap">
            <div
              className="y-forum-more-btn"
              onClick={() => {
                setPostNums(postNums + 2)
                setOffPostNums(offPostNums + 3)
              }}
            >
              {/* <div className="y-forum-more-icon"> */}
              {/* <img src={MoreBtnIcon} alt="load more posts" /> */}
              {/* </div> */}
              <p className="y-forum-more-btn-pp">更多好文</p>
            </div>
          </div>
        </section>
        <section className="y-section y-section-dotown">
          <Runman />
        </section>
        <section className="y-section y-section-news-bottom">
          <div className="y-section-news-second">
            <NewsCrawl />
          </div>
        </section>
        <section className="y-section y-section-footer">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Homepage
