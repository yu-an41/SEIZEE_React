import React, { useContext } from 'react'
import CartInfoContext from '../contexts/CartInfoContext'

import './../styles/RecMerch.scss'

import CartIcon from './../../dotown/cart.png'
import RecMerchPic from './../../dotown/pizza.png'

function RecMerch({ recMerchInfo }) {
  const {
    cartItem,
    setCartItem,
    handleAddCart,
    updateItemQty,
    handleRemoveItem,
    handleEmptyCart,
    emptyCart,
  } = useContext(CartInfoContext)

  const {
    sid,
    shop_list_sid,
    product_name,
    product_category,
    unit_price,
    sale_price,
    inventory_qty,
    picture_url,
    amount,
  } = recMerchInfo
  // console.log(recMerchInfo)
  return (
    <div className="y-rec-merch-border">
      <div className="y-rec-merch-pic">
        <img src={RecMerchPic} alt={`圖片路徑${picture_url}`} />
      </div>
      <div className="y-rec-merch-info">
        <p className="y-rec-merch-name">{product_name}</p>
        <div className="y-rec-merch-bottom">
          <p className="y-rec-merch-price">{unit_price}</p>
          <p className="y-rec-merch-sale">{(unit_price * sale_price) / 10}</p>
          <div className="y-rec-merch-quantity">
            <select
              id={sid}
              defaultValue={amount}
              onChange={(e) => {
                updateItemQty(e.target.id, e.target.value)
              }}
            >
              {Array(inventory_qty)
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
          <div
            className="y-rec-merch-cart"
            onClick={() => {
              handleAddCart(shop_list_sid, sid)
            }}
          >
            <img src={CartIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecMerch
