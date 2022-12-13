/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './../styles/CartItemsInfo.scss'
import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'

import CartMerchPic from './../../dotown/strawberry.png'
// import YellowLineWave from './../images/line-wave.svg'
import WhiteLineWave from './../images/white-line-wave.svg'

import WishListBtn from './WishListBtn'
import RemoveItemBtn from './RemoveItemBtn'
import log from 'eslint-plugin-react/lib/util/log'

function CartItemsInfo({ cartItemData }) {
  const {
    cartItem,
    setCartItem,
    updateItemQty,
    handleRemoveItem,
    handleEmptyCart,
  } = useContext(CartInfoContext)

  const { userCart, totalItem, totalUnitPrice, totalSalePrice, totalAmount } =
    cartItem
  const {
    prod_sid,
    name,
    sale_price,
    sale,
    unit_price,
    picture,
    amount,
    inventory,
  } = cartItemData

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
          <p className="y-Cart-items-info-name">{name}</p>
        </div>
        <div className="y-Cart-items-origin y-Cart-items-text">
          <p>{unit_price}</p>
        </div>
        <div className="y-Cart-items-price y-Cart-items-text">
          <p>{`${sale_price}`}</p>
        </div>
        <div className="y-Cart-items-quantity y-Cart-items-text">
          <p>{`${amount}`}</p>
        </div>
        <div className="y-Cart-items-unit y-Cart-items-text">
          <p>{`${sale_price * amount}`}</p>
        </div>
      </div>
      <div className="y-Cart-YellowLineWave-wrap">
        <img src={WhiteLineWave} alt="yellow line wave divider" />
      </div>
    </div>
  )
}

export default CartItemsInfo
