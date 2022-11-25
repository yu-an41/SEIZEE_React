import React from 'react'
import './../styles/CartItemsList.scss'

import CartMerchPic from './../../dotown/strawberry.png'
// import YellowLineWave from './../images/line-wave.svg'
import WhiteLineWave from './../images/white-line-wave.svg'

import WishListBtn from './WishListBtn'
import RemoveItemBtn from './RemoveItemBtn'

function CartItemsList() {
  return (
    <div className="y-Cart-items">
      <div className="y-Cart-items-top">
        <div className="y-Cart-items-info">
          <div className="y-Cart-items-info-left">
            <div className="y-Cart-items-sale">5.2折</div>
            <div className="y-Cart-items-info-pic">
              <img src={CartMerchPic} alt="picture of merch" />
            </div>
          </div>
          <p className="y-Cart-items-info-name">料多到爆炸潛艇堡</p>
        </div>
        <div className="y-Cart-items-price">
          <p>$ 59</p>
        </div>
        <div className="y-Cart-items-quantity">
          <select>
            <option value={1} defaultValue='true'>
              1
            </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className="y-Cart-items-unit">
          <p>$236</p>
        </div>
        <div className="y-Cart-items-actions">
          <div className="y-Cart-WishListBtn-wrap">
            <WishListBtn />
          </div>
          <div className="y-Cart-RemoveItemBtn-wrap">
            <RemoveItemBtn />
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
