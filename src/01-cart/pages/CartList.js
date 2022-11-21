import React from 'react'
// scss
import './../styles/CartList.scss'

// components
import NavBar from '../../00-homepage/components/NavBar'
import OpenHoursBtn from '../components/OpenHoursBtn'
import PickupHoursBtn from '../components/PickupHoursBtn'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import ShopCover from './../images/01cover.jpg'

function CartList() {
  return (
    <>
      <div className="y-CartList-container">
        <div className="y-Cart-nav">
          <NavBar />
          <div className="y-Cart-wave-base"></div>
          <YellowWave />
        </div>
        <div className="y-Cart-top">
          <div className="y-Cart-page">
            <div className="y-Cart-icon">
              <img src={CartIcon} alt="cart icon" />
            </div>
            <p className="y-Cart-name">我的惜食戰車</p>
          </div>
          <div className="y-Cart-status">
            <div className="y-progress-wrap">
              <div className="y-progress-icon">
                <img src={ProgressIcon} alt="progress icon" />
              </div>
              <div className="y-progress-border">
                <div className="y-progress-bar"></div>
                <div className="y-progress-bar-empty"></div>
              </div>
              <div className="y-progress-name">
                <p>訂購明細</p>
                <p>訂購資訊</p>
                <p>付款完成</p>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-middle">
          <div className="y-Cart-shop">
            <div className="y-Cart-shop-border">
              <div className="y-Cart-shop-cover">
                <img src={ShopCover} alt="shop cover" />
              </div>
              <div className="y-Cart-shop-info">
                <div className="y-Cart-shop-top">
                  <p className="y-Cart-shop-name">惜食店家 Shop</p>
                  <div className="y-Cart-shop-status">
                    <OpenHoursBtn />
                  </div>
                </div>
                <ul className="y-Cart-shop-bottom">
                  <li className="y-Cart-shop-tel">02-12345678</li>
                  <li className="y-Cart-shop-address">
                    台北市大安區復興南路一段390號
                  </li>
                  <li className="y-Cart-shop-time">營業時間： 10:00-21:00</li>
                </ul>
              </div>
              <div className="y-Cart-shop-pickup">
                <div className="y-Cart-pickup-top">
                  <p className="y-Cart-pickup-title">取餐資訊</p>
                  <div className="y-Cart-pickup-status">
                    <PickupHoursBtn />
                  </div>
                </div>
                <ul className="y-Cart-pickup-bottom">
                  <li className="y-Cart-pickup-time">取餐時間： 11:00-20:30</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="y-Cart-pickup-border">
                  <div className="y-Cart-pickup-icon"></div>
                  <div className="y-Cart-pickup-info"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="y-Cart-details">
            details
            <div className="y-Cart-tab">明細一覽</div>
          </div>
          <div className="y-Cart-rec">rec</div>
        </div>
        <div className="y-Cart-bottom">
          bottom
          {/* <YellowWaveReverse /> */}
          <div className="y-Cart-rec">rec</div>
          <div className="y-Cart-news">news</div>
          <div className="y-cart-footer"></div>
        </div>
      </div>
    </>
  )
}

export default CartList
