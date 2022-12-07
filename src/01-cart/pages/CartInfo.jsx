import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartInfoContext from '../contexts/CartInfoContext'

// scss
import './../styles/CartInfo.scss'

// components
// import NavBar from '../../00-homepage/components/NavBar'
import NavBar from './../../components/NavBar'
import OpenHoursBtn from '../components/OpenHoursBtn'
import PickupHoursBtn from '../components/PickupHoursBtn'
import EmptyCartBtn from '../components/EmptyCartBtn'
import CartItemsList from '../components/CartItemsList'
import ContinueShoppingBtn from '../components/ContinueShoppingBtn'
import GoPayBtn from '../components/GoPayBtn'
import RecMerch from '../components/RecMerch'
import NewsCrawl from '../../00-homepage/components/NewsCrawl'
import Footer from '../../components/Footer'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import PickupIcon from './../../dotown/hamburger.png'
import ShopCover from './../images/01cover.jpg'

function CartInfo() {
  const { cartItem, setCartItem } = useContext(CartInfoContext)

  const page = document.location.href

  // const [cartMbSid, setCartMbSid] = useState(0)
  // 結帳按鈕驗證
  // if (localStorage.getItem('auth')) {
  //   setCartMbSid(+localStorage.getItem('auth').mb_sid)
  // }
  return (
    <>
      <div className="y-CartInfo-container">
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
          <div className="y-Cart-pickup  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-pickup-tab">取餐方式</p>
            <div className="y-Cart-main y-Cart-pickup-main">
              <div className="y-Cart-pickup-radio">
                <label
                  htmlFor="y-pickup-way-self"
                  className="y-pickup-way-options y-pickup-radio-labels"
                >
                  店內自取
                </label>
                <input
                  id="y-pickup-way-self"
                  type="radio"
                  name="pickup_way"
                  value={1}
                />
                <label
                  htmlFor="y-pickup-way-shop"
                  className="y-pickup-way-options y-pickup-radio-labels"
                >
                  店家配送
                </label>
                <input
                  id="y-pickup-way-shop"
                  type="radio"
                  name="pickup_way"
                  value={2}
                  disabled
                />
                <span className="y-pickup-notice">暫不提供此選項</span>
              </div>
            </div>
          </div>
          <div className="y-Cart-pay  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-pay-tab">付款方式</p>
            <div className="y-Cart-main y-Cart-pay-main">
              <div className="y-Cart-pay-top"></div>
              <div className="y-Cart-pay-bottom"></div>
            </div>
          </div>
          <div className="y-Cart-member  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-member-tab">取餐資訊</p>
            <div className="y-Cart-main y-Cart-member-main">
              <ul className="y-Cart-member-info">
                <li className="y-Cart-member-details y-Cart-member-left">
                  訂購人：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  member name
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  取餐店家：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  shop name
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  取餐時間：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  shop pickup
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  取餐位址：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  shop address
                </li>
              </ul>
            </div>
          </div>
          <div className="y-Cart-details y-Cart-sections">
            <p className="y-Cart-tab y-Cart-details-tab">餐點明細</p>
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
            <div className="y-Cart-details-area"></div>
            <div className="y-Cart-details-bottom">
              <p className="y-Cart-details-total">
                共 1 項商品，數量 1 個，總金額NT$ 537 元
              </p>
              <div className="y-Cart-details-btns">
                <div className="y-continue-shopping-wrap">
                  <ContinueShoppingBtn linkTo={`http://localhost:3000/cart`} />
                </div>
                <div className="y-cart-pay-wrap">
                  <GoPayBtn
                    mbsid={
                      localStorage.getItem('auth')
                        ? localStorage.getItem('auth').mb_sid
                        : 0
                    }
                    cartItem={cartItem}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <YellowWaveReverse />
          <div className="y-Cart-news">{/* <NewsCrawl /> */}</div>
          <div className="y-cart-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default CartInfo
