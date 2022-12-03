import React, { useContext } from 'react'
import './../styles/CartItemsList.scss'
import CartInfoContext from '../contexts/CartInfoContext'

import CartMerchPic from './../../dotown/strawberry.png'
// import YellowLineWave from './../images/line-wave.svg'
import WhiteLineWave from './../images/white-line-wave.svg'

import WishListBtn from './WishListBtn'
import RemoveItemBtn from './RemoveItemBtn'

function CartItemsList({ cartItemData }) {
  const { cartItem, setCartItem, handleEmptyCart } = useContext(CartInfoContext)

  const { sid, name, price, picture, amount } = cartItemData

  // 假的庫存數量
  const maxQty = 5

  // 改變數量時重新計算小計
  const getItemQty = () => {}

  return (
    <div className="y-Cart-items">
      <div className="y-Cart-items-top">
        <div className="y-Cart-items-info">
          <div className="y-Cart-items-info-left">
            <div className="y-Cart-items-sale">5.2折</div>
            <div className="y-Cart-items-info-pic">
              <img src={picture} alt="picture of merch" />
            </div>
          </div>
          <p className="y-Cart-items-info-name">{name}</p>
        </div>
        <div className="y-Cart-items-price">
          <p>{price}</p>
        </div>
        <div className="y-Cart-items-quantity">
          <select
            id={sid}
            defaultValue={amount}
            onChange={(e) => {
              const index = cartItem.userCart.findIndex(
                (v) => v.sid === e.target.id
              )
              const newItem = { ...cartItem }
              newItem.userCart[index].amount = +e.target.value
              setCartItem(newItem)
            }}
          >
            {Array(maxQty)
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
          <p>{price * amount}</p>
        </div>
        <div className="y-Cart-items-actions">
          <div className="y-Cart-WishListBtn-wrap">
            <WishListBtn />
          </div>
          <div className="y-Cart-RemoveItemBtn-wrap">
            <RemoveItemBtn
              onClick={() => {
                
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
