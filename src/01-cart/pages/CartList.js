import React from 'react'
// scss
import './../styles/CartList.scss'

// components
import NavBar from '../../00-homepage/components/NavBar'
import OpenHoursBtn from '../components/OpenHoursBtn'
import PickupHoursBtn from '../components/PickupHoursBtn'
import EmptyCartBtn from '../components/EmptyCartBtn'
import CartItemsList from '../components/CartItemsList'
import ContinueShoppingBtn from '../components/ContinueShoppingBtn'
import GoPayBtn from '../components/GoPayBtn'
import RecMerch from '../components/RecMerch'
import Footer from './../../components/Footer'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import PickupIcon from './../../dotown/hamburger.png'
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
                <p>加入商品</p>
                <p>訂購明細</p>
                <p>資訊確認</p>
                <p>完成訂購</p>
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
                  <div className="y-Cart-pickup-icon">
                    <img src={PickupIcon} alt="hambuger icon" />
                  </div>
                  <div className="y-Cart-pickup-info">
                    <p className="y-Cart-pickup-info-lg">點我看詳細取餐說明</p>
                    <p className="y-Cart-pickup-info-sm">取餐說明</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="y-Cart-details y-Cart-sections">
            <div className="y-empty-cart-wrap">
              <EmptyCartBtn />
            </div>
            <p className="y-Cart-tab y-Cart-details-tab">明細一覽</p>
            <div className="y-Cart-details-top">
              <p className="y-Cart-details-name y-Cart-details-header">
                商品名稱
              </p>
              <p className="y-Cart-details-price y-Cart-details-header">
                優惠價
              </p>
              <p className="y-Cart-details-quantity y-Cart-details-header">
                數量
              </p>
              <p className="y-Cart-details-unit y-Cart-details-header">小計</p>
              <p className="y-Cart-details-actions y-Cart-details-header">
                更多動作
              </p>
            </div>
            <div className="y-Cart-details-area">
              <div className="y-Cart-details-row">
                <CartItemsList />
              </div>
              <div className="y-Cart-details-row">
                <CartItemsList />
              </div>
              <div className="y-Cart-details-row">
                <CartItemsList />
              </div>
              <div className="y-Cart-details-row">
                <CartItemsList />
              </div>
            </div>
            <div className="y-Cart-details-bottom">
              <p className="y-Cart-details-total">
                共 1 項商品，數量 1 個，總金額NT$ 537 元
              </p>
              <div className="y-Cart-details-btns">
                <div className="y-continue-shopping-wrap">
                  <ContinueShoppingBtn />
                </div>
                <div className="y-cart-pay-wrap">
                  <GoPayBtn />
                </div>
              </div>
            </div>
          </div>
          <div className="y-Cart-rec  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-rec-tab">推薦加購</p>
            <div className="y-Cart-rec-top">
              <p className="y-Cart-rec-header">
                以下是來自「好ㄘ早午餐」的更多寶物，錯過會很可惜的...
              </p>
            </div>
            <div className="y-Cart-rec-bottom">
              <div className="y-Cart-rec-row">
                <div className="y-Cart-rec-wrap">
                  <RecMerch />
                </div>
                <div className="y-Cart-rec-wrap">
                  <RecMerch />
                </div>
                <div className="y-Cart-rec-wrap">
                  <RecMerch />
                </div>
                <div className="y-Cart-rec-wrap">
                  <RecMerch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <YellowWaveReverse />
          <div className="y-Cart-rec">rec</div>
          <div className="y-Cart-news">news</div>
          <div className="y-cart-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartList
