import { useContext, useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import CartInfoContext from '../contexts/CartInfoContext'

// scss
import './../styles/CartDone.scss'

// components
import NavBar from './../../components/NavBar'
import NewsCrawl from '../../00-homepage/components/NewsCrawl'
import Footer from '../../components/Footer'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import YellowWaveLight from '../../00-homepage/components/YellowWaveLight'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import PickupIcon from './../../dotown/hamburger.png'
import axios from 'axios'

function CartDone() {
  const navigate = useNavigate()
  const { myAuth } = useContext(AuthContext)

  const {
    cartItem,
    handleEmptyCart,
    checkCartEmpty,
    emptyCart,
    setEmptyCart,
    ModalNotification,
    ModalConfirm,
  } = useContext(CartInfoContext)

  const { totalAmount, totalItem, totalSalePrice, totalUnitPrice, userCart } =
    cartItem

  const mid = myAuth.mb_sid || 0

  const getMemberOrder = async () => {
    if (!!mid) {
      try {
        const res = await axios.get(
          `http://localhost:3004/cart/payment-done/${mid}`
        )
        console.log(res.data)

        localStorage.setItem('cartItem', JSON.stringify(emptyCart))
        setEmptyCart(true)
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  const [cartCountDown, setCartCountDown] = useState(15)

  useEffect(() => {
    getMemberOrder()
    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [])

  useEffect(() => {
    if (cartCountDown > 1) {
      setInterval(() => {
        setCartCountDown(cartCountDown - 1)
      }, 1000)
    } else {
      setCartCountDown(0)
    }
  }, [cartCountDown])

  return (
    <>
      <div className="y-CartDone-container">
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
          <div className="y-Cart-done-body">
            <div className="y-Cart-done-top">
              <p className="y-Cart-done-header">
                謝謝您的購買，以下是這次的訂購資訊
              </p>
            </div>
            <div className="y-Cart-done-middle">
              <ul className="y-Cart-done-order">
                <li className="y-Cart-member-order y-Cart-member-left">
                  訂購人：
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  member name
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  訂購店家：
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  shop name
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  訂單成立時間：
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  shop pickup
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  訂單總額
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  shop address
                </li>
              </ul>
            </div>
            <div className="y-Cart-done-bottom">
              <p className="y-Cart-done-time">
                將在<span>{cartCountDown}</span>秒後自動導回首頁...
              </p>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <div className="y-Cart-bottom-wave">
            <YellowWaveLight />
            <NewsCrawl />
          </div>
          <div className="y-Cart-news"></div>
          <div className="y-cart-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartDone
