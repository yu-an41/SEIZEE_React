import React, { useContext, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import './../styles/CartItemsList.scss'
import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'
import ModalNotification from '../../components/ModalNotification'

import CartMerchPic from './../../dotown/strawberry.png'
// import YellowLineWave from './../images/line-wave.svg'
import WhiteLineWave from './../images/white-line-wave.svg'

import WishListBtn from './WishListBtn'
import RemoveItemBtn from './RemoveItemBtn'
// import log from 'eslint-plugin-react/lib/util/log'

function CartItemsList({ cartItemData }) {
  // member
  const auth = JSON.parse(localStorage.getItem('auth'))
  console.log(auth)

  // modal
  const navigate = useNavigate()

  const [isOpen1, setIsOpen1] = useState(false)

  const [headerMg, setHeaderMg] = useState('')
  const [bodyMg, setBodyMg] = useState('')

  const openModalNotification = () => {
    setIsOpen1(true)
  }
  const closeModalNotification = () => {
    setIsOpen1(false)
    if (!auth) navigate('/login')
    else return
  }

  const WishList = () => {
    // 為什麼拿到的值是undefined
    if (auth?.mb_sid) {
      handleCartSave(auth.mb_sid, prod_sid)
    } else {
      openModalNotification()
      setHeaderMg('購物車')
      setBodyMg(`請先註冊/登入`)
    }
  }

  const {
    cartItem,
    setCartItem,
    emptyCart,
    setEmptyCart,
    updateItemQty,
    handleRemoveItem,
    handleEmptyCart,
    handleCartSave,
  } = useContext(CartInfoContext)

  console.log('emptyCart:', emptyCart)

  const { userCart, totalItem, totalUnitPrice, totalSalePrice, totalAmount } =
    cartItem
  const { prod_sid, name, sale_price, sale, picture, amount, inventory } =
    cartItemData

  // 假圖片路徑
  const FakePic = 'https://via.placeholder.com/32'

  // 會員登入驗證

  return (
    <div className="y-Cart-items">
      <div className="y-Cart-items-top">
        <div className="y-Cart-items-info">
          <div className="y-Cart-items-info-left">
            <div className="y-Cart-items-sale">{sale} 折</div>
            <div className="y-Cart-items-info-pic">
              <img src={`/04-product/img/${picture}`} alt="picture of merch" />
            </div>
          </div>
          <Link to={`/product/${prod_sid}`}>
            <p className="y-Cart-items-info-name">{name}</p>
          </Link>
        </div>
        <div className="y-Cart-items-price">
          <p>{sale_price}</p>
        </div>
        <div className="y-Cart-items-quantity">
          <select
            id={prod_sid}
            defaultValue={amount}
            onChange={(e) => {
              updateItemQty(e.target.id, e.target.value)
            }}
          >
            {Array(inventory)
              .fill(1)
              .map((v, i) => {
                return (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                )
              })}
          </select>
        </div>
        <div className="y-Cart-items-unit">
          <p>{sale_price * amount}</p>
        </div>
        <div className="y-Cart-items-actions">
          <div className="y-Cart-WishListBtn-wrap">
            <WishListBtn
              prodSid={prod_sid}
              onClick={() => {
                WishList()
                // console.log('save test')
              }}
            />
          </div>
          <div className="y-Cart-RemoveItemBtn-wrap">
            <RemoveItemBtn
              onClick={() => {
                handleRemoveItem(prod_sid)
                console.log(prod_sid, 'item removed!!!!')
              }}
            />
          </div>
        </div>
      </div>
      <div className="y-Cart-YellowLineWave-wrap">
        <img src={WhiteLineWave} alt="yellow line wave divider" />
      </div>
    </div>
  )
}

export default CartItemsList
