import React from 'react'
import './../styles/RecMerch.scss'

import CartIcon from './../../dotown/cart.png'
import RecMerchPic from './../../dotown/pizza.png'

function RecMerch() {
  // const {
  //   sid,
  //   shop_list_sid,
  //   product_name,
  //   product_category,
  //   unit_price,
  //   sale_price,
  //   inventory_qty,
  //   picture_url,
  // } = recMerchData
  return (
    <div className="y-rec-merch-border">
      <div className="y-rec-merch-pic">
        <img src={RecMerchPic} />
      </div>
      <div className="y-rec-merch-info">
        <p className="y-rec-merch-name">{/* {product_name} */}</p>
        <div className="y-rec-merch-bottom">
          <p className="y-rec-merch-price">{/* {unit_price} */}</p>
          <p className="y-rec-merch-sale">{/* {unit_price * sale_price} */}</p>
          <div className="y-rec-merch-quantity">
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="y-rec-merch-cart">
            <img src={CartIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecMerch
