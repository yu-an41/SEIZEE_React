import React, { useContext } from 'react'
import './../styles/CartItemsList.scss'
import CartInfoContext from '../contexts/CartInfoContext'

import CartMerchPic from './../../dotown/strawberry.png'
// import YellowLineWave from './../images/line-wave.svg'
import WhiteLineWave from './../images/white-line-wave.svg'

import WishListBtn from './WishListBtn'
import RemoveItemBtn from './RemoveItemBtn'
import log from 'eslint-plugin-react/lib/util/log'

function CartItemsList({ cartItemData }) {
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
    unit_price,
    sale_price,
    sale,
    picture,
    amount,
    inventory,
  } = cartItemData

  // 假的庫存數量
  // const maxQty = 5

  // 假圖片路徑
  const FakePic = 'https://via.placeholder.com/32'
  return (
    <div className="y-Cart-items">
      <div className="y-Cart-items-top">
        <div className="y-Cart-items-info">
          <div className="y-Cart-items-info-left">
            <div className="y-Cart-items-sale">{sale} 折</div>
            <div className="y-Cart-items-info-pic">
              <img src={FakePic} alt="picture of merch" />
            </div>
          </div>
          <p className="y-Cart-items-info-name">{name}</p>
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
            <WishListBtn />
          </div>
          <div className="y-Cart-RemoveItemBtn-wrap">
            <RemoveItemBtn
              onClick={() => {
                handleRemoveItem(prod_sid)
                console.log('item removed!!!!')
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
