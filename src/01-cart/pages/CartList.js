import React from 'react'
// scss
import './../styles/CartList.scss'

// components
import NavBar from '../../00-homepage/components/NavBar'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'

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
        <div className="y-Cart-main">
          <div className="y-Cart-shop">shop</div>
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
