import React from 'react'
import './../styles/RecMerch.scss'

import CartIcon from './../../dotown/cart.png'
import RecMerchPic from './../../dotown/pizza.png'

function RecMerch() {
  return (
    <div className="y-rec-merch-border">
      <div className="y-rec-merch-pic">
        <img src={RecMerchPic} />
      </div>
      <div className="y-rec-merch-info">
        <p className="y-rec-merch-name">料多到爆炸無敵好吃潛艇堡</p>
        <div className="y-rec-merch-bottom">
          <p className="y-rec-merch-price">$105</p>
          <p className="y-rec-merch-sale">$59</p>
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
