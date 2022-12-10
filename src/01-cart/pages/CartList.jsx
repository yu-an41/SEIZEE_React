import { useContext, useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import log from 'eslint-plugin-react/lib/util/log'
import axios from 'axios'
import { set } from 'ramda'

// context
import CartInfoContext from '../contexts/CartInfoContext'
import products from './../data/products.json' // 假資料
import AuthContext from '../../contexts/AuthContext'

// scss
import './../styles/CartList.scss'

// components
// import NavBar from '../../00-homepage/components/NavBar'
import NavBar from './../../components/NavBar'
import OpenHoursBtn from '../components/OpenHoursBtn'
import PickupHoursBtn from '../components/PickupHoursBtn'
import EmptyCartBtn from '../components/EmptyCartBtn'
import CartItemsList from '../components/CartItemsList'
import ContinueShoppingBtn from '../components/ContinueShoppingBtn'
import CheckCartInfo from '../components/CheckCartInfo'
// import GoPayBtn from '../components/GoPayBtn'
import RecMerch from '../components/RecMerch'
import Footer from '../../components/Footer'

// modal
import ModalConfirm from '../../components/ModalConfirm'
import ModalNotification from '../../components/ModalNotification'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowWave2 from '../../04-product/components/YellowWave2'
import YellowWaveLight from '../../00-homepage/components/YellowWaveLight'
import YellowLineWave from './../images/line-wave.svg'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import PickupIcon from './../../dotown/hamburger.png'
import ShopCover from './../images/01cover.jpg'
import { dblClick } from '@testing-library/user-event/dist/click'

function CartList(props) {
  const { myAuth, setMyAuth, logout, deleteAccountD } = useContext(AuthContext)
  const navigate = useNavigate()

  // modal
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  const closeModalConfirm = () => {
    setIsOpen2(false)
    handleEmptyCart()
  }

  const openModalConfirm = () => {
    setIsOpen2(true)
  }
  const closeModalCancel = () => {
    setIsOpen2(false)
    // navigate('/')
  }

  const closeModal = () => {
    setIsOpen1(false)
    navigate('/login')
  }

  // 購物車
  const {
    cartItem,
    setCartItem,
    handleAddCart,
    handleReduce,
    handleEmptyCart,
    emptyCart,
    setEmptyCart,
    checkCartempty,
    cartShopInfo,
    setCartShopInfo,
  } = useContext(CartInfoContext)

  // 設定店家資料格式
  // 店家編號
  const shopsid = cartItem.userCart[0].shop_sid
    ? +cartItem.userCart[0].shop_sid
    : 1

  const getShopInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/cart/shop/${shopsid}`)

      setCartShopInfo(res.data.shop_info_rows[0])
      console.log(res.data.shop_info_rows)

      // 這邊放營業取餐判斷
    } catch (err) {
      console.log(err.message)
    }
  }

  const {
    shop_sid,
    shop_list_sid,
    shop_cover,
    shop_name,
    shop_phone,
    shop_city,
    shop_area,
    shop_address_detail,
    shop_opentime,
    shop_closetime,
    shop_deadline,
    shop_sun,
    shop_mon,
    shop_tues,
    shop_wed,
    shop_thu,
    shop_fri,
    shop_sat,
  } = cartShopInfo

  // const getCartData = () => {}

  // 取得推薦商品
  const [recMerchData, setRecMerchData] = useState([
    {
      sid: 1,
      shop_list_sid: 1,
      product_name: '',
      product_category_sid: 1,
      unit_price: 100,
      sale_price: 50,
      amount: 1,
      // product_launch: 1,
    },
  ])
  const getRecMerchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3004/cart/rec-merch/${shopsid}`
      )

      setRecMerchData(res.data.rec_merch_rows)
      // console.log(res.data.rec_merch_rows)
    } catch (err) {
      console.log(err.message)
    }
  }

  const min = Math.min(recMerchData.length, 4)

  useEffect(() => {
    // console.log(cartItem)
    getShopInfo()
    getRecMerchData()
  }, [cartItem])

  // 設定回上頁按鈕內文
  const [btnText, setBtnText] = useState('繼續逛逛')
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
                  <p className="y-Cart-shop-name">{shop_name}</p>
                  <div className="y-Cart-shop-status">
                    <OpenHoursBtn />
                  </div>
                </div>
                <ul className="y-Cart-shop-bottom">
                  <li className="y-Cart-shop-tel">電話：{shop_phone}</li>
                  <li className="y-Cart-shop-address">
                    地址：{shop_city}
                    {shop_area}
                    {shop_address_detail}
                  </li>
                  <li className="y-Cart-shop-time">
                    營業時間：{shop_opentime} - {shop_closetime}
                  </li>
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
                  <li className="y-Cart-pickup-time">
                    取餐時間：{shop_opentime} - {shop_deadline}
                  </li>
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
              <EmptyCartBtn
                onClick={() => {
                  console.log('EmptyCartBtn')
                  // handleEmptyCart()

                  openModalConfirm()
                  setHeaderMg('購物車')
                  setBodyMg('確定要清空購物車嗎？')
                  navigate('/')
                }}
              />
            </div>
            <p className="y-Cart-tab y-Cart-details-tab">明細一覽</p>
            <div className="y-Cart-details-top">
              <p className="y-Cart-details-name y-Cart-details-header">
                商品名稱
              </p>
              <p className="y-Cart-details- y-Cart-details-header">原價</p>
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
              {cartItem.userCart.map((v, i) => {
                return (
                  <div className="y-Cart-details-row">
                    <CartItemsList cartItemData={v} key={i} />
                  </div>
                )
              })}
            </div>
            <div className="y-Cart-details-bottom">
              <p className="y-Cart-details-total">
                共 {cartItem.totalItem} 項商品，數量 {cartItem.totalAmount}{' '}
                個，總金額 NT $ {cartItem.totalSalePrice} 元
              </p>
              <div className="y-Cart-details-btns">
                <div className="y-continue-shopping-wrap">
                  <ContinueShoppingBtn
                    linkTo={`http://localhost:3000/shop`}
                    btnText={btnText}
                  />
                </div>
                <div className="y-check-info-wrap">
                  <CheckCartInfo />
                </div>
              </div>
            </div>
          </div>
          <div className="y-Cart-rec  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-rec-tab">推薦加購</p>
            <div className="y-Cart-rec-top">
              <p className="y-Cart-rec-header">
                以下是來自「
                <span>{cartShopInfo.shop_name}</span>
                」的更多寶物，錯過會很可惜的...
              </p>
            </div>
            <div className="y-Cart-rec-bottom">
              <div className="y-Cart-rec-row">
                {Array(min)
                  .fill(1)
                  .map((v, i) => {
                    const item = recMerchData[i]
                    return (
                      <div className="y-Cart-rec-wrap">
                        <RecMerch recMerchInfo={recMerchData[i]} key={item.i} />
                      </div>
                    )
                  })}
                {/* <div className="y-Cart-rec-wrap">
                  <RecMerch recMerchData={recMerchData} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <div className="y-Cart-bottom-wave">
            <YellowWaveLight />
          </div>
          <div className="y-cart-footer">
            <Footer />
          </div>
        </div>
      </div>
      <ModalConfirm
        closeModalConfirm={closeModalConfirm}
        closeModalCancel={closeModalCancel}
        isOpen={isOpen2}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
      <ModalNotification
        closeModal={closeModal}
        isOpen={isOpen1}
        NotificationHeader={headerMg}
        NotificationBody={bodyMg}
      />
    </>
  )
}

export default CartList
