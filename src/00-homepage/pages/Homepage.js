import { useState, useEffect, useContext, useRef } from 'react'
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

//img srcs
// import TopIcon from './../../logo-and-fonts/pixel-topNormal.svg'
// import TopIconHover from './../../logo-and-fonts/pixel-topClick.svg'
// import MoreBtnIcon from './../../logo-and-fonts/pixel-arrowB.svg'
import img from '../images/01cover.jpg'
// import calendar from '../../../public/04-product/svg/calendar.svg'

function Homepage() {
  // miee's search and shop ------------------------------------

  // ariel's about and events ---------------------------------
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  // forum post's -----------------------------
  const [postNums, setPostNums] = useState(3)
  // const [offPostNums, setOffPostNums] = useState(2)

  // NavBar cart's ----------------------------

  return (
    <>
      <div className="y-index-container">
        <div
          className="y-go-to-top"
          onClick={() => {
            console.log('go to top')
          }}
        ></div>
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
              {/* <TopCarousel /> */}
              <div className="y-carousel-block-yellow">
                <p></p>
              </div>
              <div className="y-carousel-block-blue">
                <div className="y-block-bg">
                  {/* <p>剩食革命</p>
                  <p>由我做起</p> */}
                </div>
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
          {/* <div className="a-video">
            <div className="a-videoWrapper">
              <h3 className="a-aboutUs">關於我們</h3>
              <video
                playsInline
                loop
                muted
                alt="All the devices"
                src="../../video/test.mp4"
                type="video/mp4"
                ref={videoEl}
              />
            </div>
          </div> */}
        </section>
        <div className="y-wave-wrap-white">
          <WhiteWave />
        </div>
        <section className="y-section y-section-event">
          <div className="r-home-event-container">
            <div className="r-home-event-main-visual">
              <div className="r-home-event-article-wrap">
                <h2 className="r-home-event-article">What's New FUN?</h2>
              </div>
              <div className="r-home-event-eventlist">
                <div className="r-home-event-calendar">
                  <div className="r-home-event-calendar-img-wrap">
                    <img src="/04-product/svg/calendar.svg" />
                  </div>
                  <div className="r-home-event-calendar-date">
                    <p className="r-home-event-calendar-date-month">Dec</p>
                    <p className="r-home-event-calendar-date-day">14</p>
                  </div>
                </div>
                <ul className="r-home-event-eventlist-ul">
                  <NewEvent />
                </ul>
              </div>
            </div>
            <div className="r-home-event-titlebox">
              <p className="r-home-event-titlebox-p">最新活動 Event</p>
            </div>
          </div>
        </section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-forum">
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
              <OfficialCardRow postNums={postNums} />
            </div>
          </div>
          <div className="y-forum-more-wrap">
            <div
              className="y-forum-more-btn"
              onClick={() => {
                setPostNums(postNums + 2)
                // setOffPostNums(offPostNums + 2)
              }}
            >
              <div className="y-forum-more-icon">
                {/* <img src={MoreBtnIcon} alt="load more posts" /> */}
              </div>
              <p>更多好文</p>
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
