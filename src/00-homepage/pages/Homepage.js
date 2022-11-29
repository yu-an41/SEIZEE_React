import { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import { toppings } from './../../03-shop/toppings'

// scss
import './../styles/Homepage.scss'
// import './../../03-shop/styles/03-shop-home.scss'
// import './../styles/AboutUs.scss'
// import './../styles/NewEvent.scss'

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

//img srcs
import TopIcon from './../../logo-and-fonts/pixel-topNormal.svg'
import TopIconHover from './../../logo-and-fonts/pixel-topClick.svg'
import MoreBtnIcon from './../../logo-and-fonts/pixel-arrowB.svg'

function Homepage() {
// 記錄原始資料用
const [shops, setShops] = useState([])
// 錯誤訊息用
// const [errorMessage, setErrorMessage] = useState('')
//紀錄checkbox是否被勾選true/false
const [checkedState, setCheckedState] = useState(Array(10).fill(false))
//紀錄checkbox篩選條件
const [cateFilters, setCateFilters] = useState([])
//紀錄符合checkbox篩選條件的所有店舖
const [selResultShop, setSelResultShop] = useState([])
//紀錄店鋪展示區的狀態 有勾選條件/原始全部顯示
const [statusShop, setstatusShop] = useState(1)

const getShops = async () => {
  try {
    const response = await axios.get('http://localhost:3002/api/shop')
    // console.log(response.data.shop_c_rows)
    const shopData = response.data
    //設定到state裡
    setShops(shopData)
  } catch (e) {
    // 錯誤處理
    console.error(e.message)
    // setErrorMessage(e.message)
  }
}

const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  )
  setCheckedState(updatedCheckedState)
  console.log(statusShop)
  // cateFilters
  let selectedFilters = updatedCheckedState.map((v, index) => {
    if (v) {
      return toppings[index].cate
    } else {
      return null
    }
  })
  selectedFilters = selectedFilters.filter((v) => !!v)
  // console.log({ selectedFilters })
  setCateFilters(selectedFilters)
  if (selectedFilters.length !== 0) {
    setstatusShop(0)
  } else {
    setstatusShop(1)
  }
}

// !! "aa"  true
// !! null  false
// console.log(cateFilters)
//----------- 店鋪多重複選測試------------------------
// const total = []
// shops.forEach((value) => {
//   for (let i of value.cates) {
//     for (let c of cateFilters) {
//       if (c === i) {
//         total.push(value)
//         break
//       }
//     }
//   }
// })
// const total = []
// for (let value of shops) {
//   label1: for (let i of value.cates) {
//     for (let c of cateFilters) {
//       if (c === i) {
//         total.push(value)
//         break label1
//       }
//     }
//   }
// }
const goFilterShop = function () {
  const resultShop = []
  for (let item of shops) {
    label1: for (let i of item.cates) {
      for (let c of cateFilters) {
        if (c === i) {
          resultShop.push(item)
          break label1
        }
      }
    }
  }
  // console.log(resultShop)
  setSelResultShop(resultShop)
}

// didMount時載入資料
useEffect(() => {
  getShops()
}, [])

useEffect(() => {
  goFilterShop()
}, [cateFilters])
// console.log(selResultShop)
// console.log(shops);


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
              <TopCarousel />
            </div>
          </section>
        </div>
        <section className="y-section y-section-search">
        </section>
        <section className="y-section y-section-merch">
        </section>
        <div className="y-wave-wrap">
          <YellowWave />
        </div>
        <section className="y-section y-section-about">
          <div className="a-video">
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
          </div>
        </section>
        <section className="y-section y-section-event">
          <div className="y-wave-wrap-white">
            <WhiteWave />
          </div>
          <div class="a-eventBanner">
            <div className="a-eventWrapper">
              <h3 className="a-newEvent">最新活動</h3>
              <div class="a-eventText">
                <h1 className="a-whatFun">What's New Fun</h1>
              </div>
              <div className="a-eventContent">
                <div className="a-calendarWrapper">
                  <div class="a-imgWrapper">
                    <img src="./svg/calendar.svg" alt="" />
                  </div>
                  <div class="a-dateWrapper">
                    <h2 className="a-month">Dec.</h2>
                    <h2 className="a-day">25</h2>
                  </div>
                </div>
                <div class="a-eventContentWrapper">
                  <div className="a-event">
                    <div className="a-eventDayWrapper">
                      <h4>Dec.</h4>
                      <h4>25</h4>
                    </div>
                    <div class="a-eventImgWrapper">
                      <img src="../../04-product/event.svg" alt="" />
                    </div>
                    <div className="a-eventName">
                      <h4>劇場</h4>
                      <h4>快對醜蔬果出手</h4>
                    </div>
                    <div className="a-eventButton">
                      <h4>詳細</h4>
                    </div>
                  </div>
                  <div className="a-event">
                    <div className="a-eventDayWrapper">
                      <h4>Dec.</h4>
                      <h4>25</h4>
                    </div>
                    <div class="a-eventImgWrapper">
                      <img src="../../04-product/calendar.svg" alt="" />
                    </div>
                    <div className="a-eventName">
                      <h4>劇場</h4>
                      <h4>快對醜蔬果出手</h4>
                    </div>
                    <div className="a-eventButton">
                      <h4>詳細</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="y-section y-section-forum">
          <div className="y-wave-wrap">
            <YellowWave />
          </div>
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
          <div className="y-forum-more-wrap">
            <div className="y-forum-more-btn">
              <div className="y-forum-more-icon">
                <img src={MoreBtnIcon} alt="load more posts" />
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
