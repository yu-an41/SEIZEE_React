import { useContext, useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import CartInfoContext from '../contexts/CartInfoContext'
import dayjs from 'dayjs'
import axios from 'axios'

// scss
import './../styles/CartFailed.scss'

// components
import CartNavBar from '../components/CartNavBar'
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

function CartFailed() {
  const navigate = useNavigate()
  const { myAuth } = useContext(AuthContext)

  const {
    cartItem,
    setCartItem,
    handleEmptyCart,
    checkCartEmpty,
    emptyCart,
    setEmptyCart,
    ModalNotification,
    ModalConfirm,
  } = useContext(CartInfoContext)

  const { totalAmount, totalItem, totalSalePrice, totalUnitPrice, userCart } =
    cartItem

  const [orderDetail, setOrderDetail] = useState([])
  const mid = myAuth.mb_sid || 0

  const [cartCountDown, setCartCountDown] = useState(15)

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 15000)
  }, [])

  useEffect(() => {
    if (cartCountDown > 1) {
      const myInterval = setInterval(() => {
        setCartCountDown(cartCountDown - 1)
      }, 1000)
    } else {
      setCartCountDown(0)
    }
    return
  }, [cartCountDown])

  return (
    <>
      <div className="y-CartFailed-container">
        <div className="y-Cart-nav">
          <CartNavBar />
          <div className="y-Cart-wave-base"></div>
          <YellowWave />
        </div>
        <div className="y-Cart-top">
          <div className="y-Cart-page">
            <div className="y-Cart-icon">
              <img src={CartIcon} alt="cart icon" />
            </div>
            <p className="y-Cart-name">??????????????????</p>
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
                <p>????????????</p>
                <p>????????????</p>
                <p>????????????</p>
                <p>????????????</p>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-middle">
          <div className="y-Cart-done-body">
            <div className="y-Cart-done-top">
              <p className="y-Cart-done-header">
                ???????????????????????????????????????????????????
              </p>
            </div>
            <div className="y-Cart-done-middle">
              <ul className="y-Cart-done-order">
                <li className="y-Cart-member-order y-Cart-member-left">
                  ????????????
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  {JSON.parse(localStorage.getItem('auth')).mb_name || '?????????'}
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  ???????????????
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  {orderDetail.length !== 0 && orderDetail[0].order_num}
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  ?????????????????????
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  {orderDetail.length !== 0 &&
                    dayjs(orderDetail[0].created_at).format('YYYY-MM-DD HH:mm')}
                </li>
                <li className="y-Cart-member-order y-Cart-member-left">
                  ????????????
                </li>
                <li className="y-Cart-member-order y-Cart-member-right">
                  $ {orderDetail.length !== 0 && orderDetail[0].total}
                </li>
              </ul>
            </div>
            <div className="y-Cart-done-bottom">
              <p className="y-Cart-done-time">
                ??????<span>{cartCountDown}</span>????????????????????????...
              </p>
              <div className="y-Cart-done-icon">
                <img src={PickupIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <div className="y-Cart-bottom-wave">
            <YellowWaveLight />
            {/* <NewsCrawl /> */}
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

export default CartFailed
